import React, { Component } from "react";

export default class GetPostById extends Component {
  state = {
    firstPost: "",
  };

  getPosts = () => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${this.props.id}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => this.setState({ firstPost: data }))
      .catch((err) => console.log(err));
  };
  
  componentDidMount() {
    this.getPosts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getPosts();
    }
  }


  render() {
    return (
      <>
        <p>{this.state.firstPost.title}</p>
      </>
    );
  }
}
