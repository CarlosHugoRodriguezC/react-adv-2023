import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckBox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>

      <Formik
        initialValues={{
          firstName: 'Carlos',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be at least 15 characters.')
            .required('First name is required.'),
          lastName: Yup.string()
            .max(15, 'Must be less than 15 characters.')
            .required('Last name is required.'),
          email: Yup.string()
            .email('Must be a valid email')
            .required('Email is required.'),
          terms: Yup.boolean().isTrue('Must be accepted.'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Option not allowed.')
            .required('Job type is required.'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label='First Name' name='firstName' />
            <MyTextInput label='Last Name' name='lastName' />
            <MyTextInput label='Email' name='email' type='email' />

            <MySelect label={'Job Type'} name='jobType'>
              <option value='' disabled>
                Select One
              </option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr</option>
            </MySelect>

            <MyCheckBox label='Terms & Conditions' name='terms' />

            <button type='submit'>Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
