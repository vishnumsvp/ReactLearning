import React, { Component } from 'react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReactTodo : []
    };
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  getLocalDbData(){
    let localDbName = 'ReactToDo';
    if(window.localStorage.getItem(localDbName) && window.localStorage.getItem(localDbName)!== ''){
      return window.localStorage.getItem(localDbName).split(',');
    }
    else{
       window.localStorage.setItem(localDbName,'');
       return window.localStorage.getItem(localDbName);
    } 
  }

  setLocalDbData(data){
    let LocalDbData = (this.getLocalDbData()=== '')? [] :this.getLocalDbData();
    LocalDbData.push(data);
    console.log(LocalDbData);
    window.localStorage.setItem('ReactToDo',LocalDbData);
  }
  componentWillMount(){
    var LocalDbData = this.getLocalDbData();
    if(LocalDbData !== ''){
      this.setState({ReactTodo: LocalDbData});
    }

  }

  componentDidMount(){
    this.getLocalDbData();
  }
  handleAddToDo(newToDo){
    let localTodo = this.state.ReactTodo;
    console.log(typeof localTodo);
    localTodo.push(newToDo);
    this.setState({ReactTodo: localTodo});
    this.setLocalDbData(this.state.ReactTodo.toString());
  }

  render() {
    return (
        <div>
        <AddToDo addToDo={this.handleAddToDo}/>
        <hr />
        <ToDoList todos={this.state.ReactTodo}/>  
        </div>
    );
  }
}

export default ToDo;
