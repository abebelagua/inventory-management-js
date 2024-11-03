import { HasCreatedAt } from './has-created-at.contract';
import { HasDeletedAt } from './has-deleted-at.contract';
import { HasUpdatedAt } from './has-updated-at.contract';

/**
 * A data contract for a record that has creation and modification time tracking.
 */
export interface HasTimeTracking
    extends HasCreatedAt,
        HasUpdatedAt,
        HasDeletedAt {}
