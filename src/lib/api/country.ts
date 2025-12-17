import axios from "axios";
import { Country } from "@/types/country";

const BASE = process.env.NEXT_PUBLIC_EMPLOYEE_ONBOARDING_URL;

export const fetchCountries = async (): Promise<Country[]> => {
  const res = await axios.get<Country[]>(`${BASE}/masters/country`);
  return res.data;
};
