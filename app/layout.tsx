import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Osmo - Build websites people remember',
  description: 'A collection of components, techniques, tricks and tutorials for web development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}