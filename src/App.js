import React from 'react';
import logo from './logo.png';
import './App.css';
import ReactJson from 'react-json-view'
import FileSaver from 'file-saver';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.exportFile = this.exportFile.bind(this);
    this.state = {
      formData: {},
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const inputs = this.refs;
    const values = {};
    for(const field in inputs) {
      values[field] = inputs[field].value;
    }
    this.setState({ formData: values })
  }
  
  renderForm() {
    const whiteLabelModel= {
      bigTitle: '',
  		cardBackground: '',
      error: '',
      footerBackground: '',
      footerText: '',
      headerBackground: '',
      primary: '',
      primaryBackground: '',
      primaryButtonText: '',
      secondary: '',
      secondaryButtonText: '',
      smallFooterText: '',
      textQuote: '',
    }
    return  Object.keys(whiteLabelModel)
    .map((p) => {
      return (<div key={p}>
        <input type="text" placeholder={p} ref={p} name={p} /> 
        <br /><br />
      </div>);
    });
  }

  exportFile(){
    var blob = new Blob([JSON.stringify(this.state.formData)], {type: "application/json;charset=utf-8"});
    FileSaver.saveAs(blob, 'whiteLabel.json');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">White Label Tool</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          {this.renderForm()}
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.exportFile} type="button">Export</button>
        <br />
        <ReactJson src={this.state.formData} theme="monokai" />
      </div>
    );
  }
}

export default App;
