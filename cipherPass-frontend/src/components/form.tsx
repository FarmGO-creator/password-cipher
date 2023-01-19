import React, {useEffect, useState} from 'react';
import {Box, ButtonGroup, IconButton, Paper, TextField} from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {CipherTypeForm} from "../types";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {decodedPost, encodedPost} from "../store/cipherThunk";
import {selectEncoded} from "../store/encodeSlice";
import {selectDecoded} from "../store/decodeSlice";

const Form = () => {
  const dispatch = useAppDispatch();
  const decode = useAppSelector(selectDecoded);
  const encode = useAppSelector(selectEncoded);

  const [value, setValue] = useState<CipherTypeForm>({
    messageE: '',
    password: '',
    messageD: '',
  });

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValue(prev => ({...prev, [name]: value}));
  };

  useEffect(() => {
    setValue(prev => ({...prev, messageD: encode.encoded, messageE: decode.decoded}));
  }, [encode, decode])

  const onEncode = async () => {
    if (value.password === '') {
      return window.alert('Введите пароль !');
    }

    await dispatch(encodedPost({
      message: value.messageE,
      password: value.password,
    }));
    setValue(prev => ({...prev, messageE: ''}));
  };


  const onDecode = async () => {
    if (value.password === '') {
      return window.alert('Введите пароль !');
    }

    await dispatch(decodedPost({
      message: encode.encoded,
      password: value.password
    }));

    setValue(prev => ({...prev, messageD: ''}))
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
            <IconButton aria-label="encode" onClick={onDecode}>
              <ArrowCircleUpIcon sx={{fontSize: 50}} />
            </IconButton>

            <IconButton aria-label="decode" onClick={onEncode}>
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