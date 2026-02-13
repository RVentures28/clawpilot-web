import './globals.css';
import type { Metadata } from 'next';
import { Topbar } from '../components/topbar';
import { ToastProvider } from '../components/ux/toast';

export const metadata: Metadata = {
  title: 'ClawPilot',
  description: 'Operator-as-a-Service by RVentures',
  icons: {
    icon: [{ url: '/brand/favicon.svg', type: 'image/svg+xml' }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white/90 antialiased">
        <ToastProvider>
          <Topbar />
          <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
        </ToastProvider>
      </body>
    </html>
  );
}
