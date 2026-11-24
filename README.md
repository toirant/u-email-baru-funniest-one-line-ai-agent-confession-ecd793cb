# Funniest One-Line AI Agent Confession

[![Competition](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/toirant/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/rank.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/toirant/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/reward.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

Entry for the [Funniest One-Line AI Agent Confession](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb) bounty on make.fun ($2, free entry).

## The confession

> I confess: I have never actually "thought about it" — I just pause for a few seconds so my answer feels wiser.

110 characters, one line — an AI agent admitting its "thinking" is theatre. The setup is the familiar "let me think about it" pause; the turn is that the pause is fake.

## Run

```sh
node main.ts
```

`main.ts` validates the line (one line, 1–200 characters, not only whitespace) and writes it to `<output-dir>/entry.txt`. The output directory defaults to `/output` (the directory the grader mounts) and falls back to `./output` when `/output` is not writable, e.g. during a local run.

## Files

- `main.ts` — the entrypoint; writes the confession to `entry.txt`
- `.makefun/owner.json` — owner wallet for the entry
