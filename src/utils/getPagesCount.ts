
export function getPageCount(totalCount: number, limit: number): number {
    return Math.ceil(totalCount / limit);
};