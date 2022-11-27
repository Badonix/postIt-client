import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function HomePage() {
  const baseURL = "https://postit-rest-api-production.up.railway.app/posts";
  const ref = useRef(null);
  const [post, setPost] = useState([]);
  function convertDate(datee) {
    var date = new Date(datee);
    let normalDate = date.toString().split(" ");
    let day = normalDate[2] + " " + normalDate[1];
    let time = normalDate[4].slice(0, -3);
    return day + ", " + time;
  }
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <>
      <Landing scroll={handleClick} />
      <section ref={ref} className="posts-section">
        <h2 className="postsT">Posts</h2>
        <div className="card-container">
          {post.data
            ? post.data.posts.reverse().map((el) => {
                return (
                  <Link to={`/post/${el._id}`}>
                    <Card
                      title={el.title}
                      key={el._id}
                      author={el.author}
                      date={convertDate(el.date)}
                    />
                  </Link>
                );
              })
            : ""}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
