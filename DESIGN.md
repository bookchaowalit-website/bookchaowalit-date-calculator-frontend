---
name: Date Calculator Calendar Slide
description: A dark measuring instrument for comparing and shifting dates.
colors:
  night: "#182432"
  paper: "#edf1ec"
  mist: "#b6c6c6"
  cyan: "#89d4cc"
  coral: "#f18470"
  line: "#405568"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(58px, 9vw, 120px)"
    fontWeight: 400
    lineHeight: 0.83
  body:
    fontFamily: "Georgia, serif"
    fontSize: "16px"
    lineHeight: 1.55
  label:
    fontFamily: "Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 700
    letterSpacing: "0.18em"
rounded:
  none: "0"
spacing:
  section: "56px 0"
  tape: "16px 15px"
components:
  result-badge:
    backgroundColor: "transparent"
    textColor: "{colors.coral}"
    rounded: "{rounded.none}"
    padding: "9px 12px"
---

# Design System: Date Calculator Calendar Slide

## Overview

**Creative North Star: "A calendar slide rule in a midnight observatory."**

Date arithmetic is made tangible with a measurement line, two endpoints, and a result tape. The dark field gives the utility a focused instrument scene; cyan describes measurement and coral marks the answer or shift.

**Key Characteristics:**
- Midnight navy field with cyan measuring rails.
- Coral arithmetic accents and paper serif headlines.
- Sections are numbered because compare/shift are the two actual jobs.

## Colors

Night is the stable instrument ground. Cyan is measurement, coral is change, and muted mist carries secondary copy.

### Primary
- **Measurement cyan** (#89d4cc): date rail, labels, and positive structure.
- **Arithmetic coral** (#f18470): active calendar mark and result state.

### Neutral
- **Night field** (#182432): page background.
- **Paper** (#edf1ec): primary readable type.
- **Mist** (#b6c6c6): secondary labels.
- **Instrument line** (#405568): section rules and baselines.

## Typography

**Display Font:** Georgia, Times New Roman, serif
**Body Font:** Georgia, serif
**Label/Mono Font:** ui-monospace, monospace

**Character:** A calm serif observation log is paired with exact tabular dates and compact technical labels.

### Hierarchy
- **Display** (400, clamp 58–120px, .83): opening thesis.
- **Headline** (400, clamp 34–70px, .9): each operation’s question.
- **Body** (400, 13–16px, 1.5): context and honesty notes.
- **Label** (700, 10px, .18em, uppercase): instrument coordinates.

## Layout

The 1240px shell opens with a calendar glyph and today marker. Compare and shift sections use a 140px annotation rail on desktop and a compact horizontal rail under 720px. Inputs align to a measurement line; result figures sit in a three-cell tape.

## Elevation & Depth

There are no shadows. Depth is conveyed through navy tonal contrast, cyan/coral lines, and result outlines.

## Shapes

Square fields, hairline baselines, circular endpoints, and a rectangular result badge form the instrument grammar.

## Components

### Inputs / Fields
- **Style:** transparent dark fields with mist baselines and tabular date values.
- **Focus:** baseline shifts to cyan.

### Signature Component
- **Measurement line:** endpoint circles, directional arrow, and live day/week/month tape keep the answer adjacent to the dates.

## Do's and Don'ts

### Do:
- **Do** keep compare and shift as distinct, visible operations.
- **Do** disclose the approximate-month rule.
- **Do** preserve the answer next to the edited dates.

### Don't:
- **Don't** hide the result inside a generic modal or card grid.
- **Don't** use color as the only state signal; labels and equations carry meaning too.
- **Don't** canonize the generic serif fallback as the final display asset.
