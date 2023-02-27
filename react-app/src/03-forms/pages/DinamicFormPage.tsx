import { Formik, Form, FormikHelpers, FormikValues } from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations || input.validations?.length === 0) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required(rule.message);
    }

    if (rule.type === 'minlength') {
      schema = schema.min((rule as any).value, rule.message);
    }

    if (rule.type === 'email') {
      schema = schema.email(rule.message);
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DinamicFormPage = () => {
  return (
    <div>
      <h1>Dinamic Form Page</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: FormikValues) => console.log(values)}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'text' || type === 'email' || type === 'password') {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    type={type as any}
                  />
                );
              }
              if (type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value='' disabled>
                      Select an option
                    </option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              return <span key={name}>Type not supported</span>;
            })}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
