import React from 'react';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'api/todoitems',
      todos: [],
      num: 0
    }
  }

  // *************************** //
  // ******** NUM STATE ******** //
  // *************************** //

  //const [num, setNum] = useState(0); // the 0 is the intial value of num, ie let num=0
  increaseNum = () => {
    this.setState({ num: this.state.num + 1 });
  };
  decreaseNum = () => {
    this.setState({ num: this.state.num - 1 });
  }

  render() {
    return (
      <div className='centered'>
        <p>{this.state.num}</p>
        <p>
          <button onClick={this.increaseNum}>Increase</button>
        </p>

        <p>
          <button onClick={this.decreaseNum}>Decrease</button>
        </p>
      </div>
    );
  }
}

export default ShopPage;