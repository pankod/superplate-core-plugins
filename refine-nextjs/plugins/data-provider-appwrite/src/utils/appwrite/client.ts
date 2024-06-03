'use client'

import { Account, Appwrite, Storage } from '@refinedev/appwrite'
import { APPWRITE_JWT_KEY, APPWRITE_PROJECT, APPWRITE_URL } from '@utils/constants'
import Cookies from 'js-cookie'

export const appwriteClient = new Appwrite()

const appwriteJWT = Cookies.get(APPWRITE_JWT_KEY)
if (appwriteJWT) {
  appwriteClient.setJWT(appwriteJWT)
}

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT)

export const appwriteAccount = new Account(appwriteClient)
export const appwriteStorage = new Storage(appwriteClient)
