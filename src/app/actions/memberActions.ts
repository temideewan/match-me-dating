import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
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

export async function getMemberById(userId: string) {
  try {
    return prisma.member.findUnique({ where: { userId } });
  } catch (err) {
    console.log(err);
  }
}
