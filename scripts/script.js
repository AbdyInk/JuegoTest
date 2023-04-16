$(document).ready(function () {
    $('.preloader').load('../preload.html');
  });

  let walking;
  let box=["Default0"];

  //Princesa aparicion
  let Princess = new Jugador(25, 10, 10, 20);

  princessAnimateDefault();
  //Fin Princesa aparicion

  //Enemigos cantidad y orden
  let Entidad = ["default0"];

  Entidad.push(new SlimeGreen(1, 10, 5, 5));
  Entidad.push(new SlimeBlue(2, 10, 5, 5));
  Entidad.push(new ShinySlime(3, 10, 5, 5));

  switch(qntyEnemies)
  {
    case 1:
      posEnty[1]="40%";
    break;
    case 2:
      posEnty[1]="30%";
      posEnty[2]="50%";
    break;
    case 3:
      
    break;
    case 4:
      posEnty[4]="40%";
    break;
    case 5:
      posEnty[4]="30%";
      posEnty[5]="50%";
    break;
    case 6:

    break;
    case 7:
      posEnty[7]="40%";
    break;
    case 8:
      posEnty[7]="30%";
      posEnty[8]="50%";
    break;
    case 9:
    break;
    default:
      alert("Erroor aaa");
  }

  for(let pe=1; pe<=9; pe++)
  {
    document.getElementById("Entidad"+pe).style.top=posEnty[pe];
  }
  
  //Fin enemigos cantidad y orden

  let barraPrincess = document.getElementById("pStat");

  barraPrincess.value=Princess.vida+"/"+Princess.vidaMax;