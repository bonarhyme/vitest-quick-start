/** A function that accepts a  list of numbers and sums it up */
export default function add(...numbers: number[]) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// if (import.meta.vitest) {
//   const { describe, expect, it } = import.meta.vitest;

//   describe("#Sum", () => {
//     it("returns 0 with no numbers", () => {
//       expect(add()).toBe(0);
//     });
//     it("returns correct value when numbers are passed", () => {
//       expect(add(25, 40, 1)).toBe(66);
//     });
//   });
// }
