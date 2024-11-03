/**
 * A data contract for records that have standard string IDs.
 */
export interface HasId {
    /**
     * Record ID in Base64 format.
     */
    id: string;
}

/**
 * A data contract for records that have MongoDB `ObjectId`s.
 */
export interface HasHexId {
    /**
     * Record ID in HEX format.
     */
    _id: string;
}

/**
 * A data contract for records that have `bigint` IDs, such as those in
 * relational databases.
 */
export interface HasBigIntId {
    /**
     * Record ID of arbitrary integer precision. Typically holds an vaue from an
     * `autoincrement` column in a relational database.
     */
    id: bigint;
}

/**
 * A data contract for records that have `bigint` IDs, such as those in
 * relational databases.
 */
export interface HasIntId {
    /**
     * Record ID of standard integer precision. Typically holds a value from a
     * custom `INT` ID column in a relational database.
     */
    id: number;
}
