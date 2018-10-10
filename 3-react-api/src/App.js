import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    console.log('App::constructor()');
    this.state = {
      message: 'greetings'   // mutable & component's own data
    };
  }
  changeMessage(message) {
    this.setState({ message })
  }
  render() {
    console.log('App:render()');
    //let { title, version } = this.props  // de-structuring ( es6 )
    // or
    let title = this.props.title
    let version = this.props.version;
    return (
      <div className="container">
        <hr />
        <h1>{title}:{version}</h1>
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-dark">GM</button>
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-dark">GN</button>
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-dark">GE</button>
        <hr />
        <Greeting message={this.state.message} />
      </div>
    );
  }
}

export default App;
