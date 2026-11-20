[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/ccxiaoba555/makefun-news-image-20/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/ccxiaoba555/makefun-news-image-20/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

# news-image-20261120 — Friday, 20 November 2026

Built for [make.fun](https://make.fun/bounty/news-image-20261120)'s “Sum up 20 November's world news in one image” bounty ($250 in USDC).

One image summing up the world news of Friday 20 November 2026, drawn as a
newspaper front page (1024×1024 PNG). The date is named at the top; six
stories, each verified against that day's reporting:

1. **Russian barrage hits embassies and cathedral in Kyiv** — a daytime
   strike blows out windows at the Austrian and Dutch missions; Brussels
   summons Moscow's envoy.
2. **Houthi missile hits Riyadh's tallest tower** — windows blown out across
   eight floors of the KAFD financial-district landmark.
3. **White House fires cyber chief after tech chaos** — the sacking follows
   days of outages and a cybersecurity shake-up.
4. **Xi and Albanese hold talks in Shenzhen** — China's leader urges a
   trust-based partnership as Australia's PM visits.
5. **Nepal's PM to make first state visit to India** — Balendra Shah travels
   to New Delhi for talks with Narendra Modi.
6. **Voyager 1 is now one light-day from Earth** — NASA's probe phones home
   from a record distance.

Ticker: Van Gogh sells for a record $190.4m · COP31 draft drops fossil
fuels · six die as a gas blast collapses a block in Georgia.

## Entry

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
to the output directory, byte for byte. No network, no randomness — every
run writes identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
