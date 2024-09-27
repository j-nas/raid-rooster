import {
  Avatar as AvatarBase,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth, signOut } from "@/server/auth";
import { LogOut } from "lucide-react";

export default async function Avatar() {
  const session = await auth();
  if (!session?.user) {
    return null;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AvatarBase>
          <AvatarImage src={session?.user?.image ?? undefined} />
          <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
        </AvatarBase>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="/profile">Profile</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/profile">profile</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit" className="flex">
              <LogOut className="mr-2 h-4 w-4 place-self-center" /> Sign out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
