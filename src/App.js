import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Post from "./pages/Post";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="make-post" element={<Post />} />
            <Route path="about" element={<About />} />
            <Route path="post/:id" element={<SinglePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
