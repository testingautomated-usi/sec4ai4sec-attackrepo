import React, { Component } from 'react'
import Select, { components, ControlProps } from 'react-select'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import attackvectorstable_system from "../../data/sys-attack-vectors.json"
import attackvectorstable_model from "../../data/model-attack-vectors.json"

const styles = {
    container: base => ({
        ...base,
        flex: 1,
        width: "95%",
        position: "absolute",
        top: "60px",
        left: "1px",
        right: "20px"
    })
};

function createData(tagId, tagName) {
    return { tagId, tagName };
}

// const rows = [
//     createData("User Compromise",
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">
//             <g fill="lightcoral" stroke="firebrick">

//                 <circle cx="50" cy="10" class="node" r="10" />

//             </g>
//         </svg>,

//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">
//             <g fill="url(&quot;#pattern-stripe&quot;)" stroke="firebrick">

//                 <circle cx="50" cy="10" class="node" r="10" />

//             </g>
//         </svg>

//         , "Attack vectors related to the compromise of a user"),

//     createData("System Compromise",
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">
//             <g fill="darkseagreen" stroke="darkgreen">

//                 <circle cx="50" cy="10" class="node" r="10" />

//             </g>
//         </svg>,
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">
//             <g fill="url(&quot;#Triangle&quot;)" stroke="darkgreen">

//                 <circle cx="50" cy="10" class="node" r="10" />

//             </g>
//         </svg>
//         , "Attack vectors related to the compromise of a system"),


//     createData("Social Engineering",
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">
       
//     </svg>, 
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">
//         <g fill="url(&quot;#vertical-stripe&quot;)" stroke="gold">

//             <circle cx="50" cy="10" class="node" r="10"/>

//         </g>
//     </svg>, "Attack vectors related to social-engineering attack on project maintainer or the change of ethos of the maintainer him/herself"),

// createData("Social Engineering",
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">
   
// </svg>, 
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">
//     <g fill="white" stroke="steelblue" stroke-dasharray="5px, 3px">

//         <circle cx="50" cy="10" class="node" r="10"/>

//     </g>
// </svg>, "Recursion to the root node"),
// ];

// const rows = [
//     createData("a", "b")
// ];

const rows_model = attackvectorstable_model.map(item => (createData(
    item.avId,
    item.avName
)));


const rows_system = attackvectorstable_system.map(item => (createData(
    item.avId,
    item.avName
)));



class Legend extends Component {

    
    render() {
        
        return (
            <div>
                {this.props.attacktype === "system" ?
                    <Box sx={{ width:"100%", maxHeight: "5%" }} styles={styles}>

                        <Paper elevation={3} >
                            <TableContainer component={Paper} style={{ maxHeight: "30vh" }}>
                                <Table  aria-label="simple table" stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell width="15%" align="center">Tag Id</TableCell>
                                            <TableCell width="15%" align="center">Name</TableCell>
                                            {/* <TableCell width="70%">Meaning</TableCell> */}

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows_system.map((row) => (
                                            <TableRow
                                                key={row.tagId}
                                            >
                                                <TableCell align="center">{row.tagId}</TableCell>
                                                <TableCell align="center">{row.tagName}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Box>
                    :
                    <Box sx={{ width:"100%", maxHeight: "5%" }} styles={styles}>

                        <Paper elevation={3} >
                            <TableContainer component={Paper} style={{ maxHeight: "30vh" }}>
                                <Table  aria-label="simple table" stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell width="15%" align="center">Tag Id</TableCell>
                                            <TableCell width="15%" align="center">Name</TableCell>
                                            {/* <TableCell width="70%">Meaning</TableCell> */}

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows_model.map((row) => (
                                            <TableRow
                                                key={row.tagId}
                                            >
                                                <TableCell align="center">{row.tagId}</TableCell>
                                                <TableCell align="center">{row.tagName}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Box>
                }
            </div>
        )
    }

}

export default Legend;