"use client";

import { SessionProvider } from "next-auth/react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#7c3aed",
              borderRadius: 8,
            },
          }}
        >
          <App>{children}</App>
        </ConfigProvider>
      </AntdRegistry>
    </SessionProvider>
  );
}
