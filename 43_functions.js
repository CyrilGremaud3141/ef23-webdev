//*******************************************************/
// Functions
//*******************************************************/


// Pythagoras
function getHypotenuse(a, b) {
	return (a*a + b*b) ** 0.5
}
const hyp = getHypotenuse(3, 4)  // c is now: 5



// convert to seconds
function getSeconds(hours, minutes, seconds) {
	return 3600 * hours + 60 * minutes + seconds
}
const oneLesson = getSeconds(0, 45, 0) // should return 2700

//Create HTML heading tag
function createHeading(text) {
	//@TODO
	return "<h1>" + text + "</h1>"
}
const heading = createHeading("Welcome") // should return "<h1>Welcome</h1>"


//Create SVG rect
function createSvgRect(x, y, w, h) {
	//@TODO
	return `<rect x='${x}' y='${y}' width='${w}' height='${h}'></rect>`
}
const svgRect = createSvgRect(100, 200, 300, 400) // should return "<rect x='100' y='200' width='300' height='400'></rect>"

// Find median of 3 values
function medianOf3(a, b, c) {
	if (a == b || a == c || b == c)
	{
		return "some objects are the same"
	}
	else
	{
		if (a < b && a > c || a < c && a > b)
		{
			return a
		}
		else if (b < c && b > c || b < c && b > c)
		{
			return b
		}
		else if (c < b && c > a || c < a && c > b)
		{
			return c
		}
	}
}
const m = medianOf3(8, 11, 9) // should return 9



// Find average of 3 values
function averageOf3(a, b, c) {
	//@TODO
	return (a+b+c)/3
}
const a = averageOf3(4, 11, 9) // should return 8


// Find average of array
function getAverage(array) {
	let sum = 0
	for (let num of array)
	{
		sum += Number(num);
	}
	return sum/array.length
}
const b = getAverage([4, 11, 9, 2, 9]) // should return 7


// Solve ax^2 + bx + c = 0
function solveQuadratic(a, b, c) {
	let sol_1 = (-b +(b**2 - 4*a*c)**0.5)/(2*a)
	let sol_2 = (-b -(b**2 - 4*a*c)**0.5)/(2*a)
	if (sol_1 == sol_2)
	{
		return [sol_1]
	}
	if (isNaN(sol_1) && isNaN(sol_2))
	{
		return []
	}
	if (isNaN(sol_1))
	{
		return [sol_2]
	}
	if (isNaN(sol_2))
	{
		return [sol_1]
	}
	return [sol_1, sol_2]
}
const solutions = solveQuadratic(1, 0, -16) // should return [-4, 4]
const solution = solveQuadratic(1, -2, 1) // should return [1]
const empty = solveQuadratic(1, 0, 16) // should return []

