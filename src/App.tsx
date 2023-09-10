import LogIn from "./pages/LogIn";
import ToDo from "./pages/ToDo";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="ToDo" element={<ToDo />}></Route>
      </Routes>
    </>
  );
}

export default App;
