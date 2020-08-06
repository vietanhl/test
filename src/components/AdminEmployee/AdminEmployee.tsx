import React, { useState, useEffect } from 'react';
import * as api from '../../containers/AdminEmployeeContainer/AdminEmployeeContainer';
import TreatmentList from '../../components/ServiceList';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import AdminButtons from '../../components/AdminButtons/AdminButtons';

interface State extends React.Props<any> {
  id: string;
  name: string;
  email: string;
  treatments: any;
  workdays: any;
}

const AdminEmployee: React.FunctionComponent = (props: any) => {
  const [employee, setEmployee]: any = React.useState<State>({
    id: '',
    name: '',
    email: '',
    treatments: [],
    workdays: '',
  });

  const [event, setEvent] = useState();
  const [editBooking, setEditBooking] = useState(false);
  console.log('event from admin page' + JSON.stringify(event));
  const eventSelected = (ev: any) => {
    setEvent(ev);
    console.log('ev' + JSON.stringify(ev));
    if (editBooking === false) {
      setEditBooking(true);
    }
  };

  useEffect(() => {
    async function fetchMyApi() {
      const response = await api.getAllEmployees();
      console.log(response);
      const eventsMapped = response.map(
        (employeeInfo: {
          ID: any;
          Details: { Name: any; Email: any };
          Treatments: any;
          WorkDays: any;
        }) => {
          return {
            id: employeeInfo.ID,
            name: employeeInfo.Details.Name,
            email: employeeInfo.Details.Email,
            treatments: employeeInfo.Treatments,
            workdays: employeeInfo.WorkDays,
          };
        }
      );
      setEmployee(eventsMapped);
    }
    fetchMyApi();
  }, []);
  // const handleChange = (prop: keyof State) => (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setEmployee({ ...employee, [prop]: event.target.value });
  // };

  // const weekdays = ['Monday', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const [weekdays, setWeekdays] = React.useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const handleDays = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeekdays({ ...weekdays, [event.target.name]: event.target.checked });
  };
  useEffect(() => {
    console.log(weekdays);
  }, [weekdays]);

  return (
    <>
      {Object.keys(employee).map((key, val) => {
        // console.log(employee[val]);
        return (
          <div>
            <h1>{employee[key].name}</h1>
            <form>
              <p>
                Name:
                <input
                  type="text"
                  name="ssfdsfsd"
                  defaultValue={employee[key].name}
                ></input>
              </p>
              <br />
              <p>
                Email:
                <input
                  type="text"
                  name="ssfdsfsd"
                  defaultValue={employee[key].email}
                ></input>
              </p>
              {/* <p>Treatments: {employee[key].treatments}</p>
              <br />
              <p>Work days: {employee[key].workdays}</p> */}
            </form>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Monday" />}
                label="Monday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Tuesday" />}
                label="Tuesday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Wednesday" />}
                label="Wednesday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Thursday" />}
                label="Thursday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Friday" />}
                label="Friday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Saturday" />}
                label="Saturday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Sunday" />}
                label="Sunday"
              />
            </FormGroup>
            <TreatmentList
              preSelectedTreatmentId={employee.treatments}
              parentCallBack={eventSelected}
              {...props}
            />

            <AdminButtons id={employee[key].id} {...props} />
            <p> -------- </p>
          </div>
        );
      })}
    </>
  );
};

export default AdminEmployee;
