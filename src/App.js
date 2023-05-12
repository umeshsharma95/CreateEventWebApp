import {
  Route,
  Routes,
  Outlet,
  BrowserRouter
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Layout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
}

