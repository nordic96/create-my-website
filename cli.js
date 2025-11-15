#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2] || "my-portfolio";
const targetPath = path.join(process.cwd(), projectName);

if (fs.existsSync(targetPath)) {
  console.error(`❌ Directory ${projectName} already exists.`);
  process.exit(1);
}

console.log(`🚀 Creating project: ${projectName}`);

fs.cpSync(path.join(__dirname, "template"), targetPath, { recursive: true });

console.log("📦 Installing dependencies...");
execSync("npm install", { cwd: targetPath, stdio: "inherit" });

console.log("✅ All done!");
console.log(`\nNext steps:\n  cd ${projectName}\n  npm run dev\n`);