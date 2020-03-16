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
import * as api from '../../containers/TreatmentContainer/TreatmentContainer';
import Divider from '@material-ui/core/Divider';

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
  const [treatment, setTreatment] = useState();
  useEffect(() => {
    async function fetchMyApi() {
      const res = await api.getTreatments();
      setTreatment(res);
    }
    fetchMyApi();
  }, []);

  const [selected, setSelected] = useState();
  const mapTreatments = () => {
    const treatmentTypes: any[] = [];
    var listOfTreatmentTypes: any[] = [];

    if (treatment === null || treatment === undefined) {
      return null;
    } else {
      for (var key in treatment) {
        var obj = treatment[key];

        for (var prop in obj) {
          if (prop === 'treatmentType') {
            // console.log(prop + ' = ' + obj[prop]);
            if (Object.values(listOfTreatmentTypes).indexOf(obj[prop]) <= -1) {
              listOfTreatmentTypes.push(obj[prop]);
            }
          }
        }
      }
      // console.log(Object.values(listOfTreatmentTypes).indexOf(2));
      //TO GET Available treatment Types
      // for (var type in listOfTreatmentTypes) {
      //   // console.log(listOfTreatmentTypes[type]);
      //   // treatmentTypes.push(listOfTreatmentTypes[type]);
      // }
      // console.log(listOfTreatmentTypes);
      if (Object.values(listOfTreatmentTypes).indexOf(2)) {
        Object.keys(treatment).map((keyName, i) => {
          // console.log(treatment[keyName]);
          return (
            <ExpansionPanelDetails>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={treatment.treatment1}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleChange(`${treatment[keyName].id}`)}
                      value="treatment1"
                    />
                  }
                  label="Treatment 1 with a very very long description"
                />
              </FormGroup>
            </ExpansionPanelDetails>
          );
        });
      }
    }
    // console.log(treatment);
  };

  useEffect(() => {
    mapTreatments();
    // mapTreatmentTypes();
    beforeTreatmentSelectionState();
    console.log(treatment);
  }, [treatment]);

  const classes = useStyles();
  // const [treatment, setTreatment] = useState({
  //   treatment1: false,
  //   treatment2: false,
  // });
  const [stateOfTreatment, setStateOfTreatment] = useState();
  const beforeTreatmentSelectionState = () => {
    if (treatment === null || treatment === undefined) {
      return null;
    } else {
      Object.keys(treatment).map((keyName, i) => {
        // console.log(treatment[keyName].id);
      });
    }
  };

  const [selectedTreatment, setSelectedTreatment] = useState(['treatments']);
  //   () => {
  //   if (treatment === null || treatment === undefined) {
  //     return null;
  //   }
  //   Object.keys(treatment).map((keyName, i) => {
  //     return (treatment[keyName].id = false);
  //   });
  // }

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // setSelectedTreatment({
    //   ...selectedTreatment,
    //   [name]: event.target.checked,
    // });

    // var array: string[] = [...selectedTreatment];
    // console.log(name);
    // if (array.includes(name)) {
    //   var index = array.indexOf(name);
    //   array.splice(index, 1);
    // } else {
    //   array.push(name);
    // }
    // setSelectedTreatment(array);
    pushTreatments(name);
  };

  const pushTreatments = (name: string) => {
    var array: string[] = [...selectedTreatment];
    console.log(name);
    if (array.includes(name)) {
      var index = array.indexOf(name);
      array.splice(index, 1);
      console.log('removed: ' + array);
    } else {
      array.push(name);
      console.log('added: ' + array);
    }
    if (array.includes('treatments')) {
      var index = array.indexOf('treatments');
      array.splice(index, 1);
    }
    setSelectedTreatment(array);
    // console.log(selectedTreatment);
  };

  // useEffect(() => {
  //   for (var key in treatment) {
  //     var obj = treatment[key];
  //     var defaultSelected: any;
  //     console.log(obj);
  //     for (var prop in obj) {
  //       if (prop === 'treamentId') {
  //         console.log(prop + ' = ' + obj[prop]);
  //         if (Object.values(defaultSelected).indexOf(obj[prop]) <= -1) {
  //           defaultSelected.push(obj[prop]);
  //           console.log(defaultSelected);
  //         }
  //       }
  //     }
  //     console.log(defaultSelected);
  //   }

  // var newTreatments = treatment;
  // var newSelectedTreatment: any = [];
  // Object.entries(newTreatments).forEach(entry => {
  //   if (entry[1] === true) {
  //     newSelectedTreatment.push(entry[0]);
  //   }
  // });
  // // console.log(newSelectedTreatment);
  // setSelectedTreatment(newSelectedTreatment);
  // console.log(selectedTreatment);
  // }, []);
  return (
    <>
      {mapTreatments}
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
        {treatment !== undefined
          ? Object.keys(treatment).map((keyName, i) => {
              // console.log(treatment[keyName]);
              if (treatment[keyName].treatmentType === 0)
                return (
                  <ExpansionPanelDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={treatment.treatment1}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            onChange={handleChange(`${treatment[keyName].id}`)}
                            value={`${treatment[keyName].id}`}
                          />
                        }
                        label={`${treatment[keyName].treatmentName}`}
                      />
                      <p>{`£${treatment[keyName].price} - ${treatment[keyName].duration}mins`}</p>
                      <Divider />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
            })
          : null}
      </ExpansionPanel>
      {/* Panel 2 */}
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            List of treatments #2
          </Typography>
        </ExpansionPanelSummary>
        {treatment !== undefined
          ? Object.keys(treatment).map((keyName, i) => {
              // console.log(treatment[keyName]);
              if (treatment[keyName].treatmentType === 1)
                return (
                  <ExpansionPanelDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={treatment.treatment1}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            onChange={handleChange(`${treatment[keyName].id}`)}
                            value={`${treatment[keyName].id}`}
                          />
                        }
                        label={`${treatment[keyName].treatmentName}`}
                      />
                      <p>{`£${treatment[keyName].price} - ${treatment[keyName].duration}mins`}</p>
                      <Divider />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
            })
          : null}
      </ExpansionPanel>
      {/* PANEL 3 */}
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            List of treatments #3
          </Typography>
        </ExpansionPanelSummary>
        {treatment !== undefined
          ? Object.keys(treatment).map((keyName, i) => {
              // console.log(treatment[keyName]);
              if (treatment[keyName].treatmentType === 2)
                return (
                  <ExpansionPanelDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={treatment.treatment1}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            onChange={handleChange(`${treatment[keyName].id}`)}
                            value={`${treatment[keyName].id}`}
                          />
                        }
                        label={`${treatment[keyName].treatmentName}`}
                      />
                      <p>{`£${treatment[keyName].price} - ${treatment[keyName].duration}mins`}</p>
                      <Divider />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
            })
          : null}
      </ExpansionPanel>
      {/* PANEL 4 */}
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            List of treatments #4
          </Typography>
        </ExpansionPanelSummary>
        {treatment !== undefined
          ? Object.keys(treatment).map((keyName, i) => {
              // console.log(treatment[keyName]);
              if (treatment[keyName].treatmentType === 3)
                return (
                  <ExpansionPanelDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={treatment.treatment1}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            onChange={handleChange(`${treatment[keyName].id}`)}
                            value={`${treatment[keyName].id}`}
                          />
                        }
                        label={`${treatment[keyName].treatmentName}`}
                      />
                      <p>{`£${treatment[keyName].price} - ${treatment[keyName].duration}mins`}</p>
                      <Divider />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
            })
          : null}
      </ExpansionPanel>
      <BookButton treatment={selectedTreatment} {...props}>
        Book Now
      </BookButton>
    </>
  );
};

export default Service;
