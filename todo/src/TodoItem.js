import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
    render() { 
        return ( 
            
            <li onClick={this.handleClick} >{this.props.content}</li>
            
        );
    }
}
 
TodoItem.propTypes={
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
export default TodoItem;
