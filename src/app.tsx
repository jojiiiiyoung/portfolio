import React from "react";
import Main from "./components/main";
import Header from "./components/header";
import About from "./components/about";
import Loading from "./components/common/loading";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { AppContext, useAppState } from "./context/app";

const App = (): React.ReactElement => (
  <AppContext.Provider value={useAppState()}>
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
      <React.Suspense fallback={<Loading />}>
        <Contact />
      </React.Suspense>
    </div>
  </AppContext.Provider>
);
export default App;
