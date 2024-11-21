'use client';
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { GiPadlock } from 'react-icons/gi';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginSchema, LoginSchema } from '@/lib/schemas/LoginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ActionResult } from '@/types';
import { signInUser } from '@/app/actions/authActions';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });
  const router = useRouter();
  async function onSubmit(data: LoginSchema) {
    let result: ActionResult<string>;
    result = await signInUser(data);
    if (result.status === 'success') {
      router.push('/members');
      router.refresh();
    } else {
      toast.error(result.error as string);
    }
  }
  return (
    <Card className='w-2/5 mx-auto'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-2 items-center text-default'>
          <div className='flex items-center gap-3'>
            <GiPadlock size={30} />
            <h2 className='text-3xl font-semibold'>Login</h2>
          </div>
          <p className='text-neutral-500'>Welcome back to MatchMe!</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
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
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
