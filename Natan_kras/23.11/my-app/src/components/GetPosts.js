import axios from "axios";

const GetPosts = () => {
  const getPosts = () => {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    axios
      .get(URL)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return(
      <div className="GetPosts">
        <button onClick={getPosts}> get posts</button>
      </div>
  )
};

export default GetPosts
