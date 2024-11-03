export interface HasPostalAddress {
    /**
     * Street address line 1
     */
    address?: string;

    /**
     * Street address line 2
     */
    address2?: string;

    /**
     * City or Locality
     */
    city?: string;

    /**
     * State, Province, or Region (name or ISO 3166-2 code)
     */
    state?: string;

    /**
     * Postal Code (if in the US, this is the ZIP code)
     */
    postalCode?: string;

    /**
     * Country name or ISO 3166-1 alpha-2 country code
     */
    country?: string;
}
