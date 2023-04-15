function defaultAnim1(y){ document.getElementById("default"+y).style.backgroundPosition=" 0 0";}
function defaultAnim2(y){ document.getElementById("default"+y).style.backgroundPosition="-80px 0";}
function defaultAnim3(y){ document.getElementById("default"+y).style.backgroundPosition="-160px 0";}
function defaultAnim4(y){ document.getElementById("default"+y).style.backgroundPosition="-240px 0";}
function defaultAnim5(y){ document.getElementById("default"+y).style.backgroundPosition="-320px 0";}
function defaultAnim6(y){ document.getElementById("default"+y).style.backgroundPosition="-400px 0";}

function walkAnim1(y){ document.getElementById("walk"+y).style.backgroundPosition=" 0 0";}
function walkAnim2(y){ document.getElementById("walk"+y).style.backgroundPosition="-80px 0";}
function walkAnim3(y){ document.getElementById("walk"+y).style.backgroundPosition="-160px 0";}
function walkAnim4(y){ document.getElementById("walk"+y).style.backgroundPosition="-240px 0";}
function walkAnim5(y){ document.getElementById("walk"+y).style.backgroundPosition="-320px 0";}
function walkAnim6(y){ document.getElementById("walk"+y).style.backgroundPosition="-400px 0";}

function finishWalk(y)
{
    clearInterval(walking);

    function walkAnim2(y){ document.getElementById("walk"+y).style.backgroundPosition="-80px 0";}
}

function complete1()
{
    document.getElementById("Entidad1").style.top="20%";
    document.getElementById("Entidad2").style.top="40%";
    document.getElementById("Entidad3").style.top="60%";
}
function complete2()
{
    document.getElementById("Entidad4").style.top="20%";
    document.getElementById("Entidad5").style.top="40%";
    document.getElementById("Entidad6").style.top="60%";
}
function complete3()
{
    document.getElementById("Entidad7").style.top="20%";
    document.getElementById("Entidad8").style.top="40%";
    document.getElementById("Entidad9").style.top="60%";
}