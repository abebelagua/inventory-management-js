import { HasTimeTracking } from './has-time-tracking.contract';
import { HasUserTracking } from './has-user-tracking.contract';

/**
 * A data contract for a record that has both time and user modification tracking.
 */
export interface HasFullTracking extends HasTimeTracking, HasUserTracking {}
