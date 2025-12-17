"use client";

import PersonalDetailsForm from "./PersonalDetailsForm";
import AddressForm from "./AddressForm";


import { createPersonalDetails } from "@/lib/api/personalDetails";
import { createAddress } from "@/lib/api/address";


export default function EmployeeDetailsPage() {
  const USER_UUID = "019a7c6f-680c-7b9c-3928-7499320b6326"; // TODO: replace after auth
  const COUNTRY_IDENTITY_MAPPING_UUID =
    "019b21b6-9fd8-ee83-141d-7a297cfcea40"; // TODO: fetch from backend

  return (
    <div className="container space-y-8">
      {/* PERSONAL DETAILS */}
      <PersonalDetailsForm
        userUuid={USER_UUID}
        onSubmit={createPersonalDetails}
      />

      {/* ADDRESS DETAILS */}
      <AddressForm
        userUuid={USER_UUID}
        onSubmit={createAddress}
      />

      {/* IDENTITY DOCUMENT */}
      
    </div>
  );
}
