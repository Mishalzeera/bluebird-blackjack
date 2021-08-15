# Bluebird Blackjack

A simple blackjack game with a virtual live music experience. Styled according
to a vintage Raj/colonial era look but musically evocative of surf and early
RnB. The game is to entertain casually. The author made the music
at home on a computer, but the intention was to sound like a live band, warts
and all. The audience sound was pieced together from other recordings. The
opponent characters are a feature that promotes a lighthearted atmosphere. The
intention initially was to create a diverse cast of voices, but the decision was
made to focus on Javascript code over content details.

The goals of the creator are:

- Promote a game brand with an identifiable style, to purchase in an
  App store.

- Promote downloadable music that can be bought off Bandcamp.

The goals of the user are:

- To be casually entertained without too much challenge. The game is simple and
  winning or losing aren't such big deals.

- To have a source of background music that they can leave on and come back to
  without losing their place in the gameplay.

- For a particular generation, to feel that their musical, cultural influences
  are represented in the digital domain.

## UX

## The user

The user is the kind of person who wants a quick, handy game on their phone to
play when they have to wait in line somewhere. They have their headphones
on all the time and are easily beguiled by sounds and images. They are the type
who get hooked on one game for long periods and appreciate something as simple
and classic as a blackjack game.

The music is a central aspect of the game, and the user is a fan of classic
surf and RnB from the 1960s. The user is also a fan of slightly risque,
on-the-edge of unPC comedy who doesn't take themselves too seriously. The
opponent characters are a play on stereotypes. The user will appreciate
a digital game with a more adult sense of juvenile humour.

The user is the kind of person who doesn't generally play games on their
phones, and will also play the desktop version in their browser.

## Bluebird Blackjack offers...

A more subculture-styled experience of a common game. Due to the author's lack
of expertise in card games, there was much learning about card games on the
developer side. This makes for a somewhat less professional ruleset than may be
expected. The developer, having grown up during the early years of gaming, with
platforms like the Commodore 64 and Amiga, allows themselves some room for a
lighter touch in those regards. Perhaps its rose-tinted hindsight, but most of
those early games had plenty of character despite the limited substance.

## User stories

- The user is prepared for music by a dialogue that prompts them to adjust
  audio settings.

- The user is primed for a cinematic mentality by the Tarantino-esque start
  credits.

- The surf music reinforces the Tarantino film nostalgia, especially for our
  user, who grew up in the 90s.

- A small button offers the user the ability to skip the intro, allowing the
  Start button to show itself. This is handy for repeat players.

- Another small button allows for an option to mute the music.

- The user is prompted to enter their name, if the user isn't interested in
  that, the name "Player" is assigned to them.

- 10 pounds is added to the pot by both Player and opponent, and the game
  starts.

- The player has the option to "Stay" which automatically ends the round,
  comparing with the opponents hand.

- Opponents hand is dynamically generated behind the scenes using the same
  random selections. The code determines when the Opponent would choose another
  card or not, depending on a set sum threshold.

- The player has the option to request a new card, the value of which is added
  to the sum below. The latest card is displayed visually above.

- The player has the option to bet a fixed amount, increasing the pot.

## Features

## GSAP Animations

GSAP is an animation library for Javascript, linked via CDN.

The game features a welcome screen. The welcome screen sets the stage with some
GSAP animations. Some fictional company names were used to create the illusion
of a film production. The house band is also fictional but continues the
old-world narrative. The idea of the fictional casino is given life by the
reference.

## Colours and fonts

The colour scheme is blue velvet and ivory. A blend of CSS properties created
the faded velvet look, a combination of a tileable textured fuzz background
downloaded from toptotal.com and a hue of dark blue. The handy "ivory" colour
was a nice match for fonts and buttons.

Libre Caslon was chosen since its character matched the look and feel of the
era. A bit worn out but still stately. The kind of font that evokes a
threadbare couch in the lobby of an old Cape Town hotel in the 1960s.

## Buttons and layouts

The three buttons encompassing the gameplay options are clearly laid out and
do not overwhelm the Player with options. The "Bet" button makes it clear that
the bet is a fixed amount. The Player's credit turns red when it hits zero, and
any gameplay after that is disallowed.

The screen is divided into distinct areas. A dealer area on top, where the
cards and their values are read out. On the left side are the opponent image
and name/skill level. The buttons are laid out in a row and beneath is the
player name, pot and credit.

At the conclusion of a round, the buttons all disappear, and only one button
remains, which mimics the classic end of a casino game, where the croupier
clears the table.

When the player runs out of money, the manager asks them to leave. In keeping
with the button-mashing mentality of the game, a prompt immediately asks for
new name input and the game is initialised again. Nothing bad ever happens
at the Bluebird, Player!

## To do in the future

- Link to a Bandcamp page selling an EP of the music, credited to the fictional
  Bluebird Casino House Band.

- Further development of opponent voices with multiple vocalisations randomly
  chosen from an array.

- Skill level of the opponents to be calculated into the game logic, with
  higher probabilities of victory for higher-skilled opponents.

- Random interruptions from the floor manager, ejecting opponents for bad
  behaviour. Robberies. Nothing serious.

## Technology used

- HTML CSS and Javascript
- VS Code
- GSAP library
- Google fonts
- Cards from https://all-free-download.com
- Opponent images from Google Search

## Testing

Initially, the project was to be done using jQuery as a framework. Vanilla JS
was intimidating to the author due to its verbosity and finicky nature. After
thinking about it for some time, taking into account the purpose of the whole
exercise, which is to learn JS, the author decided to write the game in JS and
not use any frameworks beyond the initial credit sequence.

From the start, one issue after another plagued the author simply to get the
HTML/CSS and Javascript files all to link up and work. The author was working
in VS Code and using the Live Server extension. After much tooth-grinding and
pacing, the project reached a certain, tepid flow state.

### Deployment

Once the game logic and media were in place, then the author deployed the site
to Netlify. The steps followed were:

- Create a Netlify account. Netlify allows for free hosting and staging
  directly from Github with the added bonus of purchasing and connecting
  domain names. The "app-friendly" nature of Netlify also appealed
  to the author.

- Select the relevant Github repository from a dropdown menu. The repository
  was initially set to private (the repo was initialised from the desktop
  GitHub app, which creates the repo in private mode by default). Back to
  Github, set the repo to public.

- Accept a randomly generated site URL, serendipity that it contained the words
  "vibrant" and "nightingale". The author liked that, so left it as is.

## Back to Testing

- The game was deployed early because the author was concerned that the game
  would not run well on different browsers.

- The game, having been developed with Firefox as the live server browser, had
  immediate issues with autoplay of audio. The game had an onload="audio()"
  function, which is very bad internet manners. The author solved it by creating
  a dialogue that the user then had to click, which then passed the autoplay
  wall. This did not resolve in Safari, so the text was included to check the
  browser autoplay settings in the dialogue.

- The speed of the animation rendering was painfully slow. The author solved
  this with the help of the Netlify support staff, who sent the author the
  Squoosh app, which allows for image size reduction to an almost shocking
  degree. This helped considerably with the animation.

- The card speed, however, was unfixeable. It may be a function of having the
  cards array in a buffer state at all times, which may be solved by having some
  granular control over the settings. The author has no idea how to do that now
  but is keeping it in mind.

- The game didn't work well on mobile initially, arranging the elements without
  too much clutter was a challenge. The start animation also took some time before
  it fit well enough on a mobile size screen. Initally a very daunting moment,
  since so much of the game was written up already, until it was realised that
  a few key CSS properties were all that needed to be manipulated.

### Learning Javascript

Building an actual project as opposed to doing exercises presented plenty of
challenges. A game like this was overwhelming but became easier
as it was broken into separate small tasks.

However, it was clear that much more was learned in the first day of work on
this game than the previous week's binge-watching tutorials.

- Learning the value of strategic scoping of variables.

  Scope went from an abstract concept to a practical consideration. Being able
  to access the mutable game features aside, it also applied to the media
  elements. Allowing for a mute button, for instance, demanded that the audio
  variable was declared in the global scope.

- Creating reusable functions as a strategy.

  Having functions that encapsulated sections of game flow made it easier to
  control how the game worked. Since this only became clear as progress was
  made, the implementation of that is far from perfect. However, in subsequent
  JS projects, things will be a lot simpler.

- Frameworks and libraries are more helpful the more JS is understood.

  The array of libraries and frameworks available is large, and the tendency
  to try and solve basic problems with them is natural considering how tricky
  JS is as a language. However, in this project, there was a good opportunity
  to learn when and where it is necessary.

  A good example was when the music element was to be added. The simplest route
  was taken in that a single audio file would account for the soundtrack, which
  would then loop. Struggling with the Audio object, mostly with syntactical
  errors, there was a moment where the internet encouraged a "Javascript is
  bad with audio!" opinion. Enter Howler, a fully-featured JS library with
  impressive functionality.

  The Howler docs provided a very lucid walkthrough of how to get what was
  needed. Only after a day or so was it noticed that, in that application, it
  was identical in syntax to standard Javascript. The library was deleted, and
  one word changed in the code structure, and there was a slightly better
  understanding of what JS can and can't do well in that regard.

  There remains a struggle to control the loop breakpoint, which is not a
  major issue in this project. There is a slight audible glitch when the audio
  loops, most likely due to buffer settings. A solution where the buffer length
  was lengthened by the WebAudio API was tried, but it didn't solve the
  problem. The solution was then deemed beyond the scope of the project.

  On the other hand, GSAP was relatively easy to learn and delivered the
  expected results without too much fuss. The syntax is picky, and there are
  moments where using single quotes instead of double, for instance, will cause
  the animation to break.

  There was significant temptation to use jQuery, shorten the amount of code
  needed and be done with it. However, it was skipped over to ensure a more
  thorough learning experience, as the muscle memory of typing out Javascript
  seems important.

  The takeaway was that, when GSAP was introduced, it was clear
  what it was needed for and was used for that purpose. In the case of the
  other frameworks, the confusion with JS was the main driving force, and the
  libraries didn't really seem to help that much.

- Readable code is important.

  Despite having that in mind, it never seemed a priority when it's less than
  a page or two of code. However, it became apparent later in the project that
  organising code and making better choices matters when you come back to it
  later. More respect was gained for best practices.

- Javascript can replace the need for much HTML and CSS

  Case in point, the main game button is reused in multiple ways. Start game,
  New Card, Ok to acknowledge the game status and initiate the next round. The
  HTML and CSS for the game are very small pieces of code, and it was noted
  that a sense of strategy develops entirely different than when one isn't
  using JS.

- Multiple JS files are useful to keep things orderly.

  The deck of cards needed to be entered in and takes up a lot of space. A new
  JS file was made and placed in the correct order in the markup. This made it
  much easier than having a large array of objects taking up the space at the
  top of the main JS file.

## Back to Testing

The user experience, where it comes to gaming, is a mystery to the author
despite having grown up with video games. Some games have an enormous appeal
despite all kinds of crudities and limitations. The goal was to make a playable
game that basically functioned. The author is first to admit that it will not
outsell the Call of Duty franchise in the foreseeable future.

However, it was noted that the music and sound effects added greatly to the
user experience. It was noted that there was much more forgiveness for the
games flaws with the soundtrack behind it, and that according to the people
who tried it, those flaws were now "giving character".

- The game music volume had to be adjusted to the right place for the best
  effect.

  Too loud and, despite the user having control on the global volume of their
  device, the imbalance with the sound effects lessened the atmosphere. Too
  quiet, and it also was out of character.

### Bugs

- Often, a Blackjack result is given despite the sum not adding up to 21. This
  is despite an if-else structure that should only return a Blackjack result in
  that strict occasion. There was a bug where two comparison systems were
  occurring simultaneously, causing an annoying multiple triggering of audio. It
  was resolved, and it was hoped that the Blackjack issue would resolve as well,
  but no.

- When the player's credit runs out, the credit turns red, and if the player
  loses, the game ends. However, the "manager has kicked you out" dialogue only
  happens after a new game initialises itself.

- In the "playBlackjack" function, the if-else system to determine whether an
  Ace is 11 or 1 is highly verbose and gives the author a nagging suspicion that
  there must be a better way of doing it.

- The author couldn't get every card to display during gameplay. Since then,
  the forEach() method was learned and could have been adapted, but time is
  limited, and the project needs to be wrapped up. As it is, only the latest
  card drawn from the deck is displayed while the sum remains true to the
  sequence. Strangely none of the people testing the game commented on that.
