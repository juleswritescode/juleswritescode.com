---
language: 'en'
id: '2024-07-12-devs-should-overcommunicate'
title: "The 1 Habit Successful Developers Share That'll Increase Your Team's Productivity, Accelerate Your Career, and Make You Irreplaceable"
excerpt: 'All functioning teams do this.'
releaseDate: '2024-07-12'
date: '2024-07-12T10:00:00.000Z'
tags: ['dev-productivity']
---

We are a team of four devs at a fully remote wealth-tracking company.

There are many different domains to be taken care of:

- ensuring that asset data is reliable (prices, allocations, etc.)
- calculating investment metrics for the users' portfolios
- parsing bank statement PDFs
- syncing user accounts with their respective bank accounts
- ...

It's quite a mouthful.

This makes it such that we each focus on a single domain. None of us could possibly know all of these topics and their intricacies by heart; it's too much. Of course, in an ideal world, we would have shared knowledge perfectly — the dev writing the calculations could finally go on vacation —, but in practice, due to the time required to dive into a new area, we're more productive if we stay in our lane.

Yet, the team needs to be notified about significant changes.

A change of the metrics calculation could affect customer support ("Why is my performance suddenly in the red?"); an additional data provider would make it possible to build a new ETF-comparison dashboard; a necessary data model change could break various backend services.

So, what's a fully remote team to do?

The answer is: _overcommunicate_. According to Merriam-Webster, this means "communicating more than considered necessary." ...Considered necessary by _whom_? From the perspective of the dev being responsible for the changes, most information seems self-evident, and it's burdensome to repeatedly report it. But the CEO and the other devs might not regard the same information as self-evident, and despite it having been posted repeatedly, they might only read it the last time.

So, fight your demons and report a bit more than you'd do naturally.

If everybody on the team does this, it brings many benefits:

First, your CEO will get an overview of what's happening. She'll get an idea about what the company is working towards, what the timelines are, and how to allocate resources. Plus, she experiences the company buzzing, which makes her happy about her employees.

Second, blockages are highlighted early. Nothing wastes time like a dev struggling with a problem without asking for help. In contrast, if he reports his problems, somebody will take notice and help the poor guy, his struggles will cease, and he can continue to work and be productive again.

Third, other developers will be notified of changes that affect them. Suppose you changed the schema of a major endpoint but didn't notify the other developers. Production would break, users would flood customer support with tickets, and the CEO would be fuming. On the other hand, if you had reported changes early, devs would have had more time to adopt them.

Fourth, your team might learn something. A colleague recently discovered that iterating over `Map.entries()` in JavaScript is more performant than iterating over `Map.keys()` and accessing the value with `map.get(..)`. He reported this in a small post, and that's the reason I can share it here.

So, I hope you're sold. Few devs do this. That's why _overcommunicating_ can make you that much more valuable. It's a key skill to move up into leadership positions.

I urge you to make a habit of this.

Writer Dan Koe has a great take. He suggests planning your day around building, publishing, and maintaining — the three quintessential activities of a successful workday. Building is for working on features, maintaining is for fixing bugs or refactoring code, and publishing is for reporting your progress and findings.

Allocate an hour of your day to do reporting.

Even if there's nothing newsworthy, report what you've been working on.

\_Overcommunicate.\_
