model_status = 0
objects = []
function draw(){
    image(video, 0, 0, 640, 420)
    /*noFill()
    stroke("red")
     rect( 100, 166, 200, 1000)
     text("Dog", 110, 170)
     noFill()
     stroke("red")
      rect( 300, 50, 210, 1000)
      text("Cat", 315, 50)*/
      if(model_status != 0){
        objectDetector.detect(video,gotResults)
        for(var i = 0; objects,length;i++){
            document.getElementById("status").innerHTML = "Status: Objeto detectado "
            document.getElementById("numObjetos").innerHTML = "Quantidade de objetos detectados: "+objects.length
            rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height)
            porcent = floor(objects[i].confidence*100)
            text(ojects[i].label+" "+porcent,objects[i].x,objects[i].y)
        }
      }
}

function preload(){}

function setup (){
    canvas = createCanvas(640, 420)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

function modelLoaded(){
    console.log("Modelo Carregado")
    model_status = true
    objeto.detect(img, gotResults)
}

function gotResults(error, results){
    if(error){
        console.log("error")
    }
    else{
        console.log("results")
        objects = results
    }
}

function start(){
objectDetector = ml5.objectDetector("cocossd", modelLoaded)
document.getElementById("status").innerHTML = "status: Detectando Objetos"
}
}