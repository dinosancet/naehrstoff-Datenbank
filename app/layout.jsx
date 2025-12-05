import "./globals.css";

export const metadata = {
  title: "Nährstoff-Datenbank",
  description: "Lebensmitteldaten, Nährstoffe, % Tagesbedarf pro 100 g"
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

