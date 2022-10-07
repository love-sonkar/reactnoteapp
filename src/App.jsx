import "./App.css";
import AddNotes from "./Components/AddNotes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Notes from "./Components/Notes";
import Mainsection from "./Components/Mainsection";

function App() {
  return (
    <div className="App">
      <Header />
      <Mainsection />
      <Footer />
    </div>
  );
}

export default App;
