# Honey benchmark — combined

model: `claude-opus-4-8` · 15 tasks · 180 generations · sources: opus48, code2, web48

## All tasks

| Variant | Tests pass | Judge | Judge vs base | Output tok | Output vs base | $ (cached) | $ vs base | CO₂ (g) |
|---------|-----------:|------:|--------------:|-----------:|---------------:|-----------:|----------:|--------:|
| baseline | 100% | 98 | 100% | 39,115 | +0% | $3.053 | +0% | 27516.1 |
| caveman | 100% | 97 | 99% | 29,764 | -24% | $2.457 | -20% | 20938.0 |
| ponytail | 100% | 95 | 97% | 32,395 | -17% | $2.962 | -3% | 22788.8 |
| honey | 100% | 97 | 99% | 32,517 | -17% | $2.702 | -11% | 22874.6 |

## Code tasks only

Self-contained functions with unit tests. Easy enough that every variant passes — the quality axis saturates, so only token volume separates them.

| Variant | Tests pass | Judge | Judge vs base | Output tok | Output vs base | $ (cached) | $ vs base | CO₂ (g) |
|---------|-----------:|------:|--------------:|-----------:|---------------:|-----------:|----------:|--------:|
| baseline | 100% | 100 | 100% | 12,002 | +0% | $1.001 | +0% | 8443.0 |
| caveman | 100% | 99 | 100% | 8,342 | -30% | $0.812 | -19% | 5868.3 |
| ponytail | 100% | 98 | 98% | 15,923 | +33% | $1.626 | +62% | 11201.3 |
| honey | 100% | 98 | 99% | 7,015 | -42% | $0.743 | -26% | 4934.8 |

## User-facing tasks only (landing page + UI)

Where polish IS the spec. **Tests pass** = structural + accessibility checklist (labels, alt text, responsive, required sections). This is the quality-separating tier.

| Variant | Tests pass | Judge | Judge vs base | Output tok | Output vs base | $ (cached) | $ vs base | CO₂ (g) |
|---------|-----------:|------:|--------------:|-----------:|---------------:|-----------:|----------:|--------:|
| baseline | 100% | 90 | 100% | 27,113 | +0% | $2.051 | +0% | 19073.1 |
| caveman | 100% | 89 | 99% | 21,422 | -21% | $1.645 | -20% | 15069.6 |
| ponytail | 100% | 83 | 93% | 16,472 | -39% | $1.336 | -35% | 11587.5 |
| honey | 100% | 90 | 101% | 25,502 | -6% | $1.959 | -5% | 17939.8 |
