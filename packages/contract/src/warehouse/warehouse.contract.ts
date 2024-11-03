import {
    HasAccountId,
    HasContact,
    HasDescription,
    HasFullTracking,
    HasHexId,
    HasId,
    HasName,
    HasPostalAddress,
} from '../common';
import { IAccount } from '../account';

export interface IWarehouse
    extends HasId,
        HasHexId,
        HasAccountId,
        HasName,
        HasDescription,
        HasFullTracking,
        HasPostalAddress,
        HasContact {
    //#region Account

    /**
     * Account
     *
     * @type {IAccount}
     */
    account: IAccount;

    //#endregion Account
}
