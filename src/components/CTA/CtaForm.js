import { Form, FormGroup, Input, Button } from 'reactstrap';
import classes from './CtaForm.module.scss';

function CtaForm() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler} className={classes.form}>
      <FormGroup className={classes.FormGroup}>
        <Input
          required
          className={classes.input}
          id='name'
          placeholder='Name'
          type='text'
        />
      </FormGroup>
      <FormGroup>
        <Input
          required
          className={classes.input}
          id='email'
          placeholder='Email'
          type='email'
        />
      </FormGroup>
      <FormGroup>
        <Input
          required
          className={`${classes.input} ${classes.textarea}`}
          placeholder={`Message (Don't hold back)`}
          id='exampleText'
          type='textarea'
        />
      </FormGroup>
      <Button color='secondary'>Submit</Button>
    </Form>
  );
}

export default CtaForm;
