import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen">
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;
