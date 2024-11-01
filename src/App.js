import { useState } from 'react';

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
import Menu from './components/menu/Menu';
import Animations, { BannerAnimations } from './animations/Animations';

function App() {
  const [menuStatus, setMenuStatus] = useState(false)

  function switchMenuStatus() {
    setMenuStatus(!menuStatus)
  }

  return (
    <div className={App}>
      <BannerAnimations menuStatus={menuStatus} />
      {
        !menuStatus && <Header menuClick={switchMenuStatus} />
      }
      <Menu menuClick={switchMenuStatus} />
      <Banner />
      {
        !menuStatus &&
        <>
          <Animations />
          <CTA />
          <Immersive />
          <Solutions />
          <Innovations />
          <Companies />
          <Info />
          <CaseStudies />
          <Contact />
        </>
      }
    </div>
  );
}

export default App;
