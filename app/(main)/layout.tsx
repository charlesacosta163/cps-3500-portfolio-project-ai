import Navbar from "@/components/navbar";

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center">

        <Navbar />

        <main className="flex-1 p-4 max-w-200 w-full">
            {children}
        </main>
      </div>
    );
  }
  