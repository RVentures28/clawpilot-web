import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClawPilot',
  description: 'RVentures28 — ClawPilot'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
