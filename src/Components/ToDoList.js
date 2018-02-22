import React, { Component } from 'react';
import './ToDoList.css';

class ToDoList extends Component {
  render() {
      let todoItems;
      console.log(this.props.todos);
      if(this.props.todos.length>0){
        todoItems = this.props.todos.map(todoitm =>{       
          return (
              <li key={todoitm}>{todoitm}</li>
            );
        });
        return (
          <div className="todoList">
            <ul>
              {todoItems}
            </ul>
          </div>
        )
      }
      else{
        return (
          <h2> Let's Plan the day </h2>
        )
      }
  }
}
export default ToDoList;
