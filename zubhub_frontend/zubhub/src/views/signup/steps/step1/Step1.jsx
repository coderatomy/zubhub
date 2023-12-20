import React from 'react';
import clsx from 'clsx';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { FaUserGraduate, FaChalkboardUser } from 'react-icons/fa6';
import { makeStyles } from '@mui/styles';
import { mainStyles, step1Styles } from '../../signupStyles';
import { CustomButton } from '../../../../components';

const useMainStyles = makeStyles(mainStyles);
const useStepStyles = makeStyles(step1Styles);

const Step1 = props => {
  const mainClasses = useMainStyles();
  const classes = useStepStyles();
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.gridContainer}
        rowSpacing={{ xs: 4, sm: 6, md: 10 }}
      >
        <Grid item>
          <Typography align="center" className={mainClasses.header}>
            Welcome to ZubHub !
          </Typography>
          <Typography align="center" mt={2} className={mainClasses.text}>
            Connect with students, educators, and the ZubHub community. To get started, choose an account type.
          </Typography>
        </Grid>
        <Grid item sx={{ width: '100%' }}>
          <Grid container justifyContent="space-around" rowGap={2}>
            <Grid item>
              <Paper variant="elevation" elevation={2} className={clsx([classes.paper, 'selected'])}>
                <FaUserGraduate className={classes.icon} />
                <Typography className={mainClasses.subHeader}>Creator</Typography>
                <Typography className={mainClasses.text}>I am a Creator, who wants to create</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} variant="elevation" elevetion={2}>
                <FaChalkboardUser className={classes.icon} />
                <Typography className={mainClasses.subHeader}>Educator</Typography>
                <Typography className={mainClasses.text}>I am an Educator, looking to inspire</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CustomButton className={classes.button} primaryButtonStyle>
            JOIN AS A CREATOR
          </CustomButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step1;
