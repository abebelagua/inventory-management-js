import {
    HasContact,
    HasFullTracking,
    HasHexId,
    HasId,
    HasName,
    HasRoles,
} from '../common';

export interface IUser
    extends HasId,
        HasHexId,
        HasName,
        HasRoles,
        HasFullTracking,
        HasContact {
    /**
     * User's username
     *
     * @type {string}
     */
    username: string;

    /**
     * User's password
     *
     * @type {string}
     */
    password: string;

    /**
     * User's birthday
     *
     * @type {Date}
     */
    birthday: Date;

    /**
     * User's avatar
     *
     * @type {string}
     */
    avatar?: string;

    /**
     * User's cover image
     *
     * @type {string}
     */
    cover?: string;

    /**
     * User's bio
     *
     * @type {string}
     */
    bio?: string;
}
