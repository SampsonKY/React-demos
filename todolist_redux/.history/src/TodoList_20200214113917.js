import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import {ADD_ITEM, DELETE_ITEM, CHANGE_INPUT} from './store/actionTypes'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    changeInputValue(e){
        const action={
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = {
            type: ADD_ITEM
        }
        store.dispatch(action)
    }
    deleteItem(index){
        const action = {
            type: DELETE_ITEM,
            index
        }
        store.dispatch(action)
    }
    render() { 
        return ( 
             <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder='write someting' style={{ width:'250px', marginRight:'10px'}} onChange={this.changeInputValue} />
                    <Button type="primary" onClick={this.clickBtn}>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick = {this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    />    
                </div>
            </div>
        );
    }
}
 
export default TodoList;
