import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AdminEmployee from '../AdminEmployee/AdminEmployee';
import TextField from '@material-ui/core/TextField';
import TreatmentList from '../../components/ServiceList';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
// const [treatmentSelected, setTreatmentSelected] = useState();
// const treatmentPicked = (ev: any) => {
//   setTreatmentSelected(ev);
// };

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  // const [treatmentSelected, setTreatmentSelected] = useState();
  const treatmentPicked = (ev: any) => {
    console.log('treatment picked ' + ev);
    // setTreatmentSelected(ev);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Employees" {...a11yProps(0)} />
          <Tab label="Treatments" {...a11yProps(1)} />
          <Tab label="Opening Hours" {...a11yProps(2)} />
          {/* <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AdminEmployee />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Edit treatment
        <form>
          <TextField
            required
            id="treatment-name"
            label="Treatment name"
            // value={values.firstName}
            // onChange={handleChange('firstName')}
          />
        </form>
        {/* {treatmentSelected} */}
        <TreatmentList parentCallBack={treatmentPicked} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Opening hours
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
