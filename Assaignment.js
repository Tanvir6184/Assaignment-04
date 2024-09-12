// Problem - 01

function calculateTax(income, expenses) {
    if( income < 0 || expenses < 0 || income < expenses){
        return 'Invalid Input';
    }
    let difference = income - expenses;
    let tax = difference * .20;
    return tax; 

}


// Problem - 02

function sendNotification(email){
    if(email.includes('@') === true){
        let atTheRate = email.split('@');
        let userName = atTheRate[0];
        let domainName = atTheRate[1];
        return userName + ' sent you an email from ' + domainName;
    }
    else{
        return 'Invalid Email'
    }
}



// Problem - 03

function checkDigitsInName(name) {
   if (typeof name !== 'string') {
       return 'Invalid Input';
   }
   for (let i = 0; i < name.length; i++){
      if(!isNaN(name[i]) && name[i] !== ''){
         return true;
      }
   }
   return false;
}



// Problem - 04

function calculateFinalScore(obj){
   if( typeof obj !== 'object'){
     return 'Invalid Input';
   }
   
   if(obj.testScore > 50 || obj.schoolGrade > 30){
      return false
   }

   let totalMarks = obj.testScore + obj.schoolGrade;

   if(obj.isFFamily === true){
      totalMarks += 20;
   }

   return totalMarks >= 80;
}



// Problem - 05

function  waitingTime(waitingTimes  , serialNumber) {
    
    if(!Array.isArray( waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input'
    }
    let sum = 0;
    for(let i = 0; i < waitingTimes.length; i++){
        sum += waitingTimes[i]   
    }
    let avgTime = sum / waitingTimes.length;
    let totalAvg = Math.round(avgTime);
    
    let totalRemaining = serialNumber - 1;
    let remaining = totalRemaining - waitingTimes.length;
    let finalTime = totalAvg * remaining;
    return totalAvg, finalTime;  
}



