import './globals.css';

export const metadata = {
  title: 'Frontier Creatives — wayfinding for the new creative stack',
  description: 'A live room for designers, builders, and AI-native creatives. Learn what changed. See the workflow. Make the thing.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}