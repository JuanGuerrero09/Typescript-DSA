import { runningSum } from "./1480-RunningSumOf1dArray";


test('basic', () => {
    expect(runningSum([2, 4, 5])).toStrictEqual([2, 6, 11]);
});