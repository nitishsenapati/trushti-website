import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "spark" | "outline" | "outline-light";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
}

interface ActionButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  href?: undefined;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  spark: "btn-spark",
  outline: "btn-outline",
  "outline-light": "btn-outline-light",
};

export default function Button(props: LinkButtonProps | ActionButtonProps) {
  const { variant = "primary", children, className = "" } = props;
  const classes = `${variantClass[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href, variant: _v, children: _c, className: _cl, ...rest } = props as ActionButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
