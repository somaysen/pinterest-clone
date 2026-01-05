import AuthLayout from "../AuthLayout";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayout imagesUrl="/images/SingIn.jpg">
      {children}
    </AuthLayout>
  );
}