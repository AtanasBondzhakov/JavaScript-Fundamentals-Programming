# Problem 1 - Black Flag 

*Pirates are invading the sea, and you're tasked to help them plunder*

Create a program that checks if **target plunder** is **reached**.
First, you will receive how many **days** the pirating lasts. Then you
will receive how much the pirates **plunder for a day**. Last you will
receive the **expected plunder** at the end.

Calculate how much **plunder** the pirates manage to **gather**. Each
**day** they gather the **plunder**. Keep in mind that they attack more
ships every third day and add additional plunder to their total gain,
which is **50% of the daily plunder**. Every **fifth day** the pirates
encounter a warship, and after the battle, they **lose 30%** of their
**total plunder**.

If the gained plunder is **more or equal** to the target, print the
following:

**"Ahoy! {totalPlunder} plunder gained."**

If the gained plunder is **less** than the target. Calculate the
**percentage left** and print the following:

**"Collected only {percentage}% of the plunder."**

Both numbers should be **formatted** to the **2<sup>nd</sup> decimal
place**.

## Input

- On the **1<sup>st</sup> line,** you will receive the **days** of the
  plunder – an **integer number** in the range **\[0…100000\]**.

- On the **2<sup>nd</sup> line,** you will receive the **daily plunder**
  – an **integer number** in the range **\[0…50\]**.

- On the **3<sup>rd</sup> line,** you will receive the **expected
  plunder** – a **real number** in the range **\[0.0…10000.0\]**.

## Output

- In the end, print whether the plunder **was successful** or **not,**
  following the format **described above**.

## Examples

<table>
<colgroup>
<col style="width: 37%" />
<col style="width: 62%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: center;">(["5",<br />
"40",<br />
"100"])</td>
<td style="text-align: center;">Ahoy! 154.00 plunder gained.</td>
</tr>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: center;"><p>(["10",</p>
<p>"20",</p>
<p>"380"])</p></td>
<td style="text-align: center;">Collected only 36.29% of the
plunder.</td>
</tr>
</tbody>
</table>

# Problem 2 - Treasure Hunt

*The pirates need to carry a treasure chest safely back to the ship,
looting along the way.*

Create a program that **manages** the **state** of the **treasure
chest** along the way. On the **first line,** you will receive the
**initial loot** of the treasure chest, which is a **string** of
**items** separated by a **"\|"**.

**"{loot<sub>1</sub>}\|{loot<sub>2</sub>}\|{loot<sub>3</sub>} …
{loot<sub>n</sub>}"**

The following lines represent commands **until** **"Yohoho!"** which
ends the treasure hunt:

- **"Loot {item<sub>1</sub>} {item<sub>2</sub>}…{item<sub>n</sub>}"**:

  - Pick up treasure loot along the way. Insert the items at the
    **beginning** of the chest.

  - If an item is **already** contained, **don't** insert it.

- **"Drop {index}"**:

  - **Remove** the loot at the given **position** and **add** it at the
    **end** of the treasure chest.

  - If the index is **invalid,** skip the command.

- **"Steal {count}"**:

  - Someone steals the **last count** of loot items. If there are
    **fewer items** than the given count, **remove as many** as there
    are.

  - Print the stolen items separated by **", "**:

**"{item<sub>1</sub>}, {item<sub>2</sub>}, {item<sub>3</sub>} …
{item<sub>n</sub>}"**

In the end, output the **average treasure gain,** which is the **sum**
of all treasure items' **length** divided by the **count** of all items
inside the chest **formatted** to the **second decimal** point:

**"Average treasure gain: {averageGain} pirate credits."**

If the chest is **empty,** print the following message:

**"Failed treasure hunt."**

## Input

- On the **1<sup>st</sup> line,** you are going to receive the **initial
  treasure chest** (**loot** separated by **"\|"**).

- On the following **lines**, until **"Yohoho!"**, you will be receiving
  commands.

## Output

- Print the output in the **format** **described** **above**.

## Constraints

- The **loot items** will be strings containing any ASCII code.

- The **indexes** will be integers in the range \[**-200**…**200**\]

- The **count** will be an integer in the range \[**1**….**100**\]

## Examples

<table>
<colgroup>
<col style="width: 45%" />
<col style="width: 54%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td
style="text-align: center;"><p>(["Gold|Silver|Bronze|Medallion|Cup",</p>
<p>"Loot Wood Gold Coins",</p>
<p>"Loot Silver Pistol",</p>
<p>"Drop 3",</p>
<p>"Steal 3",</p>
<p>"Yohoho!"])</p></td>
<td style="text-align: center;"><p>Medallion, Cup, Gold</p>
<p>Average treasure gain: 5.40 pirate credits.</p></td>
</tr>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: center;"><p>(["Diamonds|Silver|Shotgun|Gold",</p>
<p>"Loot Silver Medals Coal",</p>
<p>"Drop -1",</p>
<p>"Drop 1",</p>
<p>"Steal 6",</p>
<p>"Yohoho!"])</p></td>
<td style="text-align: center;"><p>Coal, Diamonds, Silver, Shotgun,
Gold, Medals</p>
<p>Failed treasure hunt.</p></td>
</tr>
</tbody>
</table>

# Problem 3 - Man-O-War

*The pirates encounter a huge Man-O-War at sea.*

Create a program that **tracks** the **battle** and either chooses a
**winner** or prints a **stalemate**. On the **first line,** you will
receive the **status** of the **pirate ship**, which is a **string**
representing **integer sections** separated by **"\>"**. On **the second
line,** you will receive the **same** type of status, but for the
**warship**:

**"{section<sub>1</sub>}\>{section<sub>2</sub>}\>{section<sub>3</sub>}…
{section<sub>n</sub>}"**

On the **third line,** you will receive the **maximum health capacity**
a section of the ship can reach.

The following lines represent commands **until** **"Retire"**:

- **"Fire {index} {damage}"** - the pirate ship **attacks** the warship
  with the **given damage** at that section. Check if the **index is
  valid** and if not, **skip** the command. If the section **breaks**
  (health \<= 0) the warship **sinks**, print the following and **stop**
  the program: **"You won! The enemy ship has sunken."**

- **"Defend {startIndex} {endIndex} {damage}"** - the warship
  **attacks** the pirate ship with the **given damage** at that
  **range** (**indexes are inclusive)**. Check if both **indexes are
  valid** and if not, **skip** the command. If the section **breaks**
  (health \<= 0) the pirate ship **sinks**, print the following and
  **stop** the program:

**"You lost! The pirate ship has sunken."**

- **"Repair {index} {health}"** - the crew **repairs** a section of the
  **pirate ship** with the **given health**. Check if the **index is
  valid** and if not, **skip** the command. The health of the section
  **cannot** exceed the **maximum health capacity**.

- **"Status"** - prints the **count** of all sections of the **pirate
  ship** that need repair soon, which are all sections that are **lower
  than 20%** of the **maximum** **health capacity**. Print the
  following:

**"{count} sections need repair."**

In the end, if a **stalemate** occurs, print the **status** of **both**
ships, which is the **sum** of their individual sections, in the
following format:

**"Pirate ship status: {pirateShipSum}**

**Warship status: {warshipSum}"**

## Input

- On the **1<sup>st</sup> line,** you are going to receive the
  **status** of the **pirate ship** (**integers** separated by
  **'\>'**).

- On the **2<sup>nd</sup> line,** you are going to receive the
  **status** of the **warship.**

- On the **3<sup>rd</sup> line,** you will receive the **maximum
  health** a section of a ship can reach.

- On the following **lines**, until **"Retire"**, you will be receiving
  commands.

## Output

- Print the output in the **format** **described** **above**.

## Constraints

- The **section numbers** will be integers in the range
  \[**1**….**1000**\].

- The **indexes** will be integers \[**-200**….**200**\].

- The **damage** will be an integer in the range \[**1**….**1000**\].

- The **health** will be an integer in the range \[**1**….**1000**\].

## Examples

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: center;"><p>(["12&gt;13&gt;11&gt;20&gt;66",</p>
<p>"12&gt;22&gt;33&gt;44&gt;55&gt;32&gt;18",</p>
<p>"70",</p>
<p>"Fire 2 11",</p>
<p>"Fire 8 100",</p>
<p>"Defend 3 6 11",</p>
<p>"Defend 0 3 5",</p>
<p>"Repair 1 33",</p>
<p>"Status",</p>
<p>"Retire"])</p></td>
<td style="text-align: center;"><p>2 sections need repair.</p>
<p>Pirate ship status: 135</p>
<p>Warship status: 205</p></td>
</tr>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: center;"><p>(["2&gt;3&gt;4&gt;5&gt;2",</p>
<p>"6&gt;7&gt;8&gt;9&gt;10&gt;11",</p>
<p>"20",</p>
<p>"Status",</p>
<p>"Fire 2 3",</p>
<p>"Defend 0 4 11",</p>
<p>"Repair 3 18",</p>
<p>"Retire"])</p></td>
<td style="text-align: center;"><p>3 sections need repair.</p>
<p>You lost! The pirate ship has sunken.</p></td>
</tr>
</tbody>
</table>
