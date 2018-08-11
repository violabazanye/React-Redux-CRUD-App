import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    render() {
        return (
            <div className="col mt-3">
                <h5>{this.props.post.title}</h5>
                <p>{this.props.post.message}</p>
                <div className="row" id="post-btns">
                    <button className="btn btn-outline-info btn-sm" onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>Edit</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>Delete</button>
                </div>
                <hr/>
            </div>
        );
    }
}

export default connect()(Post);

