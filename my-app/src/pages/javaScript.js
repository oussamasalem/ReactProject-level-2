import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

const JavaScript = () => {
  return (
    <div className="javascript">
      <Helmet>
        <title>js</title>
      </Helmet>

      <Header />

      <MainContent PageName="JavaScript" designer="salem" />

      <Footer />
    </div>
  );
};

export default JavaScript;
