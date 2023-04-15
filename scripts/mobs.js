let qntyEnemies=0;
//Enemigos Estadisticas / Acciones
class Enemigo
{
    constructor(z,a,b,c)
    {
        this.numero = z;
        this.vida = a;
        this.ataque = b;
        this.defensa = c;
        qntyEnemies++;
    }
    atacarTerminado()
    {
        if(this.ataque>Princess.defensa)
        {
            Princess.vida-=(this.ataque-Princess.defensa);
        }
        else
        {
            Princess.vida-=1;
        }
        barraPrincess.value=Princess.vida+"/"+Princess.vidaMax;
    }
}

class SlimeGreen extends Enemigo
{
    aparicion()
    {
        document.getElementById("default"+this.numero).style.backgroundImage="url(images/enemies/SlimeGreen/Default.png)";
        document.getElementById("attack"+this.numero).style.backgroundImage="url(images/enemies/SlimeGreen/Attack.png)";
        document.getElementById("hurt"+this.numero).style.backgroundImage="url(images/enemies/SlimeGreen/Hurt.png)";
        document.getElementById("walk"+this.numero).style.backgroundImage="url(images/enemies/SlimeGreen/Walk.png)";
        document.getElementById("Entidad"+this.numero).style.display="flex";
        SlimeAnimate(this.numero);
        setInterval(() => {
        SlimeAnimate(this.numero);
        }, 9000);
    }
    atacar()
    {
        document.getElementById("default"+this.numero).style.display="none";
        document.getElementById("walk"+this.numero).style.display="flex";
        SlimeWalk(this.numero);
        if(this.numero==1 || this.numero==3)
        {
            $("#Entidad"+this.numero).animate({top:"40%",right:"50%"},1200);
        }
        setTimeout(() => {
            SlimeWalk(this.numero);
            $("#Entidad"+this.numero).animate({right:"75%"},1200);
        }, 1300);

        setTimeout(() => {
            this.atacarTerminado();
        }, 2500);
    }
}

class SlimeBlue extends Enemigo
{
    aparicion()
    {
        document.getElementById("default"+this.numero).style.backgroundImage="url(images/enemies/SlimeBlue/Default.png)";
        document.getElementById("attack"+this.numero).style.backgroundImage="url(images/enemies/SlimeBlue/Attack.png)";
        document.getElementById("hurt"+this.numero).style.backgroundImage="url(images/enemies/SlimeBlue/Hurt.png)";
        document.getElementById("walk"+this.numero).style.backgroundImage="url(images/enemies/SlimeBlue/Walk.png)";
        document.getElementById("Entidad"+this.numero).style.display="flex";
        SlimeAnimate(this.numero);
        setInterval(() => {
        SlimeAnimate(this.numero);
        }, 9000);
    }
}

class ShinySlime extends Enemigo
{
    aparicion()
    {
        document.getElementById("default"+this.numero).style.backgroundImage="url(images/enemies/ShinySlime/Default.png)";
        document.getElementById("attack"+this.numero).style.backgroundImage="url(images/enemies/ShinySlime/Attack.png)";
        document.getElementById("hurt"+this.numero).style.backgroundImage="url(images/enemies/ShinySlime/Hurt.png)";
        document.getElementById("walk"+this.numero).style.backgroundImage="url(images/enemies/ShinySlime/Walk.png)";
        document.getElementById("Entidad"+this.numero).style.display="flex";
        SlimeAnimate(this.numero);
        setInterval(() => {
        SlimeAnimate(this.numero);
        }, 9000);
    }
}