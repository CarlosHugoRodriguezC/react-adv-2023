import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}
export const FormikBasicPage = () => {
  const validate = ({ email, firstName, lastName }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = 'Required';
    } else if (firstName.trim().length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!lastName) {
      errors.lastName = 'Required';
    } else if (lastName.trim().length > 15) {
      errors.lastName = 'Must be 10 characters or less';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<FormValues>({
      initialValues: {
        firstName: 'Carlos',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => console.log(values),
      validate,
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
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
            name='lastName'
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
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
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${touched.email && errors.email && 'has-error'}`}
          />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>

        <button type='submit'>Send</button>
      </form>
    </div>
  );
};
