# Bluebird Blackjack

A simple blackjack game with a virtual live music experience. Styled according
to a vintage Raj/colonial era look, but musically evocative of surf and early
RnB. The game is to entertain casually. All of the music was made by the author
at home on a computer, but the intention was to sound like a live band, warts
and all. The audience sound was pieced together from other recordings. The
opponent characters are a feature that promotes a lighthearted atmosphere. The
intention initially was to create a diverse cast of voices but the decision was
made to focus on Javascript code over content details.

The goals of the creator are:

- Promote a game brand with an identifyable style, to purchase in an
  App store.

- Promote downloadable music that can be bought off Bandcamp.

The goals of the user are:

- To be casually entertained without too much challenge. The game is simple and
  winning or losing aren't such big deals.

- To have a source of background music that they can leave on and come back to
  without losing their place in the gameplay.

- For a certain generation and ethnicity, to feel that their musical
  and cultural backgrounds and influences are represented in the digital domain.

## UX

## The user

The user is the kind of person who wants a quick, handy game on their phone to
play when they have to wait in line somewhere. She or he have their headphones
in all the time and are easily beguiled by sounds and images. They are the type
who get hooked on one game for long periods and appreciate something as simple
and classic as a blackjack game.

The music is a central aspect of the game, and the user is a fan of classic
surf and RnB from the 1960s. The user is also a fan of slightly risque,
on-the-edge of unPC comedy who doesn't take themselves too seriously. The
opponent characters are a play on stereotypes, and the user will appreciate
a digital game that has a more adult sense of juvenile humor.

The user is the kind of person who doesn't generally play games on their
phones, and will also play the desktop version in their browser.

## Bluebird Blackjack offers...

A more subculture-styled experience of a common game. Due to the authors lack
of expertise in card games, there was a lot of learning about card games on the
developer side. This makes for a somewhat less professional ruleset than may be
expected. The developer having grown up during the early years of gaming, with
platforms like the Commodore 64 and Amiga, allows themselves some room for a
lighter touch in those regards. Perhaps its rose tinted hindsight, but most of
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

- Another small button allows for an option to mute the music, which is the
  polite thing to do.

- The user is prompted to enter their name, if the user isn't interested in
  that, the name "Player" is assigned to them.

- 10 pounds is added to the pot by both player and opponent and the game
  starts.

## Features

## GSAP Animations

GSAP is an animation library for Javascript, linked via CDN.

The game features a welcome screen. The welcome screen sets the stage with some
GSAP animations. Some fictional company names were used to create the illusion
of a film production. The house band is also fictional, but continues the
old-world narrative. The idea of the fictional casino is given life by the
reference.

## Colours and fonts

The colour scheme is blue velvet and ivory. A blend of CSS properties created
the faded velvet look, a combination of a tileable textured fuzz background
downloaded from toptotal.com and a hue of dark blue. The handy "ivory" colour
was a nice match.

Libre Caslon was chosen since its character matched the look and feel of the
era. A bit worn out but still stately. The kind of font that evokes a
threadbare couch in the lobby of an old Cape Town hotel in the 1960s.

## Buttons and layouts

The three buttons that encompass the gameplay options are clearly laid out and
do not overwhelm the player with options. The "Bet" button makes it clear that
the bet is a fixed amount. The Player's credit turns red when it hits zero, and
any gameplay after that is disallowed.

The screen is divided into distinct areas. A dealer area on top, where the
cards and their values are read out. On the left side is the opponent image
and name/skill level. The buttons are laid out in a row and beneath is the
player name, pot and credit.

At the conclusion of a round the buttons all disappear and only one button
remains, which mimics the classic end of a casino game, where the croupier
clears the table.

When the player runs out of money, the manager asks them to leave. In keeping
with the button mashing mentality of the game, a prompt immediately asks for
a new name input and the game is initialised again. Nothing bad ever happens
at the Bluebird, player.

## To do in the future

- Link to a Bandcamp page selling an EP of the music, credited to the fictional
  Bluebird Casino House Band.

- Further development of opponent voices with multiple vocalisations randomly
  chosen from an array.

- Skill level of the opponents to be calculated into the game logic, with
  higher probablities of victory for higher skilled opponents.

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

Initially the project was to be done using jQuery as a framework. Vanilla JS
was intimidating to the author due to its verbosity and finicky nature. After
thinking about it for some time, taking into account the purpose of the whole
exercise which is to learn JS, the author decided to write the game in JS and
not use any frameworks beyond the intial credit sequence.

From the start, one issue after another plagued the author simply to get the
HTML/CSS and Javascript files all to link up and work. The author was working
in VS Code and using the Live Server extension. After much toothgrinding and
pacing, the project reached a certain flow state.

The entire project would freeze up and not work if any issue wasn't addressed
directly.

### Deployment

Once the game logic and media were in place, then the author deployed the site
to Netlify. The steps followed were:

- Create a Netlify account. Netlify allows for free hosting and staging
  directly from Github with the added bonus of being to purchase and connect
  domain names.

- Select the relevant Github repository from a dropdown menu. The repository
  was initially set to private (the repo was initialised from the desktop
  GitHub app, which creates the repo in private mode by default). Back to Github,
  set the repo to public.

- Accept a randomly generated site url, serendipity that it contained the words
  "vivid" and "nightingale". The author liked that so left it as is.

## Back to Testing

- The game was deployed early because the author was concerned that the game
  would not run well on different browsers.

- The game having been developed with Firefox as the live server browser, had
  immediately issues with autoplay of audio. The game had an onload="audio()"
  function, which is very bad internet manners. The author solved it by creating
  a dialogue that the user then had to click which then passed the autoplay
  wall. This did not resolve in Safari, so the text was included to check the
  browser autoplay settings in the dialogue.

- The speed of the animation rendering was painfully slow. The author solved
  this with the help of the Netlify support staff, who sent the author the
  Squoosh app, which allows for image size reduction to an almost shocking degree.
  This helped considerably with the animation.

- The card speed, however, was unfixeable. It may be a function of having the
  cards array in a buffer state at all times, which may be solved by having some
  granular control over the settings. The author has no idea how to do that at
  the moment, but is keeping it in mind.
