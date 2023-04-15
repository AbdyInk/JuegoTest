//Personajes Estadisticas / Acciones
class Jugador
{
    constructor(a,b,c,d)
    {
        this.vida = a;
        this.vidaMax = a;
        this.ataque = b;
        this.defensa = c;
        this.valor = d;
    }

    atacar(x)
    {
        if(this.ataque>Entidad[x].defensa)
        {
            Entidad[x].vida-=(this.ataque-Entidad[x].defensa);
        }
        else
        {
            Entidad[x].vida-=1;
        }
    }
}



//animar
function pDefaultAnim1(){ document.getElementById("princess").style.backgroundPosition=" 0 0";}
function pDefaultAnim2(){ document.getElementById("princess").style.backgroundPosition="-160px 0";}
function pDefaultAnim3(){ document.getElementById("princess").style.backgroundPosition="-320px 0";}
function pDefaultAnim4(){ document.getElementById("princess").style.backgroundPosition="-480px 0";}
function pDefaultAnim5(){ document.getElementById("princess").style.backgroundPosition="-640px 0";}
function pDefaultAnim6(){ document.getElementById("princess").style.backgroundPosition="-800px 0";}
function pDefaultAnim7(){ document.getElementById("princess").style.backgroundPosition="-960px 0";}
function pDefaultAnim8(){ document.getElementById("princess").style.backgroundPosition="-1120px 0";}

function princessAnimateDefault()
{   
    //1
    pDefaultAnim4();
    setTimeout(() => {
        pDefaultAnim1();

        //blink
        setTimeout(() => {
        pDefaultAnim2();
        }, 200);
        setTimeout(() => {
        pDefaultAnim3();
        }, 225);
        setTimeout(() => {
        pDefaultAnim2();
        }, 250);
        setTimeout(() => {
        pDefaultAnim1();
        }, 275);
    }, 1100);
    setTimeout(() => {
        pDefaultAnim4();
    }, 2100);
    setTimeout(() => {
        pDefaultAnim1();
    }, 3200);
    setTimeout(() => {
        pDefaultAnim4();
    }, 4200);
    setTimeout(() => {
        pDefaultAnim1();

        //blink
        setTimeout(() => {
        pDefaultAnim2();
        }, 200);
        setTimeout(() => {
        pDefaultAnim3();
        }, 225);
        setTimeout(() => {
        pDefaultAnim2();
        }, 250);
        setTimeout(() => {
        pDefaultAnim1();

        setTimeout(() => {
            pDefaultAnim4();
        }, 800);
        setTimeout(() => {
            pDefaultAnim1();
        }, 1900);
        setTimeout(() => {
            pDefaultAnim4();
        }, 2900);
        setTimeout(() => {
            pDefaultAnim1();
    
            //blink
            setTimeout(() => {
            pDefaultAnim2();
            }, 200);
            setTimeout(() => {
            pDefaultAnim3();
            }, 225);
            setTimeout(() => {
            pDefaultAnim2();
            }, 250);
            setTimeout(() => {
            pDefaultAnim1();
            }, 275);
        }, 4000);
        setTimeout(() => {
            princessAnimateDefault2();
        }, 5500);
        }, 275);
    }, 5300);
    
}

function princessAnimateDefault2()
{   
    //1
    setTimeout(() => {
      pDefaultAnim2();
  }, 100);
  setTimeout(() => {
      pDefaultAnim3();
  }, 150);
  setTimeout(() => {
      pDefaultAnim2();
  }, 1500);
  setTimeout(() => {
      pDefaultAnim1();

      //blink
      setTimeout(() => {
      pDefaultAnim2();
      }, 200);
      setTimeout(() => {
      pDefaultAnim3();
      }, 225);
      setTimeout(() => {
      pDefaultAnim2();
      }, 250);
      setTimeout(() => {
      pDefaultAnim1();
      }, 275);
  }, 1550);
  
  
  
    //2
    setTimeout(() => {
        pDefaultAnim2();
    }, 3650);
    setTimeout(() => {
        pDefaultAnim5();
    }, 3700);
    setTimeout(() => {
        pDefaultAnim6();
    }, 3800);
    setTimeout(() => {
        pDefaultAnim7();
    }, 3900);
    setTimeout(() => {
        pDefaultAnim8();
    }, 4000);
    setTimeout(() => {
        pDefaultAnim7();
    }, 4800);
    setTimeout(() => {
        pDefaultAnim6();
    }, 4900);
    setTimeout(() => {
        pDefaultAnim5();
    }, 5000);   
    setTimeout(() => {
      pDefaultAnim1();
    }, 5100);

    //3
    setTimeout(() => {
        pDefaultAnim2();
    }, 6600);
    setTimeout(() => {
        pDefaultAnim3();
    }, 6650);
    setTimeout(() => {
        pDefaultAnim2();
    }, 8100);
    setTimeout(() => {
    pDefaultAnim1();

    //blink
    setTimeout(() => {
        pDefaultAnim2();
    }, 200);
        setTimeout(() => {
        pDefaultAnim3();
        }, 225);
        setTimeout(() => {
        pDefaultAnim2();
        }, 250);
        setTimeout(() => {
        pDefaultAnim1();
        }, 275);
    }, 8150);

    setTimeout(() => {
        princessAnimateDefault();
    }, 8600);
}