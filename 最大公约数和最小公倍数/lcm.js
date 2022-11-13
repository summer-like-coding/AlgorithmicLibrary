import { gcd } from "./gcd.js";

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
export function lcm(a, b) {
    return (a * b) / gcd(a, b);
}