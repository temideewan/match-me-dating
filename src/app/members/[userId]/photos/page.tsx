import { getMemberPhotosByUserId } from '@/app/actions/memberActions';
import { CardBody, CardHeader, Divider, Image } from '@nextui-org/react';
import React from 'react';
type Props = {
  params: { userId: string };
};
export default async function Photos({ params }: Props) {
  const photos = await getMemberPhotosByUserId(params.userId);
  return (
    <>
      <CardHeader className='text-2xl font-semibold text-secondary-700'>
        Photos
      </CardHeader>
      <Divider />
      <CardBody>
        {photos &&
          photos.map((photo) => {
            return (
              <div key={photo.id} className='grid grid-cols-5 gap-3'>
                <Image
                  src={photo.url}
                  alt='Image of member'
                  className='object-cover aspect-square'
                />
              </div>
            );
          })}
      </CardBody>
    </>
  );
}
