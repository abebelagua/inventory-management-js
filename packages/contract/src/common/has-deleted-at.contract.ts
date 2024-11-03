/**
 * A data contract for records that track elimination time.
 */
export interface HasDeletedAt {
    /**
     * The date and time the record was deleted.
     */
    deletedAt?: Date;
}
