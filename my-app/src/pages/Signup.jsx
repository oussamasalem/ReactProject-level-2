import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";

//firebase config
import { auth } from "../firebase/configuration";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const [haserror, sethaserror] = useState(false);
  const navigate = useNavigate();

  // loading
  // not sign in
  // sign in without email verification
  //(signin & verification )=>navigate (/)

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

  if (user) {
    if (!user.emailVerified) {
      return (
      <div>
          <Header />
          <main>
            <p>We send u an email to verify ur account ! </p>
            <button className="delete">send again </button>
          </main>
          <Footer />
      </div>
      );
    }
  }
  if (!user) {
    return (
      <div className="javascript">
        <Helmet>
          <title>Signup</title>
        </Helmet>

        <Header />

        <main>
          <form action="">
            <p>create account ♥</p>
            <input
              type="text"
              placeholder="Username "
              required
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;

                    sendEmailVerification(auth.currentUser).then(() => {});

                    updateProfile(auth.currentUser, {
                      displayName: username,
                    })
                      .then(() => {
                        // Profile updated!
                        console.log("sign upppppp donnnnnne");
                        navigate("/");
                        // ...
                      })
                      .catch((error) => {
                        // An error occurred
                        console.log(error.code);
                        // ...
                      });
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    console.log("sign upppppp faiiiiilddd");
                    console.log(errorCode);
                    sethaserror(true);
                    switch (errorCode) {
                      case "auth/invalid-email":
                        seterrormsg("Wrong Email !");
                        break;
                      case "auth/missing-password":
                        seterrormsg("Missing Password !");
                        break;
                      case "auth/weak-password":
                        seterrormsg("weak password !");
                        break;
                      case "auth/Too-Many-Requests":
                        seterrormsg("Too Many Requests try later ! ☻");
                        break;
                      default:
                        seterrormsg(errorCode);
                    }
                  });
              }}
            >
              SignUp
            </button>
            {haserror && (
              <p style={{ fontSize: "10px", color: "red" }}>{errormsg} </p>
            )}

            <p className="account">
              Already have an account <Link to="/signin">signin</Link>
            </p>
          </form>
        </main>

        <Footer />
      </div>
    );
  }
};

export default Signup;
