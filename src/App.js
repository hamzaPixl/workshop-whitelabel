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
      bigTitle: 'Big Ttitle',
  		cardBackground: 'Card Background',
      error: 'Error',
      footerBackground: 'Footer Background',
      footerText: 'Footer Text',
      headerBackground: 'Header Background',
      primary: 'Primary',
      primaryBackground: 'Primary Background',
      primaryButtonText: 'Primary Button Text',
      secondary: 'Secondary',
      secondaryButtonText: 'Secondary Button Text',
      smallFooterText: 'Small Footer Text',
      textQuote: 'Text Quote',
    }
    return  Object.keys(whiteLabelModel)
    .map((p) => {
      return (<div className="form-item" key={p}>
        <input className="input" type="text" placeholder={whiteLabelModel[p]} ref={p} name={p} /> 
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
      <div className="row">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">White Label Tool</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          {this.renderForm()}
          <button className="button" type="submit">Submit</button>
          <button className="button" onClick={this.exportFile} type="button">Export</button>
        </form>
      </div>
      <div className="row">
        <ReactJson 
          src={this.state.formData} 
          theme="solarized" 
          iconStyle="square"
          indentWidth="2"
          name={false}
          enableClipboard={false}
          displayObjectSize={false}
          displayDataTypes={false}
        />
      </div>        
      </div>
    );
  }
}

export default App;
