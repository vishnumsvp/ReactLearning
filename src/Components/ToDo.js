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
    console.log("Data " +data);
    console.log("LocalDb" + LocalDbData);
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
    console.log("localToDo from Handler " + typeof localTodo + "\n new Todo " + newToDo);
    localTodo.push(newToDo);
    console.log(localTodo);
    this.setState({ReactTodo: localTodo});
    this.setLocalDbData(newToDo);
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
