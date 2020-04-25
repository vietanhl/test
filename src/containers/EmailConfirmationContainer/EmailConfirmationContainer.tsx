import axios from 'axios';
import { baseURL } from '../../config/merchantConfig/config';

export const sendConfirmationEmail = async (
  email: string,
  name: string,
  message: string
) => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .post(`https://api.emailjs.com/api/v1.0/email/send`, {
        service_id: 'default_email',
        template_id: 'confirmationEmail',
        user_id: 'user_HOAOjrBk9w65QRfSrglwr',
        template_params: {
          email: email,
          name: name,
          message: message,
        },
      })
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        console.log('error: ' + error);
        return window.location.replace(`${baseURL}/error`);
      });
  };
  await fetchData();
  return response;
};
