function showCoords(event) {
    var x = event.clientX;
    var tailleFenetre = window.innerWidth;
    
    import * as index from './index.js';
    var camera = index.camera;

    if (x < (tailleFenetre * 1/6)){
        //console.log("go left");
        camera.rotation.y += 0.5;
    }else{
        if (x > (tailleFenetre - (tailleFenetre * 1/6))){
            //console.log("go right");
            camera.rotation.y -= 0.5;
        }else{
            //console.log("middle");

        }
    }
    
}

