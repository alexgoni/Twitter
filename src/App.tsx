import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/posts" element={<h1>Home Page</h1>} />
      <Route path="/posts/:id" element={<h1>Home Page</h1>} />
      <Route path="/posts/new" element={<h1>Home Page</h1>} />
      <Route path="/posts/edit/:id" element={<h1>Home Page</h1>} />
      <Route path="/profile" element={<h1>Home Page</h1>} />
      <Route path="/profile/edit" element={<h1>Home Page</h1>} />
      <Route path="/notification" element={<h1>Home Page</h1>} />
      <Route path="/search" element={<h1>Home Page</h1>} />
      <Route path="/users/login" element={<h1>Home Page</h1>} />
      <Route path="/users/signup" element={<h1>Home Page</h1>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
