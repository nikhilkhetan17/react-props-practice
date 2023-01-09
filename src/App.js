import Navbar from "./components/Navbar";
import Jumbo from "./components/Jumbo";
import Feature from "./components/Feature";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Jumbo />
      <Card />
      <Feature />
      <Footer />
    </>
  );
}

export default App;
