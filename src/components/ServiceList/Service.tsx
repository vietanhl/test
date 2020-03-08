import React, { useState, useEffect } from 'react';
import BookButton from '../BookButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);

const Service: React.FunctionComponent = (props: any) => {
  const classes = useStyles();
  const [treatment, setTreatment] = useState({
    treatment1: false,
    treatment2: false,
  });
  const [selectedTreatment, setSelectedTreatment] = useState();

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTreatment({ ...treatment, [name]: event.target.checked });
  };
  useEffect(() => {
    var newTreatments = { ...treatment };
    var newSelectedTreatment: any = [];
    Object.entries(newTreatments).forEach(entry => {
      if (entry[1] === true) {
        newSelectedTreatment.push(entry[0]);
      }
    });
    // console.log(newSelectedTreatment);
    setSelectedTreatment(newSelectedTreatment);
  }, [treatment]);
  return (
    <>
      <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            List of treatments #1
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={treatment.treatment1}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  onChange={handleChange('treatment1')}
                  value="treatment1"
                />
              }
              label="Treatment 1 with a very very long description"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={treatment.treatment2}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  onChange={handleChange('treatment2')}
                  value="treatment2"
                />
              }
              label="Treatment 2"
            />
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            List of treatments #2
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={treatment.treatment1}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  onChange={handleChange('treatment1')}
                  value="treatment1"
                />
              }
              label="Treatment 1"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={treatment.treatment2}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  onChange={handleChange('treatment2')}
                  value="treatment2"
                />
              }
              label="Treatment 2"
            />
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <BookButton treatment={selectedTreatment} {...props}>
        Book Now
      </BookButton>
    </>
  );
};

export default Service;
