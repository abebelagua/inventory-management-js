import {
    HasContact,
    HasFullTracking,
    HasHexId,
    HasId,
    HasName,
    HasPostalAddress,
} from '../common';
import { ICompany } from '../company';

export interface ISupplier
    extends HasId,
        HasHexId,
        HasName,
        HasFullTracking,
        HasPostalAddress,
        HasContact {
    //#region Company

    /**
     * Supplier company id
     */
    companyId: string;

    /**
     * Supplier company
     */
    company: ICompany;

    //#endregion Company
}
