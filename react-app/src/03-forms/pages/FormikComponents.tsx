import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {
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
            <div>
              <label htmlFor='firstName'>First Name</label>
              <Field name='firstName' type='text' />
              <ErrorMessage name='firstName' component='span' />
            </div>
            <div>
              <label htmlFor='lastName'>Last Name</label>
              <Field name='lastName' type='text' />
              <ErrorMessage name='lastName' component='span' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <Field name='email' type='text' />
              <ErrorMessage name='email' component='span' />
            </div>
            <div>
              <label htmlFor='jobType'>Job Type</label>
              <Field name='jobType' as='select'>
                <option value='' disabled>
                  Select One
                </option>
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='it-senior'>IT Senior</option>
                <option value='it-jr'>IT Jr</option>
              </Field>
              <ErrorMessage name='jobType' component='span' />
            </div>
            <div>
              <label>
                <Field name='terms' type='checkbox' />
                Terms & Conditions
              </label>
              <ErrorMessage name='terms' component='span' />
            </div>

            <button type='submit'>Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
