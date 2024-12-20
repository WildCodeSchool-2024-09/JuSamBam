import "./App.css";
import "./components/LiveArcarde.css";
import LiveArcade from "./components/LiveArcade";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main>
        <LiveArcade />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
