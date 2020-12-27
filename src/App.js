import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Search from './components/Search';
import Lists from './components/Lists';
import Formcmp from './components/formcmp'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br />
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Redirect to="/home" />

                )
              }}
            />
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contactUs" exact component={ContactUs} />
            <Route path="/lists" exact component={Lists} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
