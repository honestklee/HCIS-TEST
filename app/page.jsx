import AppLogo from "../components/shared/AppLogo";
import LoginForm from "../components/auth/LoginForm";
import { BankOutlined } from "@ant-design/icons";

export default function LoginPage() {
  return (
    <main className="w-full max-w-[1200px] mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden md:my-6">
      <section className="hidden md:flex flex-col justify-between p-12 hero-gradient relative">
        <div className="relative z-10">
          <AppLogo />
          <h1 className="font-h1 text-on-primary mb-6">
            Empowering Mandiri&apos;s Human Capital Excellence.
          </h1>
          <p className="text-on-primary/80 font-body-base max-w-md">
            Access the unified enterprise payroll and workforce management ecosystem designed for precision and modern efficiency.
          </p>
        </div>

        <div className="relative z-10 mt-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
            <img
              alt="Enterprise Analytics"
              className="rounded-lg w-full h-auto object-cover opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDSUO5lihtJ7pV-xpkHNnluTja2Yy5P1HeO6NMhdBAEdZjERlsEVSTFxwytZDQyE2GOPFSxCF9EA58PpYhZu4dj4VL91u5n7GNs0BeHx2HtUTpkZjhk9NQ56gELUSlrbIdEzM0w7mO2GElQ5B1LcJC7oU70qJeIEoKFLubgUs6ltUb22-mlwMJtMOW69eQI3tiKBnBYRx_yFy72_56kTG6CGpKK8r15Gb5c_RRdn_iaV9E-G76a7OwtD4K8R4PHYFBgXACozV8QM0"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-on-primary-container/10 rounded-full blur-2xl -ml-24 -mb-24" />
      </section>

      <section className="flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-surface-container-lowest">
        <div className="w-full max-w-sm mx-auto">
          <div className="md:hidden flex items-center gap-3 mb-10">
            <BankOutlined className="text-primary text-3xl" />
            <span className="font-h2 text-primary font-black">Mandiri HCIS</span>
          </div>
          <header className="mb-10">
            <h2 className="font-h2 text-on-surface mb-2">Welcome Back</h2>
            <p className="font-body-sm text-on-surface-variant">
              Please enter your enterprise credentials to access your dashboard.
            </p>
          </header>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
