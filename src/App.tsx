import React from "react";
import Main from "./components/main";
import Header from "./components/header";
import About from "./components/about";
import Loading from "./components/common/loading";
import Projects from "./components/projects";

const App = (): React.ReactElement => (
  <div className="app">
    <React.Suspense fallback={<Loading />}>
      <Main />
    </React.Suspense>
    <Header />
    <React.Suspense fallback={<Loading />}>
      <About />
    </React.Suspense>
    <React.Suspense fallback={<Loading />}>
      <Projects />
    </React.Suspense>
  </div>
);
export default App;
