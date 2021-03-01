import React, { Component } from "react";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "",
  };

  setPostHandler = () => {
    const data = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    };

    const postData = async function (url, data) {
      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

        const post = await fetch(url, options);
        // const jsonData = post.json();

        return post;
      } catch (err) {
        alert("💥💥💥" + err);
      }
    };

    postData("https://jsonplaceholder.typicode.com/posts/", data).then((dataSent) => {
      console.log(dataSent);
    });
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
