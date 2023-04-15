$(document).ready(function () {
    $('.preloader').load('../preload.html');
  });

  let walking;

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
      document.getElementById("Entidad1").style.top="40%";
    break;
    case 2:
      document.getElementById("Entidad1").style.top="30%";
      document.getElementById("Entidad2").style.top="50%";
    break;
    case 3:
      complete1();
    break;
    case 4:
      complete1();
      document.getElementById("Entidad4").style.top="40%";
    break;
    case 5:
      complete1();
      document.getElementById("Entidad4").style.top="30%";
      document.getElementById("Entidad5").style.top="50%";
    break;
    case 6:
      complete1();
      complete2();
    break;
    case 7:
      complete1();
      complete2();
      document.getElementById("Entidad7").style.top="40%";
    break;
    case 8:
      complete1();
      complete2();
      document.getElementById("Entidad7").style.top="30%";
      document.getElementById("Entidad8").style.top="50%";
    break;
    case 9:
      complete1();
      complete2();
      complete3();
    break;
    default:
      alert("Erroor aaa");
  }
  
  //Fin enemigos cantidad y orden

  let barraPrincess = document.getElementById("pStat");

  barraPrincess.value=Princess.vida+"/"+Princess.vidaMax;