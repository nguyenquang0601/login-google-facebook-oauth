import React, { useState } from 'react';
import logo from './logo.svg';
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import './App.css';

function App() {
  const [infoGG, setGoogle] = useState()
  const [infoFB, setFacebook] = useState()
  return (
    <>
      <div class="form">

        <div style={{ margin: '100px', height: '70px' }}>
          <a href="/google">
            <button>Login Google by Passport</button>
          </a>
        </div>
        <div>
          <GoogleLogin
            clientId="578146149385-2dppsmneu3q8sdgi1qhdv2u36s56of8m.apps.googleusercontent.com"
            buttonText="Sing in with Google"
            onSuccess={(res) => setGoogle(JSON.stringify(res))}
            onFailure={(res) => setGoogle(res)}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div>
          <FacebookLogin
            appId="267947134184871"
            // autoLoad={false}
            fields="name,email,picture"
            callback={(res) => setFacebook (JSON.stringify(res))}
          />
        </div>

      </div>
      <div >
        <textarea cols="200" rows="50" value={infoGG || infoFB} style={{ display: "block", margin: "auto" }} />
      </div>
    </>
  );
}

export default App;
