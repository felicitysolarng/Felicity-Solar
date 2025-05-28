// app/(main)/layout.tsx (server component)
import Footer from "@/components/layouts/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
