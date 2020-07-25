//Return true if the passed string looks like a valid US phone number.

// return true for following format
// 555-555-5555    
// (555)555-5555   
// (555) 555-5555  
// 555 555 5555
// 5555555555
// 1 555-555-5555
// 1 555 555 5555 **
// 1 (555) 555 5555
// 1 (555) 555-5555"**
// 1(555)555-5555**

// Here I have used nested If Else conditional statement to solve the problem, later I will solve it using Regex.

function checkChar (str){
  let l1 = str.length
  let l2 = str.replace(/[^0-9()\s-]/g,'').length
  return l1===l2
}


function telephoneCheck(str) {
  let onlyDigit = str.replace(/[^0-9]/g,'')
  let length  = str.replace(/[^0-9]/g,'').length
  if(length===10 && checkChar(str)===true  || length===11 && checkChar(str)===true){
    if(length===10){
         if(str.length===10)return true
         else if(str.length===12){
            
           if((str[3]===' '||str[3]==='-') && str[7]===' '||str[3]==='-') {
             return true}
           else return false
         }
         else if(str.length===13) return str[0]==='(' && str[4]===')' && str[8]==='-'  
         else if(str.length===14) return str[0]==='(' && str[4]===')' && str[5]===' ' && str[9]==='-'     
    }
  
    else { // length 11
        if(str[0]!=='1') return false
        if ( str[1]!==' ' && str[1]!=='(' ) return false
        if(str[1]=== ' '){ 
          if((str[5] ===' '&& str[9]===' ') || (str[5] ==='-' && str[9]==='-') ) return true
          else if( (str[2]==='(' && str[6]===(')')) && str[7]===' ' &&  (str[11]===' ' || str[11]==='-')) return true
          else return false
        }
        else if(str[1]==='(' && str[5]===')' && str[9]==='-') return true
    }
  }
  else {
    return false
  }

}
