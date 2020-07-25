function isPalindrome(str) {
    let regEx = /[^A-Za-z0-9]/g
    let str1 = str.replace(regEx,'').toLowerCase();
    let reverseStr = str1.split('').reverse().join('');
    let result = reverseStr === str1? true:false
    return result
  }
  
  isPalindrome("eye");//true