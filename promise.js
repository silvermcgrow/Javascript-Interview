let data = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		// reject('get resolve');
		resolve(10);
	},2000);
})
// Resolve promise
data.then((item)=>{
	console.log(item);
}).catch((err)=>{
	console.log("catch block", err);
});
/*****Promise chaining*****/

data.then((item)=>{
	console.log("1st",item);
	return item*10;
}).then((item)=>{
	console.log("2nd", item);
	return item*10;
}).then((item)=>{
	console.log("2nd", item);
})
.catch((err)=>{
	console.log("catch block", err);
});

/*****Promise chaining*****/
/*****Promise finally is run in both case resolve and reject*****/
data.finally((item)=>{
	console.log("finally",item);
}).catch((err)=>{
	console.log("catch blocks");
})
/*****Promise finally is run in both case resolve and reject*****/