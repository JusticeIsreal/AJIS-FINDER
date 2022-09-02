import "./App.css";
// import form and table component
import Form from "../src/components/Form/Form";
import Table from "../src/components/Table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/Users/User";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/add-user" element={<Form />}></Route>
          <Route path="/" element={<Table />}></Route>
          <Route path="/user/:id" element={<User />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
