#!/usr/bin/env node
// Optional statusline badge. Prints "🍯 honey:<mode>" when active, else nothing.
// Wired into ~/.claude/settings.json by bin/install.js (non-destructively).
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");

const DIR = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), ".claude");
const FLAG = path.join(DIR, ".honey-active");

let mode = null;
try {
  mode = fs.readFileSync(FLAG, "utf8").trim() || null;
} catch {}

process.stdout.write(mode && mode !== "off" ? `🍯 honey:${mode}` : "");
