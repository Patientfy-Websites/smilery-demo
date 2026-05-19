import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-[5em]">{children}</main>
      <Footer />
    </>
  );
}
