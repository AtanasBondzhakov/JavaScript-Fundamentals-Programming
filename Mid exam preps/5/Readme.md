**Problem 1 - Bonus Scoring System**

Create a program that calculates **bonus points** for each **student**
enrolled in a course. On the **first** line, you are going to receive
**the number of students**. On the **second** line, you will receive
**the total number of lectures** in the course. The course has **an
additional bonus**, which you will receive **on the third line**. On the
following lines, you will be receiving the **count of attendances**
**for each student**.

The bonus is calculated with the following **formula**:

**{total bonus} = {student attendances} / {course lectures} \* (5 +
{additional bonus})**

Find the student with the **maximum bonus** and print them, along with
**his attendance,** in the following format:

**"Max Bonus: {max bonus points}."**

**"The student has attended {student attendances} lectures."**

Round the bonus points at the end to **the nearest larger number**.

### Input / Constraints

- On the **first line,** you are going to receive the **number of the
  students** – an integer in the range **\[0…50\]**.

- On the **second line,** you will receive the **number of the
  lectures** – an integer number in the range **\[0...50\]**.

- On the **third line**, you will receive **the additional bonus** – an
  integer number in the range **\[0….100\]**.

- **On the following lines**, you will be receiving the **attendance of
  each student**.

- There will **never** be **students with equal bonuses**.

### Output

- Print the **maximum bonus points** and the **attendance** of the given
  student, **rounded** to the nearest **larger** number, scored by a
  student in this course in the format described above.

### Example

<table>
<colgroup>
<col style="width: 45%" />
<col style="width: 54%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'5', '25', '30',</p>
<p>'12', '19', '24',</p>
<p>'16', '20'</p>
<p>]</p></td>
<td style="text-align: left;"><p>Max Bonus: 34.</p>
<p>The student has attended 24 lectures.</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'10', '30', '14', '8',</p>
<p>'23', '27', '28', '15',</p>
<p>'17', '25', '26', '5',</p>
<p>'18'</p>
<p>]</p></td>
<td style="text-align: left;"><p>Max Bonus: 18.</p>
<p>The student has attended 28 lectures.</p></td>
</tr>
</tbody>
</table>

# Problem 2. Mu Online

You have **initial health 100 and initial bitcoins 0**. You will be
given **a string representing the dungeon's rooms**. Each room is
separated with **'\|'** (vertical bar): **"room1\|room2\|room3…"**

Each room contains **a command** and a **number**, separated by space.
The command can be:

- **"potion"**

  - You are healed with the number in the second part. But your health
    **cannot exceed** your **initial health (100)**.

  - First print: **"You healed for {amount} hp."**

  - After that, print your current health: **"Current health: {health}
    hp."**

- **"chest"**

  - You've found some bitcoins, the number in the second part.

  - Print: **"You found {amount} bitcoins."**

- In **any other case,** you are **facing a monster**, which you will
  **fight**. The **second part of the room** contains the **attack** of
  the monster. You should remove the monster's attack from your health.

  - If you are not dead (health \<= 0), you've slain the monster, and
    you should print: **"You slayed {monster}."**

  - If you've died, print **"You died! Killed by {monster}."** and your
    quest is over. Print the best room you've managed to reach: **"Best
    room: {room}"**

If you managed to **go through all the rooms** in the dungeon, print on
the **following three lines**:

**"You've made it!**

**Bitcoins: {bitcoins}**

**Health: {health}"**

### Input / Constraints

You receive a **string** representing the dungeon's rooms, separated
with **'\|'** (vertical bar): **"room1\|room2\|room3…"**.

### Output

Print the corresponding messages described above.

### Input / Output

<table>
<colgroup>
<col style="width: 55%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">"rat 10|bat 20|potion 10|rat 10|chest
100|boss 70|chest 1000"</td>
<td style="text-align: left;"><p>You slayed rat.</p>
<p>You slayed bat.</p>
<p>You healed for 10 hp.</p>
<p>Current health: 80 hp.</p>
<p>You slayed rat.</p>
<p>You found 100 bitcoins.</p>
<p>You died! Killed by boss.</p>
<p>Best room: 6</p></td>
</tr>
<tr>
<td style="text-align: left;">"cat 10|potion 30|orc 10|chest 10|snake
25|chest 110"</td>
<td style="text-align: left;"><p>You slayed cat.</p>
<p>You healed for 10 hp.</p>
<p>Current health: 100 hp.</p>
<p>You slayed orc.</p>
<p>You found 10 bitcoins.</p>
<p>You slayed snake.</p>
<p>You found 110 bitcoins.</p>
<p>You've made it!</p>
<p>Bitcoins: 120</p>
<p>Health: 65</p></td>
</tr>
</tbody>
</table>

# Problem 3. Inventory

*As a young traveler, you gather items and craft new items.*

### Input / Constraints

You will receive a journal with some collecting items, separated with a
comma and a space (**", "**). After that, until receiving **"Craft!"**
you will be receiving different commands split by **" - "**:

1.  **"Collect - {item}"** - you should add the given item to your
    inventory. If the item already **exists**, you should **skip** this
    line.

2.  **"Drop - {item}"** - you should remove the item from your inventory
    **if it exists**.

3.  **"Combine Items - {old_item}:{new_item}"** - you should check if
    the **old item exists**. If so, **add** the new item **after** the
    **old one**. Otherwise, **ignore** the command.

4.  **"Renew – {item}"** – if the given item exists, you should change
    its position and **put it last** in your inventory.

### Output

After receiving **"Craft!"** print the items in your inventory,
separated by **", "**.

### Examples

<table>
<colgroup>
<col style="width: 41%" />
<col style="width: 58%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'Iron, Wood, Sword',</p>
<p>'Collect - Gold',</p>
<p>'Drop - Wood',</p>
<p>'Craft!'</p>
<p>]</p></td>
<td style="text-align: left;">Iron, Sword, Gold</td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'Iron, Sword',</p>
<p>'Drop - Bronze',</p>
<p>'Combine Items - Sword:Bow',</p>
<p>'Renew - Iron',</p>
<p>'Craft!'</p>
<p>]</p></td>
<td style="text-align: left;">Sword, Bow, Iron</td>
</tr>
</tbody>
</table>
