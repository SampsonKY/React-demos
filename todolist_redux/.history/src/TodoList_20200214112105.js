import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {
    constructor(props){
        super(props)
        console.log(store.getState())
        this.changeInputValue = this.changeInputValue.bind(this)
    }
    changeInputValue(e){
        console.log(e.target.value)
    }
    render() { 
        return ( 
             <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder='write someting' style={{ width:'250px', marginRight:'10px'}} onChange={this.changeInputValue} />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />    
                </div>
            </div>
        );
    }
}
 
export default TodoList;
