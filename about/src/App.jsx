import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => (
<div className="text-3xl mx-auto max-w-6xl">
  <Header />
  <div class="text-center">
    <h5 class="text-xl font-medium leading-tight mb-2">vijay godhsara</h5>
    <p class="text-gray-500">software engineer</p>
  </div>
  <Footer />
</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
