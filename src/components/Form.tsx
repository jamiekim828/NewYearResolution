import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from './../redux/slice/resolution';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function Form() {
  const [resolution, setResolution] = useState({ title: '', date: '' });
  const [value, setValue] = useState<Dayjs | null>(null);

  const dispatch = useDispatch();

  const handleChange = (newValue: Dayjs | null) => {
    const day = dayjs(newValue);
    setValue(newValue);
    setResolution({ ...resolution, date: day.format() });
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResolution({ ...resolution, title: event.target.value });
  };

  console.log(resolution);

  return (
    <div>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='outlined-basic'
          label='Title'
          variant='outlined'
          onChange={handleTitle}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label='Date'
            inputFormat='MM/DD/YYYY'
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>

      <Button
        variant='contained'
        onClick={() => dispatch(actions.addResolution(resolution))}
      >
        ADD
      </Button>
    </div>
  );
}
