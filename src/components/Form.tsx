import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { actions } from './../redux/slice/resolution';
import { Resolution } from '../type/type';
import { RootState } from '../redux/store';

// MUI alert
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function Form() {
  // user input
  const [resolution, setResolution] = useState<Resolution>({
    title: '',
    date: '',
  });
  // date picker value
  const [value, setValue] = useState<Dayjs | null>(dayjs(Date.now()));
  // dispatch for actions
  const dispatch = useDispatch();

  // state
  const resolutionState = useSelector((state: RootState) => state.resolution);
  console.log(resolutionState.resolution);

  // MUI Alert state
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);

  const handleClick = () => {
    setOpen(true);
    if (!resolution.title) {
      setSuccess(false);
    } else if (
      resolutionState.resolution.some((item) => item.title === resolution.title)
    ) {
      setSuccess(false);
    } else {
      setSuccess(true);
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = (newValue: Dayjs | null) => {
    const day = dayjs(newValue);
    setValue(newValue);
    setResolution({ ...resolution, date: day.format('YYYY-MM-DD hh:mm A') });
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResolution({ ...resolution, title: event.target.value });
  };

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
        onClick={() => {
          handleClick();
          dispatch(actions.addResolution(resolution));
        }}
      >
        ADD
      </Button>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        {!success ? (
          <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
            This is an error message!
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity='success'
            sx={{ width: '100%' }}
          >
            Your resolution is successfully added.
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}
