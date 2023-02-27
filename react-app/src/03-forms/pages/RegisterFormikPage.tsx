import { Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
  const onSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          rePassword: '',
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Email must be a valid email.')
            .required('Email is required.'),
          name: Yup.string()
            .min(2, 'Name must be at least 2 characters.')
            .max(15, 'Name must be less than 15 characters.')
            .required('Name is required.'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required.'),
          rePassword: Yup.string()
            .min(6)
            .oneOf([Yup.ref('password')], 'Passwords must match.')
            .required('Confirm password is required.'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label={'Name'}
              name={'name'}
              placeholder={'Jhon Doe'}
              type='text'
            />
            <MyTextInput
              label={'Email'}
              name={'email'}
              placeholder={'jhondoe@mail.com'}
              type='email'
            />
            <MyTextInput
              label={'Password'}
              name={'password'}
              placeholder={'*******'}
              type={'password'}
            />
            <MyTextInput
              label={'Confirm Password'}
              name={'rePassword'}
              placeholder={'*******'}
              type={'password'}
            />
            <button type='submit'>Create</button>
            <button type='button' onClick={formik.handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
