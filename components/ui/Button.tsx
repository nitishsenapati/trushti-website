import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "spark" | "outline" | "outline-light";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  spark: "btn-spark",
  outline: "btn-outline",
  "outline-light": "btn-outline-light",
};

interface LinkButtonProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export default function Button({ href, variant = "primary", children, className = "" }: LinkButtonProps) {
  return (
    <Link href={href} className={`${variantClass[variant]} ${className}`}>
      {children}
    </Link>
  );
}

interface ActionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export function ActionButton({ variant = "primary", children, className = "", ...rest }: ActionButtonProps) {
  return (
    <button className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}