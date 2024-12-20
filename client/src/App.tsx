import "./App.css";
import "./components/LiveArcarde.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LiveArcade from "./components/LiveArcade";

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
