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
  const [isInputValid, setIsInputValid] = useState(true);
  const [isEmailChecked, setIsEmailChecked] = useState(true);

  const toggleCTA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputValid(e.target.validity.valid);
  };

  const toggleInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.target.checked) {
      switch (e.target.value) {
        case 'Email':
          setIsEmailChecked(true);
          break;
        case 'Phone':
          setIsEmailChecked(false);
          break;
      }
    }
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
              checked={isEmailChecked}
              action={toggleInputField}
            ></InputRadio>
            <InputRadio
              name="download-medium"
              text="Phone"
              className="input-radio"
              action={toggleInputField}
            ></InputRadio>
          </div>
          <div className="form-text-inputs">
            {isEmailChecked ? (
              <InputText
                type="email"
                placeholder="Email"
                action={toggleCTA}
              ></InputText>
            ) : (
              <InputText
                type="number"
                placeholder="+91-8604976154"
                action={toggleCTA}
              ></InputText>
            )}
            <Button disabled={!isInputValid}>Share App Link</Button>
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
