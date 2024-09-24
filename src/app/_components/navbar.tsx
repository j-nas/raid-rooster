import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Avatar from "./avatar";
import { SignIn } from "@/components/auth/signin-button";
import { auth } from "@/server/auth";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="fixed flex h-16 w-full items-center border-2 border-red-400 bg-background">
      <div className="w-1/6">
        <Button variant="ghost">
          <Link href="/" className="">
            🐓 Raid Rooster
          </Link>
        </Button>
      </div>
      <div className="flex w-full justify-center">
        <NavigationMenu className="">
          <NavigationMenuList className="">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex w-1/6 justify-end">
        <div className="pr-4">{session?.user ? <Avatar /> : <SignIn />}</div>
      </div>
    </nav>
  );
}
