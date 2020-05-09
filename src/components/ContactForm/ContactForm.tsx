import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
      input: {
        fontFamily: 'Abril Fatface',
      },
    },
  })
);

const ContactForm: React.FunctionComponent<any> = (props: any) => {
  const classes = useStyles();
  // console.log('contact form ' + JSON.stringify(props));

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
    props.parentCallBack(values);
  }, [values, props]);

  return (
    <div>
      <form className={classes.root} noValidate>
        <TextField
          required
          id="first-name"
          label="First name"
          value={values.firstName}
          onChange={handleChange('firstName')}
        />
        <TextField
          required
          id="last-name"
          label="Last name"
          value={values.lastName}
          onChange={handleChange('lastName')}
        />
      </form>
      <form className={classes.root}>
        <TextField
          required
          id="email"
          label="Email address"
          value={values.email}
          onChange={handleChange('email')}
        />
      </form>
      <form className={classes.root} noValidate>
        <TextField
          required
          id="phone"
          label="Phone number"
          value={values.phone}
          onChange={handleChange('phone')}
        />
      </form>
      <form className={classes.root} noValidate>
        <TextField
          id="comments"
          label="Comments"
          multiline
          rows="4"
          variant="outlined"
          value={values.comments}
          onChange={handleChange('comments')}
        />
      </form>

      <FormGroup>
        <p>
          <FormControlLabel
            control={<Checkbox onChange={handleClickTerms} />}
            label=""
          />
          I agree to the following cancellation policy: <br />
          No cancellations or changes allowed within 24 hours of the appointment
        </p>
      </FormGroup>
    </div>
  );
};

export default ContactForm;
