import { JobsBoard } from "./components/board/JobsBoard";
import { NavBar } from "./components/navbar/NavBar";

function App() {
  return (
    <div className="grid w-full grid-cols-6">
      <NavBar />
      <JobsBoard />
    </div>
  );
}

export default App;
