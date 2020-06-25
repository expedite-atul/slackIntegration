/**
 * @description method to return round off decimal numbers
 * @param value decimal number
 * @implements EPSILON returns the smallest difference b/w decimals
 */
export async function roundOffNumbers(value: number) {
    return Math.round((value + Number.EPSILON) * 100) / 100
}

/**
 * @description generating booking id something like --> KEY12341231
 */
export let generateUniqueId = (key: string) => {
    function random(min: number, max: number) {
        const uniqueNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return uniqueNum;
    }
    let timeStamp = Date.now();
    return (`${key}${random(timeStamp, 45)}`);
}

/**
 * @description returns array into objects
 * @param array 
 * @param keyField 
 */
export const arrayToObject = (array: any[], keyField: string) =>
    array.reduce((obj, item) => {
        obj[item[keyField]] = item
        return obj
    }, {});