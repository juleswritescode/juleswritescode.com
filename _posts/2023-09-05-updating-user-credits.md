---
language: 'en'
id: '2023-09-05-transcribing'
title: 'Updating My Offer in Code'
excerpt: 'I have decided to update my offer, and done the first steps to update the sign-up flow and user-credit system.'
releaseDate: '2023-09-05'
date: '2023-09-05T10:00:00.000Z'
tags: ['albumcoverai']
---

Time for another update on AlbumCoverAI.

As outlined in the previous posts, I will change the offer.

Now, the customers bear the risk - they must pay $29.99 before even trying the app, and without any guarantees. I want the risk to be mine. I want users to generate 100 images for free and then decide if they want to purchase.

Generating more than 100 images or upscaling the results will require a payment. Instead of purchasing a single artwork, users will purchase image-generation- and upscale-credits.
I'm also considering capping the clean-ups, as these are the most expensive for me ($3.00 per 100 requests).

I have already started the work, but, as usual, it takes more time than expected. To not blow things out of proportion, I'll try to finish small steps that I can roll out.

First, I'll focus on the credits. I need to store the amount of credits a user has and update them accordingly - whenever he generates images or upscales a picture. Also, I need to get the current credits from an API endpoint. Then, I can display how many images are left to generate and disable buttons if credits are depleted.

To allow the first free image generations, I need to assign some credits when the user signs up. This is easy, I'll let my database take care of that.

Once that is done, I'll change the user registration flow.

Currently, a user can only sign up by purchasing a token. The email used for the purchase will automagically be the email of the AlbumCoverAI account.

After the update, the user should be able to sign up by - well, by signing up. I'll need to build a custom form for that. While at it, I'll also start supporting the typical OAuth providers (Google, Apple, Facebook - very easy using Supabase).

The difficult part is adjusting the payment. Now, I need to link the _AlbumCoverAI email_ to the stripe customer - not the other way around. This is possible; we're doing it this way in my day job, but it's annoying to implement.

Annoying because it's repetitive. You need to implement auth, payments, and all those basics in every app you build. What is fun at first quickly becomes a chore.

Lately, I've seen many starter template projects that help with such things. They come with pre-build Stripe integrations, for example. I used to avoid these - since you end up tweaking things most of the time, and then, you might as well write it yourself - but they seem more attractive by the minute.

So, I'll build my own templates and libraries in the future and copy-paste my apps together, Frankenstein-style.

Sorry for the detour, but it might help you if you start collecting these fragments early on.

My main tasks are clear but will take a couple of days. Until then, I have switched off the meta ads. I'm excited to see if users will convert more once they try my app.
