import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "../src/components/Layout";
import {Homepage} from "./pages/Homepage";
import {About} from "./pages/Aboutpage";
import {Blogpage} from "./pages/Blogpage";
import {Notfoundpage} from "./pages/Notfoundpage";

function App() {
  return (
      <>
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/posts"} element={<Blogpage/>}/>
            <Route path={"*"} element={<Notfoundpage/>}/>
          </Route>
        </Routes>

        <div>
          <h1>Get started with React-Router 6</h1>
        </div>
      </>
  );
}

export default App;
