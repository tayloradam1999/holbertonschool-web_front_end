function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
		return function() {
			return seat;
		}
	}
	let students = [];
	for (let i = 0; i < numbersOfStudents; i++) {
		let j = 0;
		j = i + 1;
		let x = studentSeat(j);
		students.push(x);
	}
	return students;
}

// function classRoom() {
// 	return function() {
// 		createClassRoom(10);
// 	}
// }

let classRoom = createClassRoom(10);
