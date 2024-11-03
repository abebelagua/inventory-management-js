import {
    HasId,
    HasHexId,
    HasName,
    HasFullTracking,
    HasDescription,
} from '../common';
import { ISupplier } from '../supplier';

import { IWarranty } from './warranty.contract';

export interface IProduct
    extends HasId,
        HasHexId,
        HasName,
        HasDescription,
        HasFullTracking {
    /**
     * Product price
     */
    price: number;

    /**
     * Product category
     */
    category: string;

    /**
     * Product image URL
     */
    imageUrl: string;

    /**
     * Product rating
     */
    rating: number;

    /**
     * Product stock
     */
    stock: number;

    /**
     * Product on sale
     */
    onSale: boolean;

    /**
     * Product sale price
     */
    salePrice: number;

    /**
     * Product sale start date
     */
    saleStartDate: Date;

    /**
     * Product sale end date
     */
    saleEndDate: Date;

    /**
     * Product tags
     */
    tags: string[];

    /**
     * Product comments
     */
    comments: string[];

    /**
     * Product reviews
     */
    reviews: string[];

    /**
     * Product related products
     */
    relatedProducts: string[];

    /**
     * Product manufacturer
     */
    manufacturer: string;

    /**
     * Product brand
     */
    brand: string;

    /**
     * Product weight
     */
    weight: number;

    /**
     * Product dimensions
     */
    dimensions: string;

    /**
     * Product material
     */
    material: string;

    /**
     * Product color
     */
    color: string;

    // #region Supplier

    /**
     * Product supplier ID
     * */
    supplierId: number;

    /**
     * Product supplier
     * */
    supplier: ISupplier;

    //#region Warranty

    /**
     * Product warranty ID
     */
    warrantyId: number;

    /**
     * Product warranty
     */
    warranty: IWarranty;

    //#endregion Warranty
}
