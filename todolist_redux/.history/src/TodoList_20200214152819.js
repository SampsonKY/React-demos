import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
import TodoListUi from './TodoListUi'
import {changeInputAction,addItemAction,deleteItemAction,getTodoList} from './store/actionCreators'

import {connect} from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        // this.changeInputValue = this.changeInputValue.bind(this)
        // this.clickBtn = this.clickBtn.bind(this)
        // this.storeChange = this.storeChange.bind(this)
        // this.deleteItem = this.deleteItem.bind(this)
        // store.subscribe(this.props.storeChange)
    }
    // componentDidMount(){
    //     const action = getTodoList()
    //     store.dispatch(action)
    // }
    // changeInputValue(e){
    //     const action= changeInputAction(e.target.value)
    //     store.dispatch(action)
    // }
    // storeChange(){
    //     this.setState(store.getState())
    // }
    // clickBtn(){
    //     const action = addItemAction()
    //     store.dispatch(action)
    // }
    // deleteItem(index){
    //     const action = deleteItemAction(index)
    //     store.dispatch(action)
    // }
    render() { 
        return ( 
            <TodoListUi 
                inputValue = {this.props.inputValue}
                list = {this.props.list}
                changeInputValue = {this.props.changeInputValue}
                clickBtn = {this.props.clickBtn}
                deleteItem = {this.props.deleteItem}
            />
        )
}
}
 
const stateToProps = (state)=>{
    return {
        inputValue: state.inputValue,
        list: state.list,
    }
}

const dispatchToProps = (dispatch)=>{
    return {
        changeInputValue(e) {
            const action = changeInputAction(e.target.value)
            dispatch(action)
        },
        clickBtn() {
            const action = addItemAction()
            dispatch(action)
        },
        deleteItem(index) {
            const action = deleteItemAction(index)
            dispatch(action)
        }
    }

}


export default connect(stateToProps,dispatchToProps)(TodoList);
