# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project1

```javascript
console.log(sid)

const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id==="grey"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="white"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="blue"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="yellow"){
      body.style.backgroundColor=e.target.id
    }
  })
})

```
## project2 Solution

```javascript

const form=document.querySelector('form');
//this usecase would give empty value
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) { 
  e.preventDefault();
  //here we are taking the values in event because we want our value after the button is clicked if we write it before then it would take empty value because script would load earlier as mentioned above
  const height = parseInt(document.querySelector('#height').value);
  
  const weight = parseInt(document.querySelector('#weight').value); 
  
  const results = document.querySelector('#results');
  //for checking whether it is a number or not we should use isNaN method
  if(height ==='' || height < 0 || isNaN(height)) { 
    results.innerHTML = `Please give a valid height ${height} `;
  }
  else if (weight ==='' || weight < 0 || isNaN(weight)) {  
    results.innerHTML =`Please give a valid weight ${weight}`;
  } 
  else{
   const bmi=(weight/((height*height)/10000)).toFixed(2)
   let category=''

   if(bmi<18){
     category="underweight"
   }
   else if(bmi>18.6 && bmi<24.9){
     category="normal"
   }
   else{
     category="overweight"
   }

   results.innerHTML=`<span>${bmi},${category}</span>`;
   
  }

```