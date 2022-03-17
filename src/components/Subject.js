import React,{Component} from 'react';

class Subject extends Component {
    render(){
    return (
      <header>
        <h1><a href="/">{this.props.title}</a></h1>
      </header>
    );
    }
  }
export default Subject;