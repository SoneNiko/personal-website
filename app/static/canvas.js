let canvas;
let ctx;

let huge = false;

let size = 2049;

if (window.innerHeight > (size - 1) / 2 || window.innerHeight > (size - 1) / 2) {
	size = 4097;
}

const roughness = 1.0;

let startMiddle = 0.5;
let middle = startMiddle;
let margin = 0.0006;
let angle = 0;
const amplitude = 0.1; // The amount of fluctuation
const frequency = 0.003; // The speed of fluctuation

let minPixelRatio = 0.0001;

console.log('Generating fractal...');
// Generate fractal data

const t1 = performance.now();
let fractal_array = diamondSquare(size, roughness);
const t2 = performance.now();
console.log('Fractal generated in ' + (t2 - t1) + ' ms');

function diamondSquare(size, roughness) {
	const array = new Array(size).fill().map(() => new Array(size).fill(0));

	// Math.seedrandom(navigator.userAgent);
	// i have some concerns about this cus it implies that any future client
	// side math.random call is not going to be random anymore. it sure sounds
	// like a massive problem cus random is used in cryptographic functions
	// in particular

	// Initialize the corners
	array[0][0] = Math.random();
	array[0][size - 1] = Math.random();
	array[size - 1][0] = Math.random();
	array[size - 1][size - 1] = Math.random();

	let step = size - 1;

	while (step > 1) {
		const half_step = step >> 1;

		// Diamond step
		for (let x = 0; x < size - 1; x += step) {
			for (let y = 0; y < size - 1; y += step) {
				const average =
					(array[x][y] + array[x + step][y] + array[x][y + step] + array[x + step][y + step]) / 4;
				array[x + half_step][y + half_step] = average + (Math.random() - 0.5) * roughness;
			}
		}

		// Square step
		for (let x = 0; x < size; x += half_step) {
			for (let y = (x + half_step) % step; y < size; y += step) {
				let total = 0;
				let count = 0;

				if (x >= half_step) {
					total += array[x - half_step][y];
					count++;
				}
				if (x + half_step < size) {
					total += array[x + half_step][y];
					count++;
				}
				if (y >= half_step) {
					total += array[x][y - half_step];
					count++;
				}
				if (y + half_step < size) {
					total += array[x][y + half_step];
					count++;
				}

				const average = total / count;
				array[x][y] = average + (Math.random() - 0.5) * roughness;
			}
		}

		step = half_step;
		roughness *= 0.5;
	}

	return array;
}

function findMiddle(a, b) {
	return Math.min(a, b) + Math.abs(a - b) / 2;
}

function resizeCanvas(middle, fractal_array, canvas, ctx) {
	

	const canvasWidth = canvas.width;
	const canvasHeight = canvas.height;
	const lowerBound = middle - margin;
	const upperBound = middle + margin;

	const highestX = Math.min(size, canvasWidth);
	const highestY = Math.min(size, canvasHeight);

	let count = 0;

	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	let color = '#323232';


	for (let en = 0; en < highestX; en++) {
		const fractalColumn = fractal_array[en];
		for (let jn = 0; jn < highestY; jn++) {
			const value = fractalColumn[jn];
			if (value > lowerBound && value < upperBound) {

				// let base = Math.floor(Math.random() * 64).toString(16);
				// ctx.fillStyle = "#"+base+base+base

				ctx.fillStyle = color;

				if (value > findMiddle(middle, upperBound)) {
					color = '#454545'; // blue
				} else if (value < findMiddle(middle, lowerBound)) {
					color = '#8c8c8c'; // red
				} else {
					color = '#323232';
					ctx.fillStyle = color;
				}

				ctx.fillRect(en, jn, 1, 1);
				count++;
			}
		}
	}

	if (count / (canvasWidth * canvasHeight) < minPixelRatio) {
		startMiddle = Math.random(0.2, 0.8);
		middle = startMiddle;
	}
	// else if (count / (canvasWidth * canvasHeight) > minPixelRatio * 20 && margin > 0.000000005) {
	// 	margin -= 0.001;
	// }

	if (count / (canvasWidth * canvasHeight) > 0.05) {
		huge = true;
	} else {
		huge = false;
	}

	
}

function updateMiddle() {
	let futureTimeOut = 40;
	if (huge) {
		futureTimeOut *= 2;
	}
	middle = startMiddle + amplitude * Math.cos(angle);
	angle += frequency;
	resizeCanvas(middle, fractal_array, canvas, ctx);
	while (canvas.width !== window.innerWidth && canvas.height !== window.innerHeight) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
	setTimeout(updateMiddle, futureTimeOut);
}

window.onload = function () {
	canvas = document.getElementById('backgroundCanvas');
	ctx = canvas.getContext('2d');

	updateMiddle();
	window.addEventListener('resize', () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});
};
