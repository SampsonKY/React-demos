import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
import TodoListUi from './TodoListUi'
import {changeInputAction,addItemAction,deleteItemAction,getListAction} from './store/actionCreators'
import axios from 'axios'
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount(){
        axios.get('http://rap2api.taobao.org/app/mock/237128/api/list').then((res)=>{
            const data = res.data
        })
    }
    changeInputValue(e){
        const action= changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    render() { 
        return ( 
            <TodoListUi 
                inputvalue = {this.state.inputvalue}
                list = {this.state.list}
                changeInputValue = {this.changeInputValue}
                clickBtn = {this.clickBtn}
                deleteItem = {this.deleteItem}
            />
        )
}
}
 
export default TodoList;
