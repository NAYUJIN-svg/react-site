import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";

import ColorChange from "./compo/ColorChange";
import Counter from "./compo/Counter";
import TodoList from "./compo/TodoList";
import InputMirror from "./compo/InputMirror";
import ToggleButton from "./compo/ToggleButton";
import Day0814 from "./compo/day_0814/Day0814";


function App() {
 

  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login" element={<Login />} />

          <Route path="/react-site/colorchange" element={<ColorChange />} />
          <Route path="/react-site/counter" element={<Counter />} />

          <Route path="/react-site/inputmirror" element={<InputMirror />} />
          <Route path="/react-site/todolist" element={<TodoList />} />
          <Route path="/react-site/togglebutton" element={<ToggleButton />} />
          <Route path="/react-site/day_0814" element={<Day0814 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;