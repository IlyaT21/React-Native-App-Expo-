import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("681f11f10025f1a5d142")
  .setPlatform("com.ilijatoskovic.reactnativeapp");

export const account = new Account(client);
export const avatars = new Avatars(client);
