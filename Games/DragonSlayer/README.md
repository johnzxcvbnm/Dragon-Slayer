# Dragon-Slayer
<hr>
<h2>Jump To</h2>

<a>Story and Gameplay</a>
<a>The Map</a>
<a>Combat</a>
<a>Exact Stats</a>
<a>Links</a>

<hr>
<h2>Story and Gameplay</h2>
<br>
You are a knight of the realm, but alas, the Princess has been kidnapped by a Dragon!  The Dragon's lair is a nearby abandoned castle, but you don't know which one.

The player always spawns in the same initial castle location.  The boss (Dragon) however, spawns randomly in one of the other castles.  The goal of the game is to explore the map to find the castle where the boss is, and to defeat him.  The player loses when they lose all of their health.

I wanted to make a fairly simple game that didn't really need much explanation.  Even the goal of the game "Slay the Dragon. Rescue the Princess" is on top of the screen, reminding players what they need to do, should they forget.  The two major systems in the game is the mapping system and the battle system.

<hr>
<h2>The Map</h2>

The actual size of the map is 50x50 squares.  When the game is first loaded it creates all the squares and assigns them a X and Y, creating a coordinate system.  Everything about the map is based off of this coordinate system.  After all the squares are created they're all hidden and the squares around the player are shown, creating a field of view for the player (a 15x9 view point).  When ever the player moves, his player icon is appended to the new square, all the squares are hidden again, then a new field of view is generated, creating the illusion of movement across the map.

The terrain is added after the squares are created.  In order to build a decent map, I first created a map builder.  The map builder has the whole 50x50 map on display and uses the same coordinate system that the main game uses.  Then you select a terrain and click on which boxes you wanted to have that terrain, a sort of paint by numbers.  Once the whole map is filled in there's an 'export' button, which organizes all the different terrain types (and their coordinates) and prints them to the console, creating an array that has 2506 elements.  I then copied that array and pasted it into a new file to cycle through the array and add the proper class to the square, creating the terrain.

<hr>
<h2>Combat</h2>

I wanted to keep combat pretty simple.  The player can only Attack, Heal, and Retreat.  Enemies can only attack.  Basically the player goes first, then the enemy (if it's still alive, or if the player didn't run) attacks the player.  This keeps going until the player loses, the monster loses, or the player runs.

There are four different monster in the game with different stats and purposes (see below for more details).  To make things (relatively) simple I created six different objects, one for each monster, one for the player, and one generic object.  When ever the player enters combat one of the monster objects is copied into the generic object, so it's always the player object against the generic object.

Whenever the player enters combat, I use the same kind of trick to render the monster as I did with the map.  First I hide all the squares again, then I turn on a different div which overlays the map container and has the monster image.  When combat is over (if the player is still alive), I hide the monster div, and I render the field of view again.

Actual combat uses several random numbers to determine everything from what monster you encounter, if you (or the monster) land a hit, if you (or the monster) lands a critical hit, and if the player successfully runs away.  Basically a random number is compared to the appropriate stat to see if you passed or failed.

Critical hits in the game multiply the base attack by three.

<h2>Stats</h2>

These are the exact stats for the player and the monsters in the game.

--------Player--------
Max Health: 100
Base Attack: 10
Accuracy: 80%
Critical Chance: 10%
Run Chance: 30%
Max Potions: 3
Chance for Random Encounters: 7.5%

Basic player stats.  I wanted to make a mid-grade player, able to take on smaller enemies without any problems, but not able to easily take on the boss.


--------Slime--------
Health: 20
Base Attack: 5
Accuracy: 90%
Critical Chance: 10%
Chance to Encounter: 40%

The slime is the easiest enemy in the game.  I designed him to be a push over for the player.  A low level threat.


--------Wizard--------
Health: 40
Attack: 7
Base Attack: 7
Accuracy: 70%
Critical Chance: 40%
Chance to Encounter: 40%

The wizard is designed to be a mid level threat against the player.  With a high chance of landing critical attacks he can wear away the players health quickly if they're unlucky.  He's job is to take some HP off of the player to force him the use a potion or sleep after battle.


--------Skeleton--------
Health: 80
Base Attack: 10
Accuracy: 85%
Critical Chance: 20%
Chance to Encounter: 20%

The Skeleton was modeled to be similar to the player in terms of stats.  He is designed to force the player to use a potion every time he runs into the player, which the player can not replenish.  This is also why I lowered the chance of running into him, vs the other monsters.  It's usually a better choice to run away from the skeleton instead of fighting him.


--------Dragon--------
Health: 120
Attack: 25
Accuracy: 70%
Critical Chance: 10%
Chance to Encounter: 100%

The Dragon is the boss of the game.  Beat him and you win.  He will always be in one of the castles on the map (randomly chosen), no where else.  I designed the boss to be a challenge.  On average, I needed two or three potions just to MAYBE beat him, which is why it's important to hold onto as many potions as you can.  Even if you do good he can still crit you for a devastating 75 damage, which will more than likely kill you.

<hr>
<h2>Links</h2>

<a href="https://johnzxcvbnm.github.io/">To my GitHub Pages</a>
<a href="https://johnzxcvbnm.github.io/Games/DragonSlayer/index.html">Dragon Slayer</a>
<a href="https://www.linkedin.com/in/kusching/">LinkedIn</a>
