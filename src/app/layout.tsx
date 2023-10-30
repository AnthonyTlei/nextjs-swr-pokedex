import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Container } from "react-bootstrap";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex demo created with NextJS and SWR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={anton.className}>
        <Container className="py-4">{children}</Container>
      </body>
    </html>
  );
}
