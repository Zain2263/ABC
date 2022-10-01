import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import MetaMask from "./pages/Metamask";
import Home from './pages/Home';
import QRgen from './pages/QRgenerator';
import QRscan from './pages/QRscanner';
import Main from './pages/Main';

function App() {
  return (
    <>
    <Router>
          <div>

            <Switch>
              <Route exact path="/">
                <Main/>
              </Route>
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route path="/qr_generator">
                <QRgen/>
              </Route>
              <Route path="/qr_scanner">
                <QRscan/>
              </Route>

            </Switch>

          </div>
        </Router>
    </>
  );
}

export default App;
