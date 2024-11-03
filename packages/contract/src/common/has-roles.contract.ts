import { Roles } from '../auth';

export interface HasRoles {
    /**
     * User roles
     */
    roles?: Roles[];
}
