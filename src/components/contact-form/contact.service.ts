import axios from "axios";
import { config } from "../../config/config";
import { API_CONFIG } from "../../config/apiConfig";

export type AxiosParams = {
  payload: object;
  successCb: (res: any) => any;
  errorCb: (err: any) => any;
};

export const SendDemoRequest = (params: AxiosParams) => {
  axios
    .post(config.baseUrl + API_CONFIG.ADD_ITEM + "", params.payload, {
      headers: {
        "Content-Type": "application/json", // Adjust as needed
        // Authorization: `Bearer ${params.token}`, // Example if token is needed
      },
    })
    .then((res: any) => {
      params.successCb(res);
    })
    .catch((err: any) => {
      params.errorCb(err);
    });
};
