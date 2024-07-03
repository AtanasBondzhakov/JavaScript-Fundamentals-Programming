# Problem 1 - The Hunting Games

*A group of friends has decided to participate in a game. The first
stage of the game is to gather some supplies. They have a list, and your
job is to help them follow it and make the needed calculations.*

Write a program that calculates the needed provisions for a quest in the
woods.

First, you will receive **the days of the adventure**, **the count of
the players,** and the **group's energy**. Afterward, you will receive
**provisions for a day <u>for one person</u>**:

- **Water**

- **Food**

The group calculates how many supplies they'd need for the adventure and
takes that much water and food.

**Every day** they chop wood and **lose** **a certain amount of
energy**. For each of the days, you are going to receive the amount of
**energy lost** from chopping wood. The program should **end** if the
energy reaches **0** or **less**.

**Every second day** they **drink water**, which **boosts** their
**energy** with **5% of their <u>current energy</u>** and at the same
**time drops their water** **supplies** by **30% of their <u>current
water</u>.**

**Every** **third** day they **eat**, which **reduces their food
supplies (all food they have) by the following amount:**

**{currentFood} / {countOfPeople}** and at the same time **raises**
their group's **energy** by **10%**.

**The chopping of wood, the drinking of water, and the eating happen in
the order above.**

If they have **enough** **energy** to finish the quest, print the
following message:

"You are ready for the quest. You will be left with - {energyLevel}
energy!"

If they **run out of energy**, print the following message and the
**food** and **water** they were left with **before** they ran out of
energy:

"You will run out of energy. You will be left with {food} food and
{water} water."

### Input / Constraints

- **On the 1<sup>st</sup> line**, you will receive a number **N** - the
  days of the adventure – **an integer** in the range **\[1…100\].**

- **On the 2<sup>nd</sup> line** – the number of players – **an
  integer** in the range **\[1 – 1000\].**

- **On the 3<sup>rd</sup> line** - the group's energy – **a real
  number** in the range **\[1 - 50000\].**

- **On the 4<sup>th</sup> line** – water per day for one person – **a
  real number** **\[0.00 – 1000.00\].**

- **On the 5<sup>th</sup> line** – food per day for one person – **a
  real number** **\[0.00 – 1000.00\].**

- On the next **N** lines – one for each of the days – the amount of
  **energy loss**– **a real number** in the range **\[0.00 -
  1000.00\].**

- You will **always** have **enough** **food** and **water**.

## **Output**

- The final numbers should be **formatted** to the **second** **digit**
  after the decimal separator.

### Examples

The input will be provided as an array of strings.

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 62%" />
<col style="width: 0%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>(["10", "7", "5035.5",</p>
<p>"11.3", "7.2", "942.3",</p>
<p>"500.57", "520.68", "540.87", "505.99", "630.3", "784.20", "321.21",
"456.8", "330"])</p></td>
<td>You are ready for the quest. You will be left with - 658.72
energy!</td>
<td></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td colspan="2"><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><p>(["12", "6", "4430",</p>
<p>"9.8", "5.5", "620.3",</p>
<p>"840.2", "960.1", "220",</p>
<p>"340", "674", "365",</p>
<p>"345.5", "212", "412.12",</p>
<p>"258", "496"])</p></td>
<td colspan="2">You will run out of energy. You will be left with 229.17
food and 118.59 water.</td>
</tr>
</tbody>
</table>

# Problem 2 - Tax Calculator

*The National Revenue Agency hired you to create software, which will
help them to calculate the vehicle taxes.*

You will be given **a string representing vehicles that will be taxed**.
Each vehicle is separated by **"\>\>",** where the first element is a
string representing the **car type**, the second element is an integer
representing the **years the tax should be paid**, and the third element
is an integer representing the **kilometers** traveled.

There are three valid types of vehicles:

- **"family" –** the initial tax for a family car is **50 euros**

- **"** **heavyDuty" –** the initial tax for a heavy-duty is **80
  euros**

- **"sports" –** the initial tax for a sports car is **100 euros**

If the car is not valid print **"Invalid car type."** and continue to
the next vehicle.

When calculating tax keep in mind the following rules:

- For a **family** car, the tax declines by **5 euros** for every year
  in use. Also, the tax increases by **12 euros** for every **3000 km.**
  traveled.

- For a **heavyDuty** car, the tax declines by **8 euros** for every
  year in use. Also, the tax increases by **14 euros** for every **9000
  km.** traveled.

- For a **sports** car, the tax declines by **9 euros** for every year
  in use. Also, the tax increase by **18 euros** for every **2000 km.**
  Traveled.

### Input

You receive a **string** representing the vehicles, separated with
"**\>\>"**:
**"vehicle<sub>1</sub>\>\>vehicle<sub>2</sub>\>\>vehicle<sub>3</sub>…"**.

### Output

- Upon every successful taxed car print: **"A {car type} car will pay
  {total tax to pay} euros in taxes."** Format the **total tax to pay**
  to the **second** digit after the decimal point.

<!-- -->

- On the last line, print how much the National Revenue Agency will
  collect: **"The National Revenue Agency will collect {total tax
  collected} euros in taxes."** Formatted to the **second digit** after
  the decimal point.

**Examples**

The input will be an array with a **string**.

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
<td>([ 'family 3 7210&gt;&gt;van 4 2345&gt;&gt;heavyDuty 9
31000&gt;&gt;sports 4 7410' ])</td>
<td><p>A family car will pay 59.00 euros in taxes.</p>
<p>Invalid car type.</p>
<p>A heavyDuty car will pay 50.00 euros in taxes.</p>
<p>A sports car will pay 118.00 euros in taxes.</p>
<p>The National Revenue Agency will collect 227.00 euros in
taxes.</p></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td>([ 'family 5 3210&gt;&gt;pickUp 1 1345&gt;&gt;heavyDuty 7
21000&gt;&gt;sports 5 9410&gt;&gt;family 3 9012' ])</td>
<td><p>A family car will pay 37.00 euros in taxes.</p>
<p>Invalid car type.</p>
<p>A heavyDuty car will pay 52.00 euros in taxes.</p>
<p>A sports car will pay 127.00 euros in taxes.</p>
<p>A family car will pay 71.00 euros in taxes.</p>
<p>The National Revenue Agency will collect 287.00 euros in
taxes.</p></td>
</tr>
</tbody>
</table>

# Problem 3 - Phone Shop

*Kevin has a phone shop. He has to order new models, but his storage is
so large that he doesn't know which phone models he has.*

Write a program that will help Kevin not to buy unnecessary phones. You
will receive a list of phones separated by  
**", "** (comma and space). After that, until you receive **"End"**, you
will receive different commands, each on a new line. The commands are:

- **"****Add - {phone}"**:

  - Add the given phone to the storage.

  - If the phone already **exists**, you should **skip** this line.

- **"****Remove - {phone}"**:

  - Remove the phone from the storage **if it exists**.

  - Otherwise, **ignore** the command.

- **"****Bonus phone - {oldPhone}:{newPhone}"**:

  - If the **old phone exists**, **add** the new phone **after** the
    **old one**.

  - Otherwise, **ignore** the command.

- **"****Last - {phone}"**:

  - If the given **phone exists**, you should change its position and
    **put it last** in your storage.

  - Otherwise, **ignore** the command.

### Input

- On the **first** **line** - list of phones separated by **", "**
  (comma and space)

- On the **next lines** - commands until you receive **"End"**

### Output

- After receiving the **"End"** command, print the phones in your
  storage, separated by **", "** (comma and space).

### Examples

The input will be an array of strings.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>(["SamsungA50, MotorolaG5, IphoneSE",<br />
"Add - Iphone10",</p>
<p>"Remove - IphoneSE",</p>
<p>"End"])</p></td>
<td>SamsungA50, MotorolaG5, Iphone10</td>
</tr>
<tr class="even">
<td><p>(["HuaweiP20, XiaomiNote",</p>
<p>"Remove - Samsung",</p>
<p>"Bonus phone - XiaomiNote:Iphone5",</p>
<p>"End"])</p></td>
<td>HuaweiP20, XiaomiNote, Iphone5</td>
</tr>
<tr class="odd">
<td><p>(["SamsungA50, MotorolaG5, HuaweiP10",</p>
<p>"Last - SamsungA50",</p>
<p>"Add - MotorolaG5",</p>
<p>"End"])</p></td>
<td>MotorolaG5, HuaweiP10, SamsungA50</td>
</tr>
</tbody>
</table>
