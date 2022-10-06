
let p1 = 0;
let p2 = 0;
let p3 = 0;

function startplay()
{
    let temp1;
    p1 = p1+ Math.floor(Math.random() * 9) + 1;
    p2 = p2+ Math.floor(Math.random() * 9) + 1;
    p3 = p3+ Math.floor(Math.random() * 9) + 1;
    document.getElementById("p1scr").innerHTML = p1;
    document.getElementById("p2scr").innerHTML=p2;
    document.getElementById("p3scr").innerHTML=p3;
    
    if(p1>=50)
    {
        temp1 = 1;
        document.getElementById("windisp1").innerHTML = "Player1 win."; 
    }
    if(p2>=50)
    {
        temp1 = 1;
        document.getElementById("windisp2").innerHTML = "Player2 win."; 
    }
    if(p3>=50)
    {
        temp1= 1;
        document.getElementById("windisp3").innerHTML = "Player3 win."; 
    }
    if(temp1)
    {
       document.getElementById('wingif').style.display='block';
       document.getElementById("btnplay").style.display="none";
       document.getElementById("btnreset").style.display="block";
       
        // document.getElementById("p1scr").innerHTML = 0;
        // p1=p2=p3=0;
        temp1=temp2=temp3=false;
        // document.getElementById("p2scr").innerHTML = 0;
        // document.getElementById("p3scr").innerHTML = 0;
    }
    document.getElementById("btnplay").innerHTML = "CLICK Again";
    document.getElementById("btnplay").style.width = "150px";
    // document.getElementById("btnplay").style.h = "200px";
}

function reset3()
{
    document.getElementById("p1scr").innerHTML = 0;
    document.getElementById("p2scr").innerHTML = 0;
    document.getElementById("p3scr").innerHTML = 0;
    p1=p2=p3=0;
    temp1=false;
    document.getElementById("btnreset").style.display = "none";
    document.getElementById("btnplay").style.display = "block";
    document.getElementById('wingif').style.display='none';
    
    document.getElementById("windisp1").innerHTML = ""; 
    document.getElementById("windisp2").innerHTML = ""; 
    document.getElementById("windisp3").innerHTML = ""; 
    document.getElementById("btnplay").innerHTML = "PLAY";
    
    document.getElementById("btnplay").style.width = "100px";

}
