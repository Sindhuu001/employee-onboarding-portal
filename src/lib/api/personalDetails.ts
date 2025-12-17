import axios from "axios";
import { PersonalDetailsPayload } from "@/types/personalDetails";

const BASE = process.env.NEXT_PUBLIC_EMPLOYEE_ONBOARDING_URL;

export const createPersonalDetails = async (
  payload: PersonalDetailsPayload
) => {
  return axios.post(`${BASE}/employee-details`, payload);
};
