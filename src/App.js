import './App.css';

import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import HeaderContact from './components/Header-contact/headerContact';
import Introduction from './components/Introduction/introduction';
import About from './components/About/about';
import Build from './components/Build/build';
import Services from './components/Services/services';
import Technologies from './components/Technologies/technologies';
import HowTo from './components/How-to/howTo';
import Process from './components/Process/process';
import JoinHydra from './components/Join-hydra/joinHydra';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
        <Header />
      <div className='container'>
        <Hero />
        <HeaderContact />
        <Introduction />
        <About />
        <Build />
        <Services />
        <Technologies />
        <HowTo />
        <Process />
        <JoinHydra />
        <Footer />
      </div>
    </>
  );
}

export default App;
