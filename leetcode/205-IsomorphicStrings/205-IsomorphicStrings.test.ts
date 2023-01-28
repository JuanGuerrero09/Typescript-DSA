import { isIsomorphic } from "./205-IsomorphicStrings";

test('basic', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
});

test('repeated strings', () => {
    expect(isIsomorphic("badc", "baba")).toBe(false);
});

test('repeated strings 2', () => {
    expect(isIsomorphic("bbbaaaba", "aaabbbba")).toBe(false);
});