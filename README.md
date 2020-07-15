# Simon

Let's build a single-player Simon game.

## WTF is Simon?!?

👉👉👉 Watch <https://www.youtube.com/watch?v=1Yqj76Q4jJ4> to see how the game works. 👈👈👈

If you're in a group, **watch it as a group**. Take notes and compare after. Maybe watch it again. :)

The video is less than 90 seconds long. You have the time.

## Contents <!-- omit in toc -->

- [Instructions](#Instructions)
- [Iterations](#Iterations)
  - [[v1] Button Lights](#v1-Button-Lights)
  - [[v2] Sounds (Beep Beep I'm A Jeep)](#v2-Sounds-Beep-Beep-Im-A-Jeep)
  - [[v3] Track Button Presses](#v3-Track-Button-Presses)
  - [Break Time!](#Break-Time)
  - [[v4] Call And Response (Non-Random)](#v4-Call-And-Response-Non-Random)
  - [[v5] Call And Response (Random)](#v5-Call-And-Response-Random)
  - [[v6] Simon Game (One Sequence, Non-Random)](#v6-Simon-Game-One-Sequence-Non-Random)
  - [[v6] Simon Game (One Sequence, Random)](#v6-Simon-Game-One-Sequence-Random)
  - [[v7] Final Version](#v7-Final-Version)
  - [[v8] Computer Button Presses](#v8-Computer-Button-Presses)
- [Common Mistakes](#Common-Mistakes)
- [Extra Libraries](#Extra-Libraries)

## Instructions

1. Fork this repository
  - If you're in a group, make one person's repository the "main" fork
  - Add everyone in the group as the collaborator to that fork
1. Clone the fork to your computer using `git clone`
1. Run `npm install` inside the project directory
1. Deploy to surge using `npm run publish` — this runs `surge` for you.

The `site/` directory is where the HTML, CSS, and JS live. You can deploy it with surge "by hand" with the following command (from inside the project directory):

```console
surge site/ my-cool-simon-game.surge.sh
```

Replace `my-cool-simon-game.surge.sh` with your own URL.

See <https://github.com/jfarmer/intro-git#pushing-changes-to-github> for a reminder of how to push code up to GitHub.

## Iterations

With a real Simon game, the machine plays a sequence of colors/sounds and the player has to repeat them in the same order. The game continues until the player makes a mistake. Their final score is the total number of turns it took.

There are three main components to making this work:

1. The look + feel + interaction of the page as the user experiences it
1. The logic of the game
1. Connecting the two

You can often work on (1) and (2) independently.

### Why This Structure

You're not going to be evaluated on whether you follow the structure below or not, but we think following the structure below will make the project go more smoothly **so long as it makes sense to you**. If you feel like you're following the instructions with no idea _why_ then don't worry about it. Do what makes sense. Come back and re-read our suggestions later; they'll almost certainly make sense after you've done the project.

Slow is smooth, smooth is fast. [Festina lente](https://en.wikipedia.org/wiki/Festina_lente).

Our aim is to help you build the project like this:

![MVP](https://cdn.discordapp.com/attachments/687730544217161774/730817165032423575/EcBTzbgWsAEtJOW.png)

### Make It Your Own

Change whatever you want. Add jokes. Use funny sounds. Nothing will make us happier than seeing you put your own spin on it.

You don't have to replicate the way the game works verbatim. There are lots of tiny details in the "official" game. We want you to have fun making a fun game that you can then compare w/ other students' work.

### [v1] Button Lights

👉👉👉  Remember, watch <https://www.youtube.com/watch?v=1Yqj76Q4jJ4> to see how the game works. 👈👈👈

In the real Simon game, there's a light underneath every button that has two states: off and on. Each button on your page will have two visual states: dark and light.

Let's get the buttons lighting up.

Here's the approach we recommend. We think it will reduce the chances that you get tangled up in a mess of HTML, CSS, and JavaScript right off the bat.

Give it a shot, but if you spend more than ~20 minutes without forward progress then do whatever you think makes the most sense.

1. Create a `light-up` class that you can add to any of buttons to make them appear like they've lit up.

   Don't think *at all* about JavaScript yet. Just focus on what being "lit up" looks like and make it possible to lighten / dark the button by adding or removing the class directly in the HTML.

   Once you have buttons with the `light-up` class doing something reasonable, move on to something else. You can always revisist and refine what a "lit up" button looks like.

1. Figure out how to use JavaScript to add a class to an element of your choosing.

   You don't have to do this in response to a mouse click. It could be some JavaScript in a `<script>` tag that adds the class as soon as the page loads. It could be some JavaScript you type by hand in your browser's [developer console][url-developer-console].

   The point is to figure out how to get JS doing what you want *first* and then figure out how to connect that to the user clicking the mouse.
1. Figure out how to respond to a user's mouse to add/remove the `light-up` class at the appropriate times. If it helps, you can react to the "mouse button down" and "mouse button up" events separately.

#### Multiple CSS Classes On A Single Element <!-- omit in toc -->

You can give a CSS element more than one class, like so:

```html
<div class="simon-button blue light-up"></div>
```

This `<div>` tag has three classes: `simon-button`, `blue`, and `light-up`.

You can select elements that have multiple classes like so:

```css
/*
   No space between the two class selectors means
   select elements that have BOTH classes
*/
.simon-button.light-up {
  background-color: purple;
}
```

Notice that there's no space between `.simon-button` and `.light-up`. This will make any element that has **both** the `simon-button` and `light-up` class have a purple background color.

### [v2] Sounds ([Beep Beep I'm A Jeep][youtube-beep-beep-jeep])

Make the Simon board play a sound when a button is pressed. There are many ways to play sounds in JavaScript. You might have to go find sound clips. The sounds don't need to be "faithful" to the Simon game.

Here are the two main ways to play sound via JavaScript:

1. Embed a sound file in the page with the `<audio>` tag and use JavaScript to play it in response to something the user does on the page
1. Use the `AudioContext` interface to generate sounds programmatically, e.g., telling the computer to play a sine wave at 440Hz for 2 seconds

There are pros/cons to each technique. The `<audio>` tag is straightforward but can make it hard to control tiny details. `AudioContext` is incredibly flexible but is more technical and has a steeper learning curve.

There's no correct choice. Get *something* working, note the rough edges of your approach, and move on knowing that you can come back and refine it later.

### [v3] Track Button Presses

We should start building the game itself. The biggest hurdles will be around your unfamiliarity with JavaScript, so focus on simple things first.

It's worth it for everyone to understand how this iteration works.

To begin, get JavaScript tracking the number of times a person clicks the button on the page  Add an element to the page which displays the number of buttons pressed so far.

You will need a variable to store the number of button presses. Its initial value should be `0`.

Every time a user presses a button, you will need to do two things:

1. Increment the counter variable (the variable storing the number of button clicks) by `1`
1. Update the text on the page that displays the number of button presses with the new value of your counter variable

### Break Time!

Again, remember, these iterations are a suggestion. Do what make sense to you.

Teammates who want to focus more on the visual element could spend time on refining some of the work from previous iterations. Teammates more interested in digging into JavaScript could focus on the remaining iterations. It's up to the team to decide.

### [v4] Call And Response (Non-Random)

Before we figure out how to play a "full" game of Simon, let's create a simpler version of the game. Let's eliminate three variables:

1. **No Growing List of Colors** — The player guesses one color at a time without having to remember all the colors they playedpreviously.
1. **No Randomness** - There is one, fixed sequence of colors that players have to react to every time they play the game
1. **No Computer Interaction With Buttons** — The computer indicates the next color to play by displaying some text on the page rather than "pressing" the buttons

Start with a fixed sequence of colors, like "red, blue, blue, green". The sequence will be the same every time the user visits the page.

- Display "red" on the page
- Wait for the user to click a button
- If it's not red, display some text that says "game over"
- If it's red, display the next color ("blue") in this case
- Wait for the user to click a button
- If it's not blue, display some text that says "game over"
- If it's blue, display the next color
- etc. etc.
- until there are no more colors left

### [v5] Call And Response (Random)

Let's figure out how to add some randomness to the experience.

Figure out how to generate a random color name and make that the next color the player has to respond with. The game still works call-and-resposne-style, but the player plays until their first incorrect guess.

The number of button presses is their final score.

**Note**: You could turn this into a proper game by adding a timer for each guess. Every time the computer picks a new color, the timer starts ticking down. The player loses if it hits 0. As the game progresses, the timer becomes shorter and shorter, demanding faster reaction times from the player.

This wouldn't be the official "Simon" game, but it'd still make sense as a game!

### [v6] Simon Game (One Sequence, Non-Random)

Let's get rid of the call-and-response element.

Encode a fixed sequence of colors again. Display the *full* sequence to the player (as text). If they press every button in the correct order, they win. If they press a button out of order, they lose.

You'll have to keep track of what color they need to guess next.

### [v6] Simon Game (One Sequence, Random)

Let's add some randomness back in.

Figure out how to generate a random sequence of colors. It can be of a fixed length (e.g., it's always 5 random colors).

Once you've generated the sequence, display the list of colors and let the game unfold as in the previous iteration.

### [v7] Final Version

Try to complete the game. You will now need multiple sequences. Each sequence is identical to the previous sequence except for with a new, random color attached to the end.

### [v8] Computer Button Presses

Rather than displaying the sequence of colors on the page as text, make it so that the computer "presses" the buttons in the right order.

Believe it or not, getting this part to work well is one of the hardest parts. You will need to use `setInterval` and/or `setTimeout` to make it work.

Try getting a single button press working and then figure out how to chain two button pressed together, one after the other. That will point the way to getting the computer to "press" any arbitrary sequence of buttons.

See:

- <https://www.bitdegree.org/learn/javascript-setinterval>
- <https://www.digitalocean.com/community/tutorials/js-settimeout-setinterval>
- <https://javascript.info/settimeout-setinterval>


## Common Mistakes

The most common mistake is to do the work in an unproductive order. Most people will start by writing down a description of the game and its rules as they'd describe it to someone else. That's a *great* first step, but the mistake happens next: they start doing the work the order that it appeared in the description.

For example...

- Focusing too early on how the computer plays a pattern for the player to repeat (one of the first thing you'd say when describing Simon to someone else)
- Focusing too early on whether the user successfully repeated the pattern or not
- etc.

There are *so* many unknown unknowns here. You have to focus on the simpler parts first because even those will surface a ton of problems. Below are suggested "chunks" of work. Some make sense to work on independently, others less so. They don't necessarily need to be done in the order given, either, although some make sense to work on before others.

A page with four buttons that light up and play sound as a user clicks is still a neat experience, even if it isn't a full Simon game.

## Extra Libraries

You're free to use any libraries, tools, or technologies you think are appropriate. One common one is [jQuery][url-jquery]. You can modify the files any way you want: edit them, add code to them, create more files, etc.

You can use `console.log` to see what your code is doing. It will be displayed in the debugging console, which you can activate by right-clicking the page, selecting *Inspect Element*, and then clicking the *Console* tab.

If you're using Chrome on a Mac, you can also open it with `Command + Option + j`.

[url-developer-console]: https://support.airtable.com/hc/en-us/articles/232313848-How-to-open-the-developer-console#:~:text=To%20open%20the%20developer%20console%20window%20on%20Chrome%2C%20use%20the,then%20select%20%22Developer%20Tools.%22
[url-jquery]: https://api.jquery.com/
[youtube-beep-beep-jeep]: https://www.youtube.com/watch?v=IM9IyRua6VE
