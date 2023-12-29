const { Router } = require("express");
 const router = Router();

router.get('/test', (req, res)=>{

    const data ={"id": 1,"nombre": "Juan","apellido": "Pérez","edad": 30,"correo": "juan.perez@example.com"};

    res.json(data);
    
});


module.exports = router;