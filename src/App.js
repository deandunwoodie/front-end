import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Delete from "./components/Delete/Delete";
import Read from "./components/Read/Read";
import Details from "./components/Details/Details";
import { BrowserRouter, Route } from "react-router-dom";
import CreateQuote from "./components/CreateQuote/CreateQuote";
import Admin from "./components/Admin/Admin";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/create" component={CreateQuote}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route exact path="/details" component={Details}></Route>
        <Route exact path="/delete" component={Delete}></Route>
        <Route exact path="/view" component={Read}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
