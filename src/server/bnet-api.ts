import { ProfileResponse } from '@/types/profile-response';
import { db } from './db';
import { type Session } from 'next-auth';

async function fetchAccessToken(session: Session) {
  const accessToken = await db.account.findFirst({
    where: {
      userId: session?.user?.id,
    },
    select: {
      access_token: true,
    },
  });
  return accessToken;
}

async function fetchCharacterList(session: Session) {
  const accessToken = await fetchAccessToken(session);

  const response = await fetch('https://us.api.blizzard.com/profile/user/wow', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken?.access_token}`,
      'Battlenet-Namespace': 'profile-us',
      region: 'us',
    },
  });

  const rawResult = ProfileResponse.parse(await response.json());

  const result = rawResult.wow_accounts.flatMap((account) => {
    return account.characters.map((character) => {
      return {
        id: character.id,
        name: character.name,
        level: character.level,
        faction: character.faction.type,
        class: character.playable_class.name.en_US,
        realm: character.realm.name.en_US,
        realmSlug: character.realm.slug,
      };
    });
  }
  );

  return result;
}