import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd'

const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
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
