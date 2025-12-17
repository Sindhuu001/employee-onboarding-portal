import axios from "axios";
import { AddressPayload } from "@/types/address";

const BASE = process.env.NEXT_PUBLIC_EMPLOYEE_ONBOARDING_URL;

export const createAddress = async (payload: AddressPayload) => {
  return axios.post(`${BASE}/employee-details/address`, payload);
};
