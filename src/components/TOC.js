import React,{Component} from 'react';

class TOC extends Component {
    render(){
      var i = 0;
      var data = this.props.data
      var list = []
      while(i<data.length){
        list.push(<li><a href={"/content/"+data[i].id} onClick=
      {
        function(id,e){
          e.preventDefault();
          this.props.onChangePage(id);
        }.bind(this, data[i].id)
      }
      >{data[i].title}</a></li>);
        i = i + 1;
      }
    return (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    );
    }
  }
export default TOC;