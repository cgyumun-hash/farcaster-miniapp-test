"use client";
import { sdk } from "@farcaster/miniapp-sdk";

import UserAuthorization from "./_components/UserAuthorization";

export default function Home() {
  const user = (sdk as any)?.context?.user ?? null;
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <UserAuthorization />
    </div>
  );
}
