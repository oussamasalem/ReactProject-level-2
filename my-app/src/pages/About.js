import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";
////////////////////////////////
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/configuration";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) {
      Navigate("/signin");
    }

    if (user) {
      if (!user.emailVerified) {
        Navigate("/");
      }
    }
  });


  if (loading) {
    return (
      <div>
        <Header />
        <main>loading ........................</main>
        <Footer />
      </div>
    );
  }



  if (user && user.emailVerified) {
    return (
      <div className="Html">
        <Helmet>
          <title>HTML</title>
        </Helmet>

        <Header />

        <main>about pages </main>

        <Footer />
      </div>
    );
  }
};

export default About;
