const db= require("../db/index")

let bandasController = {
    
    index:  function(req, res) {
        let bandas= []
        for (let i = 0; i < db.lista.length; i++) {
          bandas.push(db.lista[i]);
        }
        res.render("listadoBandas", {listado:bandas}) //El primer parametro responde a un archivo en views
      },
    
    id: function(req, res) {
        let idBanda= req.params.id;
        let resultados ;
    
        for (let i = 0; i < db.lista.length; i++) {
            if (idBanda == db.lista[i].id) {
                resultados= db.lista[i]
            } 
        };
    
        res.render("detalleBandas", {listado:resultados})
        
    },
    genero:  function(req, res) {
        let generoBanda= req.params.genero;
        let resultados=[] ;
    
        for (let i = 0; i < db.lista.length; i++) {
            if (generoBanda == db.lista[i].genero.toLowerCase()) {
                resultados.push(db.lista[i])
            } 
        };
    
        res.render("porGenero", {listado:resultados})
    }
};



module.exports= bandasController