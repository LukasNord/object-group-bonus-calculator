class Employee {

  constructor(name, employeeNumber, annualSalary, reviewRating){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  }
}

var atticus = new Employee( 'Atticus', '2405', '47000',  3 );
var jem = new Employee( 'Jem', '62347', '63500',  4 );
var boo = new Employee(  'Boo',  '11435',  '54000',  3 );
var scout = new Employee(  'Scout',  '6243',  '74750',  5 );
var robert = new Employee( 'Robert',  '26835',  '66000',  1 );
var mayella = new Employee( 'Mayella',  '89068',  '35000',  2 );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
var employees = [ atticus, jem, boo, scout, robert, mayella ];
console.log(employees);




//This function evaluates an employee object and returns the bonusPercentage.
function bonusPercentage(employee){

  var bonus = 0;

  if (employee.employeeNumber.length == 4) {
    bonus += 0.05 ;
  }
  if(employee.reviewRating <= 2) {
    bonus += 0;
  }
  else if(employee.reviewRating == 3){
    bonus += 0.04 ;
  }
  else if(employee.reviewRating == 4){
    bonus += 0.06 ;
  }
  else if(employee.reviewRating == 5){
    bonus += 0.1 ;
  }

  if( employee.annualIncome > 65000){
  bonus -= 0.01;
  }

  if(bonus > 0.13){
    bonus = 0.13;
  }
  else if(bonus < 0.0){
    bonus = 0.0;
  }

  return bonus;
  }

function totalCompensation(){
  

}
//console.log(bonusPercentage(atticus));


  //evaluates property of employee rating



//console.log(receiveBonus(atticus));





//console.log(bonusCalculator(atticus));
