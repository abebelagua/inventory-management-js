import { HasAccountId } from './has-account-id.contract';
import { HasFullTracking } from './has-full-tracking.contract';
import { HasHexId, HasId } from './has-id.contract';

/**
 * A data contract for tracked records that belonging to specific accounts.
 */
export interface HasTenantTracking
    extends HasId,
        HasHexId,
        HasAccountId,
        HasFullTracking {}
