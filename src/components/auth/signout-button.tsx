import { signOut } from "@/server/auth";
import { Button } from "../ui/button";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button>Sign Out</Button>
    </form>
  );
}
