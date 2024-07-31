//string interpolation
const name="siddhant";
const repoCount="99";

console.log(`my name is ${name} and my jersey number is ${99}`);

//different way to write string
const gameName=new String('siddhant-beast-op');
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString= gameName.substring(0,4);
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newString1="  sid  "
console.log(newString1)
console.log(newString1.trim())

const url="https.//siddhant19.com"
console.log(url.replace('19','-'));
console.log(url.includes('siddhant'));

console.log(gameName.split('-'));