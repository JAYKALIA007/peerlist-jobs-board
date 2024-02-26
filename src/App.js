import { JobsBoard } from "./components/board/JobsBoard";
import { NavBar } from "./components/navbar/NavBar";

function App() {
  return (
    <div className="lg:grid lg:w-full lg:grid-cols-6">
      <NavBar />
      <JobsBoard />
    </div>
  );
}

export default App;
