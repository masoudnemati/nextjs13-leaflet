import "./globals.css";

export const metadata = {
  title: "Nextjs 13 leaflet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
