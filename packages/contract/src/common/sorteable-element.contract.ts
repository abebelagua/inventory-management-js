/**
 * Sorteable element
 *
 * @interface ISorteable
 * @typedef {ISorteable}
 */
export interface ISorteable {
    /**
     * Order of the element according to which it can be ordered
     *
     * @type {number}
     */
    order: number;
}

/**
 * Function used to determine the order of the {@link ISorteable} elements.
 * It is expected to return a negative value if the first argument is less than
 * the second argument, zero if they're equal, and a positive value otherwise.
 *
 * @param {ISorteable} a first {@link ISorteable} element to compare
 * @param {ISorteable} b second {@link ISorteable} element to compare
 * @returns {number} a negative value if `a` is less than `b`, zero if they're
 *                   equal, and a positive value otherwise
 */
export const compareSorteable = (a: ISorteable, b: ISorteable) => {
    return a.order - b.order;
};
