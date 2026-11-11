# TaoFind — 1688 Link Cleaner, Volumetric Shipping & Agent Cost Matrix (`com.taofind/mcp`)

[![Official MCP Registry](https://img.shields.io/badge/MCP_Registry-com.taofind%2Fmcp-emerald)](https://registry.modelcontextprotocol.io/v0.1/servers/com.taofind%2Fmcp/versions/latest)
[![Website](https://img.shields.io/badge/Website-taofind.com-blue)](https://taofind.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Official **Model Context Protocol (MCP)** remote `streamable-http` server and **Open Agent Skill** for [**TaoFind (taofind.com)**](https://taofind.com).

---

## 🔧 Available MCP Tools

### `unwrap_and_clean_china_marketplace_link`
Extract clean canonical product IDs and native raw URLs from wrapped Taobao, 1688, Weidian, or third-party shopping agent redirect links (Superbuy, CNFans, Mulebuy, AllChinaBuy), stripping tracking tokens.

### `calculate_volumetric_haul_shipping`
Calculate chargeable shipping weight comparing actual scale weight vs dimensional volumetric weight (L x W x H / 5000 for DHL/FedEx, /6000 for Tax-Free Line, /8000 for EUB) and recommend box removal savings.

### `compare_china_shopping_agents`
Compare verified Chinese purchasing agents (Basetao, CSSBuy, Kakobuy, Sugargoo, Superbuy, Mulebuy, AllChinaBuy, CNFans) by hidden USD/CNY exchange rate markup (4.8% to 6.8%), parcel weight freight, and total landed cost.

### `convert_asian_apparel_and_shoe_size`
Convert Chinese/Asian apparel labels (M, L, XL, 2XL, 175/92A) and Chinese EU shoe sizes to US/UK standards with exact centimeter chest/shoulder ranges, flagging Asian slim-fit sizing allowances.

### `estimate_customs_declaration_strategy`
Compute standard weight-based customs declaration benchmarks ($12-$14/kg reference for North America vs Tax-Free Triangle IOSS lines for EU/UK) and ideal parcel split thresholds (<10kg).

### `list_verified_china_sourcing_tools`
Retrieve direct landing endpoints for TaoFind 1688 link cleaner, Weidian unwrapper, shipping calculator, Asian size converter, and agent fee matrix.


---

## 📄 License

MIT © [TaoFind](https://taofind.com)
