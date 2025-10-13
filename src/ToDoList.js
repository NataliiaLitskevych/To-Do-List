import { Component } from 'react';
import imageTwo from './icon.png';

export class ToDoList extends Component {
    state = {
        userText: '',
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({userText: e});
    }

    addText(input) {
        if (input === '') {
            alert ('Please, enter your task')
        } else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, userText: ''})
        }
    }

    crossedWord(event) {
        const text = event.target;
        text.classList.toggle('crossed');
    }

    deleteText() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray});
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <div className='Container'>
                <input type="text" placeholder="Add new task"
                onChange={(e) => {this.onChangeEvent(e.target.value)}} value={ this.state.userText }/>
                <button onClick={() => this.addText(this.state.userText)} className='Btn Add'>Add task</button>
                </div>
                <ul>
                    {this.state.toDoList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}><img src={imageTwo} width='20px' alt='check'/> {item}
                        </li>  
                    ))}
                </ul>
                <div className='Container'>
                    <button onClick={() => this.deleteText()} className='Btn Delete'>Delete task</button>
                </div>
            </form>
            </div>
            
        )
    }
}