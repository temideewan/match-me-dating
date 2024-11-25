'use client';
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { GiPadlock } from 'react-icons/gi';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerSchema, RegisterSchema } from '@/lib/schemas/RegisterSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '@/app/actions/authActions';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, errors },
  } = useForm<RegisterSchema>({
    // resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });
  async function onSubmit(data: RegisterSchema) {
    const result = await registerUser(data);
    if (result.status !== 'success') {
      if (Array.isArray(result.error)) {
        result.error.forEach((e: any) => {
          const fieldName = e.path.join('.') as 'email' | 'name' | 'password';
          setError(fieldName, { message: e.message });
        });
      } else {
        setError('root.serverError', { message: result.error });
      }
      return;
    }
    console.log('registered successfully')
  }
  return (
    <Card className='w-2/5 mx-auto'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-2 items-center text-default'>
          <div className='flex items-center gap-3'>
            <GiPadlock size={30} />
            <h2 className='text-3xl font-semibold'>Register</h2>
          </div>
          <p className='text-neutral-500'>Welcome to NextMatch!</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <Input
              label='Name'
              defaultValue=''
              variant='bordered'
              {...register('name')}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message as String}
            />
            <Input
              label='Email'
              defaultValue=''
              variant='bordered'
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as String}
            />
            <Input
              label='Password'
              variant='bordered'
              type='password'
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as String}
            />
            <Button
              type='submit'
              color='default'
              fullWidth
              isDisabled={!isValid}
            >
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
