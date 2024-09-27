import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { env } from "@/env";
import { ProfileResponse } from "@/types/profile-response";

export default async function NewUser() {
  const session = await auth();

  const accessToken = await db.account.findFirst({
    where: {
      userId: session?.user.id,
    },
    select: {
      access_token: true,
    },
  });

  const response = await fetch("https://us.api.blizzard.com/profile/user/wow", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken?.access_token}`,
      "Battlenet-Namespace": "profile-us",
      region: "us",
    },
  });

  const result = ProfileResponse.parse(await response.json());

  // const response = await fetch(
  //   `https://oauth.battle.net/oauth/check_token?:region=us&token=${accessToken?.access_token}`,
  //   {
  //     method: "GET",
  //   },
  // );

  console.log(result);
  return (
    <>
      <h1 className="translate-y-10 text-5xl">welcome new user</h1>
      <pre>
        <code>{JSON.stringify(result)}</code>
      </pre>
    </>
  );
}
