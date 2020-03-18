import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import OrderButton from '../OrderButton/OrderButton';

interface State extends React.Props<any> {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments: string;
  terms: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  })
);

const ContactForm: React.FunctionComponent<State> = (props: any) => {
  const classes = useStyles();
  console.log('contact form ' + JSON.stringify(props));

  // console.log('CONTACT FORM - ' + JSON.stringify(props.location.state));
  const [values, setValues] = React.useState<State>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
    terms: false,
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickTerms = () => {
    setValues({ ...values, terms: !values.terms });
  };
  useEffect(() => {
    // console.log('FORM - ' + JSON.stringify(values));
  }, [values]);

  return (
    <div>
      <form className={classes.root} noValidate>
        <TextField
          required
          id="standard-basic"
          label="First name"
          value={values.firstName}
          onChange={handleChange('firstName')}
        />
        <TextField
          required
          id="standard-basic"
          label="Last name"
          value={values.lastName}
          onChange={handleChange('lastName')}
        />
      </form>
      <form className={classes.root} noValidate>
        <TextField
          required
          id="standard-basic"
          label="Email address"
          value={values.email}
          onChange={handleChange('email')}
        />
      </form>
      <form className={classes.root} noValidate>
        <TextField
          required
          id="standard-basic"
          label="Phone number"
          value={values.phone}
          onChange={handleChange('phone')}
        />
      </form>
      <form className={classes.root} noValidate>
        <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows="4"
          variant="outlined"
          value={values.comments}
          onChange={handleChange('comments')}
        />
      </form>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleClickTerms}
              // value={false ? false : true}
            />
          }
          label="I agree to the following cancellation policy:"
        />
        <p>
          No cancellations or changes allowed within 24 hours of the appointment
        </p>
      </FormGroup>
      <OrderButton children={values} {...props} />
    </div>
  );
};

export default ContactForm;
