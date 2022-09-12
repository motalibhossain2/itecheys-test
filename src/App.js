import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNav from "./components/Navigation-Bar/MainNav";
// import MainNav from "./components/Navbar/MainNav";

// import pages 
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import Service from './pages/Service'
import Blogs from './pages/Blogs'
import BlogDetails from "./pages/BlogDetails";
import Error from './pages/Error'

function App() {
    return (
        <>
            <BrowserRouter>
                <MainNav />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/user" element={<User />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/service" element={<Service />}></Route>
                    <Route path="/blogs" element={<Blogs />}></Route>
                    <Route path="/blogs/:title" element={<BlogDetails />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
