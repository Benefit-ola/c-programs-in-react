import { useState } from "react";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import QuadraticSolver from "./components/QuadraticSolver";
import { BiArrowBack } from "react-icons/bi";

const pages = { home: Home, calculator: Calculator, quadratic: QuadraticSolver };

function App() {
  const [page, setPage] = useState("home");

  const Page = pages[page] || Home;

  return (
    <div className="relative">
      {/* back button — shown on all pages except home */}
      {page !== "home" && (
        <button
          onClick={() => setPage("home")}
          className="fixed top-5 left-5 z-50 flex items-center gap-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:border-[#D63384] hover:text-[#D63384] transition-all duration-300"
        >
          <BiArrowBack />
          All programs
        </button>
      )}

      {/* render active page */}
      <Page onNavigate={setPage} />
    </div>
  );
}

export default App;
