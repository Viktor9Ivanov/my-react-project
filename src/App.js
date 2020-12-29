import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter >
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Route path="/profile" render={() =>
            <Profile posts={props.posts} />} />
          <Route path="/dialogs" render={() =>
            <Dialogs names={props.names}
              messages={props.messages} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
