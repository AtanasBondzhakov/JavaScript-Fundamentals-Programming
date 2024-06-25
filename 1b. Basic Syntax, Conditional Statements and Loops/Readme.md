# Exercise: JS Basic Syntax, Conditional Statements, and Loops

Submit your solutions in the SoftUni judge system at:
<https://judge.softuni.org/Contests/1207>

## Ages

Write a function that determines whether based on the given **age** a
person is: **baby**, **child**, **teenager**, **adult**, **elder**.

The input comes as a **single number parameter**. The bounders are:

**0-2 (age) – is a baby;**

**3-13 (age) – is a child;**

**14-19 (age) – is a teenager;**

**20-65 (age) – is an adult;**

**\>=66 (age) – is an elder;**

In all other cases print **–** "**out of bounds**";

The **output** should be printed to the console.

### Examples

| **Input** | **Output**    |
|-----------|---------------|
| 20        | adult         |
| 1         | baby          |
| 100       | elder         |
| -1        | out of bounds |

2.  **Rounding**

Write a JS function that rounds numbers to a specific precision.

The **input** comes as **two numbers**. The first value is the number to
be rounded and the second is the precision (significant decimal places).
If the passed **precision** is more than **15**, it should automatically
be reduced to **15**.

Remove trailing zeroes, if any (you can use **parseFloat (number)**)

The **output** should be printed to the console. Do not print
insignificant decimals.

**Examples**

| **Input**                           | **Output** |     | **Input** | **Output** |
|-------------------------------------|------------|-----|-----------|------------|
| 3.1415926535897932384626433832795,2 | 3.14       |     | 10.5,3    | 10.5       |

## Division

You will be given a number and you have to check whether that number is
divisible by any of the following numbers**: 2, 3, 6, 7**, and **10.**
You should **always take the bigger division**.

If the number is divisible by both **2** and **3** it is also divisible
by **6** and you should print only the division by 6. If a number is
divisible by **2** it is sometimes also divisible by **10** and you
should print the division by 10.

If the number is not divisible by any of the given numbers print: "**Not
divisible".** Otherwise, print: "**The number is divisible by
{number}"**.

### Examples

| **Input** | **Output**                    |
|-----------|-------------------------------|
| 30        | The number is divisible by 10 |
| 15        | The number is divisible by 3  |
| 12        | The number is divisible by 6  |
| 1643      | Not divisible                 |

## Vacation

You are given a **group of people**, the **type of the group**, and the
**day of the week** they are going to stay. Based on that information
calculate how much they have to pay and print that price on the console.
Use the table below. In each cell is the price for a **single person**.

The output should look like that: **\`Total price: {price}\`**. The
**price** should be **formatted** to the second decimal point.

|              | **Friday** | **Saturday** | **Sunday** |
|:------------:|:----------:|:------------:|:----------:|
| **Students** |    8.45    |     9.80     |   10.46    |
| **Business** |   10.90    |    15.60     |     16     |
| **Regular**  |     15     |      20      |   22.50    |

There are also discounts based on some conditions:

- **Students –** if the group is bigger than or equal to 30 people you
  should reduce the **total** price by 15%

- **Business –** if the group is bigger than or equal to 100 people
  **10** of them can stay **for free**

- **Regular –** if the group is bigger than or equal to 10 and less than
  or equal to 20 reduce the total price by 5%

> **Note: You should reduce the prices in that EXACT order.**

### Examples

<table>
<colgroup>
<col style="width: 46%" />
<col style="width: 53%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>30,</p>
<p>"Students",</p>
<p>"Sunday"</p></td>
<td>Total price: 266.73</td>
</tr>
<tr>
<td><p>40,</p>
<p>"Regular",</p>
<p>"Saturday"</p></td>
<td>Total price: 800.00</td>
</tr>
</tbody>
</table>

## Leap Year

Write a JS function to check whether a year is a leap. Leap years are
either divisible by 4 but not by 100 or are divisible by 400. The
**output** should be following:

- If the year is a leap, print: "**yes**"

- Otherwise, print: "**no**"

### Examples

| **Input** | **Output** |
|-----------|------------|
| 1984      | yes        |
| 2003      | no         |
| 4         | yes        |

## Print and Sum

Write a function that displays numbers from **given start** to given
**end** and their **sum**. The input comes as **two number parameters**.
Print the result like the examples below:

### Examples

<table>
<colgroup>
<col style="width: 24%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>5, 10</td>
<td><p>5 6 7 8 9 10</p>
<p>Sum: 45</p></td>
</tr>
<tr>
<td>0, 26</td>
<td><p>0 1 2 … 26</p>
<p>Sum: 351</p></td>
</tr>
<tr>
<td>50, 60</td>
<td><p>50 51 52 53 54 55 56 57 58 59 60</p>
<p>Sum: 605</p></td>
</tr>
</tbody>
</table>

## Triangle of Numbers

Write a function, which receives a **single number** – **n**, and prints
a triangle from **1 to n** as in the examples.

### Constraints

**n** will be in the interval \[**1...20\]**.

### Examples

<table style="width:100%;">
<colgroup>
<col style="width: 11%" />
<col style="width: 13%" />
<col style="width: 4%" />
<col style="width: 11%" />
<col style="width: 19%" />
<col style="width: 4%" />
<col style="width: 11%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
<th rowspan="2"></th>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
<th rowspan="2"></th>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
<tr>
<th>3</th>
<th><p>1</p>
<p>2 2</p>
<p>3 3 3</p></th>
<th>5</th>
<th><p>1</p>
<p>2 2</p>
<p>3 3 3</p>
<p>4 4 4 4</p>
<p>5 5 5 5 5</p></th>
<th>6</th>
<th><p>1</p>
<p>2 2</p>
<p>3 3 3</p>
<p>4 4 4 4</p>
<p>5 5 5 5 5</p>
<p>6 6 6 6 6 6</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Multiplication Table

You will receive a **number** as a parameter. Print the **10 times
table** for this **number**. See the examples below for more
information.

### Output

Print every row of the table in the following format:

{number} X {times} = {product}

### Constraints

The number will be an **integer** will be in the interval **\[1…100\].**

### Examples

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 27%" />
<col style="width: 11%" />
<col style="width: 17%" />
<col style="width: 27%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
<th></th>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>5</td>
<td><p>5 X 1 = 5</p>
<p>5 X 2 = 10</p>
<p>5 X 3 = 15</p>
<p>5 X 4 = 20</p>
<p>5 X 5 = 25</p>
<p>5 X 6 = 30</p>
<p>5 X 7 = 35</p>
<p>5 X 8 = 40</p>
<p>5 X 9 = 45</p>
<p>5 X 10 = 50</p></td>
<td></td>
<td>2</td>
<td><p>2 X 1 = 2</p>
<p>2 X 2 = 4</p>
<p>2 X 3 = 6</p>
<p>2 X 4 = 8</p>
<p>2 X 5 = 10</p>
<p>2 X 6 = 12</p>
<p>2 X 7 = 14</p>
<p>2 X 8 = 16</p>
<p>2 X 9 = 18</p>
<p>2 X 10 = 20</p></td>
</tr>
</tbody>
</table>

## \* Login

You will be given a string representing a username. The correct
**password** will be that username **reversed**. Until you receive the
correct password print on the console: "**Incorrect password. Try
again.**". When you receive the correct password print: "**User
{username} logged in.**"

However, on the fourth try if the password is still not correct print:
"**User {username} blocked!**" and end the program.

The input comes as an **array of strings** - the first string represents
username and **each** subsequent string is a password.

### Examples

<table>
<colgroup>
<col style="width: 57%" />
<col style="width: 42%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>['Acer','login','go','let me in','recA']</td>
<td><p>Incorrect password. Try again.</p>
<p>Incorrect password. Try again.</p>
<p>Incorrect password. Try again.</p>
<p>User Acer logged in.</p></td>
</tr>
<tr>
<td>['momo','omom']</td>
<td>User momo logged in.</td>
</tr>
<tr>
<td>['sunny','rainy','cloudy','sunny','not sunny']</td>
<td><p>Incorrect password. Try again.</p>
<p>Incorrect password. Try again.</p>
<p>Incorrect password. Try again.</p>
<p>User sunny blocked!</p></td>
</tr>
</tbody>
</table>

**\* The Pyramid of King Djoser**

Write a JS program that calculates how much resources will be required
for the construction of a pyramid. It is made out of **stone**,
**marble**, **lapis lazuli,** and **gold**. Your program will receive an
integer that will be the **base** width and length of the pyramid and an
**increment** that is the height of each step. The bulk is made out of
stone, while the **outer layer** is made out of marble. **Every fifth
step<span dir="rtl">’</span>s** outer layer is made out of lapis lazuli
**instead** of marble. The **final step** is made out of gold.

The pyramid is built with **1x1 blocks** with a **height** equal to the
given **increment**. The first step of the pyramid has a **width** and
**length** equal to the given **base** and every next step is **reduced
by 2 blocks** (1 from each side). The height of every step equals the
given **increment**. See the drawing for an example. White steps are
covered in marble, blue steps are covered in lapis lazuli (**every fifth
layer from the bottom**), and yellow steps are made **entirely** out of
gold (**top-most step**).

<img src="media/image1.png" style="width:6.49986in;height:1.18978in"
alt="Picture 5" />

Since the **outer layer** of each step is made of decorative material,
to calculate the required stone for one step, reduce the width and
length by 2 blocks (one from each side), find its area, and multiply it
by the increment. The rest of the step is made out of lapis lazuli for
every fifth step from the bottom and marble for all other steps. To find
the amount needed, you may, for example, find its perimeter and reduce
it by 4 (to compensate for the overlapping corners), and multiply the
result by the increment. See the drawing for details (grey is stone,
white is decoration).

<table>
<colgroup>
<col style="width: 31%" />
<col style="width: 33%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><img src="media/image2.png"
style="width:1.31806in;height:1.35625in" alt="Picture 8" /></th>
<th style="text-align: left;"><img src="media/image3.png"
style="width:1.72708in;height:1.75764in" alt="Picture 9" /></th>
<th style="text-align: left;"><img src="media/image4.png"
style="width:2.02292in;height:2.00764in" alt="Picture 10" /></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>5x5 step</p>
<p>Stone required – 9 x increment</p>
<p>Marble required– 16 x increment</p></td>
<td><p>7x7 step</p>
<p>Stone required – 25 x increment</p>
<p>Marble required – 24 x increment</p></td>
<td><p>8x8 step</p>
<p>Stone required – 36 x increment</p>
<p>Marble required – 28 x increment</p></td>
</tr>
</tbody>
</table>

**Note** the top-most layer is made entirely out of gold, with a height
equal to the given increment. See the examples for complete
calculations.

### Input

You will receive two **number** parameters **base** and **increment**.

### Output

Print on the **console** on separate lines the **total** required
**amounts** of each material **rounded up** and the **final height** of
the pyramid **rounded down**, as shown in the examples.

### Constraints

The **base** will always be an integer greater than zero

The **increment** will always be a number greater than zero

**Number.MAX_SAFE_INTEGER** will **never be exceeded** for any of the
calculations

### Examples

<table>
<colgroup>
<col style="width: 7%" />
<col style="width: 31%" />
<col style="width: 6%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
<th colspan="6"
style="text-align: center;"><strong>Explanation</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="8"><p>11,</p>
<p>1</p></td>
<td rowspan="8"><p>Stone required: 165</p>
<p>Marble required: 112</p>
<p>Lapis Lazuli required: 8</p>
<p>Gold required: 1</p>
<p>Final pyramid height: 6</p></td>
<td style="text-align: center;">Step</td>
<td style="text-align: center;">Size</td>
<td style="text-align: center;">Stone</td>
<td style="text-align: center;">Marble</td>
<td style="text-align: center;">Lapis</td>
<td style="text-align: center;">Gold</td>
</tr>
<tr>
<td style="text-align: right;">1<sup>st</sup></td>
<td style="text-align: center;">11x11</td>
<td style="text-align: center;">81</td>
<td style="text-align: center;">40</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td style="text-align: right;">2<sup>nd</sup></td>
<td style="text-align: center;">9x9</td>
<td style="text-align: center;">49</td>
<td style="text-align: center;">32</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td style="text-align: right;">3<sup>rd</sup></td>
<td style="text-align: center;">7x7</td>
<td style="text-align: center;">25</td>
<td style="text-align: center;">24</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td style="text-align: right;">4<sup>th</sup></td>
<td style="text-align: center;">5x5</td>
<td style="text-align: center;">9</td>
<td style="text-align: center;">16</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td style="text-align: right;">5<sup>th</sup></td>
<td style="text-align: center;">3x3</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">8</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td style="text-align: right;">6<sup>th</sup></td>
<td style="text-align: center;">1x1</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: right;">total</td>
<td style="text-align: center;">Height=6</td>
<td style="text-align: center;">165</td>
<td style="text-align: center;">112</td>
<td style="text-align: center;">8</td>
<td style="text-align: center;">1</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 7%" />
<col style="width: 31%" />
<col style="width: 60%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
<th style="text-align: center;"><strong>Explanation</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>11,</p>
<p>0.75</p></td>
<td><p>Stone required: 124</p>
<p>Marble required: 84</p>
<p>Lapis Lazuli required: 6</p>
<p>Gold required: 1</p>
<p>Final pyramid height: 4</p></td>
<td><p>Total <strong>stone</strong> is
81*0.75+49*0.75+25*0.75+9*0.75+1*0.75 = 123.75, we round up to 124.</p>
<p>Total <strong>marble</strong> is
40*0.75+32*0.75+24*0.75+16*0.75=84.</p>
<p>Total <strong>lapis lazuli</strong> is 8*0.75=6.</p>
<p>Total <strong>gold</strong> is 1*0.75=0.75, we round up to 1.</p>
<p>Total <strong>height</strong> is 4.5 (6 <strong>steps</strong> times
0.75), we round down to 4.</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 35%" />
<col style="width: 7%" />
<col style="width: 10%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
<th rowspan="2"></th>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
<tr>
<th><p>12,</p>
<p>1</p></th>
<th><p>Stone required: 220</p>
<p>Marble required: 128</p>
<p>Lapis Lazuli required: 12</p>
<p>Gold required: 4</p>
<p>Final pyramid height: 6</p></th>
<th><p>23,</p>
<p>0.5</p></th>
<th><p>Stone required: 886</p>
<p>Marble required: 228</p>
<p>Lapis Lazuli required: 36</p>
<p>Gold required: 1</p>
<p>Final pyramid height: 6</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## \* Bitcoin "Mining"

Write a JavaScript program that calculates the **total amount** of
**bitcoins** you purchased with the gold you mined during your **shift**
at the mine. Your shift consists of a certain number of days where you
mine an amount of **gold** in **grams**. Your program will receive an
**array with the amount of gold** you mined **each day**, where the
**first day** of your **shift** is the **first index of the array**.
Also, someone was stealing **every third day** from the start of your
shift **30%** from the mined **gold** for **this day**. You need to
check, which day you have enough money to buy your **first**
**bitcoin.** For the different exchanges use these **prices**:

|  **1 Bitcoin**  | 11949.16 lv. |
|:---------------:|:------------:|
| **1 g of gold** |  67.51 lv.   |

### Input

You will receive an array of **numbers**, representing your **shift** at
the mine.

### Output

Print on the **console these lines in the following formats**:

**First-line** prints the **total** **amount** of bought **bitcoins**:

> **\`Bought bitcoins: {count}\`**

**Second-line** prints **which day** you **bought** your **first
bitcoin**:

> **\`Day of the first purchased bitcoin: {day}\`**

In case you **did not** **purchase any bitcoins,** do not print the
second line.

**Third-line** prints the **amount** of **money** that’s left after the
bitcoin purchases **rounded by the second digit** after the decimal
point:

> **\`Left money: {money} lv.\`**

### Constraints

The **input** array may contain up to **1,000** elements

The numbers in the array are in the range **\[0.01..5,000.00\]
inclusive**

Allowed time/memory: 100ms/16MB

### Examples

<table>
<colgroup>
<col style="width: 28%" />
<col style="width: 71%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">[100, 200, 300]</td>
<td><p>Bought bitcoins: 2</p>
<p>Day of the first purchased bitcoin: 2</p>
<p>Left money: 10531.78 lv.</p></td>
</tr>
</tbody>
</table>

Scroll down to see the explanation for the first example and more
examples.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Explanation</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><strong>Day 1</strong> – you dig up <strong>100 g</strong> of
gold then exchange it for <strong>6751.00 lv.</strong></p>
<p><strong>Day 2</strong> – you dig up <strong>200 g</strong> of gold
then exchange it for <strong>13,502.00 lv.</strong> and the total amount
of money is <strong>20,253.00 lv.</strong> Then you buy <strong>1
Bitcoin</strong> which leaves you with <strong>8,303.84 lv.</strong>
Also, this purchase is the <strong>first day you bought
bitcoin</strong>.</p>
<p><strong>Day 3</strong> – you dig up <strong>300 g</strong> of gold
but then <strong>30%</strong> of it is stolen and your gold drops to
<strong>210 g</strong> which you exchange for <strong>14,177.10
lv.</strong> making your total amount of money <strong>22,480.94
lv.</strong> Then you buy <strong>1 Bitcoin</strong> making the final
amount of money that you have <strong>left with</strong>
<strong>10,531.78 lv.</strong> with <strong>2 bought
Bitcoins.</strong></p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 28%" />
<col style="width: 1%" />
<col style="width: 14%" />
<col style="width: 42%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
<th rowspan="2"></th>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
<tr>
<th style="text-align: left;">[50, 100]</th>
<th><p>Bought bitcoins: 0</p>
<p>Money left: 10126.50 lv.</p></th>
<th style="text-align: left;">[3124.15, 504.212, 2511.124]</th>
<th><p>Bought bitcoins: 30</p>
<p>Day of the first purchased bitcoin: 1</p>
<p>Money left: 5144.11 lv.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>
