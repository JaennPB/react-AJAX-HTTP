import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPost: null,
  };

  componentDidMount() {
    const getPosts = async function () {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        const dataShortened = data.slice(0, 4);
        const updatedData = dataShortened.map((element) => {
          return {
            ...element,
            author: "Jaenn",
          };
        });

        // returning data so it can be used outside of func block and setState can be used
        return updatedData;
      } catch (err) {
        alert(err);
      }
    };

    getPosts().then((postsArr) => this.setState({ posts: postsArr }));
  }

  selectedPost = (id) => {
    this.setState({ selectedPost: id });
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          title={post.title}
          key={post.id}
          author={post.author}
          clicked={() => this.selectedPost(post.id)}
        />
      );
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPost} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
