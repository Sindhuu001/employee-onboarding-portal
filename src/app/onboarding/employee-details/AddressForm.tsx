"use client";

import { useEffect, useState } from "react";
import { fetchCountries } from "@/lib/api/country";
import { Country } from "@/types/country";
import { AddressPayload } from "@/types/address";
import { toast } from "react-toastify";

/* ---------------- TYPES ---------------- */

type AddressFormState = {
  address_line1: string;
  address_line2: string;
  city: string;
  district_or_ward: string;
  state_or_region: string;
  postal_code: string;
  country_uuid: string;
};

interface Props {
  userUuid: string;
  onSubmit: (data: AddressPayload) => Promise<unknown>;
}

/* ---------------- CONSTANTS ---------------- */

const EMPTY_ADDRESS: AddressFormState = {
  address_line1: "",
  address_line2: "",
  city: "",
  district_or_ward: "",
  state_or_region: "",
  postal_code: "",
  country_uuid: "",
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function AddressForm({ userUuid, onSubmit }: Props) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [sameAsPermanent, setSameAsPermanent] = useState<boolean>(true);

  const [currentAddress, setCurrentAddress] =
    useState<AddressFormState>(EMPTY_ADDRESS);

  const [permanentAddress, setPermanentAddress] =
    useState<AddressFormState>(EMPTY_ADDRESS);

  useEffect(() => {
    fetchCountries().then((data) =>
      setCountries(data.filter((c) => c.is_active))
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    type: "current" | "permanent"
  ) => {
    const updater =
      type === "current" ? setCurrentAddress : setPermanentAddress;

    updater((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitAddresses = async () => {
    try {
      // CURRENT ADDRESS
      await onSubmit({
        user_uuid: userUuid,
        address_type: "current",
        ...currentAddress,
      });

      // PERMANENT ADDRESS
      await onSubmit({
        user_uuid: userUuid,
        address_type: "permanent",
        ...(sameAsPermanent ? currentAddress : permanentAddress),
      });

      toast.success("Address details saved successfully");
    } catch (error: unknown) {
      let message = "Failed to save address details";

      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error
      ) {
        const err = error as {
          response?: { data?: { detail?: string } };
        };
        message = err.response?.data?.detail ?? message;
      }

      toast.error(message);
    }
  };

  return (
    <div>
      <h2 className="section-title">Address Details</h2>

      {/* CURRENT ADDRESS */}
      <h3 className="font-semibold mb-2">Current Address</h3>

      <AddressFields
        data={currentAddress}
        countries={countries}
        onChange={(e) => handleChange(e, "current")}
      />

      {/* SAME AS CHECKBOX */}
      <div className="flex items-center gap-2 my-4">
        <input
          type="checkbox"
          checked={sameAsPermanent}
          onChange={() => setSameAsPermanent((prev) => !prev)}
        />
        <span>My current address is same as permanent address</span>
      </div>

      {/* PERMANENT ADDRESS */}
      {!sameAsPermanent && (
        <>
          <h3 className="font-semibold mb-2">Permanent Address</h3>
          <AddressFields
            data={permanentAddress}
            countries={countries}
            onChange={(e) => handleChange(e, "permanent")}
          />
        </>
      )}

      <button className="btn-primary mt-6" onClick={submitAddresses}>
        Save Address
      </button>
    </div>
  );
}

/* ---------------- SUB COMPONENT ---------------- */

interface AddressFieldsProps {
  data: AddressFormState;
  countries: Country[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

function AddressFields({
  data,
  countries,
  onChange,
}: AddressFieldsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <input
        name="address_line1"
        className="input"
        placeholder="Address Line 1"
        value={data.address_line1}
        onChange={onChange}
      />

      <input
        name="address_line2"
        className="input"
        placeholder="Address Line 2"
        value={data.address_line2}
        onChange={onChange}
      />

      <input
        name="city"
        className="input"
        placeholder="City"
        value={data.city}
        onChange={onChange}
      />

      <input
        name="district_or_ward"
        className="input"
        placeholder="District / Ward"
        value={data.district_or_ward}
        onChange={onChange}
      />

      <input
        name="state_or_region"
        className="input"
        placeholder="State / Region"
        value={data.state_or_region}
        onChange={onChange}
      />

      <input
        name="postal_code"
        className="input"
        placeholder="Postal Code"
        value={data.postal_code}
        onChange={onChange}
      />

      <select
        name="country_uuid"
        className="input"
        value={data.country_uuid}
        onChange={onChange}
      >
        <option value="">Country</option>
        {countries.map((c) => (
          <option key={c.country_uuid} value={c.country_uuid}>
            {c.country_name}
          </option>
        ))}
      </select>
    </div>
  );
}
