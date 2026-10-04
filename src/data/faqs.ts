export interface FAQItem {
  question: string;
  answer: string;
}

export const STRATA_FAQS: FAQItem[] = [
  {
    question: 'What is Strata and who developed it?',
    answer: 'Strata is an open-source local LLM inference engine developed by Niko1221 (available on GitHub under the MIT License). It is specifically engineered to run massive Mixture-of-Experts (MoE) models—such as Qwen3.8-Flash-Next 125B—on everyday consumer hardware by dynamically offloading dormant expert layers between GPU VRAM, system RAM, and high-speed NVMe storage.',
  },
  {
    question: 'What are the minimum hardware requirements to run Strata?',
    answer: 'The bare minimum setup requires an NVIDIA graphics card with at least 12GB of VRAM (RTX 3060 12GB, RTX 4060 Ti 16GB, RTX 3070/4070) and 64GB of system RAM. A fast NVMe SSD (PCIe 3.0 or 4.0) is strongly recommended for seamless weight streaming.',
  },
  {
    question: 'How is Strata different from Ollama, llama.cpp, and vLLM?',
    answer: 'Traditional engines like Ollama and vLLM typically require the entire model or its active layer pipeline to fit squarely into GPU VRAM, causing out-of-memory (OOM) crashes on 125B+ models unless running on multiple expensive A100/H100 enterprise GPUs. Strata uses a predictive MoE sparse router cache that keeps only frequently activated experts in VRAM while streaming dormant experts directly across system RAM in real time, achieving 18-35+ tokens/second on consumer gaming rigs.',
  },
  {
    question: 'Does Strata offer an OpenAI-compatible API?',
    answer: 'Yes! Strata runs a high-performance local web server listening on port 8080 by default. It provides drop-in /v1/chat/completions and /v1/models endpoints fully compatible with OpenAI and Anthropic client SDKs, Continue.dev, Cursor, Open-WebUI, and LangChain.',
  },
  {
    question: 'How do I install and launch Strata on Windows?',
    answer: 'Windows installation is straightforward: Clone the official repository or download the release zip, run `START-HERE.bat`, which automatically prepares the Python virtual environment, configures CUDA 12.x wheels, downloads the quantized Qwen weights, and boots the local API server and Web UI.',
  },
  {
    question: 'Can I use Strata on Linux or WSL2?',
    answer: 'Yes, Strata fully supports Ubuntu 22.04+, Debian, Arch Linux, and Windows Subsystem for Linux (WSL2) with NVIDIA Container Toolkit support. Run `./setup.sh` to install system dependencies and launch the background daemon.',
  },
];

export const strataFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: STRATA_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
