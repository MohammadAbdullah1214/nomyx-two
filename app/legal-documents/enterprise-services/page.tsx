import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Protect Your Service Data (Enterprise Services) | Nomyx Legal Documents",
  description: "Enterprise Security Measures",
  alternates: {
    canonical: "https://www.nomyx.io/legal-documents/enterprise-protection",
  },
};

export default function EnterpriseProtectionPage() {
  return (
    <article className="max-w-230 lg:ml-18">
      <header className="mb-8">
        <h1 className="mb-2 text-[32px] font-bold leading-tight text-ink md:text-[40px] md:leading-tight">
          How We Protect Your Service Data (Enterprise Services)
        </h1>
        <p className="text-[14px] leading-6 text-ink-muted">
          Last Updated: September 1, 2024
        </p>
      </header>

      <div className="border-t border-border pt-9">
        <div className="space-y-8 text-[14px] font-normal leading-7 text-ink md:text-[16px] md:leading-7">
          
          <p>
            Nomyx is committed to providing a robust and comprehensive security program for Enterprise Services, including the security measures set forth in these Supplemental Terms (&quot;Enterprise Security Measures&quot;). During the Subscription Term, these Enterprise Security Measures may change without notice, as standards evolve or as additional controls are implemented or existing controls are modified as We deem reasonably necessary.
          </p>

          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              Enterprise Security Measures Utilized by Us
            </h2>
            <p>
              We will abide by these Enterprise Security Measures to protect Service Data as is reasonably necessary to provide the Enterprise Services:
            </p>

            <div className="space-y-3">
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  <strong>Security Policies and Personnel.</strong> We have and will maintain a managed security program to identify risks and implement appropriate controls, as well as technology and processes for common attack mitigation. This program is and will be reviewed on a regular basis to provide for continued effectiveness and accuracy. We have, and will maintain, a full-time information security team responsible for monitoring and reviewing security infrastructure for Our networks, systems and services, responding to security incidents, and developing and delivering training to Our employees in compliance with Our security policies.
                </li>
                <li>
                  <strong>Data Transmission.</strong> We will maintain commercially reasonable administrative, physical and technical safeguards to protect the security, confidentiality, and integrity of Service Data. These safeguards include encryption of Service Data at rest and in transmission with Our user interfaces or APIs (using TLS or similar technologies) over the internet, except for any Non-Nomyx Service that does not support encryption, which You may link to through the Enterprise Services at Your election.
                </li>
                <li>
                  <strong>Audits and Certifications.</strong> Upon Subscriber&apos;s request, and subject to the confidentiality obligations set forth in this Agreement, Nomyx shall make available to Subscriber that is not a competitor of Nomyx (or Subscriber&apos;s independent, third-party auditor that is not a competitor of Nomyx) information regarding Nomyx&apos;s compliance with the obligations set forth in this Agreement.
                </li>
                <li>
                  <strong>Incident Response.</strong> We have an incident management process for security events that may affect the confidentiality, integrity, or availability of Our systems or data that includes a response time under which Nomyx will contact its subscribers upon verification of a security incident that affects Your Service Data. This process specifies courses of action, procedures for notification, escalation, mitigation, and documentation. The incident response program includes 24×7 centralized monitoring systems and on-call staffing to respond to service incidents. Unless ordered otherwise by law enforcement or government agency, You will be notified within forty-eight (48) hours of a Service Data Breach. &quot;Service Data Breach&quot; means an unauthorized access or improper disclosure that has been verified to have affected Your Service Data.
                </li>
                <li>
                  <strong>Access Control and Privilege Management.</strong> We restrict administrative access to production systems to approved personnel. We require such personnel to have unique IDs and associated cryptographic keys and/or use of complex ephemeral tokens. These keys and/or tokens are used to authenticate and identify each person&apos;s activities on Our systems, including access to Service Data. Upon hire, Our approved personnel are assigned unique IDs and credentials. Upon termination of personnel, or where compromise of such credentials is suspected, these credentials are revoked. Access rights and levels are based on Our employees&apos; job function and role, using the concepts of least-privilege and need-to-know basis to match access privileges to defined responsibilities.
                </li>
                <li>
                  <strong>Network Management and Security.</strong> The Sub-Processors utilized by Us for hosting services maintain industry standard fully redundant and secure network architecture with reasonably sufficient bandwidth as well as redundant network infrastructure to mitigate the impact of individual component failure. Our security team utilizes industry standard utilities to provide defense against known common unauthorized network activity, monitors security advisory lists for vulnerabilities, and undertakes regular external vulnerability scans and audits.
                </li>
                <li>
                  <strong>Data Center Environment and Physical Security.</strong> The Sub-Processors&apos; environments which are utilized by Us for hosting services in connection with Our provision of the Enterprise Services employ the following security measures:
                  <ul className="list-disc space-y-3 pl-5 mt-3">
                    <li>A security organization responsible for physical security functions 24x7x365.</li>
                    <li>Access to areas where systems or system components are installed or stored within data centers is restricted through security measures and policies consistent with industry standards.</li>
                    <li>N+1 uninterruptible power supply and HVAC systems, backup power generator architecture and advanced fire suppression.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              Technical and Organizational Enterprise Security Measures for Third-Party Service Providers Who Process Service Data
            </h2>
            <p>
              Any third-party service providers that are utilized by Nomyx will only be given access to Your Account and Service Data as is reasonably necessary to provide the Enterprise Services. Nomyx maintains a vendor security review program which assesses and manages any potential risks involved in using these third-party service providers who have access to Service Data and such third-party service providers will be subject to, among the other requirements in the Main Services Agreement, their implementing and maintaining compliance with the following appropriate technical and organizational security measures:
            </p>

            <div className="space-y-3">
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  <strong>Physical Access Controls.</strong> Third-party service providers shall take reasonable measures, such as security personnel and secured buildings, to prevent unauthorized persons from gaining physical access to data processing systems in which Service Data is Processed.
                </li>
                <li>
                  <strong>System Access Controls.</strong> Third-party service providers shall take reasonable measures to prevent data processing systems from being used without authorization. These controls shall vary based on the nature of Processing undertaken and may include, among other controls, authentication via passwords and/or two-factor authentication, documented authorization processes, documented change management processes, and/or logging of access on several levels.
                </li>
                <li>
                  <strong>Data Access Controls.</strong> Third-party service providers shall take reasonable measures to provide that Service Data is accessible and manageable only by properly authorized staff, direct database query access is restricted and application access rights are established and enforced to ensure that persons entitled to access Service Data only have access to Service Data to which they have the privilege of access; and, that Service Data cannot be read, copied, modified, or removed without authorization in the course of Processing.
                </li>
                <li>
                  <strong>Transmission Controls.</strong> Third-party service providers shall take reasonable measures to ensure that it is possible to check and establish to which entities the transfer of Service Data by means of data transmission facilities is envisaged so Service Data cannot be read, copied, modified, or removed without authorization during electronic transmission or transport.
                </li>
                <li>
                  <strong>Input Controls.</strong> Third-party service providers shall take reasonable measures to ensure that it is possible to check and establish whether and by whom Service Data has been entered into data processing systems, modified or removed; and, any transfer of Service Data to a third-party service provider is made via a secure transmission.
                </li>
                <li>
                  <strong>Data Protection.</strong> Third-party service providers shall take reasonable measures to provide that Service Data is secured to protect against accidental destruction or loss.
                </li>
                <li>
                  <strong>Logical Separation.</strong> Third-party service providers shall logically segregate Service Data from the data of other parties on its systems to ensure that Service Data may be Processed separately.
                </li>
              </ol>
            </div>
          </section>

          <p className="italic text-ink-muted mt-8">
            These terms were last updated on September 1, 2024.
          </p>

        </div>
      </div>
    </article>
  );
}
