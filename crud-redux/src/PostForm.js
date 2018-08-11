import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault(); //no refresh
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        //console.log(data)
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    
    render() {
        return (
            <div>
                <h4>Create Post</h4>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input required type="text" className="form-control" placeholder="Enter Post Title" ref={(input) => this.getTitle = input} />
                </div>
                <div className="form-group">
                    <textarea required rows="5" cols="28" className="form-control" placeholder="Enter Post" ref={(input) => this.getMessage = input} />
                </div>
                <button className="btn btn-outline-info">Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm); //easily access dispatch() as prop