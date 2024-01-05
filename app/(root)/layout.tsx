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

/*
    Why need 2 layouts?
    1 layuot with navbar and footer dan other layout without it
*/