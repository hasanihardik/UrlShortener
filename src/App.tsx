import Boost from './components/Boost';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Shorten from './components/Shorten';
import Statistic from './components/Statistic';

const App = () => {
  return (
    <>
      {/* Header section */}
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Shorten section */}
      <Shorten />

      {/* Statistics section */}
      <Statistic />

      {/* Boost section */}
      <Boost />

      {/* Footer section */}
      <Footer />
    </>
  );
};

export default App;
