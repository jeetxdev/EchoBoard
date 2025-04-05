import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EchoBoard',
  description: 'Where Ideas Resonate, Collaborate, and Evolve in Real Time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={'h-full'}>
      <body className={`${inter.variable} ${firaCode.variable} ${inter.className} antialiased h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
