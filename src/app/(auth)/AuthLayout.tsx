interface AuthLayoutProps {
  children: React.ReactNode;
  imagesUrl: string;
}

export default function AuthLayout({
  children,
  imagesUrl,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      {/* LEFT SIDE – FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#020617] px-6">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
          {children}
        </div>
      </div>

      {/* RIGHT SIDE – IMAGE */}
      <div
        className="hidden lg:block w-1/2 relative"
      >
        <div
          style={{ backgroundImage: `url(${imagesUrl})` }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  );
}
