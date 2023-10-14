
import axios from "axios";
import React from 'react';
import {Link} from "react-router-dom";

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
  }

// *************************** //
// ******** NUM STATE ******** //
// *************************** //

//const [num, setNum] = useState(0); // the 0 is the intial value of num, ie let num=0
// 
  increaseNum = () => {
    this.setState({num: this.state.num + 1});
  };
  decreaseNum = () => {
    this.setState({num: this.state.num - 1});
  }

// *************************** //
// ******** INPUT STATE ****** //
// *************************** //
//const [inputValue, setInputValue] = useState(""); // empty string
  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({inputValue: event.target.value});
  };

// *************************** //
// ******** HIDE STATE ******* //
// *************************** //
//const [showText, setShowText] = useState(true); // boolean
  toggleText = (setShowText, showText) => {
    this.setState({show: setShowText(!showText)});
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
      const response = await axios.request(options).then(res => this.setState({data: res.data}));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

// *************************** //
// ******* INPUT STATE 2****** //
// *************************** //
//const [inputValue2, setInputValue2] = useState(""); // empty string
  handleInputChange2 = (event) => {
    console.log(event.target.value);
    this.setState({searchTerm: event.target.value});
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
          <input type="text" onChange={this.handleInputChange}/>
          <p>{this.state.inputValue}</p>
        </p>

        {/*<p>*/}
        {/*  {*/}
        {/*    //<button*/}
        {/*    //onClick={() => {*/}
        {/*    //setShowText(!showText);*/}
        {/*    //}}>*/}
        {/*    //Show/Hide</button>*/}
        {/*  }*/}
        {/*  <button onClick={this.toggleText}>Show/Hide</button>*/}
        {/*  {this.showText && <h1>MEOW</h1>}*/}
        {/*</p>*/}

        <p>
          <input id="searchWord" type="text" onChange={this.handleInputChange2}></input>
        </p>

        <p>
          <button onClick={this.getDef}>Get Definition</button>
        </p>
        <Link to='/page2'>link to another page</Link>
      </div>
    )
  }
}

export default OriginalPage