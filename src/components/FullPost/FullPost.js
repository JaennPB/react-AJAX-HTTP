import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  async componentDidUpdate() {
    const id = this.props.id;
    const loadedPost = this.state.loadedPost;

    if ((id && !loadedPost) || (id && loadedPost && loadedPost.id !== id)) {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
        const data = await res.json();
        this.setState({ loadedPost: data });

        console.log(data);
        console.log("ASYNC --- SELECTING POST ---");
      } catch (err) {
        alert(err);
      }
    }
  }

  deletePostHandler = async () => {
    try {
      const options = {
        method: "DELETE",
      };

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + this.props.id,
        options
      );

      console.log(res);
      console.log("ASYNC --- DELETING POST ---");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
