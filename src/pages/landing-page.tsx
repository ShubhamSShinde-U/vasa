import Services from '../components/all-services/services';
import HeroSection from '../components/hero-section/hero-section';
import Clients from '../components/home-page/clients/clients';
import './landing-page.scss';

function LandingPage() {
  return (
    <div className='landing-page-wrapper'>
      
      <HeroSection />
      <Services />
      <Clients />
    </div>
  );
}

export default LandingPage;
