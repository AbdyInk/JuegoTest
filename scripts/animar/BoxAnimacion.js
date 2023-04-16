function boxAppear()
{
    //$("#boxes").animate({top:"4%"},400);
    (function(){
        $("#boxes").fadeIn({queue: false, duration: 'slow'});
        $("#boxes").animate({top:"4%"},400);
    }());   

    for(let boxSel=1; boxSel<=4; boxSel++)
    {
        box.push($("#box"+boxSel).css("background"));
    }

    boxAnimLeft1(box[4]);
    boxAnimLeft2(box[1]);
    boxAnimLeft3(box[2]);
    boxAnimLeft4(box[3]);

}

function moveBoxLeft()
{
    for(let boxSel=1; boxSel<=4; boxSel++)
    {
        box[boxSel]=$("#box"+boxSel).css("background");
    }

    boxAnimLeft1(box[4]);
    boxAnimLeft2(box[1]);
    boxAnimLeft3(box[2]);
    boxAnimLeft4(box[3]);

    setTimeout(() => {
        
    }, 400);
}
function moveBoxRight()
{
    for(let boxSel=1; boxSel<=4; boxSel++)
    {
        box[boxSel]=$("#box"+boxSel).css("background");
    }

    boxAnimRight1(box[2]);
    boxAnimRight2(box[3]);
    boxAnimRight3(box[4]);
    boxAnimRight4(box[1]);

    setTimeout(() => {
        
    }, 400);
}

function boxAnimLeft1(x)
{
    $("#box1").css("background",x);
    setTimeout(() => {
        $("#box1").css("background-position","-3840px 0");
    }, 100);
    setTimeout(() => {
        $("#box1").css("background-position","-4080px 0");
    }, 150);
    setTimeout(() => {
        $("#box1").css("background-position","-4320px 0");
    }, 200);
    setTimeout(() => {
        $("#box1").css("background-position","-4560px 0");
    }, 250);
    setTimeout(() => {
        $("#box1").css("background-position","0 0");
    }, 300);
}

function boxAnimLeft2(x)
{
    $("#box2").css("background",x);
    setTimeout(() => {
        $("#box2").css("background-position","-240px 0");
    }, 100);
    setTimeout(() => {
        $("#box2").css("background-position","-480px 0");
    }, 150);
    setTimeout(() => {
        $("#box2").css("background-position","-720px 0");
    }, 200);
    setTimeout(() => {
        $("#box2").css("background-position","-960px 0");
    }, 250);
    setTimeout(() => {
        $("#box2").css("background-position","-1200px 0");
    }, 300);
}

function boxAnimLeft3(x)
{
    $("#box3").css("background",x);
    setTimeout(() => {
        $("#box3").css("background-position","-1440px 0");
    }, 100);
    setTimeout(() => {
        $("#box3").css("background-position","-1680px 0");
    }, 150);
    setTimeout(() => {
        $("#box3").css("background-position","-1920px 0");
    }, 200);
    setTimeout(() => {
        $("#box3").css("background-position","-2160px 0");
    }, 250);
    setTimeout(() => {
        $("#box3").css("background-position","-2400px 0");
    }, 300);
}

function boxAnimLeft4(x)
{
    $("#box4").css("background",x);
    setTimeout(() => {
        $("#box4").css("background-position","-2640px 0");
    }, 100);
    setTimeout(() => {
        $("#box4").css("background-position","-2880px 0");
    }, 150);
    setTimeout(() => {
        $("#box4").css("background-position","-3120px 0");
    }, 200);
    setTimeout(() => {
        $("#box4").css("background-position","-3360px 0");
    }, 250);
    setTimeout(() => {
        $("#box4").css("background-position","-3600px 0");
    }, 300);
}

function boxAnimRight1(x)
{
    $("#box1").css("background",x);
    setTimeout(() => {
        $("#box1").css("background-position","-960px 0");
    }, 100);
    setTimeout(() => {
        $("#box1").css("background-position","-720px 0");
    }, 150);
    setTimeout(() => {
        $("#box1").css("background-position","-480px 0");
    }, 200);
    setTimeout(() => {
        $("#box1").css("background-position","-240px 0");
    }, 250);
    setTimeout(() => {
        $("#box1").css("background-position","0 0");
    }, 300);
}

function boxAnimRight2(x)
{
    $("#box2").css("background",x);
    setTimeout(() => {
        $("#box2").css("background-position","-2160px 0");
    }, 100);
    setTimeout(() => {
        $("#box2").css("background-position","-1920px 0");
    }, 150);
    setTimeout(() => {
        $("#box2").css("background-position","-1680px 0");
    }, 200);
    setTimeout(() => {
        $("#box2").css("background-position","-1440px 0");
    }, 250);
    setTimeout(() => {
        $("#box2").css("background-position","-1200px 0");
    }, 300);
}

function boxAnimRight3(x)
{
    $("#box3").css("background",x);
    setTimeout(() => {
        $("#box3").css("background-position","-3360px 0");
    }, 100);
    setTimeout(() => {
        $("#box3").css("background-position","-3120px 0");
    }, 150);
    setTimeout(() => {
        $("#box3").css("background-position","-2880px 0");
    }, 200);
    setTimeout(() => {
        $("#box3").css("background-position","-2640px 0");
    }, 250);
    setTimeout(() => {
        $("#box3").css("background-position","-2400px 0");
    }, 300);
}

function boxAnimRight4(x)
{
    $("#box4").css("background",x);
    setTimeout(() => {
        $("#box4").css("background-position","-4560px 0");
    }, 100);
    setTimeout(() => {
        $("#box4").css("background-position","-4320px 0");
    }, 150);
    setTimeout(() => {
        $("#box4").css("background-position","-4080px 0");
    }, 200);
    setTimeout(() => {
        $("#box4").css("background-position","-3840px 0");
    }, 250);
    setTimeout(() => {
        $("#box4").css("background-position","-3600px 0");
    }, 300);
}