import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import { LinkWrapper } from "components/LinkWrapper";
import React from "react";

import { Container, Header, Body } from "./styles";

interface PageTemplateProps {
  heading: string;
  body: string;
}

export function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <Container>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <Header>{heading}</Header>
      <Body dangerouslySetInnerHTML={{ __html: body }} />
    </Container>
  );
}
