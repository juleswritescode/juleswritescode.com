---
language: 'en'
id: 'album-cover-ai-validation'
title: 'Project "Album Cover AI" - Validating the Idea'
excerpt: "Before I jump head-first into building the product, let's test the waters first. I want to see actual interest from musicians! The best way? A fake marketing campaign."
releaseDate: '2023-07-04'
date: '2023-07-04T12:00:00.000Z'
---

In the [post from last week](/articles/album-cover-ai-proof-of-concept), I tested whether my idea to build an ai album cover generator is feasible. It seems like it is!

But before I jump into building things, let's first check if musicians want this. I had already spent 6 months building another project, only to notice that there wasn't any demand when I launched it on Reddit. It was fun, and I learned a lot, but it would be even more awesome if the next one became an actual side business.

I already determined the possible market size in the first blog post of the series. You can check the post [here](/articles/album-cover-ai-idea).

## Validation Strategy

To validate the project, I must show it to potential customers. But where are they?

From my experience in the music scene, I know that most musicians hang out on Instagram, with the newer generation shifting more and more to TikTok. Both platforms are heavy on audio and video, making them ideal for consuming and posting musical content. I'm more familiar with Instagram, so that is the best spot to validate the project.

Alright, an Instagram ad campaign it is.

First, I need something that I can show to customers. Since I want to validate the idea with the least effort possible, I won't build the app right away. Instead, I will build a landing page that acts _as if_ there already is an app and showcases the idea.

## Building the Landing Page

Let's start with a domain name. I already know from my SEO research that "album cover ai" is a frequently searched term on Google. Guess what - the domain name "albumcoverai.com" is available. I purchased the domain name for just under $100
(In hindsight, I should've started with a cheaper domain - I hope to earn that money back. It is a classic mistake of many indie hackers to buy domains that have potential but then never build the actual project).

Alright, now to the actual page. Again, I want to spend little time on this, so I will use a website template. Using [TailwindUI's](https://tailwindui.com/) [Commit Template](https://commit.tailwindui.com/), I was able to whip up something in one or two hours, including writing the copy.

To show the user what the app looks like, I sprinkled in some images of the product, which doesn't even exist yet. I used TailwindUI's components, opened my Chrome dev tools, changed the text of the HTML, removed what I didn't want to see - and was done. Some cropped screenshots, some cursor images, and it looks like an actual app.

![AlbumcoverAI Landing Page Screenshot](/assets/blog/images/albumcoverai_landing_screenshot.png)
_Screenshot of the Landing Page_

## Validating Purchase Intent

Alright, but musicians visiting my landing page does not mean the project is validated. I don't know if those visitors would buy the product or leave the page when they discover the artwork isn't free. I need to find out if they are actually looking to buy.

An aggressive idea would be to have users fill in their credit card data. Once they hit submit, I could show a "Sorry, the app doesn't work yet, but your data is not saved" notification. That would be an unmistakable signal of purchase intent: they clicked the "Buy" button.

But I admit, that scares me a bit. Living in Europe, the law prohibits unnecessarily storing user data. And even if I'm not storing it, some people might feel like they are being scammed. Let's go with a more timid approach.

What about something like this: "Hey, Mr. User, we are currently overloaded and can not accept new customers. You _can_, however, get a 50% off coupon, if you join the waitlist". It seems reasonable - users that add an email want that coupon, meaning they are at least interested in buying the product. Let's go with that.

I used a [Supabase](https://supabase.com) project to collect those emails. I want to avoid researching email tools when I only need a single table, and since Supabase is free and I know the platform quite well, it was the quickest to set up (Hint: if you decide to use Supabase, too, make sure to enable RLS, so no third party can download the emails).

## The Meta Ad Campaign

With a product to showcase and a way to collect leads, I can start the Instagram ad campaign.

I never launched a campaign before, but it seemed pretty easy after watching [this video](https://www.youtube.com/watch?v=n83QDJXXpGs). Granted, the whole architecture of the ads manager could be better; it's tough to orient yourself - but for launching an ad campaign, you only need a few of the features anyways.

After creating a Facebook Business Page and an Instagram account and uploading some of my previously generated images, I created some ads in Figma. Quick learning here: Make sure to use a good Figma template for the different formats of the platform, for example, IG Stories, Reels, and Posts. The template should include IG's UI text. I had to redo my images many times because, on the actual platform, Instagram overlaps the UI text onto your image, which might hide important parts of your ad.

![One of the Instagram Ads](/assets/blog/images/albumcoverai_instagram_ad.png)
_One of the Instagram Ads_

With that out of the way, I could run the campaign.

It was a bit tricky to find a fitting target group. Meta only provides broad customer categories, such as " people interested in the music industry." But you can combine multiple conditions to narrow down your prospect group. I settled for a combination of "people interested in the music industry" _and_ "people who are interested in Logic Pro, Ableton, or Cubase" (The most commonly used tools to create music).

I scheduled the campaign for a week at $10 per day.

After a couple of days, Meta banned my ads due to "intentful grammar." According to the Meta FAQ, violations to that rule include deliberately not using grammar correctly to hide obscene content. I'm still unsure what the problem was, and after requesting a support review multiple times, they undid the ban. Luckily, I already had enough data, so I didn't bother to restart the campaign.

The results were solid - about 3000 people saw the ad. 250 of those 3000 people clicked on the ad, which is roughly 8%. Then, out of the 250 visitors, 25 signed up for the waitlist - a strong 10%.

But the cost to acquire these 25 people was relatively high - around $3 per lead.

Since this is my first time running such a campaign, I found the data confusing; was it a strong signal or not? The conversion rate seemed solid, but I don't know how many of those conversions would purchase a cover. So, I decided to run a campaign with another strategy to get more data.

![Meta Ad Campaign Results](/assets/blog/images/albumcoverai_meta_rates.png)
_Results of the Meta Campaign_

## Now, a Google Ad Campaign

Given my keyword research, running a SEA campaign was the obvious choice to gather more data. People are already searching for the topic; even if the searches are relatively few, they are still enough to gather statistically significant data.

Same spiel, I watched a video on how to do Google Ads, and it seemed easy. It was even easier than running a Meta campaign since I did not have to define a target group or create advertising images. I just had to pick some keywords.

Quick learning: Adding a handful of keywords and allowing different combinations was a good idea. The keywords that converted the most differed from what I initially thought (Album Artwork Generator was the #1 ranking keyword).

The results were good, too. Roughly 1000 people saw the ad, and 230 people clicked. A click-through rate of 23% - that seems nice.

The issue was that only 5-10 people signed up for the waitlist. I don't know if that's due to a lack of interest in the product. The people _were_ actively looking for a solution, maybe they don't want to be put on a waitlist; they want the solution _now_.

![Google Ad Campaign Results](/assets/blog/images/albumcoverai_SEA_rates.png)
_Results of the Google Ad Campaign_

## Confused with the Data

Okay, what do I make of this?

I never collected data, so I lacked a reference to compare my results to. The industry standard for a healthy conversation or clickthrough rate is 2-5%. My rates of 10%/23% were much better. But on the other hand, my lead acquisition cost of $3-4 was quite high, and while the rates were good, they didn't actually measure conversions - they measured signups for a waitlist.

I settled for this: There is interest in the product, but I'm yet unsure if people will pay for it.

After talking to some friends, I decided to email the people on the waitlist to find out more. I would ask them for feedback, and tell them there's no product yet. After they would respond, in my second email, I would say that I am willing to create an album artwork "by hand" by piecing together the various AI services for $10. It seemed like a good way to dig deeper.

The problem? Nobody even replied to the first email. Meh!

Here's the most significant learning from the validation process:

Make sure to validate _willingness to pay_. Having people on the waitlist is nice, but it's not a clear, strong signal. Without such a signal, you will be just as confused after the process as you were before.

Next time, I'll try to be less timid and validate actual payment intent. I could use a fake PayPal button; people won't have to enter any information, and it still comes close to an actual purchase. I will also not email to first ask for feedback but instead offer the product immediately.

## Next Steps

What is a musician to do amidst all this confusion?

Well, I could validate further, of course. But in the end, the whole product is not that hard to build. I figured out most technical things in the proof-of-concept phase. Building an MVP is straight forward. If I am meticulous about only building the essential features, I can get something off the ground quickly.

An MVP would allow me to validate if customers want to put money on the table. Since people _do_ seem interested in the product, I decided build one.

See you in the next post!
