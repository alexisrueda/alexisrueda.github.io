let sketchProc = function(processingInstance) {
    with (processingInstance) {

       size(1000,600 ); 
       frameRate(300);
    /* xAleatorio=0
    y=0   
    x=500
    direccion=0
    fondo=color(0,100,200)
    draw=function(){
        background(fondo)
        rect(xAleatorio,y,20,20)
        y=y+2
       
        if (y>=600) {
           y=0 
           xAleatorio= random(1,1000)
        }
        
        if (xAleatorio<= x+50 && xAleatorio>= x-50 && y<= 550 && y>= 450) {
            textSize(60)
            fill(0,0,222)
             text("CHOQUE",500,300) 
            fondo=color(0,0,0)
        } 
        else{
            fondo=color(0,100,200)
        }
        

        fill(30,30,100)
        ellipse(x,500,100,100)
        x=x+direccion
     keyPressed=function(){
        if (key.code==97) {
           direccion=-2
          
        }
        if (key.code==100) {
            direccion=2
            
         }
        } 
        if (x>=950) {
            direccion=0
    } 
    if (x<=50) {
        direccion=0
} 



} */
      let yAleatorio1= 0 
      let yAleatorio2= 200 
      let x= 210
      x2= 210
      let x1= 1000
      let y1=250
      let y2=350
      let y3=300
      direccion=0
      direcciony=0
     let fuegox= 180
     let fuegoy= 300
     let dhe=2
     let dve=2
     let fondo=color(0,0,0)
     puntos= 0
         draw=function(){
        background(fondo)
        textSize(30)
        fill(90,90,255)
         text("Puntos: "+puntos,400,100)
        
       //OBSTACULOS !! BALAS
      fill(255,64,0)
       rect(x,y3,20,20)
       rect(x2,y3-10,20,20)
       x=x+2
        if (x<= x1+50 & x>= x1-50 && y3-50<=yAleatorio2  && y3+50>=yAleatorio2) {
       dhe=-2
       } 
       
       if (yAleatorio2>=550) {
          dve=-2 
             
       }
       if (yAleatorio2<=50) {
        dve=2 
       }
       if (x1>=1001) {
           dhe=+2
       } 
       if (x>=600 ) {
           x2=210
           x2=x2+2
       }
       if (x>=1000) {
        x=200 
        }
     //ASTEROIDE
     
     fill(128,64,0)
     ellipse(x1,yAleatorio2,100,100 )  
     x1=x1-dhe
     yAleatorio2=yAleatorio2+dve   
     fill(110,55,0)
     ellipse(x1-15,yAleatorio2+20,30,40)
     
     if (x1<=0 ) {
        fondo=color(255,255,255)
        dve=0 
        textSize(50)
        fill(150,150,150)
         text("GAME OVER",340,300)
        
     }

     if (x1-50<=x && y3-50<=yAleatorio2  && y3+50>=yAleatorio2  ) {
        puntos=puntos+1 
    } 
        //NAVE  
        fill(255,255,255)
   triangle(100,y1,100,y2,200,y3)
    y1=y1+direcciony
    y2=y2+direcciony
    y3=y3+direcciony
    
   
    //CRISTAL
    fill(192,192,192)
    ellipse(fuegox,fuegoy,40,20)
    fuegox=fuegox+direccion
    fuegoy=fuegoy+direcciony
    //FUEGO
    fill(255,0,0)
    ellipse(fuegox-100,fuegoy-10,30,20)
    ellipse(fuegox-100,fuegoy+10,30,20)
    keyPressed=function(){
        
         if (key.code==115) {
             direcciony=2    
          }
          if (key.code==119) {
             direcciony=-2    
          }
            
        } 
        /* keyPressed=function(){
            if (mouseY<300) {
                direcciony=-2
            }
            if (mouseY>300) {
                direcciony=2
            }
        } */
         if (y1>=500 || y1<=0) {
         direcciony=0
        } 




        
    
}






/* 
    mousePressed=function(){
        ellipse(mouseX,mouseY,50,50)
    }
 */


    
}    
};
let canvas = document.getElementById("mycanvas"); 
let processingInstance = new Processing(canvas, sketchProc); 

