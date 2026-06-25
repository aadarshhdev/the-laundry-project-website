import Image from "next/image";

type BrandLogoProps = {
  size?: number;
  className?: string;
};

export default function BrandLogo({ size = 36, className = "" }: BrandLogoProps) {
  return (
    <Image
      src="/brand-logo.png"
      alt="The Laundry Project"
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
      priority
    />
  );
}
