import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../index.css";
import "./Signin.css";

/// sign in firebase
import { signInWithEmailAndPassword , sendPasswordResetEmail} from "firebase/auth";
import { auth } from "../firebase/configuration";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const [haserror, sethaserror] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [showform, setshowform] = useState("");
  const navigate = useNavigate();

  return (
    <div className="javascript">
      <Helmet>
        <title>Signin</title>
      </Helmet>

      <Header />

      <main>
        <form className={`forgot-password ${showform}`}>
          <div
            onClick={() => {
              setshowform("hide");
            }}
            className="close"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
          <input type="email" placeholder="Email" required  onChange={(e)=>{
            setemail(e.target.value)
          }}/>
          <button
            onClick={(e) => {
              e.preventDefault();
              setforgotpassword(true);
              sendPasswordResetEmail(auth, email)
                .then(() => {
                  // Password reset email sent!
                  console.log("Password reset email sent!");
                  sethaserror(false)
                  // ..
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  sethaserror(true)
                  seterrormsg(errorCode)
                  console.log(errorCode);
                  // ..
                });
            }}
          >
            resend email
          </button>
          {(forgotpassword && !haserror ) && (
            <p className="check-email">
              please check ur email to reset your password !{" "}
            </p>
          )}
          {(forgotpassword && haserror ) && (
            <p className="check-email">
              {errormsg}
            </p>
          )}
        </form>

        <form action="">
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            required
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user);
                  console.log("Signed in  successsssssss !");
                  navigate("/");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  sethaserror(true);
                  console.log("Signed in  failddddddddddddd !");

                  switch (errorCode) {
                    case "auth/invalid-email":
                      seterrormsg("Wrong Email !");
                      break;
                    case "auth/user-not-found":
                      seterrormsg("inexistant user !");
                      break;
                    case "auth/wrong-password":
                      seterrormsg("Wrong password !");
                      break;
                    case "auth/too-many-requests":
                      seterrormsg("Too Many Requests try later ! ☻");
                      break;
                    default:
                      seterrormsg(errorCode);
                  }
                });
            }}
          >
            SignIn
          </button>
          {haserror && (
            <p style={{ fontSize: "10px", color: "red" }}>{errormsg} </p>
          )}

          <p className="account">
            Don't have an account <Link to="/signup">signUp</Link>
          </p>
          <Link
            onClick={() => {
              setshowform("show");
            }}
            className="forgot-pass"
          >
            forgot password ?
          </Link>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Signin;
