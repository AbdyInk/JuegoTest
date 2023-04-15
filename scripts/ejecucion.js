setTimeout(() => {
    $(document).ready(function() {
        $(".loader").fadeOut("slow");;
  
        //Aparecer Enemigos
        for(let ap=1; ap<=qntyEnemies; ap++)
        {
            Entidad[ap].aparicion();
        }
  
        setTimeout(() => {
            Entidad[1].atacar();
        
        }, 2000);
    });
}, 1000);