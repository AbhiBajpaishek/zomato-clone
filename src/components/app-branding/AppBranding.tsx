import React, { useState } from 'react';
import './AppBranding.css';
import img from '../../assets/mobile.avif';
import g_play from '../../assets/g_play.webp';
import a_store from '../../assets/a_store.webp';
import { InputText } from 'components/ui/InputText';
import { InputRadio } from 'components/ui/InputRadio';
import { Button } from 'components/ui/Button';
import { CtaButton } from 'components/ui/CtaButton';

export const AppBranding: React.FC = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);

  const toggleCTA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmailValid(e.target.validity.valid);
  };

  return (
    <div className="app-branding">
      <div className="app-branding_left">
        <img src={img} className="app-branding_left-img " alt="mobile app" />
      </div>
      <div className="app-branding_right">
        <div className="app-heading">
          <h1 className="app-heading_title">Get the Zomato App</h1>
          <article className="app-heading_info">
            We will send you a link, open it on your phone to download the app
          </article>
        </div>
        <form className="get-app_form">
          <div className="form-radio-inputs">
            <InputRadio
              name="download-medium"
              text="Email"
              className="input-radio"
            ></InputRadio>
            <InputRadio
              name="download-medium"
              text="Phone"
              className="input-radio"
            ></InputRadio>
          </div>
          <div className="form-text-inputs">
            <InputText
              type="email"
              placeholder="Email"
              action={toggleCTA}
            ></InputText>
            <Button text="Share App Link" disabled={!isEmailValid}></Button>
          </div>

          <h6 className="download-text">Download app from</h6>
          <div className="download-text_buttons">
            <CtaButton alt="Get it on Play Store" imgSrc={g_play}></CtaButton>
            <CtaButton alt="Get it on App Store" imgSrc={a_store}></CtaButton>
          </div>
        </form>
      </div>
    </div>
  );
};
