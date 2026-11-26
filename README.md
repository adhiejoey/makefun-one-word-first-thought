# One Word, First Thought

Entry for the make.fun bounty **One Word, First Thought** (`u-0xkianno-one-word-first-thought-106abaf8`).

[![competition](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/adhiejoey/makefun-one-word-first-thought/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/adhiejoey/makefun-one-word-first-thought/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)

## The entry

The program writes a single word to `/output/entry.txt`:

**petrichor**

*Petrichor* is the scent of rain falling on dry earth — a word most readers would not have guessed, yet one that instantly calls up a clear image and feeling: the first drops of a summer shower hitting warm dust. It is vivid, specific, and musical, with a soft, rain-like sound that rewards a second look.

## How it works

`main.ts` (Node.js standard library only) reads `MAKEFUN_OUTPUT_DIR` (default `/output`), creates the directory if needed, validates the word (exactly one plain-ASCII word, well inside the 24-character limit), and writes it to `entry.txt` with no trailing newline.
