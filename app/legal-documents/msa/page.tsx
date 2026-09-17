import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getLegalDocument } from "../legalDocuments";

const document = getLegalDocument("msa");

export const metadata: Metadata = {
  title: "Main Services Agreement | Nomyx Legal Documents",
  description: document?.description,
  alternates: {
    canonical: "https://www.nomyx.io/legal-documents/msa",
  },
};

export default function MainServiceAgreementPage() {
  if (!document) {
    notFound();
  }

  return (
    <article className="max-w-230 lg:ml-18">
      <header className="mb-8">
        <h1 className="max-w-3xl text-[32px] font-bold leading-[1.12] text-ink md:text-[40px]">
          Main Services Agreement
        </h1>
        <p className="mt-3 text-base font-medium text-ink-muted">
          Last Updated: September 17, 2026
        </p>
      </header>

      <div className="border-t border-border pt-9">
        <div className="space-y-8 text-[14px] font-normal leading-7 text-ink md:text-[16px] md:leading-7 [&_p>strong:first-child]:mr-1">
          <p className="text-[14px] font-bold uppercase leading-7 text-ink md:text-[15px] md:leading-7">
            THIS AGREEMENT IS A BINDING CONTRACT AND GOVERNS THE USE OF AND ACCESS TO THE SERVICES BY YOU, AGENTS AND END-USERS WHETHER IN CONNECTION WITH A PAID SUBSCRIPTION OR FREE TRIAL FOR THE SERVICES.
          </p>

          <p>
            <strong>
              By accepting this Agreement, either by accessing or using a Service, or authorizing or permitting any Agent or End-User to access or use a Service, Subscriber agrees to be bound by this Agreement as of the date of such access or use of the Service (the &ldquo;Effective Date&rdquo;). If You are entering into this Agreement on behalf of a company, organization or another legal entity (an &ldquo;Entity&rdquo;), You are agreeing to this Agreement for that Entity and representing to Nomyx that You have the authority to bind such Entity and its Affiliates to this Agreement, in which case the terms &ldquo;Subscriber,&rdquo; &ldquo;You,&rdquo; or &ldquo;Your&rdquo; herein refers to such Entity and its Affiliates. If You do not have such authority, or if You do not agree with this Agreement, You must not use or authorize any use of the Services. Subscriber and Nomyx shall each be referred to as a &ldquo;Party&rdquo; and collectively referred to as the &ldquo;Parties&rdquo; for purposes of this Agreement.
            </strong>
          </p>

          <p>
            The purpose of this Agreement is to establish the terms and conditions under which Subscriber may purchase Nomyx&apos;s Services and Professional Services as described in a Service Order, Statement of Work or other document signed or agreed to by the Subscriber.
          </p>

          <p>
            In the event of any inconsistency or conflict between the terms of the Main Services Agreement and the terms of any Service Order or Statement of Work, the terms of the Service Order or Statement of Work shall control. Non-English translations of this Agreement are provided for convenience only. In the event of any ambiguity or conflict between translations, the English version shall control.
          </p>

          <div className="pt-2">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              General Terms and Conditions
            </h2>
          </div>

          {/* SECTION 1 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 1. ACCESS TO THE SERVICES
            </h2>
            <div className="space-y-4">
              <p>
                <strong>1.1 Service.</strong> Nomyx will make the Services and Service Data available pursuant to this Agreement and the applicable Service Order(s) and Documentation in accordance with Subscriber&apos;s Service Plan. Nomyx will use commercially reasonable efforts to make the Services available twenty-four (24) hours a day, seven (7) days a week, except during (a) Planned Downtime (of which Nomyx will give advance notice via the Site or to the Account owner); and (b) Force Majeure Events.
              </p>
              <p>
                <strong>1.2 Support.</strong> Nomyx will, at no additional charge, provide Subscriber standard customer support for the Services as detailed on the applicable Site and Documentation. If purchased by Subscriber, Nomyx will provide upgraded support or support that includes service level agreements.
              </p>
              <p>
                <strong>1.3 Professional Services.</strong> Upon Subscriber&apos;s request, Nomyx may provide Professional Services subject to the terms and conditions stated at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/professional-services">
                  https://www.nomyx.io/legal-documents/professional-services
                </Link>
              </p>
              <p>
                <strong>1.4 Modifications.</strong> Subscriber acknowledges that Nomyx may modify the features and functionality of the Services during the Subscription Term. Nomyx shall provide Subscriber with thirty (30) days&apos; advance notice of any deprecation of any material feature or functionality. Nomyx will not materially decrease the overall functionality of the Services purchased by Subscriber during the Subscription Term.
              </p>
              <p>
                <strong>1.5 Additional Features.</strong> Nomyx will notify Subscriber of applicable Supplemental Terms or alternate terms and conditions prior to Subscriber&apos;s activation of any Additional Features. Subscriber&apos;s activation of any Additional Features in Subscriber&apos;s Account will be considered acceptance of the applicable Supplemental Terms or alternate terms and conditions where applicable.
              </p>
              <p>
                <strong>1.6 Extension of Rights to Affiliates.</strong> Subscriber may extend its rights, benefits and protections provided herein to its Affiliates and to contractors or service providers acting on Subscriber&apos;s or Subscriber&apos;s Affiliates&apos; behalf, provided that Subscriber remains responsible for their compliance hereunder. An Affiliate may also directly purchase Services or Professional Services pursuant to the terms of this Agreement provided that such Affiliate (i) executes a Service Order or Statement of Work for such Services or Professional Services; and (ii) agrees to be bound by the terms of this Agreement as if it were an original party hereto. Subscriber also agrees that it will be responsible for its Affiliates&apos; compliance with this Agreement. Subscriber hereby authorizes Nomyx to share the content of this Agreement with Subscriber&apos;s Affiliates.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 2. USE OF THE SERVICES
            </h2>
            <div className="space-y-4">
              <p>
                <strong>2.1 Login Management.</strong> Access to and use of certain Services is restricted, such as to the specified number of individual Agents permitted under Subscriber&apos;s subscription to the applicable Service, as detailed in the Documentation. For Services that are Agent-based, Subscriber agrees and acknowledges that an Agent Login cannot be shared or used by more than one (1) individual per Account. However, Agent Logins may be reassigned to new individuals replacing former individuals who no longer require ongoing use of the Services. Subscriber and Agents are responsible for maintaining the confidentiality of all Agent Login information for an Account. Absent a written license from Nomyx expressly stating otherwise, Subscriber agrees and acknowledges that Subscriber may not use the Services, including but not limited to the API, to circumvent the requirement for an individual Agent Login for each individual who (a) leverages the Services to interact with End-Users; (b) processes data related to interactions with End-Users; or (c) processes data related to interactions originating from a Non-Nomyx Service that provides functionality similar to functionality provided by the Services and which would, pursuant to this Agreement, require an individual Agent Login, if utilizing the Services for such interaction. Further, Subscriber shall not use the API or any Software in such a way to circumvent applicable Service Plan restrictions or Agent licensing restrictions that are enforced in the Service user interface. Nomyx reserves the right to charge Subscriber, and Subscriber hereby agrees to pay, for any overuse of a Service in violation of this Agreement or the Service Plan features and limitations on the Site or Documentation, in addition to other remedies available to Nomyx.
              </p>
              <p>
                <strong>2.2 Compliance.</strong> As between Subscriber and Nomyx, Subscriber is responsible for compliance with the provisions of this Agreement by Agents and End-Users and for any and all activities that occur under an Account, which Nomyx may verify from time to time. Without limiting the foregoing, Subscriber will ensure that its use of the Services is compliant with all applicable laws and regulations as well as any and all privacy notices, agreements or other obligations Subscriber may maintain or enter into with Agents or End-Users.
              </p>
              <p>
                <strong>2.3 Content and Conduct.</strong> Subscriber agrees to comply with the Nomyx User Content and Conduct Policy (as defined below) which is hereby incorporated into this Agreement. Further, in Subscriber&apos;s use of the Services Subscriber agrees not to (a) modify, adapt, or hack the Services or otherwise attempt to gain unauthorized access to the Services or related systems or networks; (b) attempt to bypass or break any security or rate limiting mechanism on any of the Services or use the Services in any manner that interferes with or disrupts the integrity, security or performance of the Services and its components; (c) attempt to decipher, decompile, reverse engineer or otherwise discover the source code of any Software making up the Services; or (d) to the extent Subscriber is subject to the US Health Insurance Portability and Accountability Act of 1996, and its implementing regulations (HIPAA), use the Services to store or transmit any &ldquo;protected health information&rdquo; as defined by HIPAA, unless expressly agreed to otherwise in writing by Nomyx.
              </p>
              <p>
                <strong>2.4 System Requirements.</strong> A high-speed Internet connection is required for proper transmission of the Services. Subscriber is responsible for procuring and maintaining the network connections that connect Subscriber&apos;s network to the Services including, but not limited to, browser software that supports protocols used by Nomyx, including the Transport Layer Security (TLS) protocol or other protocols accepted by Nomyx, and to follow procedures for accessing services that support such protocols. Nomyx is not responsible for notifying Subscriber, Agents or End-Users of any upgrades, fixes or enhancements to any such software or for any compromise of data, including Service Data, transmitted across computer networks or telecommunications facilities (including but not limited to the Internet) which are not owned, operated or controlled by Nomyx. Nomyx assumes no responsibility for the reliability or performance of any connections as described in this Section.
              </p>
              <p>
                <strong>2.5 Internal Business Purposes Only.</strong> Unless otherwise authorized by Nomyx in this Agreement or expressly agreed to otherwise in writing by Nomyx, Subscriber may not use the Services in any manner where Subscriber acts as a service bureau or provides any outsourced business process services on behalf of more than one (1) third party (other than Affiliates) through a single Account. This provision is not intended to prevent or inhibit the use of the Services to provide business support to multiple End-Users; however, Subscriber agrees not to license, sublicense, sell, outsource, rent, lease, transfer, assign, distribute, time-share or otherwise commercially exploit or resell the Services to any third party, other than authorized Agents and End-Users in furtherance of Subscriber&apos;s internal business purposes as expressly permitted by this Agreement, unless expressly agreed to otherwise in writing by Nomyx. Without limiting the foregoing, Subscriber&apos;s right to access and use the API is also subject to the restrictions and policies implemented by Nomyx from time to time with respect to the API as set forth in the Documentation or otherwise communicated to Subscriber in accordance with this Agreement.
              </p>
              <p>
                <strong>2.6 No Competitive Access.</strong> Subscriber may not access the Services for competitive purposes or if Subscriber is a competitor of Nomyx.
              </p>
              <p>
                <strong>2.7</strong>{" "}The provision and use of certain Services are subject to Nomyx&apos;s Service-Specific Terms.
              </p>
              <p>
                <strong>2.8 Region-Specific Supplemental Terms.</strong> The provision and use of the Services in certain jurisdictions are subject to Nomyx&apos;s Region-Specific Terms.
              </p>
              <p>
                <strong>2.9 In-Product Cookies.</strong> Whenever Subscriber, its Agents or End-Users interact with the Services, Nomyx&apos;s In-Product Cookie Policy applies.
              </p>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 3. TERM, CANCELLATION AND TERMINATION
            </h2>
            <div className="space-y-4">
              <p>
                <strong>3.1 Term.</strong> The term of this Main Services Agreement begins on the Effective Date and will remain in effect as long as the Subscriber has a valid Service Order/Statement of Work or until this Main Services Agreement is otherwise terminated in accordance with the terms hereof, whichever occurs first. The Subscription Term will be defined in each individual Service Order. Unless an Account and subscription to a Service are terminated in accordance with this Agreement or the applicable Service Order, or unless otherwise stated in the applicable Service Order, (a) Subscriber&apos;s subscription to a Service (including any and all Deployed Associated Services) will renew for a Subscription Term equivalent in length to the then-expiring Subscription Term; and (b) the Subscription Charges applicable to any subsequent Subscription Term shall be Nomyx&apos;s Standard Subscription Charges for the applicable Service Plan and Deployed Associated Services at the time of such renewal.
              </p>
              <p>
                <strong>3.2 Cancellation.</strong> Either Party may elect to terminate an Account and subscription to a Service at the end of the then-current Subscription Term by providing notice in accordance with Section 18 of this Agreement to{" "}
                <a className="text-blue-500 hover:underline" href="mailto:legal@nomyx.io">
                  legal@nomyx.io
                </a>{" "}
                no less than sixty (60) days prior to the end of such Subscription Term.
              </p>
              <p>
                <strong>3.3 Termination for Cause.</strong> A Party may terminate this Agreement for cause (a) upon written notice to the other Party of a material breach by the other Party if such breach remains uncured after thirty (30) days from the date of receipt of such notice; or (b) if the other Party becomes the subject of a petition in bankruptcy or any other proceeding relating to insolvency, receivership, liquidation, or assignment for the benefit of creditors. However, Nomyx may immediately terminate this Agreement for cause without notice if Subscriber violates the Nomyx User Content and Conduct Policy or if provision of the Service violates applicable law, regulation or court order.
              </p>
              <p>
                Nomyx will refund any prepaid fees covering the remainder of the Subscription Term as of the effective date of termination if this Agreement is terminated by Subscriber in accordance with this Section for Nomyx&apos;s uncured material breach.
              </p>
              <p>
                Subscriber must pay any unpaid fees covering the remainder of the Subscription Term pursuant to all applicable Service Order if Nomyx terminates this Agreement for Subscriber&apos;s material breach in accordance with this Section. In no event will Nomyx&apos;s termination for cause relieve Subscriber of its obligation to pay any fees payable to Nomyx for the period prior to termination.
              </p>
              <p>
                <strong>3.4 Payment Upon Termination.</strong> Except for Subscriber&apos;s termination under Section 3.3, if Subscriber terminates its subscription to a Service or cancels its Account prior to the end of the then-effective Subscription Term, or if Nomyx terminates or cancels Subscriber&apos;s Account pursuant to Section 3.3, in addition to any other amounts Subscriber may owe Nomyx, Subscriber must immediately pay any and all unpaid Subscription Charges associated with the remainder of such Subscription Term.
              </p>
              <p>
                <strong>3.5 No Refunds.</strong> Except for Subscriber&apos;s termination rights under Section 3.3, no refunds or credits for Subscription Charges or other fees or payments will be provided if Subscriber terminates a subscription to a Service or cancels its Account prior to the end of a Subscription Term.
              </p>
              <p>
                <strong>3.6 Export of Service Data.</strong> Upon Subscriber&apos;s written request, Nomyx will make Service Data available to Subscriber for export or download as provided in the Documentation for thirty (30) days after the effective date of termination, expiration or migration of the Account, except for Service Data which (i) has been deleted in accordance with the Documentation, (ii) was created and/or used in violation of this Agreement, or (iii) unless prohibited by law or legal order. Thereafter, Nomyx will have no obligation to maintain or provide any Service Data and Nomyx will delete Service Data in accordance with Nomyx&apos;s Service Data Deletion Policy available on Nomyx&apos;s Agreement and Terms Website unless prohibited by law or legal order.
              </p>
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 4. BILLING, PLAN MODIFICATIONS AND PAYMENTS
            </h2>
            <div className="space-y-4">
              <p>
                <strong>4.1 Payment and Billing.</strong> Unless otherwise expressly set forth in this Agreement, a Service Order, a Statement of Work, or in Supplemental Terms, or as otherwise agreed for Usage Charges, all Subscription Charges are due in full upon commencement of the Subscription Term, or with respect to a Deployed Associated Service, at the time such Deployed Associated Service is purchased, subscribed to or otherwise deployed. Subscriber is responsible for providing valid and current payment information and Subscriber agrees to promptly update the Account information, including payment information, with any changes that may occur (for example, a change in Subscriber&apos;s billing address or credit card expiration date). If Subscriber fails to pay Subscription Charges or any other charges indicated on any Service Order or Statement of Work, or in any Supplemental Terms, within five (5) days of Nomyx&apos;s notice to Subscriber that payment is delinquent, or if Subscriber does not update payment information upon Nomyx&apos;s request, in addition to other remedies, Nomyx may suspend access to and use of the Services by Subscriber, Agents and End-Users. As permitted by applicable law, Nomyx reserves the right to charge the Subscriber late payment penalties or interest charges on any past-due invoices that are not subject to a previously-noticed good faith dispute as to amount owed.
              </p>
              <p>
                <strong>4.2 Upgrades.</strong> If Subscriber chooses to upgrade the Service Plan or increase the number of Agents authorized to access and use a Service during the Subscription Term, any incremental Subscription Charges associated with such upgrade will be charged in accordance with the remaining Subscription Term. In any subsequent Subscription Term, the Subscription Charges will reflect any such upgrades.
              </p>
              <p>
                <strong>4.3 Downgrades.</strong> Subscriber may not downgrade its Service Plan or reduce the number of Agents during any Subscription Term. Subscriber may only downgrade its Service Plan or reduce the number of Agents under any Service Plan for a subsequent Subscription Term at the end of the then-current Subscription Term by providing Nomyx with thirty (30) days prior written notice indicating which instances will be affected and the details of the downgrade requested. In the event of a downgrade, Subscriber must demote any downgraded Agents prior to the beginning of the subsequent Subscription Term. Downgrading the Service Plan may generate additional costs (e.g., storage costs) and cause loss of content, features, or capacity of the Service as available to Subscriber under an Account, and Nomyx is not responsible for such loss. If a new Service Order is not signed by the Subscriber before the end of the then-current Subscription Term, the Services will renew as defined in Section 3.1.
              </p>
              <p>
                <strong>4.4 Taxes.</strong> Unless otherwise stated, Nomyx&apos;s Subscription Charges do not include any Taxes. Subscriber is responsible for paying Taxes assessed in connection with the subscription to the Services except those assessable against Nomyx measured by its net income. Nomyx will invoice the Subscriber for such Taxes if Nomyx believes it has a legal obligation to do so and Subscriber agrees to pay such Taxes if so invoiced. Nomyx agrees to exempt Subscriber from any taxes for which Subscriber provides to Nomyx a tax exemption certificate prior to the issuance of an invoice; provided, however, that no such exemption shall be extended to Subscriber following written notice to Nomyx from a taxing authority of appropriate jurisdiction that Subscriber does not qualify for the claimed exemption.
              </p>
              <div className="space-y-3 pl-4 md:pl-5 border-l-2 border-border/80">
                <p>
                  <strong>4.4.1</strong>{" "}If the Subscriber is required to withhold Taxes from payments to Nomyx, Subscriber shall pay Nomyx the amount owing on the invoice, less a deduction for such Taxes withheld to be remitted directly by the Subscriber to the relevant tax authority. Subscriber will provide Nomyx with a valid receipt for such Taxes remitted to the relevant tax authority within 75 (seventy-five) days of Subscriber&apos;s payment to Nomyx from which the withholding was made. If Subscriber does not provide the valid receipt for such Taxes remitted within 75 days, Subscriber agrees and acknowledges that it will be charged and will have to pay for the full amount of the invoice.
                </p>
                <p>
                  <strong>4.4.2</strong>{" "}If the Subscriber is legally required to withhold Taxes from payments to Nomyx but fail to do so and pay an invoice in full, Subscriber may be entitled to reimbursement of the Taxes which should have been withheld. Such reimbursement can only be made in the first year following payment of the relevant invoice to Nomyx, once the Subscriber provides Nomyx with a valid receipt for the Taxes remitted to the relevant tax authority in respect of that invoice.
                </p>
              </div>
              <p>
                <strong>4.5 Payment Agent.</strong> If Subscriber pays by credit card or certain other payment instruments, the Services provide an interface for the Account owner to change credit card information (e.g., upon card renewal). Payments made by credit card, debit card or certain other payment instruments for the Nomyx Service are billed and processed by Nomyx&apos;s Payment Agent. Subscriber hereby authorizes the Payment Agent to bill Subscriber&apos;s credit card or other payment instrument in advance on a periodic basis in accordance with the terms of the Service Plan for the Services, and for periodic Subscription Charges applicable to Deployed Associated Services to which Subscriber subscribes until the subscription to the Services terminates, and Subscriber further agrees to pay any Subscription Charges so incurred. If applicable, Subscriber hereby authorizes Nomyx and the Payment Agent to charge Subscriber&apos;s credit card or other payment instrument to establish prepaid credit. The Account owner will receive a receipt upon each acceptance of payment by the Payment Agent, or they may obtain a receipt from within the Services to track subscription status. To the extent the Payment Agent is not Nomyx, the Payment Agent is acting solely as a billing and processing agent for and on behalf of Nomyx and shall not be construed to be providing the applicable Service. The Payment Agent uses a third-party intermediary to manage credit card processing and this intermediary is not permitted to store, retain or use Subscriber&apos;s billing information except to process Subscriber&apos;s credit card information for the Payment Agent.
              </p>
              <p>
                <strong>4.6 Payment Portals.</strong> If Subscriber mandates Nomyx to use a vendor payment portal or compliance portal that charges Nomyx a subscription fee or a percentage of any uploaded invoice as a required cost of doing business, Subscriber shall be invoiced by Nomyx for, and Subscriber is obligated to pay, the cost of this fee.
              </p>
              <p>
                <strong>4.7 Promotional Credits.</strong> Any promotional credits issued hereunder will be subject to the Nomyx Promotional Credits Policy available on the Nomyx Agreements and Terms Website.
              </p>
            </div>
          </section>

          {/* SECTION 5 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 5. CONFIDENTIAL INFORMATION
            </h2>
            <div className="space-y-4">
              <p>
                In connection with the Services, each Party will protect the other&apos;s Confidential Information from unauthorized use, access or disclosure in the same manner as each Party protects its own Confidential Information, but with no less than reasonable care. Except as otherwise expressly permitted pursuant to this Agreement, each Party may use the other Party&apos;s Confidential Information solely to exercise its respective rights and perform its respective obligations under this Agreement and shall disclose such Confidential Information (a) solely to the employees and/or non-employee service providers and contractors who have a need to know such Confidential Information and who are bound by terms of confidentiality intended to prevent the misuse of such Confidential Information; (b) as necessary to comply with an order or subpoena of any administrative agency or court of competent jurisdiction; or (c) as reasonably necessary to comply with any applicable law or regulation. Except for Nomyx&apos;s Security Non-Disclosure Agreement (where executed by Subscriber), the provisions of this Section 5 shall control over any non-disclosure agreement by and between the Parties and any such non-disclosure agreement shall have no further force or effect with respect to the exchange of Confidential Information after the execution of this Agreement. This section shall not apply to any information which (a) was publicly known prior to the time of disclosure by the disclosing Party, or (b) becomes publicly known after such disclosure through no action or inaction of the receiving Party in violation of this Agreement. For clarity, any exchange of Confidential Information prior to the execution of this Agreement shall continue to be governed by any such non-disclosure agreement. Given the unique nature of Confidential Information, the Parties agree that any violation or threatened violation by a Party to this Agreement with respect to Confidential Information may cause irreparable injury to the other Party. Therefore, the Parties agree such violation or threatened violation shall entitle the other Party to seek injunctive or other equitable relief in addition to all legal remedies.
              </p>
            </div>
          </section>

          {/* SECTION 6 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 6. SUB-PROCESSORS AND SECURITY OF SERVICE DATA
            </h2>
            <div className="space-y-4">
              <p>
                <strong>6.1 Sub-processors.</strong> Nomyx will utilize Sub-processors who will have access to or process Service Data to assist in providing the Services to the Subscriber. Subscriber hereby confirms and provides general authorization for Nomyx&apos;s use of the Sub-processors listed within Nomyx&apos;s Sub-processor Policy. Nomyx shall be responsible for the acts and omissions of members of Nomyx Personnel and Sub-processors to the same extent that Nomyx would be responsible if Nomyx was performing the services of each Nomyx Personnel or Sub-processor directly under the terms of this Agreement. Subscriber may sign up to receive notifications of any changes to the Sub-processor Policy within the policy webpage.
              </p>
              <p>
                <strong>6.2 Third-Party Service Providers.</strong> Nomyx may use third-party service providers that are utilized by Nomyx to assist in providing the Services to Subscriber, but do not have access to Service Data. Any third-party service providers utilized by Nomyx will be subject to confidentiality obligations which are substantially similar to the confidentiality terms herein. Nomyx shall be responsible for the acts and omissions of members of Nomyx&apos;s third-party service providers to the same extent that Nomyx would be responsible if Nomyx was performing the services of each third-party service provider directly under the terms of this Agreement.
              </p>
              <p>
                <strong>6.3 Safeguards.</strong> Nomyx will maintain appropriate administrative, physical, and technical safeguards for protection of the security, confidentiality and integrity of Service Data for Enterprise Services in accordance with the Enterprise Security Measures described at{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/enterprise-services">
                  https://www.nomyx.io/legal-documents/enterprise-services
                </Link>
                ; for Innovation Services in accordance with the Innovation Security Measures described at{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/innovation-services">
                  https://www.nomyx.io/legal-documents/innovation-services
                </Link>
                ; as well as in accordance with Supplemental Terms for any Deployed Associated Services, as applicable. Nomyx&apos;s compliance with the Enterprise Security Measures or the Innovation Security Measures, each as applicable, shall be deemed compliance with Nomyx&apos;s obligations to protect Service Data as set forth in the Agreement.
              </p>
              <p>
                <strong>6.4 Service Data.</strong> Nomyx will, and Subscriber hereby instructs Nomyx to, access Service Data to provide, secure and improve the Services. Subscriber is solely responsible for the accuracy, content, and legality of all Service Data. To improve Nomyx machine learning functionality, Nomyx models will only be trained on Service Data which has been subject to de-identification processes.
              </p>
              <p>
                <strong>6.5 Agent Contact Information.</strong> Nomyx shall be the Data Controller of Agent Contact Information, and shall process such Agent Contact Information in accordance with Nomyx&apos;s Privacy Notice and Nomyx&apos;s Controller Global Binding Corporate Rules located at{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/privacy-notice">
                  https://www.nomyx.io/legal-documents/privacy-notice
                </Link>
                . Subscriber is responsible for informing its Agents of their rights set forth in Nomyx&apos;s Privacy Notice. Subscriber represents and warrants that it has obtained all relevant consents, permissions and rights and provided all relevant notices necessary under applicable data protection laws for Nomyx to lawfully process Agent Contact Information as an independent Controller for the purposes set forth in Nomyx&apos;s Privacy Notice.
              </p>
              <p>
                <strong>6.6 Data Processing Agreement.</strong> The Data Processing Agreement, US State Addendum, and/or any other Nomyx-provided privacy terms located at{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/dpa">
                  https://www.nomyx.io/legal-documents/dpa
                </Link>{" "}
                shall be incorporated by reference herein into this Agreement once signed by the Parties.
              </p>
            </div>
          </section>

          {/* SECTION 7 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 7. TEMPORARY SUSPENSION
            </h2>
            <div className="space-y-4">
              <p>
                Nomyx reserves the right to restrict functionalities or suspend the Services (or any part thereof), Subscriber&apos;s Account or Subscriber&apos;s and/or Agents&apos; or End-Users&apos; rights to access and use the Services and remove, disable or quarantine any Service Data or other content if (a) Nomyx reasonably believes that Subscriber, Agents or End-Users have violated this Agreement; or (b) Nomyx suspects or detects any Malicious Software connected to a Subscriber&apos;s Account or use of a Service by Subscriber, Agents or End-Users. This right includes the removal or disablement of Service Data or other content in accordance with Nomyx&apos;s Copyright Infringement Notice and Takedown Policy available on Nomyx&apos;s Intellectual Property Website. Nomyx also reserves the right to immediately suspend Subscriber&apos;s Account for Subscriber&apos;s violation of the Nomyx User Content and Conduct Policy. Unless legally prohibited from doing so or where Nomyx is legally required to take immediate action, Nomyx will use commercially reasonable efforts to notify Subscriber via email when taking any of the foregoing actions. Nomyx shall not be liable to Subscriber, Agents, End-Users or any other third party for any modification, suspension or discontinuation of Subscriber&apos;s rights to access and use the Services. Nomyx may refer any suspected fraudulent, abusive, or illegal activity by Subscriber, Agents or End-Users to law enforcement authorities at Nomyx&apos;s sole discretion.
              </p>
            </div>
          </section>

          {/* SECTION 8 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 8. NON-NOMYX SERVICES
            </h2>
            <div className="space-y-4">
              <p>
                If Subscriber decides to enable, access or use Non-Nomyx Services, Subscriber&apos;s access and use of such Non-Nomyx Services shall be governed solely by the terms and conditions of such Non-Nomyx Services. Nomyx does not endorse, is not responsible or liable for, and makes no representations as to any aspect of such Non-Nomyx Services, including, without limitation, their content or the manner in which they handle, protect, manage or process data (including Service Data), or any interaction between Subscriber and the provider of such Non-Nomyx Services. Nomyx cannot guarantee the continued availability of such Non-Nomyx Service features, and may cease enabling access to them without entitling Subscriber to any refund, credit or other compensation, if, for example and without limitation, the provider of a Non-Nomyx Service ceases to make the Non-Nomyx Service available for interoperation with the corresponding Service in a manner acceptable to Nomyx. Subscriber irrevocably waives any claim against Nomyx with respect to such Non-Nomyx Services. Nomyx is not liable for any damage or loss caused or alleged to be caused by or in connection with Subscriber&apos;s enablement, access or use of any such Non-Nomyx Services, or Subscriber&apos;s reliance on the privacy practices, data security processes or other policies of such Non-Nomyx Services. Subscriber may be required to register for or log into such Non-Nomyx Services on their respective websites. By enabling any Non-Nomyx Services, Subscriber is expressly permitting Nomyx to disclose Subscriber&apos;s login and Service Data to the provider of the Non-Nomyx Service as necessary to facilitate the use or enablement of such Non-Nomyx Services.
              </p>
            </div>
          </section>

          {/* SECTION 9 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 9. FREE TRIALS
            </h2>
            <div className="space-y-4">
              <p>
                If Subscriber registers for a free trial for any of the Services, Nomyx will make such Services available to Subscriber pursuant to the terms and conditions stated at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents">
                  https://www.nomyx.io/legal-documents/
                </Link>
              </p>
            </div>
          </section>

          {/* SECTION 10 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 10. INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <div className="space-y-4">
              <p>
                <strong>10.1 Intellectual Property Rights. </strong>Each Party shall retain all rights, title and interest in any of its respective Intellectual Property Rights. The rights granted to Subscriber, Agents and End-Users to use the Service(s) under this Agreement do not convey any additional rights in the Service(s) or in any Intellectual Property Rights of Nomyx associated therewith. Subject only to limited rights to access and use the Service(s) as expressly stated herein, all rights, title and interest in and to the Services and all hardware, Software and other components of or used to provide the Services and Nomyx&apos;s machine learning algorithms, including all related Intellectual Property Rights, will remain with Nomyx and belong exclusively to Nomyx.
              </p>
              <p>
                <strong>10.2 Feedback. </strong>Nomyx shall have a fully paid-up, royalty-free, worldwide, transferable, sub-licensable (through multiple layers), assignable, irrevocable and perpetual license to implement, use, modify, commercially exploit, incorporate into the Services or otherwise use any suggestions, enhancement requests, recommendations or other feedback regarding the Services that Nomyx receives from Subscriber, Agents, End-Users, or other third parties acting on Subscriber&apos;s behalf. Nomyx also reserves the right to seek intellectual property protection for any features, functionality or components that may be based on or that were initiated by suggestions, enhancement requests, recommendations or other feedback regarding the Services that Nomyx receives from Subscriber, Agents, End-Users, or other third parties acting on Subscriber&apos;s behalf.
              </p>
              <p>
                <strong>10.3 Use of Nomyx Marks. </strong>Subscriber may only use the Nomyx Marks in a manner permitted by Nomyx&apos;s Trademark Usage Guidelines available on Nomyx&apos;s Intellectual Property Website, provided Subscriber does not attempt, now or in the future, to claim any rights in the Nomyx Marks, dilute or degrade the distinctiveness of the Nomyx Marks, or use the Nomyx Marks to disparage or misrepresent Nomyx or Nomyx Services. Nomyx&apos;s ability to use Subscriber Marks will be set forth in a Service Order or by mutual agreement of the Parties.
              </p>
              <p>
                <strong>10.4 Ownership of Service Data. </strong>Subscriber shall retain ownership rights, including all Intellectual Property Rights, to all Service Data processed under the terms of this Agreement.
              </p>
            </div>
          </section>

          {/* SECTION 11 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 11. REPRESENTATIONS, WARRANTIES AND DISCLAIMERS
            </h2>
            <div className="space-y-4">
              <p>
                <strong>11.1 Warranties. </strong>Each Party represents and warrants to the other that (a) this Agreement has been duly executed and delivered and constitutes a valid and binding agreement enforceable against such Party in accordance with its terms; (b) no authorization or approval from any third party is required in connection with such Party&apos;s execution, delivery or performance of this Agreement; and (c) the execution, delivery and performance of the Agreement does not and will not violate the terms or conditions of any other agreement to which it is a party or by which it is otherwise bound.
              </p>
              <p>
                <strong>11.2 Nomyx Warranties. </strong>Nomyx warrants that during an applicable Subscription Term (a) this Agreement and the Documentation will accurately describe the applicable administrative, physical, and technical safeguards for protection of the security, confidentiality and integrity of Service Data; and (b) the Services will perform materially in accordance with the applicable Documentation. For any breach of a warranty in this section, Subscriber&apos;s exclusive remedies are those described in Section 3.3 herein. The warranties herein do not apply to any misuse or unauthorized modification of the Services made by Subscriber, its Agents or its End-Users.
              </p>
              <div className="rounded-lg border border-border bg-[#F8FBFF] p-5 md:p-6">
                <p className="text-[13px] font-normal uppercase leading-6 text-ink md:text-[14px] md:leading-6">
                  <strong className="mr-1">11.3 DISCLAIMERS.</strong>{" "}EXCEPT AS SPECIFICALLY SET FORTH IN SECTION 11.2, THE SITES AND THE SERVICES, INCLUDING ALL SERVER AND NETWORK COMPONENTS, ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND TO THE FULLEST EXTENT PERMITTED BY LAW, AND NOMYX EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. SUBSCRIBER ACKNOWLEDGES THAT NOMYX DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE OR FREE FROM VIRUSES OR OTHER MALICIOUS SOFTWARE, AND NO INFORMATION OR ADVICE OBTAINED BY SUBSCRIBER FROM NOMYX OR THROUGH THE SERVICES SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THIS AGREEMENT.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 12 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 12. INDEMNIFICATION
            </h2>
            <div className="space-y-4">
              <p>
                <strong>12.1 Indemnification by Nomyx. </strong>Nomyx will indemnify and defend the Subscriber from and against any claim brought by a third party against Subscriber alleging that Subscriber&apos;s use of a Service as permitted hereunder infringes or misappropriates a third party&apos;s valid patent, copyright, trademark or trade secret (an &ldquo;IP Claim&rdquo;). Nomyx shall, at Nomyx&apos;s expense, defend such IP Claim and pay damages finally awarded against Subscriber in connection therewith, including reasonable fees and expenses of attorneys engaged by Nomyx for such defense, provided that (a) Subscriber promptly notifies Nomyx of the threat or notice of such IP Claim; (b) Nomyx will have sole, exclusive control and authority to select defense attorneys, defend and/or settle any such IP Claim (however, Nomyx shall not settle or compromise any claim that results in liability or admission of any liability by Subscriber without Subscriber&apos;s prior written consent); and (c) Subscriber fully cooperates with Nomyx in connection therewith. If use of a Service by Subscriber, Agents or End-Users has become, or, in Nomyx&apos;s opinion, is likely to become, the subject of any such IP Claim, Nomyx may, at Nomyx&apos;s option and expense (i) procure for Subscriber the right to continue using the Service(s) as set forth hereunder; (ii) replace or modify a Service to make it non-infringing; or (iii) if options (i) or (ii) are not commercially reasonable or practicable as determined by Nomyx, terminate Subscriber&apos;s subscription to the Service(s) and repay Subscriber, on a pro-rata basis, any Subscription Charges paid to Nomyx for the unused portion of Subscriber&apos;s Subscription Term for such Service(s). Nomyx will have no liability or obligation under this Section 12.1 with respect to any IP Claim if such claim is caused in whole or in part by (x) compliance with designs, data, instructions or specifications provided by Subscriber; (y) modification of the Service(s) by anyone other than Nomyx or Nomyx Personnel; or (z) the combination, operation or use of the Service(s) with other hardware or software where a Service would not by itself be infringing. The provisions of this Section 12.1 state the sole, exclusive and entire liability of Nomyx to Subscriber and Subscriber&apos;s sole remedy with respect to an IP Claim brought by reason of access to or use of a Service by Subscriber, Agents or End-Users.
              </p>
              <p>
                <strong>12.2 Indemnification by Subscriber. </strong>Subscriber will indemnify, defend and hold Nomyx harmless against any claim brought by a third party against Nomyx (a) arising from or related to Subscriber, Agents&apos; or End-Users use of a Service in breach of this Agreement (and not arising solely from the Service itself); or (b) alleging that Subscriber Marks or content selected by Subscriber in the design and implementation of the Services, including but not limited to the URL, graphics, illustrations, logos, and marks, or Service Data infringes or misappropriates a third party&apos;s valid patent, copyright, trademark or trade secret; provided that (i) Nomyx promptly notifies Subscriber of the threat or notice of such claim; (ii) Subscriber will have the sole and exclusive control and authority to select defense attorneys, and to defend and/or settle any such claim (however, Subscriber shall not settle or compromise any claim that results in liability or admission of any liability by Nomyx without Nomyx&apos;s prior written consent); and (iii) Nomyx fully cooperates with Subscriber in connection therewith.
              </p>
            </div>
          </section>

          {/* SECTION 13 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 13. LIMITATION OF LIABILITY
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-[#F8FBFF] p-5 md:p-6">
                <p className="text-[13px] font-normal uppercase leading-6 text-ink md:text-[14px] md:leading-6">
                  <strong className="mr-1">13.1 EXCLUSION OF DAMAGES.</strong>{" "}UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (WHETHER IN CONTRACT, TORT, NEGLIGENCE OR OTHERWISE) SHALL EITHER PARTY TO THIS AGREEMENT, OR THEIR RESPECTIVE AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, SUPPLIERS OR LICENSORS, BE LIABLE TO THE OTHER PARTY OR ITS AFFILIATES FOR ANY LOST PROFITS, LOST SALES OR BUSINESS, LOST DATA (WHERE SUCH DATA IS LOST IN THE COURSE OF TRANSMISSION VIA SUBSCRIBER&apos;S SYSTEMS OR OVER THE INTERNET THROUGH NO FAULT OF NOMYX), BUSINESS INTERRUPTION, LOSS OF GOODWILL, COSTS OF COVER OR REPLACEMENT, OR FOR ANY OTHER TYPE OF INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL OR PUNITIVE LOSS OR DAMAGES, OR FOR ANY OTHER INDIRECT LOSS OR DAMAGES INCURRED BY THE OTHER PARTY OR ITS AFFILIATES IN CONNECTION WITH THIS AGREEMENT, THE SERVICES OR PROFESSIONAL SERVICES, REGARDLESS OF WHETHER SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF OR COULD HAVE FORESEEN SUCH DAMAGES.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-[#F8FBFF] p-5 md:p-6">
                <p className="text-[13px] font-normal uppercase leading-6 text-ink md:text-[14px] md:leading-6">
                  <strong className="mr-1">13.2 LIMITATION OF LIABILITY.</strong>{" "}NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS AGREEMENT, NOMYX&apos;S AGGREGATE LIABILITY TO THE SUBSCRIBER, ITS AFFILIATES, OR ANY THIRD PARTY ARISING OUT OF THIS AGREEMENT, THE SERVICES OR PROFESSIONAL SERVICES, SHALL IN NO EVENT EXCEED THE SUBSCRIPTION CHARGES BY THE SUBSCRIBER DURING THE TWELVE (12) MONTHS PRIOR TO THE FIRST EVENT OR OCCURRENCE GIVING RISE TO SUCH LIABILITY. SUBSCRIBER ACKNOWLEDGES AND AGREES THAT THE ESSENTIAL PURPOSE OF THIS SECTION 13.2 IS TO ALLOCATE THE RISKS UNDER THIS AGREEMENT BETWEEN THE PARTIES AND LIMIT POTENTIAL LIABILITY GIVEN THE SUBSCRIPTION CHARGES AND PROFESSIONAL SERVICES FEES, WHICH WOULD HAVE BEEN SUBSTANTIALLY HIGHER IF NOMYX WERE TO ASSUME ANY FURTHER LIABILITY OTHER THAN AS SET FORTH HEREIN. NOMYX HAS RELIED ON THESE LIMITATIONS IN DETERMINING WHETHER TO PROVIDE SUBSCRIBER WITH THE RIGHTS TO ACCESS AND USE THE SERVICES AND/OR THE PROFESSIONAL SERVICES PROVIDED FOR IN THIS AGREEMENT. THE LIMITATIONS SET FORTH IN SECTION 13.2 SHALL NOT APPLY TO CLAIMS OR DAMAGES RESULTING FROM NOMYX&apos;S IP CLAIMS INDEMNITY OBLIGATIONS IN SECTION 12.1 OF THIS AGREEMENT.
                </p>
              </div>

              <p>
                <strong>13.3 LIMITATION OF LIABILITY IN THE AGGREGATE. </strong>THE LIMITATION OF LIABILITY PROVIDED FOR HEREIN APPLIES IN AGGREGATE TO ANY AND ALL CLAIMS BY SUBSCRIBER AND ITS AFFILIATES, AND SHALL NOT BE CUMULATIVE.
              </p>
              <p>
                <strong>13.4 Jurisdiction-specific exclusions. </strong>Some jurisdictions do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages or for a party&apos;s own fraud, willful injury to the person or property of another, or violation of law, which means that some of the above limitations may not apply to Subscriber. IN THESE JURISDICTIONS, NOMYX&apos;S LIABILITY WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.
              </p>
              <p>
                <strong>13.5 Enforceable against Nomyx. </strong>Any claims or damages that Subscriber may have against Nomyx shall only be enforceable against Nomyx and not any other entity, nor any officers, directors, representatives or agents of Nomyx or any other entity.
              </p>
            </div>
          </section>

          {/* SECTION 14 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 14. ASSIGNMENT, ENTIRE AGREEMENT AND AMENDMENT
            </h2>
            <div className="space-y-4">
              <p>
                <strong>14.1 Assignment. </strong>Except as permitted herein, neither party may, directly or indirectly, by operation of law or otherwise, assign all or any part of this Agreement or rights under this Agreement, or delegate performance of its duties under this Agreement, without written prior consent of the other party, which consent will not be unreasonably withheld. Notwithstanding the foregoing (a) subject to Section 2.6 herein, Subscriber may, without Nomyx&apos;s consent, assign this Agreement to an Affiliate or in connection with any merger or change of control of Subscriber or the sale of all or substantially all of Subscriber&apos;s assets, provided that (i) any such successor agrees to fulfill its obligations pursuant to this Agreement, and (ii) Subscriber and the assignee execute Nomyx&apos;s assignment form; and (b) Nomyx may assign this Agreement without Subscriber&apos;s consent to any member of Nomyx or in connection with any merger or change of control of Nomyx or Nomyx or the sale of all or substantially all of Nomyx&apos;s assets provided that any such successor agrees to fulfill its obligations pursuant to this Agreement. If requested by Nomyx, Subscriber must execute an assignment to give effect to Nomyx&apos;s assignment. Subject to the foregoing restrictions, this Agreement will be fully binding upon, inure to the benefit of and be enforceable by the Parties and their respective successors and assigns.
              </p>
              <p>
                <strong>14.2 Entire Agreement. </strong>This Agreement constitutes the entire agreement and supersedes any and all prior agreements between Subscriber and Nomyx, with regard to the subject matter hereof. This Agreement shall apply in lieu of the terms or conditions in any purchase order, request for information, request for proposal, or other order documentation Subscriber or any entity which Subscriber represents provide(s) and all such terms or conditions in such purchase order, request for information, request for proposal, or other order documentation are null and void. Except as expressly stated herein, there are no other agreements, representations, warranties or commitments which may be relied upon by either Party with respect to the subject matter hereof. There are no oral promises, conditions, representations, understandings, interpretations or terms of any kind between the Parties, except as may otherwise be expressly provided herein. The headings used herein are for convenience only and shall not affect the interpretation of the terms of this Agreement.
              </p>
              <p>
                <strong>14.3 Amendment. </strong>Nomyx may amend this Agreement from time to time, in which case the new Agreement will supersede prior versions. Nomyx will notify the Subscriber not less than thirty (30) days prior to the effective date of any such amendment and Subscriber&apos;s continued use of the Services following the effective date of any such amendment may be relied upon by Nomyx as Subscriber&apos;s consent to any such amendment. Nomyx&apos;s failure to enforce at any time any provision of this Agreement does not constitute a waiver of that provision or of any other provision of this Agreement.
              </p>
            </div>
          </section>

          {/* SECTION 15 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 15. SEVERABILITY
            </h2>
            <div className="space-y-4">
              <p>
                If any term in this Agreement is determined to be invalid or unenforceable by a competent court or governing body, such term shall be replaced with another term consistent with the purpose and intent of this Agreement, and the remaining provisions of this Agreement shall remain in effect.
              </p>
            </div>
          </section>

          {/* SECTION 16 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 16. EXPORT COMPLIANCE AND USE RESTRICTIONS
            </h2>
            <div className="space-y-4">
              <p>
                The Services and other Nomyx technology, and derivatives thereof, may be subject to export controls and economic sanctions laws and regulations of the United States and other jurisdictions. Subscriber agrees to comply with all such laws and regulations as they relate to the access to and use of the Services and other Nomyx technology. Each Party represents that it (nor its parents or controlling shareholders) is not named on (nor directly or indirectly owned 50% or greater, in the aggregate, or otherwise controlled by, a person or persons named on) any U.S. government or other applicable restricted-party list, and Subscriber will not, and will not permit any Agent or End-User to: (a) access or use any Service in a U.S.-embargoed or U.S.-sanctioned country or region, (e.g., Cuba, Iran, North Korea, Syria, the Crimea region of Ukraine, the so-called Donetsk People&apos;s Republic and Luhansk People&apos;s Republic regions of Ukraine, or any other country or region embargoed or sanctioned during the Subscription Term); (b) access or use any Service if Subscriber, Agent, or End-User is named on (or directly or indirectly owned 50% or greater, in the aggregate, or otherwise controlled by, a person or persons named on) any U.S. government or other applicable restricted-party list; (c) place any information in the Services that is controlled under the U.S. International Traffic in Arms Regulations or other similar laws; or (d) access or use any Service for any purpose prohibited by the United States or applicable international import and export laws and regulations. Nomyx reserves the unconditional right to refuse to enter into or to terminate a contractual relationship with any particular company, legal entity or individual on the basis of export control restrictions, embargoes, sanctions or other considerations to the extent permitted by law.
              </p>
            </div>
          </section>

          {/* SECTION 17 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 17. RELATIONSHIP OF THE PARTIES
            </h2>
            <div className="space-y-4">
              <p>
                The Parties are independent contractors, and this Agreement does not create a partnership, franchise, joint venture, general agency, fiduciary or employment relationship between the Parties. Subscriber is solely responsible for determining whether the Services meet Subscriber&apos;s technical, business, or regulatory requirements. Nomyx&apos;s business partners and other third parties, including any third parties with which the Services have integrations or that are retained by Subscriber to provide consulting services, implementation services or applications that interact with the Services, are independent of Nomyx.
              </p>
            </div>
          </section>

          {/* SECTION 18 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 18. NOTICE
            </h2>
            <div className="space-y-4">
              <p>
                <strong>18.1 Notices to Subscriber. </strong>All notices provided by Nomyx to Subscriber under this Agreement may be delivered in writing by (a) nationally recognized overnight delivery service (&ldquo;Courier&rdquo;) or U.S. mail to the contact mailing address provided by Subscriber on any Service Order; or (b) electronic mail to the electronic mail address provided for the Account owner.
              </p>
              <p>
                <strong>18.2 Notices to Nomyx. </strong>All Legal Notices provided by Subscriber to Nomyx under this Agreement must be delivered in English and in writing by (a) Courier or U.S. mail to 30 N Gould St., STE 25124, Sheridan, WY 82801 U.S.A. Attn: Legal Department; or (b) electronic mail to{" "}
                <a className="text-blue-500 hover:underline" href="mailto:legal@nomyx.io">
                  legal@nomyx.io
                </a>
                . All other notices provided by Subscriber to Nomyx under this Agreement must be delivered in English and in writing by electronic mail to{" "}
                <a className="text-blue-500 hover:underline" href="mailto:legal@nomyx.io">
                  legal@nomyx.io
                </a>
                .
              </p>
              <p>
                <strong>18.3</strong>{" "}All notices provided by either Party to the other shall be deemed to have been given immediately upon delivery by electronic mail; or upon the earlier of proof of receipt or two (2) business days after being deposited in the mail or with a Courier as permitted above.
              </p>
            </div>
          </section>

          {/* SECTION 19 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 19. GOVERNING LAW
            </h2>
            <div className="space-y-4">
              <p>
                This Agreement shall be governed by the laws of the State of Utah, without reference to conflict of laws principles. Any disputes under this Agreement shall be resolved in a court of general jurisdiction in Salt Lake City, Utah. You hereby expressly agree to submit to the exclusive personal jurisdiction of this jurisdiction for the purpose of resolving any dispute relating to this Agreement or relating to access to or use of the Services by Subscriber, Agents or End-Users.
              </p>
            </div>
          </section>

          {/* SECTION 20 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 20. FEDERAL GOVERNMENT END USE PROVISIONS
            </h2>
            <div className="space-y-4">
              <p>
                If Subscriber is a U.S. federal government department or agency or contracting on behalf of such department or agency, each of the Services is a &ldquo;Commercial Product&rdquo; as that term is defined at 48 C.F.R. §2.101, consisting of &ldquo;Commercial Computer Software&rdquo; and &ldquo;Commercial Computer Software Documentation&rdquo;, as those terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202. Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4, as applicable, the Services are licensed to the Subscriber with only those rights as provided under the terms and conditions of this Agreement.
              </p>
            </div>
          </section>

          {/* SECTION 21 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 21. ETHICAL CONDUCT AND COMPLIANCE
            </h2>
            <div className="space-y-4">
              <p>
                Neither Party, nor any of its employees or agents, has offered, received or been offered, directly or indirectly, any illegal or improper bribe or kickback (whether in the form of a payment, gift, undue advantage, or thing of value), or will offer or accept the same in connection with this Agreement. All parties agree to comply with the US Foreign Corrupt Practices Act of 1977, the UK Bribery Act of 2010, and any equivalent anti-corruption requirements in other jurisdictions that are reasonably applicable to this Agreement. Modest and reasonable gifts, meals, entertainment, and other hospitality, provided in the ordinary course of business and without any corrupt intent to obtain or retain business, or influence a government decision, will not violate the above restriction. Nomyx will abide by its Code of Conduct in the provision of the Services as stated here:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/user-content-and-conduct-policy">
                  https://www.nomyx.io/legal-documents/user-content-and-conduct-policy
                </Link>
                . If Subscriber learns of any violation of the above restrictions by Nomyx, Subscriber will use reasonable efforts to promptly notify Nomyx at{" "}
                <a className="text-blue-500 hover:underline" href="mailto:legal@nomyx.io">
                  legal@nomyx.io
                </a>
                .
              </p>
            </div>
          </section>

          {/* SECTION 22 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 22. SURVIVAL
            </h2>
            <div className="space-y-4">
              <p>
                Sections 2.1, 3.5, 3.6, 4.4, 5 &ndash; 7, 10, 12 &ndash; 19 and 23 shall survive termination of this Agreement with respect to use of the Services by Subscriber, Agents or End-Users. Termination of this Agreement shall not limit a Party&apos;s liability for obligations accrued as of or prior to termination or for any breach of this Agreement.
              </p>
            </div>
          </section>

          {/* SECTION 23 */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              SECTION 23. DEFINITIONS
            </h2>
            <p>
              When used in this Agreement with initial letters capitalized, these terms have the following meaning:
            </p>

            <div className="space-y-4">
              <p>
                <strong>&ldquo;Account&rdquo; </strong>means any accounts or instances created by, or on behalf of, Subscriber or its Affiliates within the Services.
              </p>

              <p>
                <strong>&ldquo;Additional Feature(s)&rdquo; </strong>means additional features or functionality (e.g., Built by Nomyx Marketplace Applications, Nomyx Labs apps, or Early Access Programs) that are available or enabled through the Services, but do not form part of the Service. Additional Features also include third party services that are purchased and/or subscribed to via a Service Order and that are identified as being resold by Nomyx and governed by such third party&apos;s alternate agreement. Additional Features are purchased or enabled separately and distinctly from Subscriber&apos;s Service Plan and Deployed Associated Services.
              </p>

              <p>
                <strong>&ldquo;Affiliate(s)&rdquo; </strong>means, with respect to a Party, any entity that directly or indirectly controls, is controlled by, or is under common control with such Party, whereby &ldquo;control&rdquo; (including, with correlative meaning, the terms &ldquo;controlled by&rdquo; and &ldquo;under common control&rdquo;) means the possession, directly or indirectly, of the power to direct, or cause the direction of the management and policies of such person, whether through the ownership of voting securities, by contract, or otherwise.
              </p>

              <p>
                <strong>&ldquo;Agent(s)&rdquo; </strong>means an individual (including those of Subscriber&apos;s Affiliates) authorized to use the Service(s) through Subscriber&apos;s Account as an agent, account owner and/or administrator, each as identified through an individual Agent Login.
              </p>

              <p>
                <strong>&ldquo;Agent Contact Information&rdquo; </strong>means personal data about Subscriber&apos;s Agents, such as their name and email address, that Nomyx stores separate from the Services in order to, among other things, communicate with Subscriber&apos;s Agents related to Nomyx&apos;s provision and support of Services. Agent Contact Information is not considered Service Data.
              </p>

              <p>
                <strong>&ldquo;Agent Login&rdquo; </strong>means a unique username and associated password provisioned to an individual to permit them to access the Services.
              </p>

              <p>
                <strong>&ldquo;Agreement&rdquo; </strong>means the Main Services Agreement together with any and all Supplemental Terms, Service Order and other mutually executed documents. The Main Services Agreement may also be referred to as &ldquo;Master Subscription Agreement&rdquo; or &ldquo;MSA.&rdquo;
              </p>

              <p>
                <strong>&ldquo;API&rdquo; </strong>means the application programming interfaces developed, made available and enabled by Nomyx that permit Subscribers to access certain functionality provided by the Services, including, without limitation, the REST API that enables the interaction with the Services automatically through HTTP requests and the application development API that enables the integration of the Services with other web applications.
              </p>

              <p>
                <strong>&ldquo;Associated Services&rdquo; </strong>means products, services, features and functionality designed to be used in conjunction with the Services that are not included in Subscriber&apos;s subscribed Service Plan. For the avoidance of doubt, Additional Features that are expressly stated to be governed by separate Supplemental Terms shall not be deemed an Associated Service. Where Subscriber has purchased, deployed, or subscribed to an Associated Service, such Associated Service is referred to as a &ldquo;Deployed Associated Service.&rdquo;
              </p>

              <p>
                <strong>&ldquo;Confidential Information&rdquo; </strong>means all information disclosed by one Party to the other Party which is in tangible form and designated as confidential or is information, regardless of form, which a reasonable person would understand to be confidential given the nature of the information and circumstances of disclosure, including but not limited to the pricing terms, product plans and designs, business processes, security notifications, and customer advocacy communications. Notwithstanding the foregoing, Confidential Information shall not include information that (a) was already known to the receiving Party at the time of disclosure by the disclosing Party; (b) was or is obtained by the receiving Party from a third party not known by the receiving Party to be under an obligation of confidentiality with respect to such information; (c) is or becomes generally available to the public other than by violation of this Agreement or another valid agreement between the Parties; or (d) was or is independently developed by the receiving Party without the use of the disclosing Party&apos;s Confidential Information.
              </p>

              <p>
                <strong>&ldquo;Data Controller&rdquo; </strong>refers to the entity that determines the purposes and means for processing personal data.
              </p>

              <p>
                <strong>&ldquo;Documentation&rdquo; </strong>means any written or electronic documentation, images, video, text or sounds specifying the functionalities or limitations of the Services or describing Service Plans, as applicable, provided or made available by Nomyx to Subscriber in the applicable Nomyx help center(s); provided, however, that Documentation shall specifically exclude any &ldquo;community moderated&rdquo; forums as provided or accessible through such knowledge base(s).
              </p>

              <p>
                <strong>&ldquo;End-User(s)&rdquo; </strong>means any person or entity other than Subscriber or Agents with whom Subscriber, its Agents, or its other End-Users interact while using a Service.
              </p>

              <p>
                <strong>&ldquo;Enterprise Services&rdquo; </strong>means any Service not designated on Nomyx&apos;s Innovation Services List available on Nomyx&apos;s Agreements and Terms Website. Professional Services are also not considered Enterprise Services.
              </p>

              <p>
                <strong>&ldquo;Force Majeure Event&rdquo; </strong>means any circumstances beyond Nomyx&apos;s reasonable control, including, but not limited to, an act of God, act of government, flood, fire, earthquake, civil unrest, act of terror, strike or other labor problem (other than one involving Nomyx employees), Internet service provider failure or delay, Non-Nomyx Services, or acts undertaken by third parties, including without limitation, denial of service attack.
              </p>

              <p>
                <strong>&ldquo;How We Protect Your Service Data (Enterprise Services)&rdquo;</strong> means the website located at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/enterprise-services">
                  https://www.nomyx.io/legal-documents/enterprise-services
                </Link>
              </p>

              <p>
                <strong>&ldquo;How We Protect Your Service Data (Innovation Services)&rdquo;</strong> means the website located at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/innovation-services">
                  https://www.nomyx.io/legal-documents/innovation-services
                </Link>
              </p>

              <p>
                <strong>&ldquo;Innovation Services&rdquo;</strong> means any Service or feature described on Nomyx&apos;s Innovation Services List available on Nomyx&apos;s Agreement and Terms Website (
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/innovation-services">
                  https://www.nomyx.io/legal-documents/innovation-services
                </Link>
                ).
              </p>

              <p>
                <strong>&ldquo;Intellectual Property Rights&rdquo;</strong> means any and all of a Party&apos;s patents, inventions, copyrights, trademarks, domain names, trade secrets, know-how and any other intellectual property and/or proprietary rights.
              </p>

              <p>
                <strong>&ldquo;Legal Notice&rdquo;</strong> means any notice provided by Subscriber to Nomyx under Sections 3.3 and 12.1 of this Agreement.
              </p>

              <p>
                <strong>&ldquo;Malicious Software&rdquo;</strong> means any viruses, malware, Trojan horses, time bombs, or any other similar harmful software.
              </p>

              <p>
                <strong>&ldquo;Non-Nomyx Services&rdquo;</strong> means third party products, applications, services, software, networks, systems, directories, websites, databases and information which a Service links to, or which Subscriber may connect to or enable in conjunction with a Service, including, without limitation, Non-Nomyx Services which may be integrated directly into an Account by Subscriber or at Subscriber&apos;s direction.
              </p>

              <p>
                <strong>&ldquo;Payment Agent(s)&rdquo;</strong> means Nomyx, Inc. or a payment agent designated by Nomyx. For example, if Subscriber chooses to pay for a Service with a credit card or certain other payment instruments in a currency other than the U.S. Dollar, Nomyx may designate the Payment Agent to be Nomyx International Limited, a corporation organized under the laws of Ireland, Registration No. 519184.
              </p>

              <p>
                <strong>&ldquo;Personnel&rdquo;</strong> means employees and/or non-employee contractors of Nomyx engaged by Nomyx in connection with performance hereunder.
              </p>

              <p>
                <strong>&ldquo;Planned Downtime&rdquo;</strong> means planned downtime for upgrades and maintenance to the Services scheduled in advance of such upgrades and maintenance.
              </p>

              <p>
                <strong>&ldquo;Privacy Notice&rdquo;</strong> means Nomyx&apos;s Privacy Notice located at{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/privacy-notice">
                  https://www.nomyx.io/legal-documents/privacy-notice
                </Link>
              </p>

              <p>
                <strong>&ldquo;Professional Services&rdquo;</strong> means consulting or professional services (including any training, success and implementation services) provided by Nomyx Personnel as indicated on a Service Order or other written document such as an SOW. Professional Services may also be referred to as Consulting Services in the Documentation or SOW.
              </p>

              <p>
                <strong>&ldquo;Service(s)&rdquo;</strong> means the products and services that are used or ordered by Subscriber online through a link or via a Service Order referencing this Agreement, whether on a trial or paid basis, and whether Enterprise Services or Innovation Services, and made available online by Nomyx, via the applicable subscriber login link and other web pages designated by Nomyx, including, individually and collectively, the applicable Software, updates, API, Documentation, and all Deployed Associated Services that are provided under this Agreement. &ldquo;Services&rdquo; exclude (a) Non-Nomyx Services as that term is defined in this Agreement; and (b) any Additional Features or Associated Services that are not provided under this Agreement or Subscriber&apos;s Service Plan. From time to time, the names and descriptions of the Services or any individual Service may be changed. To the extent Subscriber is given access to such Service as so described by virtue of a prior Service Order or other prior acceptance of this Agreement, this Agreement shall be deemed to apply to such Service as newly named or described.
              </p>

              <p>
                <strong>&ldquo;Service Data&rdquo;</strong> means all electronic data, text, messages, communications or other materials submitted to and stored within a Service by Subscriber, Agents and End-Users in connection with Subscriber&apos;s use of such Service, excluding Agent Contact Information.
              </p>

              <p>
                <strong>&ldquo;Service Order&rdquo;</strong> means Nomyx&apos;s generated service order form(s) or online ordering document or process completed, executed or approved by Subscriber with respect to Subscriber&apos;s subscription to a Service, which may detail, among other things, the number of Agents authorized to use a Service under Subscriber&apos;s subscription and the applicable Service Plan.
              </p>

              <p>
                <strong>&ldquo;Service Plan(s)&rdquo;</strong> means the packaged service plan(s) and the functionality and services associated therewith (as detailed on the Site and in Documentation applicable to the Service) for the Services.
              </p>

              <p>
                <strong>&ldquo;Site&rdquo;</strong> means a website operated by Nomyx, including www.nomyx.io, as well as all other websites that Nomyx operates (but shall not include the Services).
              </p>

              <p>
                <strong>&ldquo;Software&rdquo;</strong> means software provided by Nomyx (either by download or access through the internet) that allows Agents or End-Users to use any functionality in connection with the applicable Service.
              </p>

              <p>
                <strong>&ldquo;Standard Subscription Charges&rdquo;</strong> means Nomyx&apos;s undiscounted list price for the applicable Services related to Subscriber&apos;s access to and use of an Account.
              </p>

              <p>
                <strong>&ldquo;Sub-processor(s)&rdquo;</strong> means any third-party data processor engaged by Nomyx, including entities from Nomyx, who receives Service Data from Nomyx for processing on behalf of Subscriber and in accordance with Subscriber&apos;s instructions (as communicated by Nomyx) and the terms of its written subcontract.
              </p>

              <p>
                <strong>&ldquo;Subscriber&rdquo;</strong> means the party specified above with the address as set forth on the Service Order and may also be referred to as &ldquo;You&rdquo; or &ldquo;Your.&rdquo;
              </p>

              <p>
                <strong>&ldquo;Subscriber Marks&rdquo;</strong> means any trademarks, service marks, service or trade names, taglines, logos or other designations of Subscriber.
              </p>

              <p>
                <strong>&ldquo;Subscription Charges&rdquo;</strong> means all charges associated with Subscriber&apos;s access to and use of an Account.
              </p>

              <p>
                <strong>&ldquo;Subscription Term&rdquo;</strong> means the period during which Subscriber has agreed to subscribe to a Service.
              </p>

              <p>
                <strong>&ldquo;Supplemental Terms&rdquo;</strong> means the additional terms and conditions that are (a) included or incorporated on a Service Order via hyperlink or other reference (e.g., when a Deployed Associated Service is purchased); (b) applicable to Professional Services when purchased by Subscriber; (c) applicable to Additional Features when activated by Subscriber; and (d) Nomyx&apos;s Service-Specific Terms; and (e) Nomyx&apos;s Region-Specific Terms.
              </p>

              <p>
                <strong>&ldquo;Taxes&rdquo;</strong> means taxes, levies, duties or similar governmental assessments, including value-added, sales, use or withholding taxes assessable by any local, state, provincial or foreign jurisdiction.
              </p>

              <p>
                <strong>&ldquo;Usage Charges&rdquo;</strong> means additional Subscription Charges that are incurred by Subscriber relating to the use of certain features and functionality that Subscriber enables within the Service.
              </p>

              <p>
                <strong>&ldquo;Nomyx&rdquo;</strong> means Nomyx Technology Labs Inc., a Delaware corporation, or any of its successors or assignees and may also be referred to as &ldquo;We,&rdquo; &ldquo;Us&rdquo; or &ldquo;Our.&rdquo;
              </p>

              <p>
                <strong>&ldquo;Nomyx&apos;s Agreements and Terms Website&rdquo;</strong> means the website located at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents">
                  https://www.nomyx.io/legal-documents/
                </Link>
              </p>

              <p>
                <strong>&ldquo;Nomyx&apos;s In-Product Cookie Policy&rdquo;</strong> means the policy as stated at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/in-product-cookie-policy">
                  https://www.nomyx.io/legal-documents/in-product-cookie-policy
                </Link>
              </p>

              <p>
                <strong>&ldquo;Nomyx&apos;s Intellectual Property Website&rdquo;</strong> means the website located at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/trademark-usage-guidelines">
                  https://www.nomyx.io/legal-documents/trademark-usage-guidelines
                </Link>
              </p>

              <p>
                <strong>&ldquo;Nomyx Marks&rdquo;</strong> means any trademarks, service marks, service or trade names, taglines, logos or other designations of Nomyx, Nomyx, or its or their Affiliates, whether registered or unregistered.
              </p>

              <p>
                <strong>&ldquo;Nomyx&apos;s Region-Specific Terms&rdquo;</strong> means the Supplemental Terms applicable in certain jurisdictions as stated at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents">
                  https://www.nomyx.io/legal-documents/
                </Link>
              </p>

              <p>
                <strong>&ldquo;Nomyx&apos;s Service-Specific Terms&rdquo;</strong> means the Supplemental Terms applicable to use of different Services as stated at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/blockchain-terms">
                  https://www.nomyx.io/legal-documents/blockchain-terms
                </Link>
              </p>

              <p>
                <strong>&ldquo;Nomyx&apos;s Sub-processor Policy&rdquo;</strong> means the policy as stated at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/dpa">
                  https://www.nomyx.io/legal-documents/dpa
                </Link>
              </p>

              <p>
                <strong>&ldquo;Nomyx&apos;s User Content and Conduct Policy&rdquo;</strong> means the policy as stated at:{" "}
                <Link className="text-blue-500 hover:underline break-all" href="/legal-documents/user-content-and-conduct-policy">
                  https://www.nomyx.io/legal-documents/user-content-and-conduct-policy
                </Link>
              </p>
            </div>
          </section>

          <section className="space-y-4 border-t border-border pt-8">
            <p>
              For questions regarding this Agreement:{" "}
              <a className="text-blue-500 hover:underline" href="mailto:legal@nomyx.io">
                legal@nomyx.io
              </a>
            </p>
            <p className="font-bold text-ink">
              Version: 3.0 | Effective: September 17, 2026
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
