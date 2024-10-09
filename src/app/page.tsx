import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function Home() {
  const session = await getServerSession();

  // if (status === 'loading') {
  //   return <p>Loading...</p>;
  // }

  if (!session) {
    return (
      <div className="flex flex-col">
        <p className="flex min-h-screen  items-center justify-center ">
          Access Denied
        </p>
        butt
      </div>
    );
  }

  console.log(session, 'session');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 p-24">
      <p>Name: {session?.user?.name}</p>
      <p> Email: {session?.user?.email}</p>
      <Image
        src={session?.user?.image as string}
        alt="image"
        width={200}
        height={200}
      />
    </main>
  );
}
