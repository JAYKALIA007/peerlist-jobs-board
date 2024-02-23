import { JobsBoard } from "./components/board/JobsBoard";
import { NavBar } from "./components/navbar/NavBar";

function App() {
  return (
    <div className="w-full grid grid-cols-6">
      <NavBar />
      <JobsBoard />
    </div>
  );
}

export default App;
