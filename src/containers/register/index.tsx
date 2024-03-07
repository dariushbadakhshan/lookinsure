'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Cookies from 'js-cookie';

import { FormTextInput } from '@components';
import { registerFormٍErrorText, registerFormText, shared } from '@constants';
import {
  persianCharacterRegex,
  mobileRegex,
  passwordRegex,
  englishCharacterRegex,
} from '@shared';
import { Button } from '@ui';

import classes from './register.module.scss';

const formSchema = z.object({
  firstname: z
    .string()
    .min(1, registerFormٍErrorText.emptyFirstname)
    .regex(persianCharacterRegex, registerFormٍErrorText.wrongFirstname),
  lastname: z
    .string()
    .min(1, registerFormٍErrorText.emptyLastname)
    .regex(persianCharacterRegex, registerFormٍErrorText.wrongLastname),
  mobile: z
    .string()
    .min(1, { message: registerFormٍErrorText.emptyMobile })
    .max(11, { message: registerFormٍErrorText.shortMobile })
    .regex(mobileRegex, registerFormٍErrorText.wrongMobile),
  password: z
    .string()
    .min(1, registerFormٍErrorText.emptyPassword)
    .regex(englishCharacterRegex, registerFormٍErrorText.notEnPassword)
    .regex(passwordRegex, registerFormٍErrorText.wrongPassword),
});

type formFields = z.infer<typeof formSchema>;

const initialFormData = {
  firstname: '',
  lastname: '',
  mobile: '',
  password: '',
};

const RegisterPage = () => {
  const Router = useRouter();

  const form = useForm<formFields>({
    resolver: zodResolver(formSchema),
    defaultValues: initialFormData,
  });

  const handleRegister = (formData: formFields) => {
    Cookies.set('username', formData.firstname);
    Router.push('/insurance');
  };

  return (
    <div className={classes.form}>
      <FormTextInput
        name="firstname"
        label={registerFormText.name}
        isClearable={false}
        inputSize="large"
        control={form.control}
        maxLength={20}
      />
      <FormTextInput
        name="lastname"
        label={registerFormText.lastname}
        isClearable={false}
        inputSize="large"
        control={form.control}
        maxLength={20}
      />
      <FormTextInput
        name="mobile"
        label={registerFormText.mobile}
        isClearable={false}
        inputSize="large"
        type="number"
        control={form.control}
        maxLength={11}
      />

      <FormTextInput
        name="password"
        label={registerFormText.password}
        isClearable={false}
        inputSize="large"
        control={form.control}
        maxLength={10}
      />

      <div className={classes.submit}>
        <Button
          size="large"
          fullWidth
          onClick={form.handleSubmit(handleRegister)}
        >
          {shared.signUp}
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
