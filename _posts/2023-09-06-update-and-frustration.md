---
language: 'en'
id: '2023-09-06-update-and-frustration'
title: 'Quick Update, Feeling Frustrated'
excerpt: "The Sign-Up flow is done, but I'm not moving as fast as I could."
releaseDate: '2023-09-06'
date: '2023-09-06T10:00:00.000Z'
tags: ['albumcoverai']
---

Another quick update.

I have updated the sign-up flow for AlbumCoverAI - there's now a common sign-in/sign-up form, and once the user is created, my database creates a first artwork session and assigns the first image generation credits.

My API guards are also adjusted; they check if a user has credits before new images are generated. However, at the moment, the credits are never updated. The user can generate images, but the number of generations is not subtracted from the credits. Obviously, that shouldn't be the case unless I want to lose all my money.

While I boasted yesterday that I would also implement OAuth, I descoped this today. It's too much work for the initial rollout. It means lots of busy work, such as creating Google-, Apple- and Facebook-OAuth-Apps, getting the credentials, implementing a NextJS authentication handler, and bla bla bla. Users will have to sign up via username/password for now.

So far, so good! I'll continue tomorrow.

Now, a little more personal.

I'm a bit frustrated. I'm moving slower than I'd like. Lately, I worked a lot for my day job to finish a big feature, and because of that, I only had 1-2 hours per day to work on AlbumCoverAI. That's not enough to advance.

Of course, this happens - life gets in the way - but I'm still disappointed in myself. For not giving it my all, for fulfilling my potential.

I guess I'll simply accept that, move on, and try harder in the future (or be easier on myself).

These phases of moving fast, doing what I should do on the one hand, and feeling like I'm not doing enough on the other, have been there all of my life. When I was learning to code or when I studied music, I always oscillated between the two.

The "cure" is to step back, recollect myself, and focus on neglected areas. So, for the next 2-3 days, I'll solely work on my project.

I would love to make some time to learn marketing, too. I am convinced learning a skill by reading or watching courses has lots of leverage, yet it should always supplement the real world. "Just in Time" vs. "Just in Case" learning.

But, of course, every minute spent learning could also be spent working and making progress, so it's hard to justify the reading.

I'll try to strike a balance. 30 minutes a day could do the trick - trying to learn only those things you can apply within the same week.
