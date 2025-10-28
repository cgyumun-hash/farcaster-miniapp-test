"use client";

import { useEffect } from "react";
import { WagmiProvider, http, createConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { base, mainnet } from "wagmi/chains";
import miniAppConnector from "@farcaster/miniapp-wagmi-connector";
// ✨ 추가
import { sdk } from "@farcaster/miniapp-sdk";

// wagmi 기본 설정
const config = createConfig({
  chains: [mainnet, base],
  connectors: [miniAppConnector()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

const queryClient = new QueryClient();

// ✅ SDK 준비 → context.user가 자동으로 채워짐
export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      try {
        await sdk.actions.ready();     // 👈 추가: 스플래시 해제 & 컨텍스트 활성화
      } catch {
        /* 웹 모드일 때는 조용히 무시 */
      }
    })();
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default Providers;
