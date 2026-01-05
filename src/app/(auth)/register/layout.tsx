import AuthLayout from "../AuthLayout";

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayout imagesUrl="/images/Singup.jpg">
      {children}
    </AuthLayout>
  );
}