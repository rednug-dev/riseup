// src/app/layout.tsx  (eller pages/_app.tsx hvis du bruker Pages-router)
import { HeroUIProvider } from "@heroui/system";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
