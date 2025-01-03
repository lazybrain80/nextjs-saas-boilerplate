interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="flex m-auto h-full max-w-screen-xl">{children}</div>;
}
