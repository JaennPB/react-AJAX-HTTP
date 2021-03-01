import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    const id = this.props.id;
    const loadedPost = this.state.loadedPost;

    if ((id && !loadedPost) || (id && loadedPost && loadedPost.id !== id)) {
      const getSinglePost = async function () {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
          const data = await res.json();

          return data;
        } catch (err) {
          alert(err);
        }
      };

      getSinglePost().then((post) => {
        this.setState({ loadedPost: post });
      });
    }
  }

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
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
