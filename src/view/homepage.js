import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { useState } from 'react'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

/*function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}*/
  
/*const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];*/



const Homepage = () =>{
    const classes = useStyles();
    const [employees,setEmployeeList] = useState([])
    const getEmployee = () => {
        axios.get('http://localhost:3001/employee').then((response) => {
            setEmployeeList(response.data)
        })
    }
    getEmployee()
    return (
        <div align="center" >
            <Button color="primary">Hello World</Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Phone</TableCell>  
                                <TableCell align="right">Address</TableCell>  
                                <TableCell align="right">Salary</TableCell>  
                            </TableRow>
                        </TableHead>
                    <TableBody>
                    {employees.map((employees) => (
                        <TableRow key={employees.id}>
                            <TableCell component="th" scope="row">
                                {employees.id}
                            </TableCell>
                            <TableCell align="right">{employees.name}</TableCell>
                            <TableCell align="right">{employees.phone}</TableCell>
                            <TableCell align="right">{employees.address}</TableCell>
                            <TableCell align="right">{employees.salary}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Homepage