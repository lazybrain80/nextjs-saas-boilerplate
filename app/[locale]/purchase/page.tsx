import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";
import {
  Pricing,
  FAQ,
} from '@/design/templates';
import { Section } from '@/design/features/landing';

const PurchasePage = () => {
  const t = useTranslations("PurchasePage");
  return (
    <>
      <Pricing />
      
      <Section>
        <hr className="container" />
      </Section>
      
      <FAQ />
    </>
  );
};

export default PurchasePage;