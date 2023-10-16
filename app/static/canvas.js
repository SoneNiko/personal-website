let canvas;
let ctx;

let huge = false;

let size = 2049;

if (window.innerHeight > (size - 1) / 2 || window.innerHeight > (size - 1) / 2) {
	size = 4097;
}

const roughness = 1.0;

let startMiddle = 0.67;
let middle = startMiddle;
let margin = 0.000000005;
let angle = 0;
const amplitude = 0.1; // The amount of fluctuation
const frequency = 0.006; // The speed of fluctuation

let minPixelRatio = 0.005;

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

function resizeCanvas(middle, fractal_array, canvas, ctx) {
	let color = '#323232';

	ctx.fillStyle = color;

	const canvasWidth = canvas.width;
	const canvasHeight = canvas.height;
	const lowerBound = middle - margin;
	const upperBound = middle + margin;

	const highestX = Math.min(size, canvasWidth);
	const highestY = Math.min(size, canvasHeight);

	let count = 0;

	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	ctx.beginPath();

	for (let en = 0; en < highestX; en++) {
		const fractalColumn = fractal_array[en];
		for (let jn = 0; jn < highestY; jn++) {
			const value = fractalColumn[jn];
			if (value > lowerBound && value < upperBound) {
				ctx.rect(en, jn, 1, 1);
				count++;
			}
		}
	}

	if (count / (canvasWidth * canvasHeight) < minPixelRatio && margin < 0.1) {
		margin *= 2;
	} else if (count / (canvasWidth * canvasHeight) > minPixelRatio * 20 && margin > 0.000000005) {
		margin -= 0.001;
	}

	if (count / (canvasWidth * canvasHeight) > 0.05) {
		huge = true;
	} else {
		huge = false;
	}

	ctx.fill();
	ctx.closePath();
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
