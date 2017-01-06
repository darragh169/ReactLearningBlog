export function getRandomDay() {
	const daysOfTheWeek = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	return daysOfTheWeek[Math.floor(Math.random()*daysOfTheWeek.length)];
}