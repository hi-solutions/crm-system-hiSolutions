import axios from "axios";

const baseUrl = "/api/api/v1/";
import { SubmitContactFormRequest } from "./models/ContactUs";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const SubmitContactForm = (
  req: SubmitContactFormRequest
): Promise<any> => {
  const reqBodySerialized = JSON.stringify(req);

  return new Promise<void>((resolve, reject) => {
    try {
      axios
        .post(`${baseUrl}public/contact-us`, reqBodySerialized, axiosConfig)
        .then(function (response) {
          const DesData = JSON.parse(JSON.stringify(response.data));
          resolve(DesData);
        })
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
};
