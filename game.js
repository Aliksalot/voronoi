
const canvasSize = {w: 250, h: 250}

const dotCount = 10
let dots = []

const p = []

const getRandomColor = () => {
	return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const createDots = () => {
	for(let i = 0; i < dotCount; i ++){
		dots.push({x: Math.random() * canvasSize.w, y: Math.random() * canvasSize.h, color: getRandomColor()});
	}
}

const getClosestDotColor = (pixel) => {
	
	let dist = 999999999;
	let closest = dots[0];
	for(let i = 0; i < dotCount; i++){
		const dot = dots[i]
		const var_dist = (dot.x - pixel.x)**2 + (dot.y - pixel.y)**2
		if(var_dist < dist){
				dist = var_dist
				closest = dot;
		}
	}
	return closest.color;
	
}

function init() {
	createDots()
	for(let i = 0; i < canvasSize.w; i++){
		p.push([])
		for(let j = 0; j < canvasSize.h; j ++){
			const color = getClosestDotColor({x: i, y: j});
			console.log(`x: ${i}, y: ${j}, color: ${color}`)
			p[i].push({color: color})
		}
	}
	draw()
	
}

function draw() {
    for(let i = 0; i < canvasSize.w; i++){
		for(let j = 0; j < canvasSize.h; j++){
			console.log(`drawing: x = ${i}, y = ${j}`)
			context.fillStyle = p[i][j].color;
			context.fillRect(i,j,1,1);
		}
	}
}

function update() {
	
}


init();