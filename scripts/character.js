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
function pSetAnim1(tipo){ document.getElementById(tipo+"P").style.backgroundPosition=" 0 0";}
function pSetAnim2(tipo){ document.getElementById(tipo+"P").style.backgroundPosition="-160px 0";}
function pSetAnim3(tipo){ document.getElementById(tipo+"P").style.backgroundPosition="-320px 0";}
function pSetAnim4(tipo){ document.getElementById(tipo+"P").style.backgroundPosition="-480px 0";}
function pSetAnim5(tipo){ document.getElementById(tipo+"P").style.backgroundPosition="-640px 0";}
function pSetAnim6(tipo){ document.getElementById(tipo+"P").style.backgroundPosition="-800px 0";}
function pSetAnim7(tipo){ document.getElementById(tipo+"P").style.backgroundPosition="-960px 0";}
function pSetAnim8(tipo){ document.getElementById(tipo+"P").style.backgroundPosition="-1120px 0";}

function princessAnimateDefault()
{   
    //1
    pSetAnim4("default");
    setTimeout(() => {
        pSetAnim1("default");

        //blink
        setTimeout(() => {
        pSetAnim2("default");
        }, 200);
        setTimeout(() => {
        pSetAnim3("default");
        }, 225);
        setTimeout(() => {
        pSetAnim2("default");
        }, 250);
        setTimeout(() => {
        pSetAnim1("default");
        }, 275);
    }, 1100);
    setTimeout(() => {
        pSetAnim4("default");
    }, 2100);
    setTimeout(() => {
        pSetAnim1("default");
    }, 3200);
    setTimeout(() => {
        pSetAnim4("default");
    }, 4200);
    setTimeout(() => {
        pSetAnim1("default");

        //blink
        setTimeout(() => {
        pSetAnim2("default");
        }, 200);
        setTimeout(() => {
        pSetAnim3("default");
        }, 225);
        setTimeout(() => {
        pSetAnim2("default");
        }, 250);
        setTimeout(() => {
        pSetAnim1("default");

        setTimeout(() => {
            pSetAnim4("default");
        }, 800);
        setTimeout(() => {
            pSetAnim1("default");
        }, 1900);
        setTimeout(() => {
            pSetAnim4("default");
        }, 2900);
        setTimeout(() => {
            pSetAnim1("default");
    
            //blink
            setTimeout(() => {
            pSetAnim2("default");
            }, 200);
            setTimeout(() => {
            pSetAnim3("default");
            }, 225);
            setTimeout(() => {
            pSetAnim2("default");
            }, 250);
            setTimeout(() => {
            pSetAnim1("default");
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
      pSetAnim2("default");
  }, 100);
  setTimeout(() => {
      pSetAnim3("default");
  }, 150);
  setTimeout(() => {
      pSetAnim2("default");
  }, 1500);
  setTimeout(() => {
      pSetAnim1("default");

      //blink
      setTimeout(() => {
      pSetAnim2("default");
      }, 200);
      setTimeout(() => {
      pSetAnim3("default");
      }, 225);
      setTimeout(() => {
      pSetAnim2("default");
      }, 250);
      setTimeout(() => {
      pSetAnim1("default");
      }, 275);
  }, 1550);
  
  
  
    //2
    setTimeout(() => {
        pSetAnim2("default");
    }, 3650);
    setTimeout(() => {
        pSetAnim5("default");
    }, 3700);
    setTimeout(() => {
        pSetAnim6("default");
    }, 3800);
    setTimeout(() => {
        pSetAnim7("default");
    }, 3900);
    setTimeout(() => {
        pSetAnim8("default");
    }, 4000);
    setTimeout(() => {
        pSetAnim7("default");
    }, 4800);
    setTimeout(() => {
        pSetAnim6("default");
    }, 4900);
    setTimeout(() => {
        pSetAnim5("default");
    }, 5000);   
    setTimeout(() => {
      pSetAnim1("default");
    }, 5100);

    //3
    setTimeout(() => {
        pSetAnim2("default");
    }, 6600);
    setTimeout(() => {
        pSetAnim3("default");
    }, 6650);
    setTimeout(() => {
        pSetAnim2("default");
    }, 8100);
    setTimeout(() => {
    pSetAnim1("default");

    //blink
    setTimeout(() => {
        pSetAnim2("default");
    }, 200);
        setTimeout(() => {
        pSetAnim3("default");
        }, 225);
        setTimeout(() => {
        pSetAnim2("default");
        }, 250);
        setTimeout(() => {
        pSetAnim1("default");
        }, 275);
    }, 8150);

    setTimeout(() => {
        princessAnimateDefault();
    }, 8600);
}

function princessAnimateChoose()
{
    $("#toChooseP").css("display","flex");
    $("#defaultP").css("display","none");

    setTimeout(() => {
        pSetAnim2("toChoose");
    }, 100);
    setTimeout(() => {
        pSetAnim3("toChoose");
    }, 200);
    setTimeout(() => {
        pSetAnim4("toChoose");
    }, 300);
    setTimeout(() => {
        pSetAnim5("toChoose");
    }, 400);
    setTimeout(() => {
        pSetAnim6("toChoose");
    }, 500);
    setTimeout(() => {
        pSetAnim7("toChoose");
        
    }, 600);
}