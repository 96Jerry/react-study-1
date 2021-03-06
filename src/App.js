import React,{Component} from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      mode:'welcome',
      subject:{title:'WEB'},
      selectedContentId: 2,
      welcome:{title:'welcome',desc:"Hello, React!"},
      contents:[
        {id:1,title:'HTML',desc:"HTML is ..."},
        {id:2,title:'CSS',desc:"CSS is ..."},
        {id:3,title:'JavaScript',desc:"Javascript is ..."}
    ]
    }
  }
  render(){
    var _title, _desc = null;
    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    }else if(this.state.mode === 'read'){
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selectedContentId){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    
  return (
    <div className="App">
      <Subject title={this.state.subject.title}
      onChangePage={
        function(){
          this.setState({mode:'welcome'});
        }.bind(this)
      }
      ></Subject>
      <TOC onChangePage={
        function(id){
          this.setState({mode:'read', selectedContentId:Number(id)});
        }.bind(this)
      }
      data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
  );
  }
}

export default App;
