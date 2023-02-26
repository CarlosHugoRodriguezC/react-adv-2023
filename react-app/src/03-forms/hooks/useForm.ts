import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const reset = () => {
    setFormData({ ...initialState });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    // Properties
    ...formData,
    formData,
    // Methods
    isValidEmail,
    onChange,
    reset,
  };
};