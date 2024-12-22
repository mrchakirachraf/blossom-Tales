import React from 'react';
import Button from '../components/Button';
import styles from "../styles/SignIn.module.css";
import { Link } from 'react-router-dom';

const SignIn = () => {
  let signInBtnProps = {
    style : {},
    class : "btn_purple w-32 lg:w-52",
    text: 'Sign In',
  };

  return (
  
    <div className={styles.blossom_tales_container}>
      <div id={styles.overlay}>
          <div id={styles.logo}>
            <img style={{width : "100%"}} src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=FFF7F7&bg=FFFFFF&tb=1&s=143" alt="Cursive fonts"></img>
          </div>
          <div>
              <form>
                  <h2>Sign In</h2>
                  <div className={styles.form_group}>
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input name="email" type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email ..." required></input>
                  </div>
                  <div className={styles.form_group}>
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input name="mdp" type="password" id="exampleInputPassword1" placeholder="Enter your password ..." required></input>
                  </div>
                  <Link to="/home-page">
                    <Button {...signInBtnProps}></Button>
                  </Link>
                  <span style={{textAlign : 'center'}} >if you don't have an account <u>click here</u></span>
              </form>
              
          </div>
      </div>
    </div>
  );
};

export default SignIn;
