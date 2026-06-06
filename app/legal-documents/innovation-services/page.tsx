import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Protect Your Service Data (Innovation Services) | Nomyx Legal Documents",
  description: "Innovation Security Measures",
  alternates: {
    canonical: "https://www.nomyx.io/legal-documents/innovation-services",
  },
};

export default function InnovationServicesPage() {
  return (
    <article className="max-w-230 lg:ml-18">
      <header className="mb-8">
        <h1 className="mb-2 text-[32px] font-bold leading-tight text-ink md:text-[40px] md:leading-tight">
          How We Protect Your Service Data (Innovation Services)
        </h1>
        <p className="text-[14px] leading-6 text-ink-muted">
          Last Updated: November 1, 2024
        </p>
      </header>

      <div className="border-t border-border pt-9">
        <div className="space-y-8 text-[14px] font-normal leading-7 text-ink md:text-[16px] md:leading-7">
          
          <p>
            Nomyx is committed to providing a robust and comprehensive security program for Innovation Services, including the security measures set forth in these Supplemental Terms (&quot;Innovation Security Measures&quot;). During the Subscription Term, these Innovation Security Measures may change without notice, as standards evolve or as additional controls are implemented or existing controls are modified as We deem reasonably necessary.
          </p>

          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              Innovation Security Measures Utilized by Us
            </h2>
            <p>
              We will abide by these Innovation Security Measures to protect Service Data as is reasonably necessary to provide the Innovation Services:
            </p>

            <div className="space-y-3">
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  <strong>Security Policies and Personnel.</strong> We have and will maintain a managed security program to identify risks and implement appropriate controls, as well as technology and processes for common attack mitigation. We have, and will maintain, a full-time information security team responsible for safeguarding Our networks, systems and services, responding to security incidents, and developing and delivering training to Our employees in compliance with Our security policies.
                </li>
                <li>
                  <strong>Data Transmission.</strong> We will maintain commercially reasonable administrative, physical and technical safeguards to protect the availability, confidentiality and integrity of Service Data.
                </li>
                <li>
                  <strong>Incident Response.</strong> We have an incident management process for security events that may affect the confidentiality, integrity, or availability of Our systems or data that includes a response time under which Nomyx will contact its subscribers upon verification of a security incident that affects Your Service Data. This process specifies courses of action, procedures for notification, escalation, mitigation, and documentation. Unless ordered otherwise by law enforcement or government agency, You will be notified within forty-eight (48) hours of a Service Data Breach. &quot;Service Data Breach&quot; means an unauthorized access or improper disclosure that has been verified to have affected Your Service Data.
                </li>
                <li>
                  <strong>Access Control and Privilege Management.</strong> We restrict administrative access to production systems to approved personnel.
                </li>
                <li>
                  <strong>Network Management and Security.</strong> The data centers utilized by Us maintain industry standard fully redundant and secure network architecture with reasonably sufficient bandwidth. Our security team utilizes industry standard tools and methods to provide defense against known common unauthorized network activity and undertakes regular external vulnerability scans.
                </li>
                <li>
                  <strong>Data Center Environment and Physical Security.</strong> The data center environments which are utilized by Us in connection with Our provision of the Innovation Services employ the following security measures:
                  <ul className="list-disc space-y-3 pl-5 mt-3">
                    <li>A security organization responsible for physical security functions.</li>
                    <li>Access to areas where systems or system components are installed or stored within data centers is restricted through security measures and policies consistent with industry standards.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              Technical and Organizational Innovation Security Measures for Third-Party Service Providers
            </h2>
            <div className="space-y-4">
              <p>
                Nomyx may use third-party service providers during the provisioning of the Innovation Services, and may give those service providers access to Your Account and Service Data as is reasonably necessary to provide the Innovation Services. Nomyx maintains a vendor security review program which assesses and manages any potential risks involved in using these third-party service providers who have access to Service Data.
              </p>
              <p>
                Third-party service providers which are used for long-term hosting of Service Data will be subject to, among the other requirements in the Main Services Agreement, their implementing and maintaining compliance with the following appropriate technical and organizational security measures:
              </p>
            </div>

            <div className="space-y-3">
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  <strong>Physical Access Controls.</strong> Third-party service providers shall take reasonable measures to prevent unauthorized persons from gaining physical access to data processing systems in which Service Data is Processed.
                </li>
                <li>
                  <strong>System Access Controls.</strong> Third-party service providers shall take reasonable measures to prevent data processing systems from being used without authorization.
                </li>
                <li>
                  <strong>Data Access Controls.</strong> Third-party service providers shall take reasonable measures to provide that Service Data is accessible and manageable only by properly authorized staff.
                </li>
                <li>
                  <strong>Transmission Controls.</strong> Third-party service providers shall take reasonable measures to ensure that it is possible to check and establish to which entities the transfer of Service Data by means of data transmission facilities is envisaged so Service Data cannot be read, copied, modified, or removed without authorization during electronic transmission or transport.
                </li>
                <li>
                  <strong>Input Controls.</strong> Third-party service providers shall take reasonable measures designed to ensure that it is possible to check and establish whether and by whom Service Data has been entered into data processing systems, modified or removed; and, any transfer of Service Data to a third-party service provider is made via a secure transmission.
                </li>
                <li>
                  <strong>Logical Separation.</strong> Third-party service providers shall logically segregate Service Data from the data of other parties on its systems to ensure that Service Data may be Processed separately.
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[24px]">
              Innovation Service Specific Sub-processors
            </h2>
            <p>
              Third-party service providers which incidentally have access to Your Service Data in Innovation Services, but are used to provide specific features or components of the product outside of the core hosting of Service Data (&quot;Innovation Service Specific Sub-processors&quot;) are regularly reviewed by Nomyx to ensure they work towards implementing each of the standards applicable to Infrastructure Sub-processors. A list of these third-party service providers can be provided and are the providers designated as Innovation Service Specific Sub-Processors.
            </p>
          </section>

          <p className="italic text-ink-muted mt-8">
            These terms were last updated on November 1, 2024.
          </p>

        </div>
      </div>
    </article>
  );
}
