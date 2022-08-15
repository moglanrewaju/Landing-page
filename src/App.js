import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComingSoon from "./pages/comingSoon";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">

          <Switch>
            <Route exact path="/">
        <Hero />

            </Route>
            <Route exact path="/comingSoon">
              <ComingSoon />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
