import { Client, Account } from 'node-appwrite'
import { cookies } from 'next/headers'
import { APPWRITE_JWT_KEY, APPWRITE_PROJECT, APPWRITE_URL } from '@utils/constants'

export const getSessionClient = async () => {
  const client = new Client().setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT)

  const cookieStore = await cookies();
  const session = cookieStore.get(APPWRITE_JWT_KEY);
  if (!session || !session.value) {
    throw new Error('No session')
  }

  client.setJWT(session.value)

  return {
    get account() {
      return new Account(client)
    },
  }
}
