console.log('  Roman Numeral Converter.JS connected')
function convertToRoman(num) {
    const romanObj = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      let romanStr=''
      for (let key of Object.keys(romanObj)) {
        let n = Math.floor(num / romanObj[key]);
        num = num- n * romanObj[key];
        romanStr += key.repeat(n);
      }
      return romanStr;
    }
    
  console.log( convertToRoman(3642))
    