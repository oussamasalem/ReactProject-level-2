
import Header from '../components/header';
import Footer from '../components/footer';
import MainContent from '../components/MainContent';
import { Helmet } from 'react-helmet-async';

const Css = () => {
  return (
    <div className='css'>
      
        <Helmet>
            <title>css</title>
        </Helmet>

        <Header />
        
        <MainContent PageName="Css" designer="salem" />
        
        <Footer />
*
    </div>
  );
}

export default Css;
