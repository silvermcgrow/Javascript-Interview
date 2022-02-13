// const users = [
// 	{firstName:"Silver",lastName:"Mcgrow",age:32},
// 	{firstName:"Devid",lastName:"Bekhm",age:62},
// 	{firstName:"John",lastName:"Mug",age:50},
// 	{firstName:"Akshay",lastName:"Sainy",age:32}
// ];

// // Exa. of Map
// const useMap = users.map((x) => x.firstName +" "+x.lastName);
// console.log(useMap);
// // Exa. of Map

// // Exa. of Filter Get name of user whos age is less then 40

const useFilter = users.filter((x) => x.age<40);
console.log(useFilter);
// Exa. of Filter Get first name of users whos age is less then 40

const useFilterMap = users.filter((x) => x.age<40).map((x) => x.firstName);
console.log(useFilterMap);

// // Exm. of reduce {32:2,50:1,62:1}

const getFirstNameWithReduce = users.reduce(function(acc, curr){
	if(curr.age<40){
		acc.push(curr.firstName);
	}
	return acc; 
}, []);

console.log(getFirstNameWithReduce);
// // Exm. of reduce {32:2,50:1,62:1}

const useReduce = users.reduce(function(acc, curr){
	if(acc[curr.age]){
		acc[curr.age] = ++acc[curr.age];
	}
	else{
		acc[curr.age] = 1;
	}
	return acc; 
}, {});

console.log(useReduce);

// Javascript Protype

let object = {
	name: "Rajat",
	city: "Indore",
	getInfo: function(){
		console.log(this.name+" from "+this.city);
	}
}


let object2 = {
	name: "Rahul"
}

object2.__proto__ = object;
console.log(object2.__proto__);

