//Posicion Estatica
function SlimeAnimate(x)
{   
    //1
    setTimeout(() => {
      defaultAnim2(x);
  }, 100);
  setTimeout(() => {
      defaultAnim3(x);
  }, 150);
  setTimeout(() => {
      defaultAnim2(x);
  }, 1500);
  setTimeout(() => {
      defaultAnim1(x);

      //blink
      setTimeout(() => {
      defaultAnim2(x);
      }, 200);
      setTimeout(() => {
      defaultAnim3(x);
      }, 225);
      setTimeout(() => {
      defaultAnim2(x);
      }, 250);
      setTimeout(() => {
      defaultAnim1(x);
      }, 275);
  }, 1550);
  
  
  
  //2
  setTimeout(() => {
      defaultAnim2(x);
  }, 2950);
  setTimeout(() => {
      defaultAnim4(x);
  }, 3000);
  setTimeout(() => {
      defaultAnim5(x);
  }, 4600);
  setTimeout(() => {
      defaultAnim6(x);
  }, 4700);
  setTimeout(() => {
      //blink
      setTimeout(() => {
          defaultAnim5(x);
          }, 200);
          setTimeout(() => {
          defaultAnim3(x);
          }, 225);
          setTimeout(() => {
          defaultAnim2(x);
          }, 250);
  }, 6200);   
  setTimeout(() => {
      defaultAnim1(x);
  }, 6500);
}

//Caminar
function SlimeWalk(x)
{
    walkAnim2(x);
    setTimeout(() => {
        walkAnim4(x);
    }, 100);
    setTimeout(() => {
        walkAnim3(x);
    }, 200);
    setTimeout(() => {
        walkAnim5(x);
    }, 300);
    setTimeout(() => {
        walkAnim2(x);
    }, 400);
    setTimeout(() => {
        walkAnim4(x);
    }, 500);
    setTimeout(() => {
        walkAnim3(x);
    }, 600);
    setTimeout(() => {
        walkAnim5(x);
    }, 700);
    setTimeout(() => {
        walkAnim2(x);
    }, 800);
    setTimeout(() => {
        walkAnim4(x);
    }, 900);
    setTimeout(() => {
        walkAnim3(x);
    }, 1000);
    setTimeout(() => {
        walkAnim5(x);
    }, 1100);
    setTimeout(() => {
        walkAnim2(x);
    }, 1200);
    setTimeout(() => {
        walkAnim1(x);
    }, 1300);
}