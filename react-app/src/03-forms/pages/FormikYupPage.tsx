import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {
  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      firstName: 'Carlos',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => console.log(values),
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be at least 15 characters.')
        .required('First name is required.'),
      lastName: Yup.string()
        .max(15, 'Must be less than 15 characters.')
        .required('Last name is required.'),
      email: Yup.string()
        .email('Must be a valid email')
        .required('Email is required.'),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            {...getFieldProps('firstName')}
            className={`${
              touched.firstName && errors.firstName && 'has-error'
            }`}
          />
          {touched.firstName && errors.firstName && (
            <span>{errors.firstName}</span>
          )}
        </div>

        <div>
          <label htmlFor='lastName'>LastName</label>
          <input
            type='text'
            {...getFieldProps('lastName')}
            className={`${touched.lastName && errors.lastName && 'has-error'}`}
          />
          {touched.lastName && errors.lastName && (
            <span>{errors.lastName}</span>
          )}
        </div>

        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            {...getFieldProps('email')}
            className={`${touched.email && errors.email && 'has-error'}`}
          />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>

        <button type='submit'>Send</button>
      </form>
    </div>
  );
};
