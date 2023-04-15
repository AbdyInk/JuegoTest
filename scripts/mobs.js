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
        document.getElementById("walkback"+this.numero).style.backgroundImage="url(images/enemies/SlimeGreen/WalkBack.png)";
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
        SlimeWalk("walk",this.numero);
        if(this.numero==1 || this.numero==3)
        {
            $("#Entidad"+this.numero).animate({top:"41%",right:"50%"},1200);
        }
        setTimeout(() => {
            SlimeWalk("walk",this.numero);
            $("#Entidad"+this.numero).animate({right:"76%"},1200);
            setTimeout(() => {
                $("#attack"+this.numero).css("display","flex");
                $("#walk"+this.numero).css("display","none");
                SlimeGreenAttack(this.numero);
            }, 1300);
            setTimeout(() => {
                this.atacarTerminado();
                setTimeout(() => {
                    $("#walkback"+this.numero).css("display","flex");
                    $("#attack"+this.numero).css("display","none");
                    SlimeWalk("walkback",this.numero);
                    setTimeout(() => {
                        SlimeWalk("walkback",this.numero);
                    }, 1300);
                    $("#Entidad"+this.numero).animate({top:posEnty[this.numero],right:posEntx[this.numero]},2000);
                    setTimeout(() => {
                        $("#default"+this.numero).css("display","flex");
                        $("#walkback"+this.numero).css("display","none");
                    }, 2100);
                }, 200);
            }, 3300);
        }, 1300);
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