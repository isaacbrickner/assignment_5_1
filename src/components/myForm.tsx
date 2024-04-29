'use client';
//import use state
import { useState, useEffect, ChangeEvent } from 'react';
import { TextField, Box, MenuItem, Button } from '@mui/material';

export default function MyForm(props: {addEntry: Function}){
    // TODO: add a select of programming languages
    // TODO: Comment textfield, see if you can make it arger
    // BUTTON: for now have it log values of all 3 inputs
    const proglangs = [
        {
          value: 'Python',
          label: '',
        },
        {
          value: 'Java',
          label: '€',
        },
        {
          value: 'C#',
          label: '฿',
        },
        {
          value: 'Typescript',
          label: '¥',
        },
      ];
    const [name, setName] = useState<string>("")
    const [proglang, setLang] = useState<string>("")
    const [comment, setComment] = useState<string>("")
    const [button, setButton] = useState<string>("")

    function handleLangChange(event: React.ChangeEvent<HTMLInputElement>){
        setLang(event.target.value)
    }

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
      };

    function handleCommentChange(event: React.ChangeEvent<HTMLInputElement>){
        setComment(event.target.value);
      };
    
    function handleButton(event: React.MouseEvent<HTMLButtonElement>){
        const info = {
            name: name,
            language: proglang,
            comment: comment,
        }
        // const data = []
        // data.push(info)
        // console.log(data);
        props.addEntry(info)
}
    useEffect(()=>{
        console.log(name, proglang);
    },[name, proglang, comment, button])

    return(
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="name-text" label="Enter name" variant="outlined" value={name} onChange={handleNameChange} />
      <TextField
          id="outlined-select"
          select
          label="Select"
          defaultValue=""
          helperText="Please select your programming language"
          onChange={handleLangChange}
        >
          {proglangs.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            placeholder="Comments"
            multiline
            rows={15}
            maxRows={Infinity} onChange={handleCommentChange}/>
            <Button variant="outlined" onClick={handleButton}>Submit</Button>

    </Box>
    )
    
}
