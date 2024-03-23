import { NavBar, Stripes, Work } from "./components";

NavBar;
function App() {
  return (
    <div className="h-screen font-regular w-full box-content bg-zinc-900 relative">
      <NavBar />
      <Work />
      <Stripes />
    </div>
  );
}

export default App;
