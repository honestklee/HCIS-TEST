import { BankOutlined } from "@ant-design/icons";

export default function AppLogo({ mobile = false }) {
  return (
    <div className={`flex items-center gap-3 ${mobile ? "" : "mb-12"}`}>
      <div className="w-10 h-10 bg-on-primary rounded-lg flex items-center justify-center">
        <BankOutlined className="text-primary text-xl" />
      </div>
      <span className="font-h2 text-on-primary font-black tracking-tight">
        Mandiri HCIS
      </span>
    </div>
  );
}
