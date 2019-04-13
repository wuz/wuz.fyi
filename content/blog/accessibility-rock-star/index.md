---
title: Become an accessibility rock-star! 🤘
date: "2019-04-09T22:40:32.169Z"
description: A quick introduction to how you can start rocking at accessibility!
tags: a11y, beginner
draft: false
---

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.
> **Tim Berners-Lee, W3C Director and inventor of the World Wide Web**

<figure>

![Wow person](./wow.gif)

<figcaption>How I hope you feel after reading this!</figcaption>
</figure>

This is an article I originally wrote as a lesson for some folks where I work. Accesibility is super important to me and this was a guide to help people at the company get to a good level on it.

I think a large part of the battle is turning on the accessibility focus in your brain - start thinking about it from time to time, and when you are creating new features implement some tiny changes that can have a big impact. I hope that by the end of this I can get us all thinking a little more about accessibility, why it's important, and how it applies to the goals of a company.

First, I want to give a little introduction to what accessibility even means.

## Accessibility is...

1. Advocacy: For the most part, accessibility involves advocating for those who may not have the ability to advocate for themselves. Think of it this way: If a website is not accessible and the only means of finding contact information or getting in touch with the website maintainers is through the website, how would you ever let them know you want to use their site but can't?

2. Education: Often times, accessibility issues in a web platform arise from a lack of understanding, not a lack of empathy. By educating ourselves, we can greatly reduce future accessibility problems.

3. Lazy: This is good news! The web was built with accessibility in mind! If you were to create a website using nothing but built in HTML elements and minimal CSS, it would be accessible by default! Often times, not doing extra work is the best way to make your site accessible. Score one for slackers!

4. Pervasive: We tend to think of accessibility in narrow terms - someone who is blind or physically disabled. In truth, it is much more pervasive and encompassing than we think. How many of you have ever broken an arm? How did that slow down your work? According to Microsoft, there are 3 types of disability:

<figure>

![Kinds of disability: Permanent, Temporary, Situation](https://thepracticaldev.s3.amazonaws.com/i/7dvorvmzipkijc440zj3.png)

<figcaption>There are many kinds of disability and we are all affected by them!</figcaption>
</figure>

# a11y, ARIA, and WAI - oh my!

> If we use our own abilities as a baseline, we make things that are easy for some people to use, but difficult for everyone else. 
> **Microsoft inclusive toolkit**

<figure>

![A picture of a dev.to figure](https://thepracticaldev.s3.amazonaws.com/i/tglkfk9xg6z7ahdidrv3.PNG)

<figcaption>Adding a caption is an awesome a11y win! (so is adding an alt tag!)</figcaption>
</figure>

There are a lot of words thrown around with regards to accessibility, which can make it confusing. Let's cover some basic terminology here.

**a11Y** = "Accessibility". There are 11 letters between the A and the Y in accessibility. Much easier to type.

**ARIA** = "Accessible Rich Internet Applications". ARIA is a standard for building accessible tools on the web.

**WAI** = "Web Accessibility Initiative".

**WCAG** = "Web Content Accessibility Guidelines".

<figure>

![Disibility is not a personal health condition. Disibility is mismatched human interactions](https://thepracticaldev.s3.amazonaws.com/i/i4o25kahevjkkpnp97em.png)

<figcaption>Disabilities encompass so much more than just health conditions.</figcaption>
</figure>

# Why does this matter?

<figure>

![Infinite high-fiving gif](https://thepracticaldev.s3.amazonaws.com/i/34b4msovb70ea0afkxdq.gif)

<figcaption>Infinite highfives - what we'll be doing by paying attention to a11y</figcaption>
</figure>

**For the...**

**... Business**

The good news is accessibility is a win for the business. It doesn't have to cost much to implement and the benefits can be sold to many customers, large and small. More accessible tools means more people using the platform, which means more paying customers.

**... Future**

Accessibility is a huge concern. Already in places like Ontario, there are laws requiring companies of a certain size to provide accessible websites and tools. It should be expected that this will be the norm moving forward.

**... User**

Non-disabled users benefit from accessibility as well! Features like keyboard shortcuts and tabIndex support help out power users and users with disabilities alike!

**... Product Team**

Speccing, designing, developing and testing with accessibility in mind all improve the empathy and skillset of the people involved with them. When we spend more time considering our users (especially the ones that don't look, act or sound like us) and their needs, we improve ourselves and our product.

# Tiny actions, Big results

The good news is, there are a lot of easy wins that you can get by making simple changes.

First, stop breaking default functionality. This means using the right kind of elements for the right kind of things. `<div>`'s shouldn't have click events, `<img>` tags should have alt text, and instructional text shouldn't be needlessly complicated. [Here is a more comprehensive list](https://medium.com/valtech-design/inclusive-design-dd4e03f82094).

Next, installing some basic rules around accessibility. Eslint provides an a11y configuration that helps prevent you from making future mistakes and can help you correct old ones. There are lots of great tools out there that we can make use of.

Finally, spend some time watching/reading/learning about accessibility. Here is a basic list:

[A11y Project Resources](https://a11yproject.com/resources)

[Deque videos on Youtube](https://www.youtube.com/channel/UCvNQ5aJllZ5Oi49jtMKeb0Q)

[Empathy-Driven Development](https://www.youtube.com/watch?v=l95VFLj3e2w)

[Introduction to ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)

[ARIA on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

[AODA Act Compliance](https://www.essentialaccessibility.com/blog/aoda-compliance/)

[Section 508 Compliance](https://www.section508.gov/)

[WebAIM Resources](https://webaim.org/resources/)

[Free Accessibility Posters](https://github.com/UKHomeOffice/posters)

[Bulb Inclusive Design Audit](https://bulbenergy.github.io/bulb-audit/)

# Beyond a11y

![Squidward saying future drawn out.](https://thepracticaldev.s3.amazonaws.com/i/4ao2k4lejij1n4410kg3.gif)

With good practices, we can create accessible applications that everyone loves to use. Once you've started down the road to accessibility, there are lots of things you can do to maintain it.

_Continued Diligence_ - Even with a good strategy for maintain accessibility we need to be diligent that we are introducing problems. Everyone should continue growing and learning about the topic, as well as teaching others!

_Accessibility, now in even more flavors!_ - Up to this point, we've talked mostly about the disabilities that people can have, but that's not the only side of this! We should be considering technological, educational, and language differences as well. Slow internet and small screens are an accessibility concern! So is access to education and other technology. Assuming our users are using the same devices as us or have had experience using web applications in the past are both bad assumptions. Things like internationalization are also awesome!

I hope you have enjoyed reading this and that you learned something! If you have something to add, please let me know! If you ever want to talk about accessibility, progressive web apps, inclusive design or anything else, I'd love to chat.

---

Come chat with me on [Twitter](https://twitter.com/CallMeWuz) for more like this!
