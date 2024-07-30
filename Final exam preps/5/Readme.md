## Problem 1 - Activation Keys

*You are about to make some good money, but first, you need to think of
a way to verify who paid for your product and who didn't. You have
decided to let people use the software for a free trial period and then
require an activation key to continue using the product. Before you can
cash out, the last step is to design a program that creates unique
activation keys for each user. So, waste no more time and start typing!*

The first line of the input will be your raw activation key. It will
consist of **letters and numbers only**.

After that, until the **"Generate"** command is given, you will be
receiving strings with instructions for different operations that need
to be performed upon the raw activation key.

There are several types of instructions, split by **"\>\>\>"**:

- **"Contains\>\>\>{substring}"**:

  - If the raw activation key contains the given substring, prints:
    **"{raw activation key} contains {substring}"**.

  - Otherwise, prints: **"Substring not found!"**

- **"Flip\>\>\>Upper/Lower\>\>\>{startIndex}\>\>\>{endIndex}"**:

  - Changes the substring **between the given indices (the end index is
    exclusive)** to upper or lower case and then prints the activation
    key.

  - All given indexes will be valid.

- **"Slice\>\>\>{startIndex}\>\>\>{endIndex}"**:

  - **Deletes** the characters between the start and end indices (**the
    end index is exclusive) and** prints the activation key.

  - Both indices will be **valid**.

### Input

- The first line of the input will be a string consisting of **letters
  and numbers only**.

- After the first line, until the **"Generate"** command is given, you
  will be receiving **strings**.

### Output

- After the **"Generate"** command is received, print:

  - **"Your activation key is: {activation key}"**

**Examples**

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 59%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["abcdefghijklmnopqrstuvwxyz",</p>
<p>"Slice&gt;&gt;&gt;2&gt;&gt;&gt;6",</p>
<p>"Flip&gt;&gt;&gt;Upper&gt;&gt;&gt;3&gt;&gt;&gt;14",</p>
<p>"Flip&gt;&gt;&gt;Lower&gt;&gt;&gt;5&gt;&gt;&gt;7",</p>
<p>"Contains&gt;&gt;&gt;def",</p>
<p>"Contains&gt;&gt;&gt;deF",</p>
<p>"Generate"])</p></td>
<td><p>abghijklmnopqrstuvwxyz</p>
<p>abgHIJKLMNOPQRstuvwxyz</p>
<p>abgHIjkLMNOPQRstuvwxyz</p>
<p>Substring not found!</p>
<p>Substring not found!</p>
<p>Your activation key is: abgHIjkLMNOPQRstuvwxyz</p></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["134softsf5ftuni2020rockz42",</p>
<p>"Slice&gt;&gt;&gt;3&gt;&gt;&gt;7",</p>
<p>"Contains&gt;&gt;&gt;-rock",</p>
<p>"Contains&gt;&gt;&gt;-uni-",</p>
<p>"Contains&gt;&gt;&gt;-rocks",</p>
<p>"Flip&gt;&gt;&gt;Upper&gt;&gt;&gt;2&gt;&gt;&gt;8",</p>
<p>"Flip&gt;&gt;&gt;Lower&gt;&gt;&gt;5&gt;&gt;&gt;11",</p>
<p>"Generate"])</p></td>
<td><p>134sf5ftuni2020rockz42</p>
<p>Substring not found!</p>
<p>Substring not found!</p>
<p>Substring not found!</p>
<p>134SF5FTuni2020rockz42</p>
<p>134SF5ftuni2020rockz42</p>
<p>Your activation key is: 134SF5ftuni2020rockz42</p></td>
</tr>
</tbody>
</table>

# Problem 2 - Emoji Detector

Your task is to write a program that extracts emojis from a text and
find the threshold based on the input.

You have to get your **cool threshold**. It is obtained by **multiplying
all** the digits found in the input. The cool threshold could be a
**huge number**, so be mindful.

An emoji is valid when:

- It is surrounded by 2 characters, either **"::"** or **"\*\*"**

- It is **at least 3** characters long (**without** the surrounding
  symbols)

- **It starts** with a **capital letter**

- Continues with **lowercase** letters **only**

Examples of valid emojis**: <span class="mark">::Joy::</span>,
<span class="mark">\*\*Banana\*\*</span>,
<span class="mark">::Wink::</span>**

Examples of invalid emojis: **<span class="mark">::Joy\*\*</span>,
<span class="mark">::fox:es:</span>**,
**<span class="mark">\*\*Monk3ys\*\*</span>,
<span class="mark">:Snak::Es::</span>**

You need to count **all valid emojis** in the text and calculate their
**coolness**. The coolness of the emoji is **determined** by summing all
the **ASCII values of all letters** in the emoji.

Examples: **::<span class="mark">Joy</span>:: - 306,
\*\*<span class="mark">Banana</span>\*\* - 577,
::<span class="mark">Wink</span>:: - 409**

You need to print the result of the cool threshold and, after that take
all emojis out of the text, count them and print **<u>only the cool
ones</u>** on the console.

### Input

- On the single input, you will receive a piece of string.

### Output

- On the first line of the output, print the obtained Cool threshold in
  the format:

> **"Cool threshold: {coolThresholdSum}"**

- On the following line, **print the** **count of all emojis** found in
  the text in the format:

> "{countOfAllEmojis} emojis found in the text. The cool ones are:
>
> {cool emoji 1}
>
> {cool emoji 2}
>
> …
>
> {cool emoji N}"

### Constraints

There will always be at least one digit in the text!

### Examples

<table>
<colgroup>
<col style="width: 65%" />
<col style="width: 34%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td>(["In the Sofia Zoo there are <mark>311</mark> animals in total!
<mark>::Smiley::</mark> This includes <mark>3</mark>
<mark>**Tigers**</mark>, <mark>1</mark> <mark>::Elephant:</mark>,
<mark>12</mark> <mark>**Monk3ys**</mark>, a <mark>**Gorilla::</mark>,
<mark>5</mark> <mark>::fox:es:</mark> and <mark>21</mark> different
types of <mark>:Snak::Es::</mark>. <mark>::Mooning::</mark>
<mark>**Shy**</mark>"])</td>
<td><p>Cool threshold: <mark>540</mark></p>
<p><mark>4</mark> emojis found in the text. The cool ones are:</p>
<p><mark>::Smiley::</mark></p>
<p><mark>**Tigers**</mark></p>
<p><mark>::Mooning::</mark></p></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td>(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has
begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])</td>
<td><p>Cool threshold: 120</p>
<p>4 emojis found in the text. The cool ones are:</p>
<p>::Joy::</p>
<p>**Banana**</p>
<p>::Wink::</p>
<p>**Vali**</p></td>
</tr>
<tr class="odd">
<td>(["It is a long established fact that 1 a reader will be distracted
by 9 the readable content of a page when looking at its layout. The
point of using <mark>::LoremIpsum::</mark> is that it has a more-or-less
normal 3 distribution of 8 letters, as opposed to using 'Content here,
content 99 here', making it look like readable
<mark>**English**</mark>."])</td>
<td><p>Cool threshold: 17496</p>
<p>1 emojis found in the text. The cool ones are:</p></td>
</tr>
</tbody>
</table>

## Problem 3 - P!rates

*Anno 1681. The Caribbean. The golden age of piracy. You are a
well-known pirate captain by the name of Jack Daniels. Together with
your comrades Jim (Beam) and Johnny (Walker), you have been roaming the
seas, looking for gold and treasure… and the occasional killing, of
course. Go ahead, target some wealthy settlements and show them the
pirate's way!*

Until the **"Sail"** command is given, you will be receiving:

- You and your crew have targeted **cities**, with their **population**
  and **gold**, separated by **"\|\|"**.

- If you receive a city that has already been received, you have to
  increase the population and gold with the given values.

After the **"Sail"** command, you will start receiving lines of text
representing events until the **"End"** command is given.

Events will be in the following format:

- "Plunder=\>{town}=\>{people}=\>{gold}"

  - You have successfully attacked and plundered the town, killing the
    given number of people and stealing the respective amount of gold.

  - For every town you attack print this message: **"{town} plundered!
    {gold} gold stolen, {people} citizens killed."**

  - If any of those two values (population or gold) **reaches zero**,
    the town is disbanded.

    - You need to **remove it** from your collection of targeted cities
      and print the following message: **"{town} has been wiped off the
      map!"**

  - There will be no case of receiving more people or gold than there is
    in the city.

- "Prosper=\>{town}=\>{gold}"

  - There has been dramatic economic growth in the given city**,
    increasing its treasury** by the given amount of gold.

  - The gold amount **can be a negative number, so be careful.** If a
    negative amount of gold is given, print: **"Gold added cannot be a
    negative number!" and ignore the command.**

  - If the given gold is a valid amount, increase the town's gold
    reserves by the respective amount and print the following message:

**"{gold added} gold added to the city treasury. {town} now has {total
gold} gold."**

### Input

- On the first lines, until the **"Sail"** command, you will be
  receiving strings representing the cities with their gold and
  population, separated by **"\|\|"**.

- On the following lines, until the **"End"** command, you will be
  receiving strings representing the actions described above, separated
  by **"=\>"**.

### Output

- After receiving the **"End"** command, if there are any existing
  settlements on your list of targets, you need to print all of them, in
  the following format:

"Ahoy, Captain! There are {count} wealthy settlements to go to:

{town1} -\> Population: {people} citizens, Gold: {gold} kg

{town2} -\> Population: {people} citizens, Gold: {gold} kg

…

{town…n} -\> Population: {people} citizens, Gold: {gold} kg"

- If there are no settlements left to plunder, print:

"Ahoy, Captain! All targets have been plundered and destroyed!"

### Constraints

- The initial population and gold of the settlements will be valid
  32-bit integers, never negative, or exceed the respective limits.

- The town names in the events will always be valid towns that should be
  on your list.

### Examples

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 59%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["Tortuga||345000||1250",</p>
<p>"Santo Domingo||240000||630",</p>
<p>"Havana||410000||1100",</p>
<p>"Sail",</p>
<p>"Plunder=&gt;Tortuga=&gt;75000=&gt;380",</p>
<p>"Prosper=&gt;Santo Domingo=&gt;180",</p>
<p>"End"])</p></td>
<td><p>Tortuga plundered! 380 gold stolen, 75000 citizens killed.</p>
<p>180 gold added to the city treasury. Santo Domingo now has 810
gold.</p>
<p>Ahoy, Captain! There are 3 wealthy settlements to go to:</p>
<p>Tortuga -&gt; Population: 270000 citizens, Gold: 870 kg</p>
<p>Santo Domingo -&gt; Population: 240000 citizens, Gold: 810 kg</p>
<p>Havana -&gt; Population: 410000 citizens, Gold: 1100 kg</p></td>
</tr>
<tr class="odd">
<td><p>(["Nassau||95000||1000",</p>
<p>"San Juan||930000||1250",</p>
<p>"Campeche||270000||690",</p>
<p>"Port Royal||320000||1000",</p>
<p>"Port Royal||100000||2000",</p>
<p>"Sail",</p>
<p>"Prosper=&gt;Port Royal=&gt;-200",</p>
<p>"Plunder=&gt;Nassau=&gt;94000=&gt;750",</p>
<p>"Plunder=&gt;Nassau=&gt;1000=&gt;150",</p>
<p>"Plunder=&gt;Campeche=&gt;150000=&gt;690",</p>
<p>"End"])</p></td>
<td><p>Gold added cannot be a negative number!</p>
<p>Nassau plundered! 750 gold stolen, 94000 citizens killed.</p>
<p>Nassau plundered! 150 gold stolen, 1000 citizens killed.</p>
<p>Nassau has been wiped off the map!</p>
<p>Campeche plundered! 690 gold stolen, 150000 citizens killed.</p>
<p>Campeche has been wiped off the map!</p>
<p>Ahoy, Captain! There are 2 wealthy settlements to go to:</p>
<p>San Juan -&gt; Population: 930000 citizens, Gold: 1250 kg</p>
<p>Port Royal -&gt; Population: 420000 citizens, Gold: 3000 kg</p></td>
</tr>
</tbody>
</table>
