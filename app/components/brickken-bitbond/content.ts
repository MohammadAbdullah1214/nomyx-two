export const faqs = [
  {
    "question": "Does an API or MCP server make execution safe?",
    "answer": "An interface exposes actions. The implementation still needs enforceable permissions, signing controls, approval rules, revocation, and recovery. Demonstrate those controls around the exact action."
  },
  {
    "question": "Is Brickken RAMS documented for mainnet in these sources?",
    "answer": "The reviewed RAMS page specifies Sepolia at launch for both API environments. Obtain deployment-specific evidence before treating it as a mainnet capability. This qualification applies to RAMS, not every Brickken product. [K1]"
  },
  {
    "question": "Does Bitbond's MCP integration run the whole fund?",
    "answer": "Its published repository describes token tasks. Offering Manager is a separate product. Map the required investor, payment, and administrator work before attributing the whole process to MCP. [B1]"
  },
  {
    "question": "Has Nomyx native agent delegation been verified here?",
    "answer": "No. The reviewed material supports a discussion of programmatic operations, not a verified native mandate system. Require a supported configuration and the same authority tests applied to competitors. [N2]"
  }
];

export const researchPrompt = "Compare Brickken Agentic and RAMS, Nomyx, and Bitbond Token Tool MCP for one authorized subscription workflow. Use current primary documentation.\n\nSeparate assistance, enforced authority, and reconciled completion. Identify the deployment network and remaining integration work. Distinguish RAMS testnet documentation from mainnet evidence, and Nomyx API access from native delegation.\n\nGive each provider a credible reason to win and name a test that could disqualify it.";
