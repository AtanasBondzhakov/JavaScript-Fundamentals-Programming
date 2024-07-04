# Exercises Data Types and Variables

## Sum Digits

Write a **function**, which will be given a single **number**. Your task
is to find the **sum** of its digits.

### Examples

| **Input** | **Output** |
|:----------|:-----------|
| 245678    | 32         |
| 97561     | 28         |
| 543       | 12         |

## Chars to String

Write a **function**, which receives **3 parameters**. Each parameter is
a single character. Combine all the characters into **one** string and
print it on the console.

### Examples

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>'a',</p>
<p>'b',</p>
<p>'c'</p></td>
<td style="text-align: left;">abc</td>
</tr>
<tr>
<td style="text-align: left;"><p>'%',</p>
<p>'2',</p>
<p>'o'</p></td>
<td style="text-align: left;">%2o</td>
</tr>
<tr>
<td style="text-align: left;"><p>'1',</p>
<p>'5',</p>
<p>'p'</p></td>
<td style="text-align: left;">15p</td>
</tr>
</tbody>
</table>

## Town Info

You will be given **3 parameters**. The first parameter will be the name
of the **town** (string), the second – the **population** (number), and
the third the **area** (number). Print the result in the following
format:

"**Town {town name} has population of {population} and area {area}
square km.**"

### Examples

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 84%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>'Sofia',</p>
<p>1286383,</p>
<p>492</p></td>
<td style="text-align: left;">Town Sofia has population of 1286383 and
area 492 square km.</td>
</tr>
<tr>
<td style="text-align: left;"><p>'Plovdiv',</p>
<p>1481353,</p>
<p>512</p></td>
<td style="text-align: left;">Town Plovdiv has population of 1481353 and
area 512 square km.</td>
</tr>
</tbody>
</table>

## Convert Meters to Kilometres

You will be given a **number** that will be the distance in **meters**.
Write a program that converts **meters** to **kilometers** formatted to
the **second decimal** point.

### Examples

| **Input** | **Output** |
|:----------|:-----------|
| 1852      | 1.85       |
| 798       | 0.80       |

## Pounds to Dollars

Write a **function** that converts British **pounds** to **dollars**
formatted to the **3rd decimal point**.

- 1 British Pound = 1.31 Dollars

### Examples

| **Input** | **Output** |
|:----------|:-----------|
| 80        | 104.800    |
| 39        | 51.090     |

## Reversed Chars

Write a program that takes **3 parameters** (characters) and prints them
in **reversed order** with a space between them.

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
<td style="text-align: left;"><p>'A',</p>
<p>'B',</p>
<p>'C'</p></td>
<td style="text-align: left;">C B A</td>
</tr>
<tr>
<td style="text-align: left;"><p>'1',</p>
<p>'L',</p>
<p>'&amp;'</p></td>
<td style="text-align: left;">&amp; L 1</td>
</tr>
</tbody>
</table>

## Lower or Upper

Write a **function** that prints whether a given character is
**upper-case** or **lower-case**.

### Examples

| **Input** | **Output** |
|:----------|:-----------|
| 'L'       | upper-case |
| 'f'       | lower-case |

## \*Calculator

Write a **function** that receives 3 parameters: a **number**, an
**operator** (string), and **another number**.

The **operator** can be: **'+', '-', '/', '\*'.** Print the result of
the calculation on the console formatted to the **second decimal**
point.

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
<td style="text-align: left;"><p>5,</p>
<p>'+',</p>
<p>10</p></td>
<td style="text-align: left;">15.00</td>
</tr>
<tr>
<td style="text-align: left;"><p>25.5,</p>
<p>'-',</p>
<p>3</p></td>
<td style="text-align: left;">22.50</td>
</tr>
</tbody>
</table>

## \*Gladiator Expenses

As a gladiator, Peter has to repair his broken equipment when he loses a
fight. His equipment consists of a helmet, sword, shield, and armor. You
will receive Peter\`s **lost fights count**.

- Every **second** lost game, his helmet is broken.

- Every **third** lost game, his sword is broken.

- When both **his sword and helmet are broken** in the same lost fight,
  his **shield also breaks**.

- **Every** **second time**, when his shield brakes, his **armor** also
  needs to be repaired.

You will receive the price of each item in his equipment. Calculate his
expenses for the year for renewing his equipment.

### Input / Constraints

You will receive 5 parameters to your function:

- The first parameter - **lost fights count** - is an integer in the
  range **\[0, 1000\]**.

- The second parameter - **helmet price** - is the floating-point number
  in the range **\[0, 1000\]**.

- The third parameter - **sword price** - is the floating-point number
  in the range **\[0, 1000\]**.

- The fourth parameter - **shield price** - is the floating-point number
  in the range **\[0, 1000\]**.

- The fifth parameter - **armor price** - is the floating-point number
  in the range **\[0, 1000\]**.

### Output

- As output you must print Peter\`s total expenses for new equipment
  rounded to the second decimal point: **"Gladiator expenses: {expenses}
  aureus"**

<!-- -->

- Allowed working **time** / **memory**: **100ms** / **16MB**.

### Examples

<table>
<colgroup>
<col style="width: 30%" />
<col style="width: 69%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>7,</p>
<p>2,</p>
<p>3,</p>
<p>4,</p>
<p>5</p></td>
<td style="text-align: left;">Gladiator expenses: 16.00 aureus</td>
</tr>
<tr>
<td style="text-align: left;"><p>23,</p>
<p>12.50,</p>
<p>21.50,</p>
<p>40,</p>
<p>200</p></td>
<td style="text-align: left;">Gladiator expenses: 608.00 aureus</td>
</tr>
</tbody>
</table>

## \*Spice Must Flow

*Spice is Love, Spice is Life. And most importantly, Spice must flow. It
must be extracted from the scorching sands of Arrakis, under the
constant threat of giant sandworms. To make the work as efficient as
possible, the Duke has tasked you with the creation of management
software.*

Write a program that calculates the **total amount** of spice that can
be extracted from a source. The source has a **starting yield**, which
indicates how much spice can be mined on the **first day**. After it has
been mined for a day, the **yield drops** by 10, meaning on the second
day it’ll produce 10 less spice than on the first, on the third day 10
less than on the second, and so on (see examples). A source is
considered profitable only while its yield is **at least** 100 – when
less than 100 spices are expected in a day, abandon the source.

The mining crew **consumes** 26 spices **every day** at the end of their
shift and **an additional** 26 after the mine has been exhausted. Note
that the workers **cannot** consume more spice than there is in storage.

When the operation is complete, print on the console on two separate
lines how many **days** the mine has operated and the **total** amount
of spice extracted.

### Input 

You will receive a number, representing the **starting yield** of the
source.

### Output 

Print on the console on two separate lines how many **days** the mine
has operated and the **total amount** of spice extracted.

### Constraints 

- The starting yield will be a **number** within range \[0…228\].

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
<td>111</td>
<td style="text-align: left;"><p>2</p>
<p>134</p></td>
</tr>
<tr>
<td>450</td>
<td style="text-align: left;"><p>36</p>
<p>8938</p></td>
</tr>
</tbody>
</table>
