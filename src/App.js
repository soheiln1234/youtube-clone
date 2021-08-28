import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import RecommendedVideo from "./components/RecommendedVideo/RecommendedVideo";
import SearchPage from "./components/SearchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className={styles.app__page}>
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className={styles.app__page}>
              <SideBar />
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
