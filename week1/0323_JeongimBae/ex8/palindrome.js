// Steps:
// 1. Replace puctuation and white space with "" (empty)
// 2. Lower-case the whole string.
// 3. While scaning the string half-way from index i from 0 to n//2
//    where n is the length of the string.
//    fail if string s[i] != s[n-1-i]

function palindrome(str) {
    var noPuctuation = str.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g, "")
    var noSpace = noPuctuation.replace(/\s+/g, "")
    var lowerString = noSpace.toLowerCase();
    for (var i = 0; i < lowerString.length/2; i++){
        if (lowerString[i] != lowerString[lowerString.length - i - 1]){
            return false
        }
    }
    return true
}

console.log(palindrome("No lemon, no melon"));