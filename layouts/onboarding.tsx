import { Head } from "./head";

export default function LoginAndRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-onboardBg flex flex-col">
      <Head siteTitle="Welcome" />
      <main className="h-[100%]">{children}</main>
    </div>
  );
}
