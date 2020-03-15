import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd'

const data=[
    ''
]

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Input placeholder='jspang' style={{width:'250px'}} />
        );
    }
}
 
export default TodoList;
