# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People who need a quick browser-side answer for a date interval or a future date.

> Product truth inferred from the existing README, routes, copy, and implementation because this batch was explicitly authorized to proceed without an interview.

## Product Purpose

Date Calculator turns two ISO dates into a readable duration, and applies a positive or negative amount of days, weeks, or months to a base date. Success is an answer that can be checked at a glance.

## Positioning

It keeps the two common date jobs—compare and shift—visible together, with no account, API key, or server state.

## Operating Context

Short utility sessions in a desktop or mobile browser; users type or pick ISO calendar dates and read the result immediately.

## Capabilities and Constraints

- Difference in days, weeks, and approximate months.
- Add or subtract days, weeks, or months from a base date.
- Month display uses an average 30.44-day approximation; local browser calendar rules apply.
- Fully client-side; no multi-tenant backend or API claims.

## Evidence on Hand

The working UI and seed copy in `app/page.tsx`; no external data or testimonials are claimed.

## Product Principles

- Put the answer beside the question.
- Keep calendar arithmetic inspectable.
- Stay honest about approximations.
- Remove setup from a one-shot utility.
