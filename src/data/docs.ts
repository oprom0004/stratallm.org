export interface HardwareTier {
  tier: string;
  badge: string;
  gpu: string;
  vram: string;
  ram: string;
  storage: string;
  performance: string;
  recommendedModels: string[];
}

export const HARDWARE_TIERS: HardwareTier[] = [
  {
    tier: 'Entry Level',
    badge: 'Minimum Required',
    gpu: 'NVIDIA RTX 3060 / 4060 / 3070',
    vram: '12 GB VRAM',
    ram: '64 GB DDR4/DDR5 (Dual Channel)',
    storage: 'PCIe 3.0/4.0 NVMe SSD (50GB+ Free)',
    performance: '12 - 18 Tokens/sec (MoE Offloaded)',
    recommendedModels: ['Qwen3.8-Flash-Next 125B (4-bit Q_K)', 'DeepSeek-V2-Lite 16B'],
  },
  {
    tier: 'Recommended',
    badge: 'Sweet Spot',
    gpu: 'NVIDIA RTX 4070 Ti / 4080 / 3090',
    vram: '16 GB - 24 GB VRAM',
    ram: '64 GB - 128 GB DDR5',
    storage: 'PCIe 4.0 NVMe SSD (7000 MB/s read)',
    performance: '25 - 38 Tokens/sec',
    recommendedModels: ['Qwen3.8-Flash-Next 125B (5-bit Q_M)', 'Mixtral 8x22B Instruct'],
  },
  {
    tier: 'Enthusiast / Studio',
    badge: 'Peak Velocity',
    gpu: 'NVIDIA RTX 4090 (24 GB) or Dual RTX 3090',
    vram: '24 GB - 48 GB VRAM',
    ram: '128 GB DDR5 Quad Channel',
    storage: 'PCIe 5.0 / Gen4 NVMe DirectStorage',
    performance: '45 - 65 Tokens/sec',
    recommendedModels: ['Full-context 125B-236B MoE Models', 'Continuous Batching Serving'],
  },
];

export const BENCHMARKS_DATA = [
  {
    engine: 'Strata LLM (Niko1221)',
    model: 'Qwen3.8-Flash-Next 125B',
    hardware: 'RTX 4070 (12GB) + 64GB RAM',
    speed: '21.4 tok/s',
    ramUsage: '52 GB',
    vramUsage: '11.2 GB',
    status: 'Native Support (Zero OOM Crash)',
  },
  {
    engine: 'Ollama (Standard)',
    model: 'Qwen3.8-Flash-Next 125B',
    hardware: 'RTX 4070 (12GB) + 64GB RAM',
    speed: 'Fail / OOM',
    ramUsage: 'Exceeds limit',
    vramUsage: 'Crash',
    status: 'Out of Memory / Requires Quantization Drop',
  },
  {
    engine: 'vLLM (CPU-Offload)',
    model: 'Qwen3.8-Flash-Next 125B',
    hardware: 'RTX 4070 (12GB) + 64GB RAM',
    speed: '3.8 tok/s',
    ramUsage: '58 GB',
    vramUsage: '11.8 GB',
    status: 'Severe PCIe Bus Bottleneck',
  },
];
