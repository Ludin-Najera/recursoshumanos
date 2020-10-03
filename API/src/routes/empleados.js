const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

        
 
// GET all Employees
router.get('/empleados', (req, res) => {
  mysqlConnection.query('SELECT * FROM empleados', (err, rows, fields) => {
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
  const {id, nombre, apellido, estado,puesto } = req.body;
  console.log(id,nombre, apellido, estado,puesto);
  const query = `
    CALL EmpleadosAgregaroEditar(?,?, ?, ?, ?);
  `;
  mysqlConnection.query(query, [id,nombre, apellido, estado,puesto], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Empleado guardado'});
    } else {
      console.log(err);
    }
  });

});

router.put('/empleados/:id', (req, res) => {
  const { nombre, apellido,puesto, estado } = req.body;
  const { id } = req.params;
  const query = `
  CALL EmpleadosAgregaroEditar(?, ?, ?, ?, ?);
  `;
  mysqlConnection.query(query, [id, nombre, apellido,puesto,estado], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Empleado Actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
