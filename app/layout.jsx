export const metadata = {
  title: "ZAIRE",
  description: "RHUDE Style Clothing Brand",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
