import { signIn } from "@/server/auth";
import { Button } from "../ui/button";
import BattlenetIcon from "../svg/battlenet-icon";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("battlenet");
      }}
    >
      <Button size="sm" type="submit">
        <BattlenetIcon className="mr-2 h-6 w-6" />
        Sign In
      </Button>
    </form>
  );
}
