export function isIsomorphic(s: string, t: string): boolean {
    let mapST: Map<string, string> = new Map()
    let mappedStr: Set<string> = new Set()
    for (let i = 0; i < s.length; i++){
      if((mapST.has(s[i]) && mapST.get(s[i]) !== t[i]) || (!mapST.has(s[i]) && mappedStr.has(t[i]))){
        return false
      }
      mapST.set(s[i], t[i])
      mappedStr.add(t[i])
    }
    return true
};