import Movie from "./components/Movie";
import { string } from "prop-types";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";


function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />}>
          
      </Route>
    </Routes>
  </Router>;
}

export default App;
