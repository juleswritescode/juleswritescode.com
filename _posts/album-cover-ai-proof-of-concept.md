---
language: 'en'
id: 'album-cover-ai-proof-of-concept'
title: 'Project "Album Cover AI" - Is it possible?'
excerpt: "In the last post, I talked about my idea to build an AI album cover generator. But is it actually possible to build something useful? Let's find out."
releaseDate: '2023-06-25'
date: '2023-06-25T12:00:00.000Z'
---

In the [last post](/articles/album-cover-ai-idea) on my AI-Album-Artwork-Generator idea, I talked about the concept itself, why artists might want this, the potential market size, and the basic requirements for it to be a helpful product.

Let's check if I can actually build this!

## Let's check the requirements

Before we start, let's recall the requirements.

It should be possible to create images with it that are interesting enough to be used as album artwork. For newcomers, it should also be possible to use their own faces in the image - this is important since newcomers want to make the audience familiar with how they look.

Additionally, I talked to a friend who leads a [metal band](https://www.chaosbay.com/). They have released a couple of albums and a few singles. They are still considered newcomers, but they are currently making their marks.

I used a [Mom Test](https://www.amazon.de/Mom-Test-customers-business-everyone/dp/1492180742) approach to discuss my idea - that means not mentioning my idea to build an artwork generator, but instead talking about the artworks themselves and the problems he has when releasing a new single.

"I often have a specific, inspiring image in mind and want my artwork to look similar, " he said. "For example," he continued, "I might see a cool movie poster, and then I look for a designer with similar pictures."
"But that is difficult since everybody has their own style. Even if I find a designer that creates amazing art, the finished artwork never turns out how I imagined it in the first place".

That's a great insight! I can solve this with my artwork generator. So, an additional requirement is the ability to upload inspiring images and use their style as a starting point.

## Can I build it?

Now that we have a list of requirements, we can check if it's actually doable to build the product.

I _can_ create images with AI, so that's a given. But can I find a way to make high-quality images consistently? It will be challenging to sell the artwork if only every 10th picture is good enough. Since musicians are generally not tech-savvy, I have to find a way to ensure quality with minimal user input.

Next, I need to check whether I can use an artist's face on the artwork and whether I can use uploaded images as a starting point. Tools like PhotoAI and HeadshotPro already exist, so the first feature must be possible.

Additionally, the artist needs to be able to crop, edit and add text to the images as he wishes. Figma exists and works in a browser, so it's possible - but is it also doable for a single person like me? There's no point in copying the software of a large company. It's just too hard.

For the text, the user needs some font options. Google fonts are a start, and I can also commercially use Adobe fonts when I'm paying for them. So no need to check that.

Lastly, the advised pixel ratio is 3000x3000 pixels for an album artwork. You need that size to print the artwork, use it on other media for advertising, etc.
Let's check if the usual AI services provide that option or if I can find a good upscaler.

## Researching my Questions

Alright, that's a handful of questions and requirements.

Where do you go to answer these questions in the 21st century? Obviously, the library. Let's find some old textbooks on AI-generated images...

Nah, of course, I googled all of it. The first stop was a couple of Reddit threads. Next, I read some blog posts and even some Wikipedia entries.

### Image Generation AI Models

Quickly, I found that the most used image generation AIs are Dall-E, Stable Diffusion, and Midjourney.

Dall-E is the most well-known tool. It gained a lot of traction when it was released by OpenAI. Stable Diffusion is the most used open-source AI image generator. Midjourney is the best image generator currently on the market, but there's a caveat: They don't provide an API. You can only create images by using their Discord Bot. There are several unofficial APIs for it, but Midjourney has stated that they will cut off access for anyone that uses them (if they find out). So that's no valid option, sadly.

There's also Dreambooth - a tool you can train with custom images to create more pictures of the model. So, the perfect tool to use the artist's face on the artwork. It uses Stable Diffusion under the hood.

It takes more than knowing the tools to get good results. I also need to understand how to use them properly. So, I read more blog posts and documentation. Another precious resource was the Twitter feeds of Danny Postma and Pieter Levels, the creators of HeadshotPro and PhotoAI. I found a lot of information on Dreambooth there.

## What I learned

The most important findings were this:

First, there are websites like replicate.com that provide an easy API for many AI models - Stable Diffusion and Dream Booth included.

Second, there are models that _take_ an image and return the "features" the AI model recognizes in them. You get a comma-separated list of "features" that you can use as a prompt for the AI. This exists both for Stable Diffusion and for Dall-E.

When I played around with it, I created great "alternative artworks" for some of my favorite records, for example, "Geography" by Tom Misch.

With this tool, the "image as inspiration" feature is done; also, it helps with learning about prompting. I can use it with a couple of pictures I like and use their prompts as presets. This should make it easy for non-tech-savvy musicians.

### Getting Results With Dreambooth

I also learned a lot about how to get good results with Dreambooth. I'll skip the details of how this works - if you want more information, you can email me.

There are two high-impact things, though: Using 10-15 images with lots of variation will create good-quality images. Also, there's an addition to Stable Diffusion called ControlNet, which allows you to provide a "sketch" of your desired image. ControlNet will then paint the final result with the same motives. This is great for painting the model in a specific pose.

### Adding Text and Editing the Images

To add text to the image, I can rely on the HTML canvas - there is a great library called "Konva," which makes it super easy to crop images and add text.

I was genuinely surprised by how good this tool is. Open Source truly is a beast.

To upscale the final results, many APIs and AI models are available. There's bound to be something good there.

## Piecing Everything Together with Scripts

Let's do some dirty work to check if this is possible.

It doesn't make sense to build a full-fledged service at this point. I need to check if it works; I don't need a server, environment variables, or loading spinners. No performance considerations, nothing.

The easiest way is to write everything in several small script files. I'll copy and paste examples from the documentation pages, create my accounts, and hard-copy the secrets into that file. If I need to work with images, I store or read them from the filesystem.

You can't send the full images via HTTP to train your Dreambooth model. Instead, you need to send public links to the images - which means I need to use some file storage. Quick and dirty, I could use Google Drive - but getting the public link for the data is a hassle. Instead, I upload everything to a public Supabase storage folder and copy-paste the links. Easy.

## Problems To Solve

I learned a lot after fumbling around with the code for a while. And the good thing is: Everything is feasible! I got consistently good results, used my own face for artworks, and used inspiring images as a starting point.

But some problems need solving.

The first problem is nonsense text in the created images. If you tell an AI model you want a "movie poster" or an "album artwork", it automatically adds text. This makes sense since these sorts of images have text in the real world. But I want a clean image, so the artist can add text himself.

The next problem, creating images with Dreambooth takes a lot of time. Replicate.com offers to host these models, but they are switched to standby mode when they haven't been used for a while. Training a model and " waking it up" to use it takes 10-30 minutes. I need a mechanism to inform the user when these models are ready.

It also takes work to create consistent results with Dreambooth. Only every 5th picture was good enough. That definitely needs some further research. The good images, however, are interesting - I painted my face in a photo-realistic style, a synth-wave look, wearing interesting clothes, standing in a desert, and more.

## Next Steps

Cool, everything that I want to build is doable! Some aspects need further research, but the rest is straightforward. When building the MVP, starting with these straightforward features is a good idea.

Now that I know that it's possible to build a product and that there's a market, I need to check if artists want this. Time to validate the idea! See you in the next post.
