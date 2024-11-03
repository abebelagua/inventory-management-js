/**
 * A data contract for records that the user that last updated it.
 */
export interface HasUpdatedBy {
    /**
     * And identifier for the user or service account that last updated the record.
     */
    updatedBy?: string;
}
