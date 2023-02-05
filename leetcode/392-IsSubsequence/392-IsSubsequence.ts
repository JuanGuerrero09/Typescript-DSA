export function isSubsequence(s: string, t: string): boolean {
    let i = 0
    let j = 0
    while (i <= s.length){
        if (s[i] == undefined) return true
        if (t[j] == undefined) return false
        if (s[i] === t[j]){
            i++
            j++
            continue
        }
        j++
    }
    return false
};

console.log(isSubsequence("abc", "ahbgdc"))
