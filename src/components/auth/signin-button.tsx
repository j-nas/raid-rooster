import { signIn } from "@/server/auth";
import { Button } from "../ui/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("battlenet");
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
}
