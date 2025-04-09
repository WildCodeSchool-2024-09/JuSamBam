import "./App.css";
import "./components/LiveArcarde.css";
import "./components/ArcadeMachine.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main>
        <div className="game-card-container-main">
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
