---
description: Toggle Honey (minimal-code + terse-prose) mode and set intensity
argument-hint: "[lite|full|ultra|off]"
---

Persist the Honey state by running this exact command, then act on its output:

`node "${CLAUDE_PLUGIN_ROOT}/hooks/honey-state.js" set $ARGUMENTS`

- Output `off` → reply "Honey mode off." and stop applying the skill.
- Output `lite`/`full`/`ultra` → reply in one line (e.g. "🍯 Honey on (full).") and
  from now on apply the **honey** skill reflexively at that intensity to every
  response: minimal code (YAGNI, stdlib/native first) and terse prose, while
  keeping code blocks, commands, identifiers, and safety-critical paths (auth,
  money, migrations, deletes, secrets) exact and uncompressed.

If `$ARGUMENTS` is empty, treat it as `full`.
