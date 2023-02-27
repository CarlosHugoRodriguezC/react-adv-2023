// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import {
  FormikAbstractation,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage,
  DinamicFormPage,
} from '../03-forms/pages/';

interface Route {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  // {
  //   to: '/lazy1',
  //   path: 'lazy1',
  //   Component: LazyPage1,
  //   name: 'Lazy-1',
  // },
  // {
  //   to: '/lazy2',
  //   path: 'lazy2',
  //   Component: LazyPage2,
  //   name: 'Lazy-2',
  // },
  // {
  //   to: '/lazy3',
  //   path: 'lazy3',
  //   Component: LazyPage3,
  //   name: 'Lazy-3',
  // },
  {
    to: '/register',
    path: 'register',
    Component: RegisterPage,
    name: 'Register Page',
  },
  {
    to: '/formik-basic',
    path: 'formik-basic',
    Component: FormikBasicPage,
    name: 'Formik Basic Page',
  },
  {
    to: '/formik-yup',
    path: 'formik-yup',
    Component: FormikYupPage,
    name: 'Formik Yup Page',
  },
  {
    to: '/formik-components',
    path: 'formik-components',
    Component: FormikComponents,
    name: 'Formik Components Page',
  },
  {
    to: '/formik-abstratation',
    path: 'formik-abstratation',
    Component: FormikAbstractation,
    name: 'Formik Abstractation Page',
  },
  {
    to: '/register-formik',
    path: 'register-formik',
    Component: RegisterFormikPage,
    name: 'Register Formik Page',
  },
  {
    to: '/dinamic-form',
    path: 'dinamic-form',
    Component: DinamicFormPage,
    name: 'Dinamic Form Page',
  },
];
