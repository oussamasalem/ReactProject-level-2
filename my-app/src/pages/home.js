
import Header from '../components/header';
import Footer from '../components/footer';
import MainContent from '../components/MainContent';

import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
    
        <Helmet>
          <title>Homee</title>
        </Helmet>
        <Header />
        
        <MainContent PageName="Home" designer="oussama" />
        
        <Footer />
      
    </>
  );
}

export default Home;
