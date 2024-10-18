import "./css/bootstrap.css";
import "./css/styles.css"; //to call our css
import Header from "./components/Header";
import Alert from "./components/alert/Alert";
import SesctionOne from "./components/sectionOne/SesctionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
import SectionFive from "./components/sectionFive/SectionFive";
import SectionSix from "./components/sectionSix/SectionSix";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      {/* <h1>Working fine</h1> */}
      <Header />

      <Alert />

      <SesctionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      
      <Footer />
     
    </>
  );
}

export default App;
