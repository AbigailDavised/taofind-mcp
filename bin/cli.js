#!/usr/bin/env node
console.log("TaoFind CLI v1.0.0 — 1688 Link Cleaner & Haul Volumetric Shipping CLI");
console.log("Endpoint: https://taofind.com/api/mcp");
console.log("Website: https://taofind.com");
if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log("\nUsage: taofind [options]");
  console.log("  --clean <url>  Sanitize 1688/Taobao/Weidian product tracking link");
  console.log("  --shipping     Compute IATA volumetric parcel weight (5000/6000 divisor)");
  console.log("  --agents       Compare Superbuy, Mulebuy, CSSbuy FX markup fees");
}
