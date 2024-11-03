import {
    HasContact,
    HasDescription,
    HasFullTracking,
    HasHexId,
    HasId,
    HasName,
    HasPostalAddress,
} from '../common';

export interface ICompany
    extends HasId,
        HasHexId,
        HasName,
        HasDescription,
        HasFullTracking,
        HasPostalAddress,
        HasContact {}
