var gato="";
var perro="";
var lobo="";
var toro="";

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qs5_ZbtDQ/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("escucho").innerHTML='Escucho -'+results[0].label;
        document.getElementById("confiansa").innerHTML='Confiansa -'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("escucho").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("confiansa").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        }

        img=document.getElementById('Gatito');
        img2=document.getElementById('Perrito');
        img3=document.getElementById('Toro');
        img4=document.getElementById('Lobo');

        if(results[0].label == "Ruido de fondo"){
            img.src='Gatito.gif';
            img2.src='Perrito.png';
            img3.src='Lobo.png';
            img4.src='Toro.png';
        }else if(results[0].label == "Ladrido"){
            img.src='Gatito.png';
            img2.src='Perrito.gif';
            img3.src='Lobo.png';
            img4.src='Toro.png';
        }else if(results[0].label == "Aullido"){
            img.src='Gatito.png';
            img2.src='Perrito.png';
            img3.src='Lobo.gif';
            img4.src='Toro.png';
        }else if(results[0].label == "Mugido"){
            img.src='Gatito.gif';
            img2.src='Perrito.png';
            img3.src='Lobo.png';
            img4.src='Toro.gif';
        }
}