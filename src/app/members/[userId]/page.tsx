import { getMemberById } from '@/app/actions/memberActions';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function MemberDetailsPage({
  params: { userId },
}: {
  params: { userId: string };
}) {
  const member = await  getMemberById(userId);
  if(!member)  return notFound();
  return <div>{member.name} the detail page</div>;
}
