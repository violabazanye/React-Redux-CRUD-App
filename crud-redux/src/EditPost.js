import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPost extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }

        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <div className="form-group">
                        <input required type="text" className="form-control" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Enter Post Title" />
                    </div>
                    <div className="form-group">
                        <textarea required rows="5" className="form-control" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" />
                    </div>
                    <button className="btn btn-outline-info btn-sm">Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditPost);