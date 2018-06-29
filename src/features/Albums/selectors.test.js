// import { makeCarrierSelector } from "./selectors";

// test("carrier selector unit test", () => {
//   const initialData = [
//     {
//       carrier: "first"
//     },
//     {
//       carrier: "second"
//     },
//     {
//       carrier: "third"
//     }
//   ];
//   const result = ["first", "second", "third"];
//   const carrierSelector = makeCarrierSelector();

//   expect(carrierSelector.resultFunc(initialData)).toEqual(result);
//   expect(
//     carrierSelector.resultFunc([...initialData, { carrier: "third" }])
//   ).toEqual(result);
//   expect(carrierSelector.resultFunc([])).toEqual([]);
// });
