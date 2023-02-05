import { isSubsequence } from "./392-IsSubsequence";

test('basic', () => {
    expect(isSubsequence("abc", "ahbgdc")).toStrictEqual(true);
});