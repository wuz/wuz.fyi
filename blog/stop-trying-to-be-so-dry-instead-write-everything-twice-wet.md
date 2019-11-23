---
cover_image: /assets/vmlpyk5wgzw1b85g4j1f.jpg
date: 2019-11-23T00:10:14.789Z
title: 'Stop trying to be so DRY, instead Write Everything Twice (WET)'
description: 'Write everything twice, just not a third time.'
---

As developers, we often hear cliched phrases tossed around like ["Don't Repeat Yourself"](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). We take ideas like this and run with them, sometimes a bit too far.

Stepping back and evaluating why we do these things is helpful. So today, let's look at an alternative ideology to DRY programming.

# Don't Repeat Yourself (DRY) programming, defined

DRY is defined (according to Wikipedia) as:

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

Some of this might get a bit pedantic, but that can be helpful when considering something like this. Let's break down the parts of the phrasing there.

## Every piece

What is "every piece"? Can we never repeat a variable name? An HTML entity?

Ok, ok. So we can repeat `<div>`'s without much issue and I don't think anyone will take offense at it. But this does bring up the question - when do we decide something has become a "piece of knowledge"? In React, a good example might be a component - but is that `PrimaryButton` and `SecondaryButton` or does it mean a generalized `Button` class? The answer is generally considered to be "Whatever your organization chooses", but this can still leave a good bit of ambiguity around what we choose to abstract.

## knowledge

This is another ambiguous point - what do we define as knowledge? Consider a styled button element using some atomic classes and React. If it takes a senior dev 10 seconds to create , they may not consider that knowledge worth abstracting. But to a more junior developer who doesn't know the system well, that knowledge could be a good abstraction. Otherwise, they might have to hunt down the classes, remind themselves of how buttons work, and figure out the syntax for an `onClick`. Knowledge is relative and using it in a definition adds ambiguity.

> _Update:_ Xander left the following comment below. I think that article does a great job of explaining what "knowledge" should mean.
> {% devcomment 7jhn %}

## single, unambiguous, authoritative representation

A "single" representation leaves a lot to be desired. From the view of a devops engineer, a single representation might be an entire application they need to deploy. To a frontend dev, that might be a component. And to a backend dev, that might be a method on a class or an API endpoint. Where does the line get drawn?

We also have the word "unambiguous" - but as I've just pointed out, the rest of this sentence defines more ambiguity. "Authoritative" makes sense - your DRY code should define exactly what it does and be true to that definition. However, that isn't explicitly confined to DRY code.

## system

Finally, we have the world "system" - this gets back to the "single" statement we discussed a second ago. What is a "system"? In React, it might be a component or a Redux action/component/reducer. In containerized software, we could be talking about a whole pod or just a single instance.

At the end of the day, DRY all to often promotes pre-optimization, which is unnecessary and sometimes actually hurts your ability to write code. Sometimes it is more difficult to modify an abstracted component to fit a specific use case. You add a lot of complexity or you break that component out into something new - which isn't super DRY. You can't know every use case for your component on day one.

# An alternative - Write Everything Twice (WET) programming

Instead, I propose WET programming. To me the definition would be:

> You can ask yourself "Haven't I written this before?" two times, but never three.

With this definition the focus moves away from premature optimization and instead allows you to repeat similar code a couple times. It also shifts the focus to a more gut reaction. It allows you to make decisions based on the exact use case you are looking at. If you are building a web app, you probably want to abstract your buttons into a component, because you are going to be using a lot of them. But if there is a single page that has some special styling (maybe a pricing page?), then you don't need to worry too much about abstracting out the components on that page. In fact, under this system, if you needed a new page that was similar to that special page, you could just copy/paste and change the code you need. However, at the moment that that happens a third time, its time to spend a bit of time abstracting out the parts that can be abstracted.

I would also add this stipulation (to both WET and DRY programming):

> You must comment your abstractions

Anytime you abstract something out you are reordering the map of your application. If you aren't commenting to discuss your reasons for abstracting, you are doing a disservice to your team (and your future self!).

What do you think? Does this track with how you develop?
