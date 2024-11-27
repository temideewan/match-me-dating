import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { Photo } from '@prisma/client';
export async function getMembers() {
  const session = await auth();
  if (!session?.user) return null;
  try {
    return prisma.member.findMany({
      where: {
        NOT: {
          userId: session.user.id,
        },
      },
    });
  } catch (err) {
    console.error('Error fetching members:', err);
    throw err;
  }
}

export async function getMemberByUserId(userId: string) {
  try {
    return prisma.member.findUnique({ where: { userId } });
  } catch (err) {
    console.log(err);
  }
}
export async function getMemberPhotosByUserId(userId: string) {
  try {
    const member = await prisma.member.findUnique({
      where: { userId },
      select: { photos: true },
    });
    if (!member) {
      return null;
    }
    return member.photos.map((p) => p) as Photo[];
  } catch (err) {
    console.log(err);
    return null;
  }
}
