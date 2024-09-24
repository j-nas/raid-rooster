import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Avatar from "./avatar";
import { SignIn } from "@/components/auth/signin-button";
import { auth } from "@/server/auth";
export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="fixed flex w-full items-center justify-between bg-background p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-lg font-semibold">
          Raid Rooster{" "}
        </Link>
        <Link href="/about">About </Link>
      </div>
      <div className="flex items-center space-x-4">
        {session?.user ? <Avatar /> : <SignIn />}
      </div>
    </nav>
  );
}
