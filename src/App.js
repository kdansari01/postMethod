import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [post, setPost] = useState({
    name: "kd",
    age: 22,
    class: "bhmct",
    clg: "sunderdeep colg"
  });
  useEffect(() => {
    if (error) return "Error!";
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        // throw response;
      })
      .then((result) => {
        console.log("result", result);
        setData(result);
      })
      .catch((err) => {
        console.log("err", err);
        setError(err);
      });
  }, []);
  console.log("data", data);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Promises!</h2>
      <hr />

      <ol>{post.name}</ol>
      <ol>{post.age}</ol>
      {/* {data &&
        data.map((ele) => (
          <>
            <ol>{ele.name}</ol>
            <li>{ele.username}</li>
            <li>{ele.email}</li>
          </>
        ))} */}
    </div>
  );
}
