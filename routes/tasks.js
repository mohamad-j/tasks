const router = require('express').Router();
const { app } = require('apico/server.js');
const mysql = require('mysql2');
/** Declare routes for Router */

// http://localhost:3000/tasks/add
router.post('/add', function( req, res ){
    let { title, description, user_id } = req.body;
    // Create a pool
    const pool = mysql.createPool({
        host: 'localhost',
        user:'root',
        password:'root123456',
        database:'task_mngmt'
    });

    // insert into tasks using body object. Use callbacks to handle errors
    pool.query('INSERT INTO tasks (title, description, created_by_id, assign_to_id) VALUES(?,?,?,?)'
    , [title, description, user_id, user_id], (err, result)=>{

        // Close the pool
        pool.end();


        if( err ) res.json( err );

        res.json( result );

        
    });
});

// Create a prefix for tasks routes
app.use( '/tasks', router );
