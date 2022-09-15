//Listen for submit

document.querySelector('#loan-form').addEventListener('submit',function(e){
  //hid results 
  document.getElementById('results').style.display='none';

//show loader

document.getElementById('loading').style.display='block'

setTimeout(calculateResults,2000);

  e.preventDefault();

});


function calculateResults(e){

console.log('calculating...');
//ui var
const amount=document.getElementById('amount')
const interest=document.getElementById('interest')
const years=document.getElementById('years')

const monthlyPaymet=document.getElementById('monthly-payment')
const totalPayment=document.getElementById('total-payment')
const totalInterest=document.getElementById('total-interest')

const principal=parseFloat(amount.value);
const calculatedInterest=parseFloat(interest.value)/100/12;
const calculatedPayments=parseFloat(years.value)*12;

//compute the monthly payment

const x=Math.pow(1+calculatedInterest,calculatedPayments);
const monthly=(principal*x*calculatedInterest)/(x-1);


if(isFinite(monthly)){
  monthlyPaymet.value=monthly.toFixed(2);
  totalPayment.value=(monthly*calculatedPayments).toFixed(2);
  totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);

//show results
  document.getElementById('results').style.display='block';

  //hide loader

  document.getElementById('loading').style.display='none';

}else{
  showError('please check your numbers')
}


}

//creat the show error message

function showError(error){

//hide the results
document.getElementById('results').style.display='none';

//hide loader

document.getElementById('loading').style.display='none';





  const errorDiv=document.createElement('div')

  const card=document.querySelector('.card')
  const heading=document.querySelector('.heading')

  //add calss
  errorDiv.className='alert alert-danger'
  // creat text node and append to div

  errorDiv.appendChild(document.createTextNode(error));

  //insert error above the heading

card.insertBefore(errorDiv, heading);

//clear error after 3 sec
setTimeout(clearError,3000);

}

function clearError(){
document.querySelector('.alert').remove();
}




