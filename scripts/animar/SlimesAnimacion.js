//Posicion Estatica
function SlimeAnimate(x)
{   
    //1
    setTimeout(() => {
      setAnim2("default",x);
  }, 100);
  setTimeout(() => {
      setAnim3("default",x);
  }, 150);
  setTimeout(() => {
      setAnim2("default",x);
  }, 1500);
  setTimeout(() => {
      setAnim1("default",x);

      //blink
      setTimeout(() => {
      setAnim2("default",x);
      }, 200);
      setTimeout(() => {
      setAnim3("default",x);
      }, 225);
      setTimeout(() => {
      setAnim2("default",x);
      }, 250);
      setTimeout(() => {
      setAnim1("default",x);
      }, 275);
  }, 1550);
  
  
  
  //2
  setTimeout(() => {
      setAnim2("default",x);
  }, 2950);
  setTimeout(() => {
      setAnim4("default",x);
  }, 3000);
  setTimeout(() => {
      setAnim5("default",x);
  }, 4600);
  setTimeout(() => {
      setAnim6("default",x);
  }, 4700);
  setTimeout(() => {
      //blink
      setTimeout(() => {
          setAnim5("default",x);
          }, 200);
          setTimeout(() => {
          setAnim3("default",x);
          }, 225);
          setTimeout(() => {
          setAnim2("default",x);
          }, 250);
  }, 6200);   
  setTimeout(() => {
      setAnim1("default",x);
  }, 6500);
}

//Caminar
function SlimeWalk(gb,x)
{
    setAnim2(gb,x);
    setTimeout(() => {
        setAnim4(gb,x);
    }, 100);
    setTimeout(() => {
        setAnim3(gb,x);
    }, 200);
    setTimeout(() => {
        setAnim5(gb,x);
    }, 300);
    setTimeout(() => {
        setAnim2(gb,x);
    }, 400);
    setTimeout(() => {
        setAnim4(gb,x);
    }, 500);
    setTimeout(() => {
        setAnim3(gb,x);
    }, 600);
    setTimeout(() => {
        setAnim5(gb,x);
    }, 700);
    setTimeout(() => {
        setAnim2(gb,x);
    }, 700);
    setTimeout(() => {
        setAnim4(gb,x);
    }, 900);
    setTimeout(() => {
        setAnim3(gb,x);
    }, 1000);
    setTimeout(() => {
        setAnim5(gb,x);
    }, 1100);
    setTimeout(() => {
        setAnim2(gb,x);
    }, 1200);
    setTimeout(() => {
        setAnim1(gb,x);
    }, 1300);
}

//Atacar
function SlimeGreenAttack(x)
{
    setTimeout(() => {
        setAnim2("attack",x);
    }, 100);
    setTimeout(() => {
        setAnim7("attack",x);
    }, 150);
    setTimeout(() => {
        setAnim3("attack",x);
    }, 200);
    setTimeout(() => {
        setAnim4("attack",x);
    }, 300);
    setTimeout(() => {
        setAnim3("attack",x);
    }, 400);
    setTimeout(() => {
        setAnim7("attack",x);
    }, 500);
    setTimeout(() => {
        setAnim3("attack",x);
    }, 600);
    setTimeout(() => {
        setAnim4("attack",x);
    }, 700);
    setTimeout(() => {
        setAnim3("attack",x);
    }, 800);
    setTimeout(() => {
        setAnim7("attack",x);
    }, 900);
    setTimeout(() => {
        setAnim3("attack",x);
    }, 1000);
    setTimeout(() => {
        setAnim4("attack",x);
    }, 1100);
    setTimeout(() => {
        setAnim3("attack",x);
    }, 1200);
    setTimeout(() => {
        setAnim7("attack",x);
    }, 1300);
    setTimeout(() => {
        setAnim3("attack",x);
    }, 1400);
    setTimeout(() => {
        setAnim4("attack",x);
    }, 1500);
    setTimeout(() => {
        setAnim3("attack",x);
    }, 1600);
    setTimeout(() => {
        setAnim5("attack",x);
    }, 1700);
    setTimeout(() => {
        setAnim5("attack",x);
    }, 1750);
    setTimeout(() => {
        setAnim8("attack",x);
    }, 1800);
    setTimeout(() => {
        setAnim6("attack",x);
    }, 2200);
    setTimeout(() => {
        setAnim5("attack",x);
    }, 2300);
    setTimeout(() => {
        setAnim7("attack",x);
    }, 2400);
    setTimeout(() => {
        setAnim2("attack",x);
    }, 2500);
    setTimeout(() => {
        setAnim1("attack",x);
    }, 2600);
}