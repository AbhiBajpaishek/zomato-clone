import React from 'react';
import './AppBranding.css';
import img from '../../assets/mobile.avif';
import { InputText } from 'components/ui/InputText';

export const AppBranding: React.FC = () => {
  return (
    <div className="app-branding">
      <div className="app-branding_left">
        <img src={img} className="app-branding_left-img " />
      </div>
      <div className="app-branding_right">
        <div className="app-heading">
          <h1 className="app-heading_title">Get the Zomato App</h1>
          <article className="app-heading_info">
            We will send you a link, open it on your phone to download the app
          </article>
        </div>
        <form className="get-app_form">
          <div>
            <input type="radio"></input> Email
            <input type="radio"></input> Phone
          </div>
          <div className="form-text-inputs">
            <InputText type="email" placeholder="Email"></InputText>
            <button>Share App Link</button>
          </div>

          <h6>Download app from</h6>
          <div>
            <button>Play Store</button>
            <button>App Store</button>
          </div>
        </form>
      </div>
    </div>
  );
};
