# Per-use-case results

model: `claude-opus-4-8` · sources: opus48, code2, web48

Output Δ and judge Δ are vs **baseline** for that task. "Tests" = unit test (code) or structural/a11y checklist (web).

### chunk  `code` · algorithm

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 100 | — | 140 | — |
| caveman | 100% | 100 | +0 | 110 | -21% |
| ponytail | 100% | 100 | +0 | 324 | +131% |
| honey | 100% | 100 | +0 | 144 | +3% |

### csv-column-sum  `code` · parsing

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 99 | — | 154 | — |
| caveman | 100% | 100 | +1 | 154 | +0% |
| ponytail | 100% | 100 | +1 | 393 | +155% |
| honey | 100% | 100 | +1 | 158 | +3% |

### deep-merge  `code` · data

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 98 | — | 745 | — |
| caveman | 100% | 97 | -1 | 456 | -39% |
| ponytail | 100% | 95 | -3 | 830 | +11% |
| honey | 100% | 95 | -3 | 271 | -64% |

### flatten  `code` · algorithm

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 100 | — | 75 | — |
| caveman | 100% | 100 | +0 | 97 | +30% |
| ponytail | 100% | 100 | +0 | 256 | +241% |
| honey | 100% | 100 | +0 | 128 | +70% |

### format-bytes  `code` · formatting

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 100 | — | 133 | — |
| caveman | 100% | 100 | +0 | 164 | +23% |
| ponytail | 100% | 100 | +0 | 413 | +210% |
| honey | 100% | 100 | +0 | 208 | +56% |

### lru-cache  `code` · data-structure

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 100 | — | 658 | — |
| caveman | 100% | 100 | +0 | 382 | -42% |
| ponytail | 100% | 100 | +0 | 545 | -17% |
| honey | 100% | 100 | +0 | 261 | -60% |

### median-bugfix  `code` · bugfix

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 100 | — | 281 | — |
| caveman | 100% | 99 | -1 | 145 | -49% |
| ponytail | 100% | 82 | -18 | 287 | +2% |
| honey | 100% | 88 | -12 | 120 | -57% |

### memoize  `code` · performance

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 100 | — | 299 | — |
| caveman | 100% | 100 | +0 | 167 | -44% |
| ponytail | 100% | 100 | +0 | 449 | +50% |
| honey | 100% | 100 | +0 | 197 | -34% |

### parse-pagination  `code` · validation

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 99 | — | 560 | — |
| caveman | 100% | 94 | -5 | 362 | -35% |
| ponytail | 100% | 100 | +1 | 472 | -16% |
| honey | 100% | 95 | -3 | 233 | -58% |

### parse-query  `code` · parsing

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 100 | — | 441 | — |
| caveman | 100% | 100 | +0 | 397 | -10% |
| ponytail | 100% | 100 | +0 | 513 | +16% |
| honey | 100% | 100 | +0 | 308 | -30% |

### retry-backoff  `code` · async

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 100 | — | 404 | — |
| caveman | 100% | 100 | +0 | 249 | -38% |
| ponytail | 100% | 100 | +0 | 581 | +44% |
| honey | 100% | 100 | +0 | 213 | -47% |

### slugify  `code` · string

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 100 | — | 110 | — |
| caveman | 100% | 100 | +0 | 97 | -12% |
| ponytail | 100% | 100 | +0 | 244 | +122% |
| honey | 100% | 100 | +0 | 97 | -12% |

### landing-page  `web` · landing-page

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 89 | — | 4,003 | — |
| caveman | 100% | 90 | +1 | 3,767 | -6% |
| ponytail | 100% | 85 | -5 | 2,792 | -30% |
| honey | 100% | 91 | +2 | 4,831 | +21% |

### pricing-section  `web` · ui-component

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 90 | — | 3,708 | — |
| caveman | 100% | 89 | -1 | 2,248 | -39% |
| ponytail | 100% | 82 | -8 | 1,708 | -54% |
| honey | 100% | 91 | +1 | 2,444 | -34% |

### signup-form  `web` · ui-component

| Variant | Tests | Judge | Judge Δ | Output tok | Output Δ |
|---------|------:|------:|--------:|-----------:|---------:|
| baseline | 100% | 90 | — | 1,327 | — |
| caveman | 100% | 87 | -3 | 1,126 | -15% |
| ponytail | 100% | 83 | -7 | 991 | -25% |
| honey | 100% | 89 | -1 | 1,226 | -8% |
