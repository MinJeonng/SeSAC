'use client';

import { useFormContext } from 'react-hook-form';

export default function MyButton({ children }) {
  const { formState } = useFormContext();
  return <button disabled={!formState.isValid}>{children}</button>;
}
