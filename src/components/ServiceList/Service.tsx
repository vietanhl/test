import React, { useState, useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { ThemeProvider } from '@material-ui/styles';
import {
  Theme,
  createStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as api from '../../containers/TreatmentContainer/TreatmentContainer';
import Divider from '@material-ui/core/Divider';
import { Spinner } from 'reactstrap';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      fontFamily: 'Abril Fatface',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontFamily: 'Abril Fatface',
    },
  })
);

const theme = createMuiTheme({
  typography: {
    body1: {
      fontFamily: 'Abril Fatface',
    },
  },
});

const Service: React.FunctionComponent<any> = (
  props: any,
  preSelectedTreatmentName?: any,
  preSelectedTreatmentId?: any
) => {
  const [treatment, setTreatment]: any = useState();
  const [treatmentName, setTreatmentName] = useState(['NoTreatmentAvailable']);
  const [selectedTreatment, setSelectedTreatment] = useState([0]);
  const [treatmentType, setTreatmentType] = useState([]);

  useEffect(() => {
    async function fetchMyApi() {
      const res = await api.getTreatments();
      setTreatment(res);
      var treatmentTypes: any = [];
      const treatmentTypeRes = await api.getTreatmentTypes();
      treatmentTypeRes.map((treatmentType: any) => {
        // console.log(treatmentType.Type);
        treatmentTypes.push(treatmentType.Type);
      });
      setTreatmentType(treatmentTypes);
      console.log(treatmentTypeRes);
    }
    fetchMyApi();

    // SET PRE-SELECTED TREATMENTS HERE.
    // pushTreatments('5ef3e49c12835f317dea66fa', 'Pedicure');
    // console.log('PRE-SELECTED TREATMENTS - ' + JSON.stringify(props));
    // console.log('PRE-SELECTED TREATMENTS - ' + props.preSelectedTreatmentId);
    // console.log('PRE-SELECTED TNAME ' + props.preSelectTreatmentName);
    // console.log('TYPEOF' + props.preSelectedTreatmentId);
    // var treatmentIds: string | any[] = [];
    // var treatmentNames: string | any[] = [];
    // if (props.preSelectedTreatmentId !== undefined) {
    //   treatmentIds = Object.values(props.preSelectedTreatmentId);
    // }
    // if (props.preSelectTreatmentName !== undefined) {
    //   treatmentNames = Object.values(props.preSelectTreatmentName);
    // }
    // // pushTreatments(treatmentIds[0], treatmentNames[0]);
    // for (let i = 0; i < treatmentIds.length; i++) {
    //   console.log(treatmentNames[i]);
    //   console.log(treatmentIds[i]);
    //   pushTreatments(treatmentIds[i], treatmentNames[i]);
    // }
  }, []);

  useEffect(() => {
    // console.log('PROPS' + JSON.stringify(preSelectedTreatmentName));
    // console.log('PROPS' + preSelectedTreatmentId);
    console.log('treatment types: ' + treatmentType);
  }, [treatmentType]);
  const mapTreatments = () => {
    // pushTreatments('5ef3e49c12835f317dea66fa', 'Pedicure');
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

  useEffect(() => {
    props.parentCallBack(selectedTreatment, treatmentName);
  }, [treatment, treatmentName, props, selectedTreatment]);

  const handleChange = (name: any, treatmentName: string) => () =>
    // event: React.ChangeEvent<HTMLInputElement>
    {
      pushTreatments(name, treatmentName);
    };

  const pushTreatments = (name: any, tName: string) => {
    var array: any[] = [...selectedTreatment];
    var treatmentNameArray: string[] = [...treatmentName];
    console.log('treatment ID to be pushed: ' + array);
    console.log('treatment Name to be pushed: ' + treatmentNameArray);
    console.log('Treatment ID ' + name);
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
    // array == treatment ID here.
    setSelectedTreatment(array);
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

  // Preselect treatments
  // useEffect(() => {
  // var listOfPreSelectedTreatmentsIds = ['5ef3e49c12835f317dea66fa'];
  // var listOfPreSelectedTreatmentNames = ['Full set'];
  // for (
  //   let i = 0;
  //   i < listOfPreSelectedTreatmentsIds.length ||
  //   i < listOfPreSelectedTreatmentNames.length;
  //   i++
  // ) {
  //   pushTreatments(
  //     listOfPreSelectedTreatmentsIds[i],
  //     listOfPreSelectedTreatmentNames[i]
  //   );
  // }
  // pushTreatments('5ef3e49c12835f317dea66fa', 'Full set');
  // }, []);

  useEffect(() => {
    console.log('PRE-SELECTED TREATMENTS - ' + JSON.stringify(props));
    console.log('PRE-SELECTED TREATMENTS - ' + props.preSelectedTreatmentId);
    console.log('PRE-SELECTED TNAME ' + props.preSelectTreatmentName);
    console.log('TYPEOF' + props.preSelectedTreatmentId);
    var treatmentIds: string | any[] = [];
    var treatmentNames: string | any[] = [];
    if (props.preSelectedTreatmentId !== undefined) {
      treatmentIds = Object.values(props.preSelectedTreatmentId);
    }
    if (props.preSelectTreatmentName !== undefined) {
      treatmentNames = Object.values(props.preSelectTreatmentName);
    }
    // pushTreatments(treatmentIds[0], treatmentNames[0]);
    for (let i = 0; i < treatmentIds.length; i++) {
      console.log(treatmentNames[i]);
      console.log(treatmentIds[i]);
      pushTreatments(treatmentIds[i], treatmentNames[i]);
    }
    // for (const item in props.preSelectedTreatmentId) {
    //   console.log('obj' + props.preSelectedTreatmentId[item]);
    //   pushTreatments(props.preSelectedTreatmentId[item]);
    // }
  }, [props.preSelectedTreatmentId]);

  // TODO: need a useEffect that will set Selected Treatment as a prop.
  const isDefaultChecked = (treatmentId: any) => {
    if (selectedTreatment.includes(treatmentId)) {
      // console.log('before decision' + typeof selectedTreatment[0]);
      // console.log('decision: true ' + typeof treatmentId);
      return true;
    } else {
      // console.log(selectedTreatment);
      // console.log('decision: false ' + treatmentId);
      return false;
    }
  };

  // -----------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      {treatment === undefined ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <ThemeProvider theme={theme}>
          {mapTreatments}
          {treatmentType.map((x: any) => {
            return (
              <ExpansionPanel
                defaultExpanded={x === treatmentType[0] ? true : false}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{x}</Typography>
                </ExpansionPanelSummary>
                {treatment !== undefined
                  ? Object.keys(treatment).map((keyName, i) => {
                      // console.log(treatment[keyName]);
                      if (treatment[keyName].About.TreatmentType === x) {
                        return (
                          <ExpansionPanelDetails>
                            <FormGroup>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={isDefaultChecked(
                                      treatment[keyName].ID
                                    )}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                    onChange={handleChange(
                                      treatment[keyName].ID,
                                      treatment[keyName].About.TreatmentName
                                    )}
                                    value={`${treatment[keyName].ID}`}
                                  />
                                }
                                label={`${treatment[keyName].About.TreatmentName}`}
                              />
                              <p>{`£${treatment[keyName].About.Price} - ${treatment[keyName].About.Duration}mins`}</p>
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
            );
          })}
        </ThemeProvider>
        // <ThemeProvider theme={theme}>
        //   {mapTreatments}
        //   <ExpansionPanel defaultExpanded={true}>
        //     <ExpansionPanelSummary
        //       expandIcon={<ExpandMoreIcon />}
        //       aria-controls="panel1a-content"
        //       id="panel1a-header"
        //     >
        //       <Typography className={classes.heading}>Natural Care</Typography>
        //     </ExpansionPanelSummary>

        //     {treatment !== undefined
        //       ? Object.keys(treatment).map((keyName, i) => {
        //           if (
        //             treatment[keyName].About.TreatmentType === 'Natural Care'
        //           ) {
        //             return (
        //               <ExpansionPanelDetails>
        //                 <FormGroup>
        //                   <FormControlLabel
        //                     control={
        //                       <Checkbox
        //                         checked={isDefaultChecked(
        //                           treatment[keyName].ID
        //                         )}
        //                         icon={<FavoriteBorder />}
        //                         checkedIcon={<Favorite />}
        //                         onChange={handleChange(
        //                           treatment[keyName].ID,
        //                           treatment[keyName].About.TreatmentName
        //                         )}
        //                         value={`${treatment[keyName].ID}`}
        //                       />
        //                     }
        //                     label={`${treatment[keyName].About.TreatmentName} `}
        //                   />
        //                   <p>{`£${treatment[keyName].About.Price} - ${treatment[keyName].About.Duration}mins`}</p>
        //                   <Divider />
        //                 </FormGroup>
        //               </ExpansionPanelDetails>
        //             );
        //           } else {
        //             return null;
        //           }
        //         })
        //       : null}
        //   </ExpansionPanel>
        //   {/* Panel 2 */}
        //   <ExpansionPanel>
        //     <ExpansionPanelSummary
        //       expandIcon={<ExpandMoreIcon />}
        //       aria-controls="panel1a-content"
        //       id="panel1a-header"
        //     >
        //       <Typography className={classes.heading}>SNS</Typography>
        //     </ExpansionPanelSummary>
        //     {treatment !== undefined
        //       ? Object.keys(treatment).map((keyName, i) => {
        //           // console.log(treatment[keyName]);
        //           if (treatment[keyName].About.TreatmentType === 'SNS') {
        //             return (
        //               <ExpansionPanelDetails>
        //                 <FormGroup>
        //                   <FormControlLabel
        //                     control={
        //                       <Checkbox
        //                         checked={isDefaultChecked(
        //                           treatment[keyName].ID
        //                         )}
        //                         icon={<FavoriteBorder />}
        //                         checkedIcon={<Favorite />}
        //                         onChange={handleChange(
        //                           treatment[keyName].ID,
        //                           treatment[keyName].About.TreatmentName
        //                         )}
        //                         value={`${treatment[keyName].ID}`}
        //                       />
        //                     }
        //                     label={`${treatment[keyName].About.TreatmentName}`}
        //                   />
        //                   <p>{`£${treatment[keyName].About.Price} - ${treatment[keyName].About.Duration}mins`}</p>
        //                   <Divider />
        //                 </FormGroup>
        //               </ExpansionPanelDetails>
        //             );
        //           } else {
        //             return null;
        //           }
        //         })
        //       : null}
        //   </ExpansionPanel>
        //   {/* PANEL 3 */}
        //   <ExpansionPanel>
        //     <ExpansionPanelSummary
        //       expandIcon={<ExpandMoreIcon />}
        //       aria-controls="panel1a-content"
        //       id="panel1a-header"
        //     >
        //       <Typography className={classes.heading}>Acrylic</Typography>
        //     </ExpansionPanelSummary>
        //     {treatment !== undefined
        //       ? Object.keys(treatment).map((keyName, i) => {
        //           // console.log(treatment[keyName]);
        //           if (treatment[keyName].About.TreatmentType === 'Acrylic') {
        //             return (
        //               <ExpansionPanelDetails>
        //                 <FormGroup>
        //                   <FormControlLabel
        //                     control={
        //                       <Checkbox
        //                         checked={isDefaultChecked(
        //                           treatment[keyName].ID
        //                         )}
        //                         icon={<FavoriteBorder />}
        //                         checkedIcon={<Favorite />}
        //                         onChange={handleChange(
        //                           treatment[keyName].ID,
        //                           treatment[keyName].About.TreatmentName
        //                         )}
        //                         value={`${treatment[keyName].ID}`}
        //                       />
        //                     }
        //                     label={`${treatment[keyName].About.TreatmentName}`}
        //                   />
        //                   <p>{`£${treatment[keyName].About.Price} - ${treatment[keyName].About.Duration}mins`}</p>
        //                   <Divider />
        //                 </FormGroup>
        //               </ExpansionPanelDetails>
        //             );
        //           } else {
        //             return null;
        //           }
        //         })
        //       : null}
        //   </ExpansionPanel>
        //   {/* PANEL 4 */}
        //   <ExpansionPanel>
        //     <ExpansionPanelSummary
        //       expandIcon={<ExpandMoreIcon />}
        //       aria-controls="panel1a-content"
        //       id="panel1a-header"
        //     >
        //       <Typography className={classes.heading}>Gel Powder</Typography>
        //     </ExpansionPanelSummary>
        //     {treatment !== undefined
        //       ? Object.keys(treatment).map((keyName, i) => {
        //           // console.log(treatment[keyName]);
        //           if (treatment[keyName].About.TreatmentType === 'Gel Powder') {
        //             return (
        //               <ExpansionPanelDetails>
        //                 <FormGroup>
        //                   <FormControlLabel
        //                     control={
        //                       <Checkbox
        //                         checked={isDefaultChecked(
        //                           treatment[keyName].ID
        //                         )}
        //                         icon={<FavoriteBorder />}
        //                         checkedIcon={<Favorite />}
        //                         onChange={handleChange(
        //                           treatment[keyName].ID,
        //                           treatment[keyName].About.TreatmentName
        //                         )}
        //                         value={`${treatment[keyName].ID}`}
        //                       />
        //                     }
        //                     label={`${treatment[keyName].About.TreatmentName}`}
        //                   />
        //                   <p>{`£${treatment[keyName].About.Price} - ${treatment[keyName].About.Duration}mins`}</p>
        //                   <Divider />
        //                 </FormGroup>
        //               </ExpansionPanelDetails>
        //             );
        //           } else {
        //             return null;
        //           }
        //         })
        //       : null}
        //   </ExpansionPanel>
        // </ThemeProvider>
      )}
    </>
  );
};

export default Service;
