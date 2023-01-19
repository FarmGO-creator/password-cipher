import React, {useState} from 'react';
import {Box, ButtonGroup, IconButton, Paper, TextField} from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {CipherTypeForm} from "../types";

const Form = () => {
  const [value, setValue] = useState<CipherTypeForm>({
    messageE: '',
    password: '',
    messageD: '',
  });

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValue(prev => ({...prev, [name]: value}));
  };

  return (
    <Box component='div' sx={{display: 'flex', justifyContent: 'center'}}>
      <Paper component='form' elevation={3} sx={{width: 500, p: 2}}>
        <TextField
          id="standard-multiline-static"
          label="Decode messages"
          multiline
          rows={8}
          variant="outlined"
          fullWidth
          name='messageE'
          value={value.messageE}
          onChange={onChange}
        />

        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <TextField
            sx={{my: 2, width: 300}}
            id="outlined-basic"
            label="password"
            variant="outlined"
            value={value.password}
            name='password'
            onChange={onChange}

          />

          <ButtonGroup variant="text">
            <IconButton aria-label="encode">
              <ArrowCircleUpIcon sx={{fontSize: 50}} />
            </IconButton>

            <IconButton aria-label="decode">
              <ArrowCircleDownIcon sx={{fontSize: 50}} />
            </IconButton>
          </ButtonGroup>
        </Box>

        <TextField
          id="standard-multiline-static"
          label="Encode messages"
          multiline
          rows={8}
          variant="outlined"
          fullWidth
          name='messageD'
          value={value.messageD}
          onChange={onChange}
        />
      </Paper>
    </Box>
  );
};

export default Form;