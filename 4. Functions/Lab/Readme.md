# Functions

## Format Grade

Write a function that **receives a grade** between **2.00** and **6.00**
and **prints** a formatted line with **grade and description.**

- \< 3.00 - "**Fail**"

- \>= 3.00 and \< 3.50 - "**Poor**"

- \>= 3.50 and \< 4.50 - "**Good**"

- \>= 4.50 and \< 5.50 - "**Very** **good**"

- \>= 5.50 - "**Excellent**"

### Examples

| **Input** | **Output**       |
|-----------|------------------|
| 3.33      | Poor (3.33)      |
| 4.50      | Very good (4.50) |
| 2.99      | Fail (2)         |

## Math Power

Write a function that **calculates** and **print** the value of a number
**raised** to a **given power**:

### Examples

| **Input** | **Output** |
|-----------|------------|
| 2,8       | 256        |
| 3,4       | 81         |

## Repeat String

Write a function that receives a **string** and a **repeat** **count**
**n**. The function should **return** a new string (the old one repeated
**n** times).

### Examples

| **Input**   | **Output**   |
|-------------|--------------|
| "abc", 3    | abcabcabc    |
| "String", 2 | StringString |

## Orders

Write a function that calculates the **total** **price** of an order and
prints it on the console. The function should receive one of the
following products: **coffee, coke, water, snacks**; and a **quantity**
of the product. The **prices** for a single piece of each product are:

- coffee - 1.50

- water - 1.00

- coke - 1.40

- snacks - 2.00

Print the result **formatted** to the **second** **decimal** **place**.

### Example

| **Input**   | **Output** |
|-------------|------------|
| "water", 5  | 5.00       |
| "coffee", 2 | 3.00       |

## **Simple Calculator**

Write a function that receives **three parameters** – two numbers and an
operator (string) – and calculates the result depending on the operator.
Operator can be **'multiply'**, **'divide'**, **'add'** or
**'subtract'**. Try to solve this task using **arrow functions**.

### Bonus

Solve this task **without** using any conditional statements (no **if**
or **switch** statements or ternary operators).

### Input

The input comes as parameters named **numOne,** **numTwo,**
**operator**.

### Examples

<table>
<colgroup>
<col style="width: 55%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>5,</p>
<p>5,</p>
<p>'multiply'</p></td>
<td>25</td>
</tr>
<tr class="even">
<td><p>40,</p>
<p>8,</p>
<p>'divide'</p></td>
<td>5</td>
</tr>
<tr class="odd">
<td><p>12,</p>
<p>19,</p>
<p>'add'</p></td>
<td>31</td>
</tr>
<tr class="even">
<td><p>50,</p>
<p>13,</p>
<p>'subtract'</p></td>
<td>37</td>
</tr>
</tbody>
</table>

## Sign Check

Write a function, that checks whether the result of the multiplication
**numOne \* numTwo \* numThree** is positive or negative. Try to do this
**WITHOUT** multiplying the 3 numbers.

### Input

The input comes as parameters named **numOne,** **numTwo,**
**numThree**.

### Output

- If the **result** is **positive**, print on the console -\>
  **"Positive"**

- Otherwise, print -\> **"Negative"**

### Example

<table>
<colgroup>
<col style="width: 46%" />
<col style="width: 53%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>5,</p>
<p>12,</p>
<p>-15</p></td>
<td>Negative</td>
</tr>
<tr class="even">
<td><p>-6,</p>
<p>-12,</p>
<p>14</p></td>
<td>Positive</td>
</tr>
<tr class="odd">
<td><p>-1,</p>
<p>-2,</p>
<p>-3</p></td>
<td>Negative</td>
</tr>
<tr class="even">
<td><p>-5,</p>
<p>1,</p>
<p>1</p></td>
<td>Negative</td>
</tr>
</tbody>
</table>
