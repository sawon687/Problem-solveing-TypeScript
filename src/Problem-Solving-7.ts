// 7. Group Anagrams
// Given an array of strings, group all anagrams together.

// Anagrams are words made from the same letters.

// Example:

// Input:
// ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

const groupAnagrams = (strs: string[]): string[][] => {
  const map = new Map<string, string[]>();

  for (const str of strs) {

    const key = str.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }


    map.get(key)?.push(str);
  }


  return Array.from(map.values());
};

// Example
console.log(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);