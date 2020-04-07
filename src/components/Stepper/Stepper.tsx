import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '600px',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    body: {
      fontFamily: 'Abril Fatface',
    },
  })
);

function getSteps() {
  return [
    'Select a treatment',
    'Select a time',
    'Fill in your contact details',
    'Booking summary',
  ];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    switch (window.location.pathname) {
      case '/treatment':
        setActiveStep(0);
        break;
      case '/book':
        setActiveStep(1);
        break;
      case '/confirmation':
        setActiveStep(2);
        break;
      case '/order':
        setActiveStep(3);
        break;
      default:
        setActiveStep(-1);
    }
  }, []);
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel classes={{ alternativeLabel: classes.body }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
