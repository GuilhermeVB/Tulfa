import Banner from './layout/banner/Banner';
import CaseStudies from './layout/case_studies/CaseStudies';
import Companies from './layout/companies/Companies';
import Contact from './layout/contact/Contact';
import CTA from './layout/cta/CTA';
import Header from './layout/header/Header';
import Immersive from './layout/immersive/Immersive';
import Info from './layout/info/Info';
import Innovations from './layout/innovations/Innovations';
import Solutions from './layout/solutions/Solutions';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <CTA />
      <Immersive />
      <Solutions />
      <Innovations />
      <Companies />
      <Info />
      <CaseStudies />
      <Contact />
    </div>
  );
}

export default App;
