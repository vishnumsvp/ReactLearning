import React, { Component } from 'react';

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo : {}
    };
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  handleTodoSubmit(e){
    e.preventDefault();
    if(this.refs.newTodoItm.value === ''){
      alert("Kindly Enter the items to be added");
    }
    else{
      let newToDoObj =this.refs.newTodoItm.value
      this.setState({
        newToDo: newToDoObj
      },function(){
        this.props.addToDo(this.state.newToDo);
      });
    }
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <form onSubmit={this.handleTodoSubmit}>
          <input type="text" ref="newTodoItm"/>
          <input type="submit" className = "submitBtn" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddToDo;
