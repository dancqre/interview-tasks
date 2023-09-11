function removeDupes(str){
	const res = [];
	const map = {};
	for (let i = 0; i < str.length; i++){
		const char = str[i]

		if (!map[char]) {
			map[char] = true
			res.push(char)
		}
		map[char] = true
	}

	return res.join('')
}

console.log(removeDupes('abcd'));
console.log(removeDupes('aabbccddee'));
console.log(removeDupes('abcddbca'));
console.log(removeDupes('ababababaacdcd'));