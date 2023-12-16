
import axios from "axios";
import React from 'react';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, CardContent, Typography, Card } from '@mui/material';
import './originalPage.css';
import { toast } from 'react-toastify';

class OriginalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null, //this is where the api response might be held and then pointed to by our jsx template
      searchTerm: '',
      //inputValue: '',
    }
    this.getDef = this.getDef.bind(this);
    this.Remove = this.Remove.bind(this);
  }

  // *************************** //
  // ****** DELETE/REMOVE ****** //
  // *************************** //
  Remove(index) {
    // Create a copy of the data array without the definition to be removed
    const newData = this.state.data.filter((_, i) => i !== index);

    // Update the state with the new data array
    this.setState({
      data: newData,
    });
  }

  // *************************** //
  // ******** GET DEF ********** //
  // *************************** //
  async getDef() {
    this.refs.inputField.value = '';
    let search = this.state.searchTerm;
    // eslint-disable-next-line
    !search ? toast("Please enter a search term", {position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",}) : search; 

    // Check if the word has already been searched
    if (this.state.data && this.state.data.some(item => item.word.toLowerCase() === search.toLowerCase())) {
      console.log(`Definition for "${search}" already retrieved.`);
      return;
    }

    const options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${search}/definitions`,
      headers: {
        'X-RapidAPI-Key': '367f1583eemshdf5be849d690df3p19a39fjsna5a5002bcdd1',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);

      if (response.status === 200) {
        if (this.state.data && this.state.data.some(item => item.word.toLowerCase() === response.data.word.toLowerCase())) {
          console.log(`Definition for "${search}" already retrieved.`);
          return;
        }
        const newWordData = {
          word: response.data.word, // the searched word gets assigned to 'word'
          definitions: response.data.definitions // the array of retrieved definitions will be assigned to 'definitions'
        };       
        // update the state based on the previous state
        this.setState(prevState => ({
          // creates a new array by spreading elements of the previous 'data' array and adding 'newWordData' to the end
          data: [...(prevState.data || []), newWordData] //...if if prevState.data is null, defaults to an empty array
        }));
      } else if (response.status === 404) {
        // Handle the 404 error when no definition is found
        // sets the 'data' property to an array containing an object that represents the word with no definition
        this.setState({ data: [{ word: search, definitions: [{ definition: 'Definition not found' }] }] });
      } else {
        // Handle other errors
        console.error('An error occurred:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  // *************************** //
  // ******* INPUT STATE 2****** //
  // *************************** //
  handleInputChange2 = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  debugger = () => {
    debugger;
  }
  render() {
    return (
      <div>
        <div className='centered'>
        <p>
          <input ref="inputField" id="searchWord" type="text" onChange={this.handleInputChange2}></input>
        </p>
        <p>
          <button onClick={this.getDef}>Get Definition</button>
        </p>
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 2, md: 4 }} className='flex-container'>
          {this.state.data && (this.state.data.length > 0) && this.state.data.map((iterator, index) => ( // Changed the function keyword to an arrow function
            <Grid item xs={6} md={2} key={index} className=''>
              <div className='overflow maxheight'>
                <Card key={index} className='minheight'>
                  <CardContent>
                    <Typography component={'span'} variant='h5' gutterBottom>
                      {iterator.word}
                    </Typography>
                    <Typography component="div" variant="h6">
                      Definition(s):
                    </Typography>

                    <div>
                      {iterator.definitions.length > 0 ? ( // check if the definition returned is not empty...
                        <ul>
                          {iterator.definitions.map((item, index) => (
                            <li key={index}>{item.definition}</li>
                          ))}
                        </ul>
                      ) : ( // if we do get an empty definition, display this shiz
                        <p>No definition found. Sorry bout dat</p>
                      )}

                      <IconButton
                        aria-label="delete"
                        size="small"
                        className="buttonTown"
                        onClick={() => this.Remove(index)}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
        
        <Link to='/page2'>link to another page</Link>
        {/*<button onClick={this.debugger}>Deboooger</button>*/}
      </div>
    )
  }
}

export default OriginalPage