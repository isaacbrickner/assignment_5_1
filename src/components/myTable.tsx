import {Table, TableCell, TableBody,TableRow,TableContainer,TableHead, Button, Rating} from '@mui/material'
import { useEffect, useState } from 'react'

type entry = {name: string, language:string, comment:string, rating: number}[]

export default function MyTable(props: {entry: entry, deleteEntry: Function}){

    const [entries, setEntries] = useState(props.entry)
    useEffect(()=>{
    },[entries])

    return (<TableContainer>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>
                    Name
                </TableCell>  
                <TableCell>
                    Language
                </TableCell>
                <TableCell>
                    Comment
                </TableCell>
                <TableCell>
                    Delete
                </TableCell>
                <TableCell>
                    Rating
                </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {props.entry.map((entry, index: number) => (
                    <TableRow key={index}>
                        <TableCell>{entry.name}</TableCell>
                        <TableCell>{entry.language}</TableCell>
                        <TableCell>{entry.comment}</TableCell>
                        <TableCell>
                            <Button variant='contained' value={index} onClick={() => {props.deleteEntry(index)}}>Delete</Button>
                        </TableCell>
                        <TableCell>
                        <Rating
                        readOnly={true}
                        value={entry.rating}
                        />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
        </Table>
    </TableContainer>
    )



}