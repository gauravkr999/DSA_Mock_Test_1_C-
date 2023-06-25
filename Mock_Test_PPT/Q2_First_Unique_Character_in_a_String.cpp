// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// a. 1 <= s.length <= 10^5
// b. s consists of only lowercase English letters.




class Solution {
public:
    int firstUniqChar(string s) {
        int  n=s.size();
        for(int i=0;i<n;i++){
            int sum=1;
            for(int j=0;j<n;j++){
                if(i!=j && s[i]==s[j]){
                    sum=0;
                    break;
                } 
            }
            if(sum==1)
            return i;
        }
        return -1;
    }
};