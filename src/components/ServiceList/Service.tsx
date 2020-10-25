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
        treatmentTypes.push(treatmentType.Type);
      });
      setTreatmentType(treatmentTypes);
      console.log(treatmentTypeRes);
    }
    fetchMyApi();    
  }, []);

  useEffect(() => {    
    console.log('treatment types: ' + treatmentType);
  }, [treatmentType]);
  const mapTreatments = () => {    
    var listOfTreatmentTypes: any[] = [];

    if (treatment === null || treatment === undefined) {
      return null;
    } else {
      for (var key in treatment) {
        var obj = treatment[key];

        for (var prop in obj) {
          if (prop === 'treatmentType') {            
            if (Object.values(listOfTreatmentTypes).indexOf(obj[prop]) <= -1) {
              listOfTreatmentTypes.push(obj[prop]);
            }
          }
        }
      }

      if (Object.values(listOfTreatmentTypes).indexOf(2)) {
        Object.keys(treatment).map((keyName, i) => {          
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
  };

  useEffect(() => {
    mapTreatments();    
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
    console.log('existing ' + array);
    console.log('existing: ' + treatmentNameArray);
    console.log('Treatment ID to be pushed' + name);
    console.log('Treatment Name to be pushed' + tName);
  
    if (array.includes(name)) {
      var index = array.indexOf(name);      
      array.splice(index, 1);      
    } else {
      array.push(name);      
    }
    setSelectedTreatment(array);
    if (treatmentNameArray.includes(tName)) {
      index = treatmentNameArray.indexOf(tName);
      treatmentNameArray.splice(index, 1);      
    } else {
      treatmentNameArray.push(tName);      
    }
    if (treatmentNameArray.includes('NoTreatmentAvailable')) {
      index = treatmentNameArray.indexOf('NoTreatmentAvailable');
      treatmentNameArray.splice(index, 1);
    }    
    setTreatmentName(treatmentNameArray);
  };

  //PRE-SELECT TREATMENTS
  useEffect(() => {
    var treatmentIds: string | any[] = [];
    var treatmentNames: string | any[] = [];
   
    if (props.preSelectedTreatmentId !== undefined) {
      treatmentIds = Object.values(props.preSelectedTreatmentId);
    }
    if (props.preSelectTreatmentName !== undefined) {
      treatmentNames = Object.values(props.preSelectTreatmentName);
    }        
    var array: any[] = [];
    var treatmentNameArray: string[] = [];
    for (let i = 0; i < treatmentIds.length; i++) {   
    if (array.includes(treatmentIds[i])) {
      var index = array.indexOf(treatmentIds[i]);      
      array.splice(index, 1);            
    } else {
      array.push(treatmentIds[i]);      
    }    
    setSelectedTreatment(array);
    if (treatmentNameArray.includes(treatmentNames[i])) {
      index = treatmentNameArray.indexOf(treatmentNames[i]);
      treatmentNameArray.splice(index, 1);      
    } else {
      treatmentNameArray.push(treatmentNames[i]);     
    }
    if (treatmentNameArray.includes('NoTreatmentAvailable')) {
      index = treatmentNameArray.indexOf('NoTreatmentAvailable');
      treatmentNameArray.splice(index, 1);
    }
    setTreatmentName(treatmentNameArray);   
    }  
  }, [props.preSelectedTreatmentId]);

  const isDefaultChecked = (treatmentId: any) => {
    if (selectedTreatment.includes(treatmentId)) {      
      return true;
    } else {
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
      )}
    </>
  );
};

export default Service;
