import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin']})

export const revalidate = 10;

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="mx-auto">
        <MyProfilePic />
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hello and Welcome 👋&nbsp;
          <span className="whitespace-nowrap">
            I&apos;m <span className="font-bold">Yousef</span>.
          </span>
        </p>
        {/* @ts-expect-error Server Component */}
        <Posts />
      </div>
    </main>
  );
}
