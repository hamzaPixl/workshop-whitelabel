import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const inputs = this.refs;
    for(const field in inputs) {
      console.log({ name: field, value: inputs[field].value});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">White Label Tool</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          First name:
          <input type="text" ref="firstname" name="firstname"/><br /><br />
          Last name:
          <input type="text" ref="lastname"  name="lastname"/><br />
          <button type="submit">Submit</button>
        </form>
        <br />
      </div>
    );
  }
}

export default App;
