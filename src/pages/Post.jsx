import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Post() {
  const navigate = useNavigate();

  const [Posted, setPosted] = useState(false);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handlePost = () => {
    if (author && title && body) {
      setTimeout(() => {
        setPosted(true);
      }, 1000);
      setTimeout(() => {
        setPosted(false);
        navigate("/home");
      }, 4500);
      let post = {
        title,
        author,
        body,
      };
      axios
        .post(
          "https://postit-rest-api-production.up.railway.app/make-post",
          post
        )
        .then((response) => this.setState({ articleId: response.data.id }));
    } else {
      alert("Please fill all fields");
    }
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <>
      {Posted && (
        <div className="modal">
          <h2>Post Added</h2>
        </div>
      )}
      <section className="make-post-section">
        <h2>Make Post</h2>
        <div className="input-cont">
          <div className="author-inp">
            <h3>Details: </h3>
            <div className="inpp">
              <input
                onChange={handleTitleChange}
                type="text"
                placeholder="Title"
              />
              <input
                onChange={handleAuthorChange}
                type="text"
                placeholder="Author"
                className="auth"
              />
            </div>
          </div>
          <textarea
            onChange={handleBodyChange}
            type="text"
            placeholder="Write something..."
          />
        </div>
        <button onClick={handlePost}>POST</button>
      </section>
    </>
  );
}

export default Post;
