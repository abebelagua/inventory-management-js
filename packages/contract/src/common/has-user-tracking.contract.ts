import { HasCreatedBy } from './has-created-by.contract';
import { HasUpdatedBy } from './has-updated-by.contract';
import { HasDeletedBy } from './has-deleted-by.contract';

/**
 * A data contract for a record that tracks the user that created and modified it.
 */
export interface HasUserTracking
    extends HasCreatedBy,
        HasUpdatedBy,
        HasDeletedBy {}
