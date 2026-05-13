import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administración | GENTONER",
  description: "Panel de administración del sitio GENTONER.",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          GENTONER
        </p>
        <h1 className="text-xl font-bold text-brand-dark font-montserrat">
          Administración
        </h1>
      </header>
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
