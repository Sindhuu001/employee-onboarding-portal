"use client";

import { useEffect, useState } from "react";
import { fetchCountries } from "@/lib/api/country";
import { Country } from "@/types/country";
import { PersonalDetailsPayload } from "@/types/personalDetails";

interface Props {
  userUuid: string;
  onSubmit: (data: PersonalDetailsPayload) => void;
}

export default function PersonalDetailsForm({ userUuid, onSubmit }: Props) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [form, setForm] = useState({
    date_of_birth: "",
    gender: "",
    marital_status: "",
    blood_group: "",
    nationality_country_uuid: "",
    residence_country_uuid: "",
  });

  useEffect(() => {
    fetchCountries().then((data) =>
      setCountries(data.filter((c) => c.is_active))
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    onSubmit({
      personal_uuid: crypto.randomUUID(),
      user_uuid: userUuid,
      ...form,
    });
  };

  return (
    <>
      <h2 className="section-title">Personal Details</h2>

      <input type="date" name="date_of_birth" className="input" onChange={handleChange} />

      <select name="gender" className="input" onChange={handleChange}>
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <select name="marital_status" className="input" onChange={handleChange}>
        <option value="">Marital Status</option>
        <option>Single</option>
        <option>Married</option>
      </select>

      <select name="blood_group" className="input" onChange={handleChange}>
        <option value="">Blood Group</option>
        {["O+","O-","A+","A-","B+","B-","AB+","AB-"].map(bg => (
          <option key={bg}>{bg}</option>
        ))}
      </select>

      <select name="nationality_country_uuid" className="input" onChange={handleChange}>
        <option value="">Nationality</option>
        {countries.map(c => (
          <option key={c.country_uuid} value={c.country_uuid}>
            {c.country_name}
          </option>
        ))}
      </select>

      <select name="residence_country_uuid" className="input" onChange={handleChange}>
        <option value="">Residence Country</option>
        {countries.map(c => (
          <option key={c.country_uuid} value={c.country_uuid}>
            {c.country_name}
          </option>
        ))}
      </select>

      <button className="btn-primary" onClick={submit}>
        Save Personal Details
      </button>
    </>
  );
}
