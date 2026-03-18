import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="/images/APEX_TransparentLogo2-White.png"
          alt="Apex Strategy"
          width={120}
          height={35}
          className="h-8 w-auto"
        />
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Apex Strategy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
