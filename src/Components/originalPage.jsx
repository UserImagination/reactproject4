
import axios from "axios";
import React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


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
    console.log(event.target.value);
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
    console.log(search);
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

      axios.request(options).then((response) => {
        this.setState({ data: response.data })
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
    console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  };

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
        

        


        



    <div style={{margin: '25%'}}>
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          OK!!!
        </Typography>
        <Typography variant="h4" component="div">
        <p>
          <input id="searchWord" type="text" onChange={this.handleInputChange2}></input>
        </p>
        <p>
          <button onClick={this.getDef}>Get Definition</button>
        </p>
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          definition
        </Typography> */}
        <Typography variant="body1">
          <div>          
          {/* <h2>Definition:</h2> */}
          {this.state.data && (
            <ul>
              {this.state.data.definitions.map((definition, index) => (
                <li key={index}>{definition.definition}</li>
              ))}
            </ul>           
          )}        
        </div>
          <br />
          {'"very good"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Card Button</Button>
      </CardActions>
    </Card>
    </div>
  );


        <Link to='/page2'>link to another page</Link>
      </div>
    )
  }
}

export default OriginalPage