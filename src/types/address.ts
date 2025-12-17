export interface AddressPayload {
  user_uuid: string;
  address_type: "current" | "permanent";
  address_line1: string;
  address_line2?: string;
  city?: string;
  district_or_ward?: string;
  state_or_region?: string;
  postal_code?: string;
  country_uuid: string;
}
