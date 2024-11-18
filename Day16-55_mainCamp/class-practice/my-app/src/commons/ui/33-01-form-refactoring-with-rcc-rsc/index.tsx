'use client';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Form<formSchema extends FieldValues>({
  schema,
  children,
  useInitialize,
}) {
  const methods = useForm<formSchema>({
    resolver: zodResolver(schema),
    // onChange 될때마다 검사해줘
    mode: 'onChange',
  });

  const { onSubmit } = useInitialize(methods);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
