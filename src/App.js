import React, { Component } from 'react';
import List from './component/List';
import { changeValue } from './actions';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

const tasks = [
  { id: 0, task: 'Wyrzucić śmieci', isConfirmed: false },
  { id: 1, task: 'Zrobić pranie', isConfirmed: false },
  { id: 2, task: 'Nakarmić rybki', isConfirmed: false },
  { id: 3, task: 'Kupić węgiel', isConfirmed: false },
  { id: 4, task: 'Nauczyć się Redux', isConfirmed: false },
]

class App extends Component {
  state = {
    //value: '',
    tasks: [{ id: 0, task: 'Wyrzucić śmieci', isConfirmed: false },
    { id: 1, task: 'Zrobić pranie', isConfirmed: false },
    { id: 2, task: 'Nakarmić rybki', isConfirmed: false },
    { id: 3, task: 'Kupić węgiel', isConfirmed: false },
    { id: 4, task: 'Nauczyć się Redux', isConfirmed: false },],
    id: 0
  }
  handleInputValue = (event) => {
    // this.setState({
    //   value: event.target.value,
    // })
    this.props.changeValue(event.currentTarget.value);
  }
  handleAddTask = (event) => {
    event.preventDefault();
    //const value = this.state.value;
    let value = this.props.valueChange;
    const tasks = [...this.state.tasks];
    if (!value) {
      return alert('You have to add something');
    }
    tasks.push({ id: this.state.id, task: value, isConfirmed: false });
    this.setState({
      //value: '',
      tasks,
      id: this.state.id + 1,
    })
    // this.inputInForm.reset();
    //this.props.valueChange(reset('inputInForm'));
    //console.log(this.inputInForm.value);
  }
  handleRemoveTask = (id) => {
    const tasks = [...this.state.tasks].filter(task => task.id !== id);
    this.setState({
      tasks
    })
  }
  handleChecked = (id) => {
    const tasks = this.state.tasks.map(el => {
      if (id === el.id) {
        el.isConfirmed = !el.isConfirmed;
      }
      return el;
    })
    this.setState({
      tasks
    })
  }
  render() {
    return (
      <>
        <header className='header'><h1>todoList</h1></header>
        <main className='main'>
          <form
            className='formInp'
            onSubmit={this.handleAddTask}>
            <input
              //ref={(ref) => this.inputInForm = ref}
              className='inputInForm'
              type="text"
              placeholder='Add task'
              value={this.props.valueChange}
              onChange={this.handleInputValue} />
            <button className='btnAdd'>ADD</button>
          </form>
          <List tasks={this.state.tasks}
            remove={this.handleRemoveTask}
            handleChecked={this.handleChecked} />
        </main>
      </>
    );
  }
}

const mapStateToProps = state => {
  //console.log(`Stan w mapStateToProps: ${state.valueChange}`);
  return {
    valueChange: state.valueChange
  }
}
const mapDispatchToProps = { changeValue };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
