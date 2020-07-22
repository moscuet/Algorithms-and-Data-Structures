//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

//Write a function which takes a ROT13 encoded string as input and returns a decoded string.

//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    let secretCode = {
      S:'F', F:'S', E:'R', R:'E', P:'C', C:'P', B:'O', O:'B', Q:'D', D:'Q', N:'A', A:'N', Z:'M', M:'Z', V:'I', I:'V', Y:'L', L:'Y', G:'T', T:'G', U:'H', H:'U', X:'K', K:'X', W:'J', J:'W'
    }
    let decode = ''
    for(let i =0; i<str.length; i++){
      if(str[i]==' ') decode+= ' '
      else if(secretCode[str[i].toUpperCase()]===undefined){
       decode+= str[i]
      }
      else {
        decode +=secretCode[str[i].toUpperCase()]
      } 
    }
    console.log(decode)//
     return decode
    }
    
    rot13("SERR CVMMN!");
    