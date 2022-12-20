var mouse_event="empty";
var last_x,last_y

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";
width_line=5;

canvas.addEventListener("mousedown",My_mouse_down);
function My_mouse_down(e){
    mouse_event="mousedown";
    color=document.getElementById("color").value ;
    width_line=document.getElementById("width_of_line").value ;

}

canvas.addEventListener("mouseup",My_mouse_up);
function My_mouse_up(e){
    mouse_event="mouseup";
    
}

canvas.addEventListener("mouseleave",My_mouse_leave);
function My_mouse_leave(e){
    mouse_event="mouseleave";
    
}

canvas.addEventListener("mousemove",My_mouse_move);
function My_mouse_move(e){
current_x=e.clientX - canvas.offsetLeft
current_y=e.clientY - canvas.offsetTop;
if(mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth=width_line;

    ctx.moveTo(last_x,last_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
}
  last_x=current_x;
  last_y=current_y;  
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}