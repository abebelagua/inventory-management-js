/**
 * A data contract for records that the user that deleted it.
 */
export interface HasDeletedBy {
    /**
     * And identifier for the user or service account that deleted the record.
     */
    deletedBy?: string;

    /**
     * A description of why the record was deleted.
     */
    deletedDescription?: string;
}
