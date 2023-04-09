import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <div className="Html">
      <Helmet>
        <title>HTML</title>
      </Helmet>

      <Header />

      <MainContent PageName="Html" designer="oussama " />

      <Footer />
    </div>
  );
};

export default Html;
