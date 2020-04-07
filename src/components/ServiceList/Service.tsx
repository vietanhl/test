import React, { useState, useEffect } from 'react';
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
      fontFamily: 'Abril Fatface',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontFamily: 'Abril Fatface',
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);

const Service: React.FunctionComponent<any> = (props: any) => {
  const [treatment, setTreatment] = useState();
  const [treatmentName, setTreatmentName] = useState(['NoTreatmentAvailable']);
  useEffect(() => {
    async function fetchMyApi() {
      const res = await api.getTreatments();
      setTreatment(res);
    }
    fetchMyApi();
  }, []);

  // Saving the information when navigating back
  // useEffect(() => {
  //   console.log(
  //     'inside service: ' + JSON.stringify(props.history.location.state)
  //   );
  //   if (props.history.location.state.treatmentId !== undefined) {
  //     setSelectedTreatment(props.history.location.state.treatmentId);
  //     setTreatmentName(props.history.location.state.treatmentName);
  //   }
  // }, [props]);

  const mapTreatments = () => {
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
                      onChange={handleChange(
                        treatment[keyName].id,
                        treatment[keyName].treatmentName
                      )}
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
  const beforeTreatmentSelectionState = () => {
    if (treatment === null || treatment === undefined) {
      return null;
    } else {
      Object.keys(treatment).map((keyName, i) => {
        return console.log(treatment[keyName].id);
      });
    }
  };

  const [selectedTreatment, setSelectedTreatment] = useState([0]);
  useEffect(() => {
    props.parentCallBack(selectedTreatment, treatmentName);
  }, [treatment, treatmentName, props, selectedTreatment]);
  //   () => {
  //   if (treatment === null || treatment === undefined) {
  //     return null;
  //   }
  //   Object.keys(treatment).map((keyName, i) => {
  //     return (treatment[keyName].id = false);
  //   });
  // }

  const handleChange = (name: number, treatmentName: string) => (
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
    pushTreatments(name, treatmentName);
  };

  const pushTreatments = (name: number, tName: string) => {
    var array: number[] = [...selectedTreatment];
    var treatmentNameArray: string[] = [...treatmentName];
    console.log(name);
    if (array.includes(name)) {
      var index = array.indexOf(name);
      array.splice(index, 1);
      console.log('removed: ' + array);
    } else {
      array.push(name);
      console.log('added: ' + array);
    }
    if (array.includes(0)) {
      index = array.indexOf(0);
      array.splice(index, 1);
    }
    setSelectedTreatment(array);
    // TODO: if treatment name is the same, we can fix this by calling the treatment/{id} endpoint
    if (treatmentNameArray.includes(tName)) {
      index = treatmentNameArray.indexOf(tName);
      treatmentNameArray.splice(index, 1);
      console.log(treatmentNameArray);
    } else {
      treatmentNameArray.push(tName);
      console.log(treatmentNameArray);
    }
    if (treatmentNameArray.includes('NoTreatmentAvailable')) {
      index = treatmentNameArray.indexOf('NoTreatmentAvailable');
      treatmentNameArray.splice(index, 1);
    }
    console.log('ARRAY ' + treatmentNameArray);
    setTreatmentName(treatmentNameArray);
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
              if (treatment[keyName].treatmentType === 0) {
                return (
                  <ExpansionPanelDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={treatment.treatment1}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            onChange={handleChange(
                              treatment[keyName].id,
                              treatment[keyName].treatmentName
                            )}
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
              } else {
                return null;
              }
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
              if (treatment[keyName].treatmentType === 1) {
                return (
                  <ExpansionPanelDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={treatment.treatment1}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            onChange={handleChange(
                              treatment[keyName].id,
                              treatment[keyName].treatmentName
                            )}
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
              } else {
                return null;
              }
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
              if (treatment[keyName].treatmentType === 2) {
                return (
                  <ExpansionPanelDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={treatment.treatment1}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            onChange={handleChange(
                              treatment[keyName].id,
                              treatment[keyName].treatmentName
                            )}
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
              } else {
                return null;
              }
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
              if (treatment[keyName].treatmentType === 3) {
                return (
                  <ExpansionPanelDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={treatment.treatment1}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            onChange={handleChange(
                              treatment[keyName].id,
                              treatment[keyName].treatmentName
                            )}
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
              } else {
                return null;
              }
            })
          : null}
      </ExpansionPanel>
    </>
  );
};

export default Service;
