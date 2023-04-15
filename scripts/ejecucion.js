setTimeout(() => {
    $(document).ready(function() {
        $(".loader").fadeOut("slow");;
  
        //Aparecer Enemigos
        for(let ap=1; ap<=qntyEnemies; ap++)
        {
            Entidad[ap].aparicion();
        }
  
        setTimeout(() => {
            princessAnimateChoose();
        }, 2000);
    });
}, 1000);