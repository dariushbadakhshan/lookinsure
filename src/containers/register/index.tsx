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
import { Button, Typography } from '@ui';

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
  const router = useRouter();

  const form = useForm<formFields>({
    resolver: zodResolver(formSchema),
    defaultValues: initialFormData,
  });

  const handleRegister = (formData: formFields) => {
    Cookies.set('firstname', formData.firstname);
    Cookies.set('lastname', formData.lastname);
    Cookies.set('mobile', formData.mobile);

    router.push('/insurance');
  };

  return (
    <div className={classes.form}>
      <Typography variant="title_large_medium">{shared.signUp}</Typography>
      <div className={classes.name}>
        <FormTextInput
          name="firstname"
          label={registerFormText.name}
          inputSize="medium"
          control={form.control}
          maxLength={20}
        />
        <FormTextInput
          name="lastname"
          label={registerFormText.lastname}
          inputSize="medium"
          control={form.control}
          maxLength={20}
        />
      </div>
      <FormTextInput
        name="mobile"
        label={registerFormText.mobile}
        inputSize="medium"
        type="number"
        control={form.control}
        maxLength={11}
      />

      <FormTextInput
        name="password"
        label={registerFormText.password}
        inputSize="medium"
        control={form.control}
        maxLength={10}
        preventPersian
      />

      <div className={classes.submit}>
        <Button
          size="medium"
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
