import axios from "axios";
import { toast } from "react-toastify";

export const BaseUrl2 = "http://192.236.161.98:8085/";

export const ApiCall = axios.create({
  baseURL: BaseUrl2,
  timeout: 10000,
  validateStatus: (status) => status < 500,
  headers: { "Content-Type": "application/json" },
});

ApiCall.interceptors.response.use((res) => {
  if (res.status >= 400) {
    toast.error("Something went wrong");
  }

  return res;
});

export const allDevices = async (gatewayId) => {
  let res = await ApiCall.get(`/gateway/${gatewayId}/devices`);
  return res.data;
};

export const gateWays = async (userId) => {
  let res = await ApiCall.get(`user/${userId}/gateways`);
  return res.data;
};
