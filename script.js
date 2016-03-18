window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    var l = new Line(-0.5,200);
    
    for(x = 0; x<800; x+=20){
        var P = new Point(x,l.y(x),10,"rgb(255,255,0,1)");
        P.draw(context);
    }
})










    /*
    P = new Point(400,200,10,"0,255,255,.7");
    Q = new Point(100,100,10,"255,0,255,.7");
    P.draw(context);
    Q.draw(context);
    
    function animate(){
        window.requestAnimationFrame(animate);
        context.clearRect(0,0,800,450);
        P.update();
        P.draw(context);
        Q.update();
        Q.draw(context);        
    }
    
    //animate();
    */