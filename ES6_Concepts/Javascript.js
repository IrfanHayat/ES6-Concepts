//
// lecture No 1

// var,let Const,


// var hello="hello"

// if(hello==="hello")
// {
	
// 	var array=["1","2"]
// 	console.log("world",hello)
// }
// console.log(array)



// lecture No 2
// let vs const



// var value=123
// var value=124
// console.log(value)

// let value=123;
// let value=124;
// console.log(value);

// const obj={name:"Muhammad Irfan Hayat",roll:"061"}

// obj.name="Irfan"

// const person=Object.freeze(obj)
// person.name="Ali"

// console.log(person)


//lecture No 3 let and const in real world  

// {
// 	const new1="Irfan"
// 	console.log(new1)
// }

// for(let i=0;i<10;i++){
// 	console.log(i)
// 	setTimeout( function(){
// 		console.log(i) 
// 	},1000)
// }
// for(var i=0;i<10;i++){
// 	console.log(i)
// 	setTimeout( function(){
// 		console.log(i) 
// 	},1000)
// }

// lecture No 4 Temporial Death

// console.log(newVar)
// var newVar="Irfan"

// console.log(newVar1)
// let newVar1="Irfan"



// lecture No 6 Arrow Function

// let arr=["Irfan","Hayat","Work Hard"]

// let result=arr.map(result=>{return `${result}`})
// console.log(result)

// arr.map(result=>result)



// lecture No 7
// let race="120km"
// let winner=["Irfan ","Hayat"]

// const data=winner.map(()=>({
// 	name:winner,
// 	race:race

// }))

// console.log(data)




// let arr=["Irfan","Hayat","Muhammad"]
// const result=arr.filter(result=>result.length>5)
// console.log(result)




// lecture No 9 Default function

// function addNumber(num1,num2){
// 	const number1=num1 || 12
// 	const number2=num2 || 14
// 	const sum=number1+number2
// 	console.log(sum)
// }

// addNumber(undefined,undefined)



// lecture No 10

// const state={
// 	name:"Irfan",
// 	address:"house No 10, Street No 10",
// 	person:function(){
// 		console.log(`I am ${this.name} and I Live at ${this.address}`)
// 	}
// }

// console.log(state.person())


// class Car {
// 	constructor(carName,carModel){
// 		this.carName=carName,
// 		this.carModel=carModel
// 	}
   
        
// }

// const mehran=new Car("Mehran","2017")
// const cultus=new Car("Cultus","2018")


// Car.prototype.summarize=function(){
// 	console.log(`Car Name is ${this.carName} and Model is ${this.carModel}`)
// }

// console.log(mehran.summarize())
// console.log(cultus.summarize())

// lecture No 13
// const person={
// 	name:"Muhammad Irfan Hayat",
// 	rollNo:"61"


// }

// const markup=`
//    <div>
//     My name is ${person.name} and my roll no is ${person.rollNo}
//    </div>

// `

// console.log(markup)


// lecture No 14

// const person={
// 	name:"Muhammad Irfan Hayat",
// 	rollNo:"61"
    
    
// }
// function heading(strings,...values){
// 	let  str=""
// 	strings.forEach((string,i)=>{
// 		str+=string+(values[i] || " ")
// 	})
// 	return str
// }     
// const markup=heading`My name is ${person.name} and my rollNo is ${person.rollNo}` 

// console.log(markup)



// lecture No 18 destructuring

// const person={
// 	name:"Muhammad Irfan Hayat",
// 	rollNo:"61",
// 	arr:[1,2,3,4,5]
// }

// const {name,rollNo,arr}=person

// console.log(name,rollNo,arr)



// lecture 19 destructuring with array
// const details=["61","Irfan","irfanhayat@gmail.com"]

// const [rollNo,name,gmail]=details

// console.log(rollNo,name,gmail)

// const data="Irfan(c),Arslan(Vc),Nouman,zeshan,usman"
// const [Captain,ViceCaptain,...TeamPlayer]=data.split(",")
// console.log(Captain ,ViceCaptain ,TeamPlayer)


// lecture No 20 swapping Varaible

// let firstname="hayat"
// let lastname="Irfan";

 
// [firstname,lastname]=[lastname,firstname]
// console.log(firstname,lastname)


// lecture 21 Destructuring Functions Multiple results and named defaults

// function convertCurency(amount){
// 	let currency={
// 		Aud:amount*2000,
// 		Usd:amount*100

// 	}
// 	return currency
// }

// const {Aud,Usd}=convertCurency(100)

// console.log(Aud,Usd)


// function tipamount({tip=10,amount=101}={}){

// 	const currency={
// 		Aud:tip*amount
// 	}
// 	return currency
// }

// let amount=tipamount({})
// console.log(amount)




// lecture No 22

// let cuts=["Basket","camel","Ball"]

// for(let [i,cut] of cuts.entries()){
// 	console.log(cut,i)
// }



// function addNumber(){
// 	let sum=0  
// 	for(let num of arguments){
// 		sum+=num
// 	}
// 	console.log(sum)
// }

// addNumber(1,2,3,4,5,6)




// const apple={
// 	price:65,
// 	weight:"1 kg"
// }

// for(let det of Object.keys(apple)){
// 	let value=apple[det]
// 	console.log(value)
// }





// const people=["Irfan","Arslan","Nouman"]

// Array.from(people,(person,index)=>{
// 	console.log(person,index)
// })



// lecture No 26
// const person=[{
// 	name:"M Irfan Hayat",
// 	RollNo:61
// }]
// console.log(person.find(person=>person.name==="M Irfan Hayat"))
// console.log(person.findIndex(person=>person.name==="M Irfan Hayat"))


// lecture No 28 Spread operator javascript

// let featured=["Deep dish","rice","chicken"]
// let speaciality=["chilli","speacial"]

// let pizzas=[...featured,"Mutton",...speaciality]
// let fridaypizza=[...pizzas]

// fridaypizza[0]="ghq"
// console.log(fridaypizza ,pizzas)

// lecture No 30

// let comments=[{
// 	id:209846,text:"I love you "},
// {
// 	id:309678,text:"I love him"},{
// 	id:789632,text:"Hi I am Irfan"}
// ]

// let id=209846


// let index=comments.findIndex((result)=>result.id===id)
// console.log([...comments.slice(0,index)],[...comments.slice(index+1)])

// lecture No 31 Arguments

// const arr=["Irfan","Hayat","Hi"]



// function sayHi(){
// 	console.log(arguments)
// }

// sayHi(...arr)



// //lecture N0 34 Promise With Object

// const p=new Promise((resolve)=>{
// 	const obj={Name:"Muhammad Irfan",
// 		RollNo:"061"}
// 	resolve( obj)
// })

// p.then(result=>{
// 	console.log(result)
// })

//lecture No 36 Promise

// const post=[
// 	{title:"I love Javascript",author:"Irfan" ,id:2},
// 	{title:"I love Javascript",author:"Weak Boy",id:3},
// 	{title:"I love Javascript",author:"Weak Boy",id:4},
// 	{title:"I love Javascript",author:"Weak Boy",id:5}
// ]



// const authors=[
// 	{name:"Irfan",facebook:"Weak Boy@facebook.com" },
// 	{name:"Arslan",facebook:"Weak1 Boy@facebook.com" },
// 	{name:"Nouman",facebook:"Weak2 Boy@facebook.com" },
// ]


// function getPostId(id){
// 	return new Promise((resolve,reject)=>{
// 		const data=post.find(post=>post.id===id)
// 		if(data){
// 			resolve(data)
// 		}
// 		else{
// 			reject("Error Come")     

// 		}
// 	})
    
        
    
// }
// function hydrateAurthor(post){
// 	return new Promise((resolve,reject)=>{
// 		const name=authors.find(author=>author.name===post.author)
// 		if(name){
// 			resolve(name)
// 		}else{
// 			reject(Error("There is an error"))
// 		}
// 	})
// }

// getPostId(2).then(post=>{

// 	return hydrateAurthor(post)
// }).then(post=>{
// 	console.log(post)
// }).catch(err=>{console.log(err)})



// //lecture No 37 Promise
// const Person=new Promise((resolve)=>{
// 	resolve(["Muhammad Irfan","061"])
// }) 

// const personAddress=new Promise((resolve)=>{
// 	resolve(["Kuri Road"])
// })

// Promise.all([Person,personAddress]).then(result=>console.log(result))


// //lecture NO 38 Symbol 

// const   classRoom   =   {[Symbol("Mark")] :{RollNo:"061",Address:"Kuri road"},  [Symbol("Mark")]:{RollNo:"098",Address:"Islamabad"}};   const syms=Object.getOwnPropertySymbols(classRoom); syms.map(result=>console.log(result))
   
   
 



