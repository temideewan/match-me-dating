import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { GoSmiley } from 'react-icons/go';

export default function Home() {
  return <div>
    <h1 className='text-3xl'>Hello there</h1>
    <Button as={Link} href='/members' color='danger' variant='bordered' startContent={<GoSmiley></GoSmiley>}>CLick me</Button>
  </div>
}
