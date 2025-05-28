import React from "react";
import Navbar from "../src/home/navbar";
import Main from "../src/home/main";
import Footer from "../src/home/footer";

function App() {
  return (
    <div className=" flex flex-col items-center gap-[90px]">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
