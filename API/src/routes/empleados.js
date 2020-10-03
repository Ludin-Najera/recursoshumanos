const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

        
 
// GET all Employees
router.get('/empleados', (req, res) => {
  mysqlConnection.query('SELECT * FROM empleados WHERE estado = 1', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});


router.get('/empleadosinactivos', (req, res) => {
  mysqlConnection.query('SELECT * FROM empleados WHERE estado = 2', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});


// GET An Employee
router.get('/empleados/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM empleados WHERE idempleados = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// GET Detalle Empleados
router.get('/empleadosdt/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT a.telefono,a.direccion,a.dpi,a.fechaingreso,a.idempleados FROM detalle_empleados a RIGHT JOIN empleados b ON a.idempleados=b.idempleados WHERE b.idempleados = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An Employee
router.delete('/empleados/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM empleados WHERE idempleados = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Empleamdo eliminado'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An Employee
router.post('/empleados', (req, res) => {
  const { nombre, apellido, estado, puesto } = req.body;
  console.log(nombre, apellido, estado,puesto);
  const query = `
    CALL GrabarDetalle(?, ?, ?, ?);
  `;
  mysqlConnection.query(query, [nombre, apellido, puesto,estado], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Empleado guardado'});
    } else {
      console.log(err);
    }
  });
});

/*router.post('/empleados', (req, res) => {
  const {id,nombres,apellidos,puesto,estado} = req.body;
  const newLink={
      nombres,apellidos,puesto,estado
  };

  mysqlConnection.query('INSERT INTO empleados  set ?', [newLink],(error, results, fields) =>{
   if(error){
     console.log(error);
     return res.status(500).send(error);

   }

   return res.status(200).json('Empleado Guardado');

  });
});*/

router.put('/empleados/:id', (req, res) => {
  const { nombres, apellidos,puesto, estado } = req.body;
  const { id } = req.params;
  const query = `
  CALL EmpleadosAgregaroEditar(?, ?, ?, ?, ?);
  `;
  mysqlConnection.query(query, [id, nombres, apellidos, puesto,estado], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Empleado Actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
