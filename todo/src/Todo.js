import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: '',
            list:[]
        }
    this.inputChange = this.inputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }
    inputChange(){
        this.setState({
            inputValue: this.input.value
        })
    }
    handleClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue: ''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })
        
    }
    DeleteItem(index){
        // console.log(index);
        let {list} = this.state
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    render() { 
        return ( 
            <Fragment>
                <div>
                    <label htmlFor="in">点击此处聚焦到输入框</label>
                    <input 
                        id="in"
                        placeholder={this.state.inputValue}
                        ref={(input)=>{this.input=input}}
                        value = {this.state.inputValue}
                        onChange={this.inputChange}
                    />
                    <button
                       onClick = {this.handleClick} 
                    >增加</button>
                </div>
                <ul ref={(ul)=>{this.ul = ul}}>
                   {
                    this.state.list.map((item, index)=>{
                        return(
                        // <li 
                        //     key={index+item}
                        //     onClick={this.DeleteItem.bind(this,index)}
                        // >{item}</li>
                        <TodoItem
                            content = {item}
                            key= {index+item}
                            index={index}
                            deleteItem={this.DeleteItem.bind(this)}
                        />
                        )
                    })
                   } 
                </ul>
            </Fragment>
         );
    }
}
 
export default Todo;
