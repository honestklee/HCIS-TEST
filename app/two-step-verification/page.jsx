import Link from "next/link";
import { LockOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

export default function TwoStepVerificationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="w-full max-w-md bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 card-shadow">
        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
          <SafetyCertificateOutlined className="text-xl" />
        </div>
        <h1 className="font-h2 text-on-surface">Two Step Verification</h1>
        <p className="font-body-sm text-on-surface-variant mt-2">
          Enter the 6-digit verification code sent to your registered email.
        </p>

        <form className="mt-8 space-y-4">
          <label className="font-label-md text-on-surface-variant block" htmlFor="otp">
            Verification Code
          </label>
          <div className="relative">
            <LockOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-on-surface placeholder:text-outline/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all tracking-[0.3em]"
              id="otp"
              maxLength={6}
              placeholder="------"
              type="text"
            />
          </div>
          <button className="w-full bg-primary text-on-primary font-label-md py-3 rounded-lg" type="button">
            Verify and Continue
          </button>
          <p className="text-center font-label-sm text-on-surface-variant">
            Didn&apos;t receive code?{" "}
            <button className="text-primary hover:underline" type="button">
              Resend
            </button>
          </p>
          <Link className="block text-center font-label-sm text-primary hover:underline pt-2" href="/">
            Back to Login
          </Link>
        </form>
      </section>
    </main>
  );
}
