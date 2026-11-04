export default function Infrastructure() {
  return (
    <section id="engine" className="sec eng">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">Nomyx infrastructure advantage</span>
          <h2 className="section-heading">
            Composable infrastructure built for full capital lifecycles.
          </h2>
          <p className="lede">
            Nomyx does not bundle licenses into a walled garden, and it does not
            leave compliance to each pool operator. It provides an
            infrastructure layer that sits behind your institutional brand.
            Here, capital velocity means shorter response time to structural
            events: contract logic upgrades in place, compliance verifies before
            settlement, and books synchronize with your administrator. Three
            subsystems deliver it.
          </p>
        </div>
        <div className="stack">
          <div className="scol">
            <div className="sh2">Nomyx ID</div>
            <div className="ss">Issuer-owned compliance</div>
            <ul>
              <li>Branded verification portal</li>
              <li>Reusable LP credentials</li>
              <li>Rules check pre-settlement</li>
              <li>Data controls you hold</li>
            </ul>
          </div>
          <div className="scol">
            <div className="sh2">Nomyx Engine</div>
            <div className="ss">EIP-2535 Diamond core</div>
            <ul>
              <li>Modular facet contracts</li>
              <li>In-place logic upgrades</li>
              <li>No token reissuance</li>
              <li>Multisig key governance</li>
            </ul>
          </div>
          <div className="scol">
            <div className="sh2">Nomyx Gateway</div>
            <div className="ss">Open enterprise sync</div>
            <ul>
              <li>Bi-directional API sync</li>
              <li>Fund administrator feeds</li>
              <li>Multi-venue ATS bridges</li>
              <li>Qualified custodian APIs</li>
            </ul>
          </div>
        </div>
        <div className="eng-cards">
          <div className="ecard">
            <h4>Nomyx ID · sovereign compliance</h4>
            <p>
              Deploys as a white-labeled verification interface matching your
              brand. Issues reusable credentials that verify accreditation,
              jurisdiction, and tax status, evaluates transfer eligibility
              before on-chain execution, and targets per-customer isolation so
              investor identity never pools across funds. Independent isolation
              audit remains open.
            </p>
          </div>
          <div className="ecard">
            <h4>Nomyx Engine · Diamond core</h4>
            <p>
              Uses the EIP-2535 multi-facet proxy pattern. Isolates contract
              state from business logic, so individual facets (interest rate,
              waterfall, redemption gates) upgrade in place, avoiding burning
              and reissuing tokens during amendments. Token address, cap table,
              and holdings stay undisturbed during a facet upgrade.
            </p>
          </div>
          <div className="ecard">
            <h4>Nomyx Gateway · interoperability</h4>
            <p>
              Connects tokenized assets to established administrators and
              reconciles mints, burns, and transfers with the official off-chain
              register, bridges into regulated markets including the announced
              tZERO relationship, and orchestrates cash across Fedwire, ACH, and
              regulated stablecoins so LPs avoid cryptographic keys.
            </p>
          </div>
          <div className="ecard wide">
            <h4>Upgrade governance · address fiduciary risk head-on</h4>
            <p>
              Upgradeable contracts invite one question above all: who can
              change asset logic, and under what control? Nomyx answers with
              governance controls you configure and your LPs can observe:
              multisignature approval on every upgrade{" "}
              <span className="ev ill">Illustrative 3-of-5</span>, timelocks on
              core financial logic{" "}
              <span className="ev ill">Illustrative 14 days</span>, automated
              on-chain notice to LPs before any change, and a stated third-party
              audit cadence per facet. Upgradeability provides operational
              agility under fiduciary consent, not unilateral discretion. Nomyx
              publishes final parameters with its diamondCut governance model.
            </p>
          </div>
        </div>
        <p className="eng-note">
          Partner independence: your assets live in issuer-controlled contracts.
          If a market partner loses a license, raises fees, or exits, you change
          execution partners through Gateway configuration without reissuing
          tokens. A captive monolith offers no equivalent exit.
        </p>
      </div>
    </section>
  );
}
