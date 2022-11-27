import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function SinglePost() {
  const baseURL = "https://postit-rest-api-production.up.railway.app/post/";
  const [post, setPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(baseURL + id).then((response) => {
      setPost(response.data);
    });
  }, []);

  function convertDate(datee) {
    var date = new Date(datee);
    let normalDate = date.toString().split(" ");
    let day = normalDate[2] + " " + normalDate[1];
    let time = normalDate[4].slice(0, -3);
    return day + ", " + time;
  }
  return (
    <section className="single-item">
      {post.data ? (
        <>
          <div className="single-desc">
            <p className="single-auth">Author: {post.data.posts.author}</p>
            <h1>{post.data.posts.title}</h1>
            <p className="single-date">{convertDate(post.data.posts.date)}</p>
          </div>
          <textarea disabled className="single-text">
            {post.data.posts.body}
          </textarea>
        </>
      ) : (
        ""
      )}
    </section>
  );
}

export default SinglePost;
