
import axios from "axios";
import React from 'react';
import { Link } from "react-router-dom";


import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Grid, CardContent, Typography, Card } from '@mui/material';

import './originalPage.css'; 


class OriginalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      data: null, //this is where the api response might be held and then pointed to by our jsx template
      searchTerm: '',
      inputValue: '',
      show: true,
    }
    this.getDef = this.getDef.bind(this);
  }

  // *************************** //
  // ******** NUM STATE ******** //
  // *************************** //

  //const [num, setNum] = useState(0); // the 0 is the intial value of num, ie let num=0
  // 
  increaseNum = () => {
    this.setState({ num: this.state.num + 1 });
  };
  decreaseNum = () => {
    this.setState({ num: this.state.num - 1 });
  }

  // *************************** //
  // ******** INPUT STATE ****** //
  // *************************** //
  //const [inputValue, setInputValue] = useState(""); // empty string
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  // *************************** //
  // ******** HIDE STATE ******* //
  // *************************** //
  //const [showText, setShowText] = useState(true); // boolean
  toggleText = () => {
    if (this.state.show === true) {
      this.setState({ show: false })
    }
    if (this.state.show === false) {
      this.setState({ show: true })
    }
  }

  // *************************** //
  // ******** GET DEF ********** //
  // *************************** //
  async getDef(search) {
    search = document.getElementById("searchWord").value;
    //console.log(search);
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
      let result = [];
      if (this.state.data && this.state.data.length > 0) {
        result.push(...this.state.data)
      }
      axios.request(options).then((response) => {
        result.push(response.data)
        if(result.length > 0) {
          this.setState(prevState => {
            return {
              ...prevState,
              data: result,
            }
          })
        }
      })
      if (response.status === 200) {
        // Data is available; set it in the state
        this.setState({ data: response.data });
      } else if (response.status === 404) {
        // Handle the 404 error when no definition is found
        this.setState({ data: { message: 'Definition not found' } });
      } else {
        // Handle other errors
        console.error('An error occurred:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }


    // * MOVED TO INSIDE OF TRY * //
    // axios.request(options).then((response) => {
    //  this.setState({data: response.data}) 
    // })

  }
  // *************************** //
  // ******* INPUT STATE 2****** //
  // *************************** //
  //const [inputValue2, setInputValue2] = useState(""); // empty string
  handleInputChange2 = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  debugger = () => {
    debugger;
  }
  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        <p>
          <button onClick={this.increaseNum}>Increase</button>
        </p>

        <p>
          <button onClick={this.decreaseNum}>Decrease</button>
        </p>

        <p>
          <input type="text" onChange={this.handleInputChange} />
          <p>{this.state.inputValue}</p>
        </p>

        <p>
          {
            //<button
            //onClick={() => {
            //setShowText(!showText);
            //}}>
            //Show/Hide</button>
          }
          <button onClick={this.toggleText}>Show/Hide</button>
          {this.state.show && <h1>MEOW</h1>}
        </p>
        
        <p>
          <input id="searchWord" type="text" onChange={this.handleInputChange2}></input>
        </p>
        <p>
          <button onClick={this.getDef}>Get Definition</button>
        </p>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 2, md: 4 }}>
            {this.state.data && (this.state.data.length > 0) && this.state.data.map(function(iterator, index) {
               return (
                 <Grid item xs={6}>
                    <div className='centered' key={index}>
                      <Card className='width'>
                        <CardContent>
                          <Typography variant='h5'  gutterBottom>
                            Word: {iterator.word}
                          </Typography>
                          <Typography variant="h6" component="div">
                            Definition(s):
                          </Typography>
                          <div>
                            <ul>
                            {iterator.definitions.map(function(item, index) {
                              return(<li key={index}>{item.definition}</li>)
                            })
                            }
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                 </Grid>
                )
              })
            }
        </Grid>
        <Link to='/page2'>link to another page</Link>
        {/*<button onClick={this.debugger}>Deboooger</button>*/}
      </div>
    )
  }
}

export default OriginalPage