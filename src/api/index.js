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
  // console.log("res", res);
});

export const allDevices = async (gatewayId) => {
  try {
    let res = await ApiCall.get(`/gateway/${gatewayId}/devices`);
    return res?.data;
  } catch (err) {
    toast.error("Something went wrong");

    return { status: "FAIL" };
  }
};

export const gateWays = async (userId) => {
  try {
    let res = await ApiCall.get(`user/${userId}/gateways`);
    return res?.data;
  } catch (error) {
    toast.error("Something went wrong");
    return { status: "FAIL" };
  }
};

export const getSump = async (userId) => {
  try {
    let res = await ApiCall.get(`device/6001.2/value`);
    return res?.data;
  } catch (error) {
    toast.error("Something went wrong");
    return { status: "FAIL" };
  }
};

export const moisture1 = async (userId) => {
  try {
    let res = await ApiCall.get(`device/6002.1/value`);
    return res?.data;
  } catch (error) {
    toast.error("Something went wrong");
    return { status: "FAIL" };
  }
};

export const moisture2 = async (userId) => {
  try {
    let res = await ApiCall.get(`device/6003.1/value`);
    return res?.data;
  } catch (error) {
    toast.error("Something went wrong");
    return { status: "FAIL" };
  }
};
