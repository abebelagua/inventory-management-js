import { HasDescription, HasFullTracking, HasHexId, HasId } from '../common';
import { IProduct } from './product.contract';

export interface IWarranty
    extends HasId,
        HasHexId,
        HasFullTracking,
        HasDescription {
    /**
     * Warranty duration (time in milliseconds)
     */
    duration: number;

    /**
     * Warranty terms
     */
    terms: string;

    /**
     * Warranty conditions
     */
    conditions: string;

    /**
     * Warranty exceptions
     */
    exceptions: string;

    //#region Product

    /**
     * Product ID
     */
    productId: string;

    /**
     * Product
     */
    product: IProduct;

    //#endregion Product
}
