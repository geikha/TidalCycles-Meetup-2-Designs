let MAIN_MESSAGE = "It's about to start..."

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js']

// hydra canvas
let hc = document.createElement('canvas')
hc.width = innerWidth/2
hc.height = innerHeight/2
//hydra
let hydra = new Hydra({detectAudio: false,canvas: hc})
let pg
//hydra shader
mesh = ()=> solid(.9,.9,.9).layer(shape(4,.87,0).luma()).repeat(40,20)
mesh().modulateScale(noise(.7,.15),-.4).modulateRotate(osc(3),.3).out()

//images
function preload(){
	br = loadImage('https://i.imgur.com/PiE8vS9.png')
	fr = loadImage('https://i.imgur.com/e9Eui78.png')
	exob = loadFont('https://cdn.glitch.com/9f889f3a-8ca0-447d-8aee-55c50a1ce94f%2FExo2-Bold.otf?v=1619834813425')
	exor = loadFont('https://cdn.glitch.com/9f889f3a-8ca0-447d-8aee-55c50a1ce94f%2FExo2-Regular.otf?v=1619836564689')
}

function setup() {
	createCanvas(innerWidth, innerHeight, WEBGL);
	pg = createGraphics(hc.width, hc.height)
	br.resize(width/3,width/3)
	fr.resize(width/3,width/3)
	broff = [width/4,-height/16]
	froff = [width/6,height/16]
	off = [-(broff[0]+froff[0]),-(broff[1]+froff[1])]
	noStroke()
}

function draw() {
	// grab + apply hydra texture
	pg.clear()
	pg.drawingContext.drawImage(hc, 0, 0, pg.width, pg.height)
	texture(pg)
	plane(width, height)
	
	push()
	imageMode(CENTER)
	translate(...broff)
	rotate(-frameCount/48)
	image(br,0,0)
	pop()
	
	push()
	imageMode(CENTER)
	translate(...froff)
	rotate(Math.tan(frameCount/64)/2)
	image(fr,0,0)
	pop()
	
	push()
	translate(-width/2,-height/2)
	textFont(exob,100)
	textAlign(LEFT,TOP)
	fill(0,149,232)
	text('TidalCycles',width/20,height/10)
	pop()
	
	push()
	translate(-width/2,-height/2)
	textFont(exor,100)
	textAlign(LEFT,TOP)
	fill(0,149,232)
	text('Meetup #02',width/20,height/10*2.1)
	pop()
	
	push()
	translate(0,0)
	textFont(exor,60)
	textAlign(RIGHT,TOP)
	fill(0,149,232)
	text(MAIN_MESSAGE,-width/20,-height/10)
}


