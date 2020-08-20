import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import moment from 'moment';

export default function DataAddedDialog(props) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const dataType = props.dataType;
  const asleepAlert = props.asleepAlert;
  console.log(asleepAlert);

  useEffect(() => {
    setOpen(props.openDialog);
  }, [props.openDialog]);

  let thisMoment = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={props.handleClose}
        aria-labelledby="Data added dialog alert"
      >
        {asleepAlert ?
          <>
            <DialogTitle id="Data added dialog alert">{"Ezra is asleep!"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Ezra is already asleep!.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={props.handleClose} color="primary">
                Close!
              </Button>
            </DialogActions>
          </>
          :
          <>
          <DialogTitle id="Data added dialog alert">{"Data Added!"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Ezra {dataType} at {thisMoment}.
              </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={props.handleClose} color="primary">
              Close!
              </Button>
          </DialogActions>
          </>
        }
      </Dialog>
    </div>
  );
}