import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import TaskDetail from "./pages/TaskDetail";
import EditTask from "./pages/EditTask";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-task" element={<NewTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;