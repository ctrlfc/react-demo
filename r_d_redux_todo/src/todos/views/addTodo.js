import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import {addTodo} from "../actions.js";

class AddTodo extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            value: ''
        };
    }

    onSubmit(ev) {
        //取消默认提交行为
        ev.preventDefault();

        //debugger;
        const inputValue = this.state.value;
        //清空格
        if (!inputValue.trim()) {
            return;
        }
        this.props.onAdd(inputValue);
        this.setState({value: ''});
    }

    onInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    //并没有运用ref,使用的是状态绑定

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo"
                           onChange={this.onInputChange}
                           value={this.state.value}
                           placeholder="需要做什么?"
                    />
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);

