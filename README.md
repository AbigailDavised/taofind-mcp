# TaoFind — China Proxy Shopping Intelligence, Volumetric Freight Math & Agent Arbitrage Engine

[![Model Context Protocol](https://img.shields.io/badge/MCP-Protocol-blue.svg)](https://modelcontextprotocol.io)
[![Official Website](https://img.shields.io/badge/Official-Website-emerald.svg)](https://taofind.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Production Model Context Protocol (MCP) server for **[TaoFind (taofind.com)](https://taofind.com)**. Provides IATA-standard volumetric parcel shipping calculators, cross-agent foreign exchange (FX) fee benchmarks, link sanitization, and curated source catalog endpoints directly to Claude, Cursor, Nous Hermes, xAI Grok, Gemini CLI, and ecommerce agents.

---

## 1. Deep Feature Endpoints & Production Link Matrix

| Feature Module | Official Production URL | Anchor Text Standard | Logistics & Sourcing Capability |
| :--- | :--- | :--- | :--- |
| **Volumetric Shipping Calculator** | `https://taofind.com/tools/shipping-calculator` | China Haul Volumetric Shipping Calculator | Implements dual-standard IATA 5000/6000 parcel formulas to calculate chargeable weights across express air, tax-free routes, and sea freight. |
| **Shopping Agent Comparison Matrix** | `https://taofind.com/compare` | Shopping Agent Fee & Exchange Rate Comparison | Comprehensive side-by-side comparison across Superbuy, Mulebuy, CSSbuy, and AllChinaBuy covering FX margins, warehousing, and QC photos. |
| **Clothing & Shoe Size Converter** | `https://taofind.com/tools/size-converter` | Chinese Clothing & Shoe Size Converter to US/EU | Exact 1:1 metric-to-imperial sizing cross-walk including shoulder width, chest circumference, and insole millimeter mappings. |
| **Curated 1688 / Taobao Catalog** | `https://taofind.com/finds` | Curated 1688 & Taobao Direct Finds Catalog | Hand-picked original manufacturer goods with high-definition QC reference photo libraries and multi-agent cart routing. |
| **Community Verified Haul Spreadsheets** | `https://taofind.com/spreadsheets` | Community Verified Proxy Spreadsheets Directory | Aggregated directory of peer-verified proxy shopping sheets with continuous 24h link integrity and dead-link pruning probes. |

---

## 2. International Parcel Volumetric Weight Mathematics (IATA Protocol)

Chargeable weight calculations in TaoFind follow the strict IATA international air freight convention implemented in `VolumetricHaulCalculator.tsx`:

$$\text{Chargeable Billed Weight} = \max(\text{Gross Measured Weight}, \text{Volumetric Equivalent Weight})$$

| Logistics Route & Carrier Tier | Volumetric Divisor | Mathematical Formula | High-Volume Cargo Profiles & Packing Recommendations |
| :--- | :---: | :--- | :--- |
| **Commercial Express (DHL / FedEx / UPS)** | **5000** | $\text{Vol Weight (kg)} = \frac{L \times W \times H (\text{cm})}{5000}$ | Puffer jackets, plush toys, and shoeboxes frequently trigger volumetric weights 3x actual weight. **Mandatory: Vacuum bag compression & discard shoeboxes.** |
| **Tax-Free Triangle Air Routes** | **6000** | $\text{Vol Weight (kg)} = \frac{L \times W \times H (\text{cm})}{6000}$ | More forgiving for mixed lightweight apparel, daily home goods, and multi-seller consolidations. |
| **Sea Freight / Rail Consolidation (>15kg)** | By CBM | $1 \text{ CBM} \approx 167 \text{ kg}$ threshold | Furniture, bulky studio hardware, and high-density gear; rates are typically 1/3 to 1/5 of express air costs. |

---

## 3. Shopping Agent Total Cost Benchmark (FX Spread & Storage)

Headline "zero service fee" claims mask substantial exchange rate markups. TaoFind maintains verified total cost profiles:

| Agent Platform | Real-Time FX Currency Markup | Free Storage Window | Quality Control (QC) Photography | Core Routing Profile & Operational Strengths |
| :--- | :---: | :---: | :---: | :--- |
| **Superbuy** | `+2.8% ~ +3.2%` | 90 Days | 3 High-resolution measurement photos free | 10+ year established enterprise compliance, exceptional custom clearance support. |
| **Mulebuy** | `+3.0% ~ +3.5%` | 90 Days | Multi-angle standard intake photos free | Rapid intake and weighing pipeline, highly active community discord support. |
| **CSSbuy** | `+3.5% ~ +4.0%` | 180 Days (Extended) | Basic photos free; specialized measurements itemized | Long-standing specialization in European tax-free rail and triangle air lines. |
| **AllChinaBuy** | `+3.2% ~ +3.8%` | 90 Days | Standard QC photo set included | Modern interface, direct single-item order integration for 1688 manufacturer lines. |

---

## 4. Link Sanitization & Privacy Preservation Engine

- **URL De-tracking**: TaoFind's routing engine automatically strips tracking cookies, affiliate tags, and referrer fingerprints from 1688, Taobao, and Weidian links, isolating pristine product IDs (`UniversalWorkbenchHero.tsx`).
- **Universal Multi-Agent Dispatch**: Generates deep-link cart items across all supported shopping agents simultaneously, enabling immediate cross-platform cart arbitrage.

---

## 5. Quick Start & MCP Installation

### Claude Desktop / Cursor
\`\`\`json
{
  "mcpServers": {
    "taofind": {
      "command": "npx",
      "args": ["-y", "@abigaildavised/taofind-mcp"]
    }
  }
}
\`\`\`

### Available Tools
- `calculate_volumetric_shipping`: Calculate chargeable weights under 5000/6000 divisors.
- `compare_proxy_agents`: Benchmark FX markup, storage duration, and QC fees.
- `sanitize_china_marketplace_link`: Strip tracking parameters and extract canonical item IDs.
- `convert_clothing_sizes`: Map Chinese measurements to US/UK/EU standard sizes.

---

## License

MIT © [TaoFind](https://taofind.com)
