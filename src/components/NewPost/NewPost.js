import React, { Component } from "react";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "",
  };

  setPostHandler = async () => {
    try {
      const newPostData = {
        title: this.state.title,
        content: this.state.content,
        author: this.state.author,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPostData),
      };

      const res = await fetch("https://jsonplaceholder.typicode.com/posts/", options);

      console.log(res);
      console.log("ASYNC --- POSTING POST ---");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Jaenn">Jaenn</option>
          <option value="Pau">Pau</option>
        </select>
        <button onClick={this.setPostHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
