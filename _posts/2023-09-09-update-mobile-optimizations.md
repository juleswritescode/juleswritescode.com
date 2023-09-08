---
language: 'en'
id: '2023-09-08-update-mobile-optimizations'
title: 'Mobile Optimizations, Time to Wait'
excerpt: 'Most people visit the page from their phones - it should work on smaller screens, too.'
releaseDate: '2023-09-08'
date: '2023-09-08T10:00:00.000Z'
tags: ['albumcoverai']
---

Another AlbumCoverAI update. This will be one of the last for a while.

As mentioned yesterday, users can now test the app for free.
This increased the signups - 5 people so far - but not the purchases.

I learned that Meta needs a while to optimize their audience targeting, so there may be purchases if I let the ads run longer. It could also mean wasting money.

To allow Meta to target better, I updated the event tracking with the Facebook pixel. Before, I would track when a user hit the "Get Started" button on the landing page. Now, I track when he's signed up, when he initiates the checkout, and when a purchase is successful. More data for Meta means better audiences.

Next, I realized that since most people visit the page through Meta ads, they are probably on their phones. The landing page is mobile-ready, but the app itself wasn't.

I had deferred optimizing for mobile since it's an image editing app; a task that is hard to perform on tiny screens. But if a user visits directly from Instagram, signs up, and can't even use the app — well, pretty off-putting.

So, I scrambled together a few hours and fixed it. Users can generate images on their phones now, but when they arrive at the editing step, the screen shows a message telling them to switch to larger screens. It'd be too messy to add text on a 200x200 image.

What's left to do? Add Google/Facebook/Apple sign-ups so people don't have to type their passwords. Once that is finished, it's time to wait.

If the purchases remain low, my last attempt will be to add the "use your own images" feature. Or rather, to test the feature and see if I can get people wanting to buy. I won't build it without proof of it motivating people to buy.

It might have a positive effect. Smaller artists must show their faces to the world so fans can familiarize themselves. Look at newcomer album covers - it's mostly just a person.
These are also the artists who don't have a budget to pay photographers or designers.
Maybe it was a mistake starting with "normal" AI-generated images.

Once that is tested, I'll either become rich or start a different project 😛.
