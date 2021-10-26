import { Container } from "./styles";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkWrapperProps {
  href: string;
  children: ReactNode;
}

export function LinkWrapper({ href, children }: LinkWrapperProps) {
  return (
    <Container>
      <Link href={href}>{children}</Link>
    </Container>
  );
}
