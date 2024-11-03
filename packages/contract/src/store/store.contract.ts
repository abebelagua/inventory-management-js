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

export interface IStore
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
     */
    account: IAccount;

    //#endregion Account
}
