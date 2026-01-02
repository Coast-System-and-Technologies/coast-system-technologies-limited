import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function PublicPagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
