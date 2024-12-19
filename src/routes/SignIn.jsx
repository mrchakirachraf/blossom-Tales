import React from 'react';
import Button from '../components/Button';
import "../styles/SignIn.css"
import { Link } from 'react-router-dom';

const SignIn = () => {
  let signInBtnProps = {
    class: 'btn-purple',
    text: 'Sign In',
  };

  return (
  
    <div className="blossom-tales-container">
      <div id="overlay">
          <div id="logo">
            <img style={{width : "100%"}} src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=FFF7F7&bg=FFFFFF&tb=1&s=143" alt="Cursive fonts"></img>
          </div>
          <div>
              <form>
                  <h2>Sign In</h2>
                  <div class="form-group">
                      <label for="exampleInputEmail1">Email</label>
                      <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email ..." required></input>
                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input name="mdp" type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password ..." required></input>
                  </div>
                  <Link to="/anime-list">
                    <Button {...signInBtnProps}></Button>
                  </Link>
                  <span>if you don't have an account click here</span>
              </form>
              
          </div>
      </div>
    </div>
  );
};

export default SignIn;
