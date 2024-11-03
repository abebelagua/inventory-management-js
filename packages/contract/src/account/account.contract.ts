import { HasFullTracking, HasHexId, HasId, HasName } from '../common';
import { ICompany } from '../company';
import { IUser } from '../user';

export interface IAccount extends HasId, HasHexId, HasName, HasFullTracking {
    /**
     * Account name
     */
    name: string;

    //#region Company

    /**
     * Company ID
     */
    companyId: string;

    /**
     * Company
     */
    company: ICompany;

    //#endregion Company

    //#region Users

    /**
     * Account owner ID
     */
    ownerId: string;

    /**
     * Account owner
     */
    owner: IUser;

    /**
     * Account users
     */
    users?: IUser[];

    //#endregion Users
}
