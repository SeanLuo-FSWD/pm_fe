import { useState } from "react";

export default function FormManager({ initialValues, children }: any) {
  const [values, setValues] = useState({ ...initialValues });

  const setValue = (name: string, value: string | number | boolean) => {
    if (name in values) {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const clearValue = () => {
    setValues(initialValues);
  };

  return children({
    values,
    setValue,
    clearValue,
  });
}
