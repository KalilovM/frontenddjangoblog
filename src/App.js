import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componenets/navbar/navbar";
import Auth from "./pages/auth/auth";
import Signup from "./pages/auth/signup";
import Posts from "./pages/posts/posts";
import Editor from "./componenets/editor/editor";
import SinglePost from "./componenets/post/single/single";
import { Profile } from "./pages/profile/profile";
import DevTools from "mobx-react-devtools";

function App() {
    return (
        <div className="App">
            <DevTools />
            <Navbar />
            <div className="container_comp">
                <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route path="/create" element={<Editor />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/:id" element={<SinglePost />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
