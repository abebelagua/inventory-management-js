import { IKVPair } from './key-value-pair.contract';

export interface HasMetadata {
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) attached
     * to the customer object. This can be useful for storing additional information
     * about the customer in a structured format.
     */
    metadata?: IKVPair[];
}
