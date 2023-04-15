import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/configuration";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//firebase
import { deleteUser } from "firebase/auth";
//react momrnt for formating date 
import Moment from "react-moment";

const Profile = () => {
  const Navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

// when we r in loading user values is null
  useEffect(() => {
    if (!user && !loading ) {
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
        <main>
          <p>Initialising User...</p>
        </main>
        <Footer />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    
    return (
      <div className="Profile">
        <Helmet>
          <title>js</title>
          <style type="text/css">{`
            .info{
              text-align:left;
            }
            .light .Profile main h6{
              color:black;
              text-transform: capitalize;  
            }
            .light .Profile main h6 .date{
              color:black;
            }
            
            .info >h2{
              text-align: center;
              margin-bottom: 30px;
              color: teal;
              text-transform: uppercase;          
            }
            
            
          `}
          
          
          </style>
        </Helmet>
  
        <Header />
  
        <main>
          <div className="info">
            <h2>profile </h2>
            <h6> username : {user.displayName}</h6>
            <h6> email : {user.email}</h6>
            <h6> Last-signin :  <Moment className="date" fromNow date={user.metadata.lastSignInTime}/></h6>
            <h6> Account-created : <Moment className="date" fromNow date={user.metadata.creationTime}/></h6>
            
            <button className="delete" onClick={(e)=>{
              e.preventDefault();
              deleteUser(user).then(() => {
                // User deleted.
                console.log("User deleted.");
              }).catch((error) => {
                // An error ocurred
                console.log(error.code);
                console.log("User not deleted. An error ocurred");
                // ...
              });
            }}> delete account </button>
          </div>
        </main>
  
        <Footer />
      </div>
    );
  }

  
};

export default Profile;
