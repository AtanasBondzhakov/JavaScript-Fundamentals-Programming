# Exercises Arrays Advanced

## Train

You will be given an **array of strings**.

The **first** element will be **a string containing wagons** (numbers).
Each number inside the string represents **the number of passengers that
are currently in a wagon**.

The **second** element in the array will be **the max capacity of each
wagon** (single number).

The **rest** of the elements will be **commands** in the following
format:

- **Add** {**passengers**} – add a **wagon** to the end with the given
  number of passengers.

- {**passengers**} - find an existing wagon to **fit all the
  passengers** (**starting from the first wagon**)

At the end, **print the final state** of the train (all the wagons
**separated** by a space).

### Example

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
<td style="text-align: left;"><p>['32 54 21 12 4 0 23',</p>
<p>'75',</p>
<p>'Add 10',</p>
<p>'Add 0',</p>
<p>'30',</p>
<p>'10',</p>
<p>'75']</p></td>
<td style="text-align: left;">72 54 21 12 4 75 23 10 0</td>
</tr>
<tr>
<td style="text-align: left;"><p>['0 0 0 10 2 4',</p>
<p>'10',</p>
<p>'Add 10',</p>
<p>'10',</p>
<p>'10',</p>
<p>'10',</p>
<p>'8',</p>
<p>'6']</p></td>
<td style="text-align: left;">10 10 10 10 10 10 10</td>
</tr>
</tbody>
</table>

## Distinct Array

You will be given an **array of integer numbers** on the first line of
the input.

Remove all **repeating elements** from the array.

Print the result elements **separated** by a single space.

### Examples

| **Input** | **Output** |
|:---|:---|
| \[1, 2, 3, 4\] | 1 2 3 4 |
| \[7, 8, 9, <span class="mark">7</span>, 2, 3, 4, 1, <span class="mark">2</span>\] | 7 8 9 2 3 4 1 |
| \[20, 8, 12, 13, 4, <span class="mark">4</span>, <span class="mark">8</span>, 5\] | 20 8 12 13 4 5 |

## House Party

Write a function that keeps track of **guests** that are going to a
house party.

You will be given an **array of strings**. Each string will be one of
the following:

- **"{name} is going!"**

- **"{name} is not going!"**

If you receive the **first type of input**, you have to **add** the
person if he/she **is not** in the list (If he/she is in the list print:
"**{name} is already in the list!**").

If you receive the **second type of input**, you have to **remove** the
person if he/she **is** in the list (if not print: "**{name} is not in
the list!**").

At the end print all the guests each on a **separate line**.

### Examples

<table>
<colgroup>
<col style="width: 42%" />
<col style="width: 57%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>['Allie is going!',</p>
<p>'George is going!',</p>
<p>'John is not going!',</p>
<p>'George is not going!']</p></td>
<td style="text-align: left;"><p>John is not in the list!</p>
<p>Allie</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>['Tom is going!',</p>
<p>'Annie is going!',</p>
<p>'Tom is going!',</p>
<p>'Garry is going!',</p>
<p>'Jerry is going!']</p></td>
<td style="text-align: left;"><p>Tom is already in the list!</p>
<p>Tom</p>
<p>Annie</p>
<p>Garry</p>
<p>Jerry</p></td>
</tr>
</tbody>
</table>

## Sorting

Write a function that sorts an **array of numbers** so that the first
element is the **biggest** one, the second is the **smallest** one, the
third is the **second** **biggest** one, and the fourth is the
**second** **smallest** one, and so on.

Print the elements on one row, **separated** by a single space.

### Examples

| **Input**                                | **Output**                  |
|------------------------------------------|-----------------------------|
| \[1, 21, 3, 52, 69, 63, 31, 2, 18, 94\]  | 94 1 69 2 63 3 52 18 31 21  |
| \[34, 2, 32, 45, 690, 6, 32, 7, 19, 47\] | 690 2 47 6 45 7 34 19 32 32 |

##  Sort an Array by 2 Criteria

Write a function that orders an **array of strings**, by their
**length** in **ascending order** as **primary criteria**, and by
**alphabetical value** in **ascending order** as **second criteria**.
The comparison should be **case-insensitive**.

The **input** comes as an **array of strings**.

The **output** is the **ordered** array of strings, each on a
**separate** line.

### Examples

<table style="width:100%;">
<colgroup>
<col style="width: 23%" />
<col style="width: 23%" />
<col style="width: 3%" />
<col style="width: 24%" />
<col style="width: 24%" />
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
<td>['alpha', 'beta', 'gamma']</td>
<td><p>beta</p>
<p>alpha</p>
<p>gamma</p></td>
<td></td>
<td>['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']</td>
<td><p>Jack</p>
<p>Isacc</p>
<p>George</p>
<p>Theodor</p>
<p>Harrison</p></td>
</tr>
</tbody>
</table>

### 

## Bomb Numbers

Write a function that receives two parameters: **sequence of numbers**
and **special bomb number** with a certain **power**.

Your task is to **detonate every occurrence** of the **special bomb
number** and according to its power **his neighbors from left and
right**. Detonations are performed from **left to right** and all
detonated numbers **disappear**.

The input contains two **arrays of numbers**. The first contains the
**initial sequence** and the second contains the **special bomb number**
and **its power**.

The output is the **sum of the remaining elements** in the sequence.

### Examples

<table>
<colgroup>
<col style="width: 64%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>[1, <mark>2, 2</mark>, <mark>4</mark>,
<mark>2, 2</mark>, 2, 9],</p>
<p><mark>[4</mark>, 2]</p></td>
<td style="text-align: left;">12</td>
</tr>
<tr>
<td style="text-align: left;"><p>[1, 4, <mark>4, 2, 8</mark>,
<mark>9</mark>, <mark>1</mark>],</p>
<p><mark>[9</mark>, 3]</p></td>
<td style="text-align: left;">5</td>
</tr>
<tr>
<td style="text-align: left;"><p><mark>[1</mark>, <mark>7</mark>,
<mark>7</mark>, 1, 2, 3],</p>
<p>[7, 1]</p></td>
<td style="text-align: left;">6</td>
</tr>
<tr>
<td style="text-align: left;"><p>[1, <mark>1</mark>, <mark>2</mark>,
<mark>1</mark>, 1, <mark>1</mark>, <mark>2</mark>, <mark>1</mark>, 1,
1],</p>
<p><mark>[2</mark>, 1]</p></td>
<td style="text-align: left;">4</td>
</tr>
</tbody>
</table>

## Search for a Number

You will receive two **arrays** of **integers**. The second **array is**
containing exactly **three** **numbers**.

**The first** number represents the **number** of **elements** you have
to **take** from the first **array** (**starting** from the **first**
**one**).

**The second** number represents the **number** of **elements** you have
to **delete** from the numbers you took (**starting** from the **first**
**one**).

**The third** number is the **number** we **search** in our collection
after the manipulations.

**As output print** how many times that **number** occurs in our array
in the following format:

**"Number {number} occurs {count} times."**

### Examples

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>[5, 2, 3, 4, 1, 6],</p>
<p>[5, 2, 3]</p></td>
<td style="text-align: left;">Number 3 occurs 1 times.</td>
</tr>
<tr>
<td style="text-align: left;"><p>[7, 1, 5, 8, 2, 7],</p>
<p>[3, 1, 5]</p></td>
<td style="text-align: left;">Number 5 occurs 1 times.</td>
</tr>
</tbody>
</table>

## . \*Array Manipulator

Write a function that **receives an array of integers** and an **array
of string commands** and **executes them over the array**. The commands
are as follows:

- **add \<index\> \<element\>** – adds element at the specified index
  (elements right from this position inclusively are shifted to the
  right).

- **addMany \<index\>\<element 1\> \<element 2\> … \<element n\>** –
  adds a set of elements at the specified index.

- **contains \<element\>** – prints the index of the first occurrence of
  the specified element (**if exists**) in the array or **-1** if the
  element is not found.

- **remove \<index\>** – removes the element at the specified index.

- **shift \<positions\>** – **shifts every element** of the array the
  number of positions **to the** **left** (with rotation).

  - For example, \[1, 2, 3, 4, 5\] -\> shift 2 -\> \[3, 4, 5, 1, 2\]

- **sumPairs** – sums the elements in the array by pairs (first +
  second, third + fourth, …).

  - For example, \[1, 2, 4, 5, 6, 7, 8\] -\> \[3, 9, 13, 8\].

- **print** – stop receiving more commands and print the last state of
  the array in the following format:

**\`\[ {element1}, {element2}, …elementN} \]\`**

**Note:** The elements in the array must be **joined** by **comma** and
**space** **(, )**.

### Examples

<table>
<colgroup>
<col style="width: 62%" />
<col style="width: 37%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>[1, 2, 4, 5, 6, 7],</p>
<p>['add 1 8', 'contains 1', 'contains 3', 'print']</p></td>
<td style="text-align: left;"><p>0</p>
<p>-1</p>
<p>[ 1, 8, 2, 4, 5, 6, 7 ]</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[1, 2, 3, 4, 5],</p>
<p>['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1',
'print']</p></td>
<td style="text-align: left;"><p>-1</p>
<p>[ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]</p></td>
</tr>
</tbody>
</table>

## 9. \*Gladiator Inventory

As a gladiator, Peter has a cool **Inventory**. He loves to buy new
equipment. You are given Peter’s inventory with all of his equipment -\>
**strings**, separated by whitespace.

You may receive the following **commands**:

- Buy {equipment}

- Trash {equipment}

- Repair {equipment}

- Upgrade {equipment}-{upgrade}

If you receive the **Buy command**, you should **add** the equipment at
the last position in the inventory, but only if it isn't bought already.

If you receive the **Trash command**, **delete** the equipment if it
exists.

If you receive the **Repair command**, you should **repair** the
equipment if it exists and place it in the **last position**.

If you receive the **Upgrade command**, you should check if the
equipment exists and **insert** after it the upgrade in the following
format: "**{equipment}:{upgrade}"**.

### Input / Consrtaints

You will receive an **array of strings**. Each element of the array is a
command.

- In the **first input element,** you will receive Peter's **inventory**
  – a sequence of equipment names, separated by space.

### Output

As **output**, you must print Peter's **inventory** on one line,
**separated** by a space.

### Constraints

- The **command will always be valid.**

- The **equipment** and **Upgrade** will be strings and will contain any
  character, except **'-'**.

<!-- -->

- Allowed working **time** / **memory**: **100ms** / **16MB**.

***Scroll down to see examples.***

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
<td style="text-align: left;"><p>['SWORD Shield Spear',</p>
<p>'Buy Bag',</p>
<p>'Trash Shield',</p>
<p>'Repair Spear',</p>
<p>'Upgrade SWORD-Steel']</p></td>
<td style="text-align: left;">SWORD SWORD:Steel Bag Spear</td>
</tr>
<tr>
<td style="text-align: left;"><p>['SWORD Shield Spear',</p>
<p>'Trash Bow',</p>
<p>'Repair Shield',</p>
<p>'Upgrade Helmet-V']</p></td>
<td style="text-align: left;">SWORD Spear Shield</td>
</tr>
</tbody>
</table>

## \*Build a Wall 

Write a program that keeps track of the construction of a **30-foot**
wall. You will be given an **array of strings** that must be **parsed**
as **numbers**, representing the initial height of mile-long sections of
the wall, in feet. Each section has its construction crew that can **add
1** foot of height per day by using 195 cubic yards of concrete. All
crews work simultaneously (see examples), meaning all sections that
aren't completed (are less than 30 feet high) **grow** by 1 foot every
day. When a section of the wall is complete, its crew is relieved.

Your program needs to keep track of how much concrete is used **daily**
until the completion of the entire wall. In the end, print on a single
line, separated by comma and space, the amount of **concrete** used each
**day**, and on a second line, the **final cost** of the wall. One cubic
yard of concrete costs **1900** pesos.

### Input 

Your program will receive an **array of strings** representing **numbers
as a parameter**.

### Output 

Print on the console on **one line** the **amount of concrete used each
day separated by comma and space**, and on a **second line**, the
**final cost** of the wall.

### Constraints 

- The wall may contain up to 2000 sections (2000 elements in the initial
  array).

- Starting height for each section is within the range \[0…30\].

### Examples 

<table>
<colgroup>
<col style="width: 35%" />
<col style="width: 64%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">[21, 25, 28]</td>
<td style="text-align: left;"><p>585, 585, 390, 390, 390, 195, 195, 195,
195</p>
<p>5928000 pesos</p></td>
</tr>
</tbody>
</table>

### Explanation 

On the first day, all **three** crews work, each adding 1 **foot** to
their section, 585 cubic yards total (3 x 195). On the second day, it's
the same with the last section reaching 30 feet and its crew being
**relieved** (marked in red while they don't work). On the third day,
only **two** crews work, using up 390 cubic yards total. This continues
for 2 more days, with the second section reaching 30 feet. In the
remaining 4 days, only 1 crew works, using 195 cubic yards every day.
Over the entire period, 3120 cubic yards of concrete were used, costing
5'928'000 pesos. And that was for just 3 miles, imagine 2000!

| **Starting** | **\[21, 25, 28\]** |
|:-------------|:-------------------|
| **Day 1**    | **\[22, 26, 29\]** |
| **Day 2**    | **\[23, 27, 30\]** |
| **Day 3**    | **\[24, 28, 30\]** |
| **Day 4**    | **\[25, 25, 30\]** |
| **Day 5**    | **\[26, 30, 30\]** |
| **Day 6**    | **\[27, 30, 30\]** |
| **Day 7**    | **\[28, 30, 30\]** |
| **Day 8**    | **\[29, 30, 30\]** |
| **Day 9**    | **\[30, 30, 30\]** |

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
<td style="text-align: left;">[17]</td>
<td style="text-align: left;"><p>195, 195, 195, 195, 195, 195, 195, 195,
195, 195, 195, 195, 195</p>
<p>4816500 pesos</p></td>
</tr>
<tr>
<td style="text-align: left;">[17, 22, 17, 19, 17]</td>
<td style="text-align: left;"><p>975, 975, 975, 975, 975, 975, 975, 975,
780, 780, 780, 585, 585</p>
<p>21489000 pesos</p></td>
</tr>
</tbody>
</table>
