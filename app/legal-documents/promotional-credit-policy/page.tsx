import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotional Credits Policy | Nomyx Legal Documents",
  description: "Policy regarding promotional credits for Nomyx services.",
  alternates: {
    canonical: "https://www.nomyx.io/legal-documents/promotional-credit-policy",
  },
};

export default function PromotionalCreditPolicyPage() {
  return (
    <article className="max-w-230 lg:ml-18">
      <header className="mb-8">
        <h1 className="mb-2 text-[32px] font-bold leading-tight text-ink md:text-[40px] md:leading-tight">
          Promotional Credits Policy
        </h1>
      </header>

      <div className="border-t border-border pt-9">
        <div className="space-y-6 text-[14px] font-normal leading-7 text-ink md:text-[16px] md:leading-7">
          <p>
            We may, at our sole discretion, choose to offer credits for the Services in various ways, including but not limited to, coupons, promotional campaigns and referrals for Nomyx services such as training. Nomyx reserves the right to award credits at its sole discretion.
          </p>
          <p>
            Credits have no monetary or cash value and can only be used by You to offset Your subsequent payments of Subscription Charges for the applicable Service. Credits may only be applied to Subscription Charges due for the Service specifically identified by Nomyx when issuing the credit. Credits can only be used by You and are non-transferable.
          </p>
          <p>
            To the extent that You have been awarded credits, unless the instrument (including any coupon) states an earlier expiration date, credits shall expire and no longer be redeemable twelve (12) months from the date the credit was issued. Nomyx may modify this Promotional Credits Policy, in its sole discretion, from time to time. Capitalized terms used in this Promotional Credits Policy shall have the meanings set forth in the Main Services Agreement.
          </p>
        </div>
      </div>
    </article>
  );
}
