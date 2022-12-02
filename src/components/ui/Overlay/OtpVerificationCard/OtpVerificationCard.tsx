import { InputText } from 'components/ui/InputText';
import './OtpVerificationCard.css';

export const OtpVerificationCard = () => {
  const shiftInputFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const sibling =
      e.key === 'Backspace'
        ? e.currentTarget.previousElementSibling
        : e.currentTarget.nextElementSibling;
    if (sibling) {
      const ele: HTMLInputElement | null = document.querySelector(
        `#${sibling.id}`
      );
      if (ele) ele.focus();
    }
  };

  return (
    <section className="login-panel_main">
      <h5>OTP sent successfully.</h5>
      <div>
        <InputText
          type="text"
          placeholder={''}
          maxLength={1}
          id="otp-1"
          onKeyUp={shiftInputFocus}
          className="otp-input"
        ></InputText>
        <InputText
          type="text"
          placeholder={''}
          className="otp-input"
          onKeyUp={shiftInputFocus}
          maxLength={1}
          id="otp-2"
        ></InputText>
        <InputText
          type="text"
          placeholder={''}
          className="otp-input"
          onKeyUp={shiftInputFocus}
          maxLength={1}
          id="otp-3"
        ></InputText>
        <InputText
          type="text"
          maxLength={1}
          id="otp-4"
          placeholder={''}
          onKeyUp={shiftInputFocus}
          className="otp-input"
        ></InputText>
        <InputText
          type="text"
          maxLength={1}
          id="otp-5"
          placeholder={''}
          onKeyUp={shiftInputFocus}
          className="otp-input"
        ></InputText>
        <InputText
          type="text"
          maxLength={1}
          id="otp-6"
          placeholder={''}
          onKeyUp={shiftInputFocus}
          className="otp-input"
        ></InputText>
      </div>
    </section>
  );
};
