//First way 

// function isUnigue(string){
// 	for (let i = 0; i<string.length; i++){
// 		const char = string[i]

// 		if(string.lastIndexOf(char) !== i){
// 			return false
// 		}
// 	}

// 	return true
// }


//Sec way


// function isUnigue(string){
	
// 	const set = new Set()

// 	for (let i = 0; i< string.length; i++){
// 		const char = string[i];

// 		if (set.has(char)) {
// 			return false
// 		}

// 		set.add(char)
// 	}
// 	return true
// }

//Third way

	 function isUnigue(string){
		return new Set(string).size === string.length
	 }

console.log(isUnigue('abcdef'));
console.log(isUnigue('1234567'));
console.log(isUnigue('abcABC'));
console.log(isUnigue('abcadef'));