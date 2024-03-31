import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/views/Home";
import Nav from "./components/layout/Nav";
import Grammar from "./grammar";

function App() {
  const listArr = [
    { title: "Home", des: "홈 화면" },
    { title: "About", des: "소개 페이지" },
  ];
  return (
    <>
      <Grammar />
    </>
  );
}

export default App;
