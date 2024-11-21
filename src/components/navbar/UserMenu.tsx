'use client';
import { signOutUser } from '@/app/actions/authActions';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
  DropdownSection,
} from '@nextui-org/react';
import { Session } from 'next-auth';
import Link from 'next/link';
import React from 'react';
type Props = {
  user: Session['user'];
};
export default function UserMenu({ user }: Props) {
  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <Avatar
          isBordered
          as='button'
          className='transition-transform'
          color='secondary'
          name={user?.name || 'user avatar'}
          src={user?.image || '/images/user.png'}
        />
      </DropdownTrigger>
      <DropdownMenu variant='flat' aria-label='User actions menu'>
        <DropdownSection showDivider>
          <DropdownItem isReadOnly as='span' className='h-14 flex flex-row'>
            Signed in as {user?.name || 'Anonymous User'}
          </DropdownItem>
        </DropdownSection>
          <DropdownItem  as={Link} href="/members/edit">
            Edit Profile
          </DropdownItem>
          <DropdownItem onClick={async() => signOutUser()} color="danger">
            Log out
          </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
