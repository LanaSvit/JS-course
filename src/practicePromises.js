import axios from "axios";

let fetchComments = async () => {
  try {
    let result = await axios.get(
      "https://jsonplaceholder.typicode.com/comments/1"
    );
    return result.data;
  } catch (e) {
    console.log(e.message);
  }
};

let fetchPosts = async () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/2")
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.log(e.message);
    });
};

fetchComments();
fetchPosts();
