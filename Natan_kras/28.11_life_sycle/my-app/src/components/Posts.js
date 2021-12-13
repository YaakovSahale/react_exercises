import { Component } from "react";

export default class Posts extends Component {
  state = { allPosts: [], pagePosts: [], pointer: 0 };
  index = 0;
  componentDidMount() {
    console.log(`component Did Mount`);
    this.getPosts();
  }

  getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ allPosts: data, pagePosts: data.slice(0, 10) });
      })
      .catch((err) => console.log(err));
  };

  nextPosts = () => {
    if (this.index < this.state.allPosts.length - 10) {
      this.index += 10;
      this.setState({
        pagePosts: this.state.allPosts.slice(this.index, this.index + 10),
      });
    }
  };

  previousPosts = () => {
    if (this.index >= 10) {
      this.index -= 10;
      this.setState({
        pagePosts: this.state.allPosts.slice(this.index, this.index + 10),
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.previousPosts}>PREVIOUS</button>
        <button onClick={this.nextPosts}>NEXT</button>
        {this.state.pagePosts.map((post, i) => (
          <p key={i}>{post.id}</p>
        ))}
      </div>
    );
  }
}
