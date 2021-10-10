import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

import Home from "pages/Home/Home";
import Search from "pages/Search/Search";
import Category from "pages/Category/Category";

import Header from "components/Header/Header";

const App = () => {
  return (
    <HashRouter>
      <div className="container">
        <Header />
        <div className="main-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/category/:category" component={Category} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
