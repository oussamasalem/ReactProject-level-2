import Header from "../components/header";
import Footer from "../components/footer";
import "../theme.css";
import { Helmet } from "react-helmet-async";

//firebase
import { auth } from "../firebase/configuration";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {sendEmailVerification } from "firebase/auth"
const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <Header />
        <main>loading ........................</main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Helmet>
          <title>Homee</title>
        </Helmet>
        <Header />

        <main>
          <p className="welcom">
            Welcome u have to{" "}
            <Link
              style={{
                color: "teal",
              }}
              to="/signin"
            >
              {" "}
              signin{" "}
            </Link>{" "}
          </p>
        </main>

        <Footer />
      </>
    );
  }
  if (user.emailVerified) {
    return (
      <div className="home">
        <Helmet>
          <title>Homee</title>
        </Helmet>
        <Header />
        {user && (
          <main>
            <p className="welcome">
              welcome {user.displayName} <span> ♣ </span>
            </p>
          </main>
        )}
      
  
        <Footer />
      </div>
    );
  }

  if (!user.emailVerified) {
    return (
      <>
        <Helmet>
          <title>Homee</title>
        </Helmet>
        <Header />
        <main>
          <p>  welcome {user.displayName} <span> ♣ </span></p>
          <p>Please verify your email to Contenue</p>
          <button className="delete" onClick={()=>{
            sendEmailVerification(auth.currentUser)
            .then(() => {
              // Email verification sent!
              console.log("Email verification sent!");
            }).catch((error)=>{
              console.log(error);
            });
          }}>send email </button>
        </main>

        <Footer />
      </>
    );
  }


};

export default Home;
