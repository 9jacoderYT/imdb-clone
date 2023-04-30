import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

export const metadata = {
  title: "IMDB Clone",
  description: "created by 9jacoder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* body */}
      <body>
        <Providers>
          <Header />

          <Navbar />
          {/* SearchBox */}

          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
