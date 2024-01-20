//click1 = ["X","O","X","O","X","O","X","O","X"];
//click1 = ["P1","P2"];
var player = "p1";
var border1 = "";
var border2 = "";
var border3 = "";
var border4 = "";
var border5 = "";
var border6 = "";
var border7 = "";
var border8 = "";
var border9 = "";
var blankcheck = "";
//var bb = "";
//var bbb = "";
var click2_previous = "";
click2 = [];
$(".bt1").hide();

//var name1 = location.search.substring(1).split("&");
var chk1 = window.location.search;
var chk2 = new URLSearchParams(chk1);
var Name1 = chk2.get('Name1');
var Name2 = chk2.get('Name2');


document.querySelector(".p1").innerHTML = "Player 1 " + Name1;
document.querySelector(".p2").innerHTML = "Player 2 " + Name2;


//var name1_temp = name1[0].split("=");

//var click2_previous = click2.slice(-1);
//var click1_previous = click1.slice(0,1);
//document.querySelector(".p1").innerHTML = window.location.search;

function mapping(border)
{
    if (player == "p1")
    {
        $(border).text("X");
        click2.push("X");
        //document.querySelector(".result").innerHTML = click2;
        click2_previous = click2.slice(-1);
        //document.querySelector(".example").innerHTML = click2_previous;
        player = "p2";
    }
    else
    {
        $(border).text("O");
        click2.push("O");
        //document.querySelector(".result").innerHTML = click2;
        click2_previous = click2.slice(-1);
        //document.querySelector(".example").innerHTML = click2_previous;
        player = "p1";
    } 
}

function result()
{
if 
(
(border1 == "X" && border2 == "X" && border3 == "X") || 
(border4 == "X" && border5 == "X" && border6 == "X") ||
(border7 == "X" && border8 == "X" && border9 == "X") ||
(border1 == "X" && border4 == "X" && border7 == "X") ||
(border2 == "X" && border5 == "X" && border8 == "X") ||
(border3 == "X" && border6 == "X" && border9 == "X") ||
(border1 == "X" && border5 == "X" && border9 == "X") ||
(border7 == "X" && border5 == "X" && border3 == "X") 
)
{
    document.querySelector(".result").innerHTML = "Result player 1 " + Name1 +" wins the game";
    blankcheck = "Y";
    $(".bt1").show();
}

else if 
((border1 == "O" && border2 == "O" && border3 == "O") || 
(border4 == "O" && border5 == "O" && border6 == "O") ||
(border7 == "O" && border8 == "O" && border9 == "O") ||
(border1 == "O" && border4 == "O" && border7 == "O") ||
(border2 == "O" && border5 == "O" && border8 == "O") ||
(border3 == "O" && border6 == "O" && border9 == "O") ||
(border1 == "O" && border5 == "O" && border9 == "O") ||
(border7 == "O" && border5 == "O" && border3 == "O") 
)
{
    document.querySelector(".result").innerHTML = "Result player 2 " + Name2 + " wins the game";
    blankcheck = "Y";
    $(".bt1").show();
}
else if
((border1 != "" && border2 != "" && border3 != "") && 
(border4 != "" && border5 != "" && border6 != "") &&
(border7 != "" && border8 != "" && border9 != ""))
{
    document.querySelector(".result").innerHTML = "Draw";
    $(".bt1").show();
}
else
{
    document.querySelector(".result").innerHTML = "Result:";   
}
}

$(".bt1").on("click",function(){
    player = "p1";
    border1 = "";
    border2 = "";
    border3 = "";
    border4 = "";
    border5 = "";
    border6 = "";
    border7 = "";
    border8 = "";
    border9 = "";
    blankcheck = "";
    click2_previous = "";
    click2 = [];
    $(".bt1").hide();
    $(".border1").text("");
    $(".border2").text("");
    $(".border3").text("");
    $(".border4").text("");
    $(".border5").text("");
    $(".border6").text("");
    $(".border7").text("");
    $(".border8").text("");
    $(".border9").text("");
    document.querySelector(".result").innerHTML = "Result:";
})
/*
$(".border1").on("click",function(){
    click1.push("X");
    $(".border1").text(click1[0]);

    click1.push("O");   
}); 
*/
/*
function doubleclick(b = click2_previous,bb)
{
    if (b == "")
    { 
        mapping(bb);
        //b = click2_previous;
    }
    //return b,bb;
}*/

//document.querySelector(".border1").disabled = true;
//document.querySelector(".p1").innerHTML = click1;
//document.querySelector(".p2").innerHTML = click2;
//$("h3").text(click1);

$(".border1").on("click",function(){
    
    if (blankcheck == "Y")
    {
        //Disable blank canvas if game is completed
    }
    else
    {
    if (border1 == "")
    { 
    mapping(".border1");
    border1 = click2_previous;
    }
}
    //doubleclick(border1 = click2_previous,".border1");
    //border1 = click2_previous;
    result();
    /*if (blankcheck == "Y")
    {
        //Disable blank canvas if game is completed
    }
    else
    {
        doubleclick(border1,".border1");
    }*/
    //document.querySelector(".p1").innerHTML = border1;
    //result();
   /* if (player == "p1")
    {
        $(".border1").text("X");
        player = "p2";
    }
    else
    {
        $(".border1").text("O");
        player = "p1";
    }*/
    //player = "p2";
    /*click2.push(click1[0]);
    $(".border1").text(click2[0]);
    click1.push();
    document.querySelector(".p2").innerHTML = click2;
    document.querySelector(".p1").innerHTML = click1;
    */
    /*if (click2_previous == "X")
    {
    $(".border1").text(click2_previous);
    click2.push("O");
    document.querySelector("h3").innerHTML = click2;
    }
    else if (click2_previous == "X")
    {
        click1.push("O");
        $(".border1").text(click2_previous);
    }*/
  

    
}); 


$(".border2").on("click",function(){
    if (blankcheck == "Y")
    {
        //Disable blank canvas if game is completed
    }
    else
    {
    if (border2 == "")
    { 
    mapping(".border2");
    border2 = click2_previous;
    }
}
    //document.querySelector(".p2").innerHTML = border2;
    result();
}); 

$(".border3").on("click",function(){
  
    if (blankcheck == "Y")
    {
        //Disable blank canvas if game is completed
    }
    else
    {
    if (border3 == "")
    { 
    mapping(".border3");
    border3 = click2_previous;
    }
}
    result();
}); 

$(".border4").on("click",function(){
  
    if (blankcheck == "Y")
    {
        //Disable blank canvas if game is completed
    }
    else
    {
    if (border4 == "")
    { 
    mapping(".border4");
    border4 = click2_previous;
    }
}
    result();
}); 

$(".border5").on("click",function(){
  
    if (blankcheck == "Y")
    {
        //Disable blank canvas if game is completed
    }
    else
    {
    if (border5 == "")
    { 
    mapping(".border5");
    border5 = click2_previous;
    }
}
    result();
}); 

$(".border6").on("click",function(){
  
    if (blankcheck == "Y")
    {
        //Disable blank canvas if game is completed
    }
    else
    {
    if (border6 == "")
    { 
    mapping(".border6");
    border6 = click2_previous;
    }
}
    result();
}); 

$(".border7").on("click",function(){
  
    if (blankcheck == "Y")
    {
        //Disable blank canvas if game is completed
    }
    else
    {
    if (border7 == "")
    { 
    mapping(".border7");
    border7 = click2_previous;
    }
}
    result();
});

$(".border8").on("click",function(){
  
    if (blankcheck == "Y")
    {
        //Disable blank canvas if game is completed
    }
    else
    {
    if (border8 == "")
    { 
    mapping(".border8");
    border8 = click2_previous;
    }
}
    result();
});

$(".border9").on("click",function(){
  
    if (blankcheck == "Y")
    {
        //Disable blank canvas if game is completed
    }
    else
    {
    if (border9 == "")
    { 
    mapping(".border9");
    border9 = click2_previous;
    }
}
    result();
});

