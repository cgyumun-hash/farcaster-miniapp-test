"use client";
import { sdk } from "@farcaster/miniapp-sdk";

import Image from "next/image";
import { APP_CONFIG, UI_MESSAGES } from "@/app/_lib/constants";

interface AppHeaderProps {
  isInMiniApp: boolean;
}

export default function AppHeader({ isInMiniApp }: AppHeaderProps) {
  const user = (sdk as any)?.context?.user ?? null;
  
  return (
    <>
      <Image
        src={APP_CONFIG.image}
        alt="Hotteok"
        width={180}
        height={180}
        priority
        className="mb-8"
      />
      <h1 className="text-2xl font-bold mb-6">{APP_CONFIG.title}</h1>

      <div className="mb-4 px-3 py-1 rounded-full text-sm font-medium">
        <span
          className={`${
            isInMiniApp
              ? "bg-green-100 text-green-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {isInMiniApp ? UI_MESSAGES.miniAppMode : UI_MESSAGES.webMode}
        </span>
      </div>
    </>
  );
}
