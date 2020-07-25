// all currency in Penny
const denom = 
   {"ONE HUNDRED": 10000 ,
   "TWENTY" :2000 ,
   "TEN" :1000 ,
   "FIVE" :500 ,
   "ONE" :100 ,
   "QUARTER" : 25 ,
   "DIME" :10 ,
   "NICKEL" :5 ,
   "PENNY" :1 
};

function checkCashRegister(price, cash, cid) {
  // cash in drawer in Penny
  cid.forEach( c => {
    c[1]=Math.ceil(c[1]*100)
  })
let output = { status:'OPEN', change: [] };
  let change = (cash - price)*100 // unit Penny

  // total cash in cid
let cidSum = (arr) =>  {
    let sum = 0
    for(let i = 0; i<arr.length; i++){
      sum+= arr[i][1]
    } 
    return sum
  }
let cidTotal =cidSum(cid)
  // exact change in cid
  if (cidTotal === change) {
    console.log('equal')
    output.status = "CLOSED";
     cid.forEach( c => {
    c[1]=(c[1]/100)
  })
    output.change=cid
  }
  
  // insufficient funds in cid
  else if (cidTotal < change) {
    console.log('insufficient',cidTotal)
    output.status = "INSUFFICIENT_FUNDS";
  }
//   // sufficient fund
else if(cidTotal > change) {
  console.log('sufficient')
let changeArray =[]
for(let i=cid.length-1; i>=0; i--){
  let currency = cid[i][0]
  let currValue= denom[currency]
  let noteHas = Math.floor(cid[i][1]/(currValue))
  let noteNeed = Math.floor(change/(currValue))
  if(noteHas>=noteNeed && noteNeed>0 ){
      changeArray.push([currency, noteNeed*currValue  ])
      change = change- (noteNeed*currValue)
      cid[i][1]-= (noteNeed*currValue)
  }
  else if(noteHas<noteNeed && noteHas>0) {
    changeArray.push([currency, (currValue*noteHas)])
     change = change - (noteHas*currValue)
     cid[i][1]-= 0
  }
 
 }
if(change===0){
  changeArray.forEach( c => { c[1]= c[1]/100})
  output.change=changeArray
  output.status='OPEN'
}
else{
  output.status="INSUFFICIENT_FUNDS"
}

}
console.log(output)
return output
 }
