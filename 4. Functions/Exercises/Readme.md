# Exercise Functions

## Smallest of Three Numbers

Write a function that receives **three integers** and prints the
**smallest** number. Use an appropriate name for the function.

### Examples

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
<td><p>2,</p>
<p>5,</p>
<p>3</p></td>
<td>2</td>
</tr>
<tr class="even">
<td><p>600,</p>
<p>342,</p>
<p>123</p></td>
<td>123</td>
</tr>
<tr class="odd">
<td><p>25,</p>
<p>21,</p>
<p>4</p></td>
<td>4</td>
</tr>
<tr class="even">
<td><p>2,</p>
<p>2,</p>
<p>2</p></td>
<td>2</td>
</tr>
</tbody>
</table>

## Add and Subtract

You will receive **three** **integer numbers.**

Write a function **sum()** to calculate the sum of the first **two**
integers and a function **subtract()**, which subtracts the result of
the function **sum()** and the **third** integer.

### Examples

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 49%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>23,</p>
<p>6,</p>
<p>10</p></td>
<td>19</td>
</tr>
<tr class="even">
<td><p>1,</p>
<p>17,</p>
<p>30</p></td>
<td>-12</td>
</tr>
<tr class="odd">
<td><p>42,</p>
<p>58,</p>
<p>100</p></td>
<td>0</td>
</tr>
</tbody>
</table>

## Characters in Range

Write a function that receives **two characters** and prints on a single
line all the characters in between them according to the **ASCII** code.
Keep in mind that the second character code might be **before** the
first one inside the **ASCII table**.

### Examples

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 89%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>'a',</p>
<p>'d'</p></td>
<td>b c</td>
</tr>
<tr class="even">
<td><p>'#',</p>
<p>':'</p></td>
<td>$ % &amp; ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9</td>
</tr>
<tr class="odd">
<td><p>'C',</p>
<p>'#'</p></td>
<td>$ % &amp; ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ? @
A B</td>
</tr>
</tbody>
</table>

## Odd and Even Sum

You will receive a **single number.** You have to write a function, that
returns the **sum** of **all even** and **all odd** digits from that
number.

### Examples

|                  |                             |
|------------------|-----------------------------|
| **Input**        | **Output**                  |
| 1000435          | Odd sum = 9, Even sum = 4   |
| 3495892137259234 | Odd sum = 54, Even sum = 22 |

## Palindrome Integers

A palindrome is a number, which reads the same **backward as forward**,
such as 323 or 1001. Write a function, which receives an **array of
positive integers** and checks if each integer is a palindrome or not.

### Output

- If the current integer is a palindrome, print: **"true"**

- Otherwise, print: **"false"**

### Examples

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 13%" />
<col style="width: 2%" />
<col style="width: 32%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>[123,323,421,121]</td>
<td><p>false</p>
<p>true</p>
<p>false</p>
<p>true</p></td>
<td></td>
<td>[32,2,232,1010]</td>
<td><p>false</p>
<p>true</p>
<p>true</p>
<p>false</p></td>
</tr>
</tbody>
</table>

## Password Validator

Write a function that checks if a given password is valid. Password
validations are:

- The **length** should be **6 - 10** characters (inclusive)

- It should consist **only of** **letters** and **digits**

- It should have **at least 2** digits

If a password is a valid print: **"Password** **is** **valid"**.

If it is **NOT** valid, for every unfulfilled rule print a message:

- **"Password must be between 6 and 10 characters"**

- **"Password must consist only of letters and digits"**

- **"Password must have at least 2 digits"**

### Examples

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>'logIn'</td>
<td><p>Password must be between 6 and 10 characters</p>
<p>Password must have at least 2 digits</p></td>
</tr>
<tr class="even">
<td>'MyPass123'</td>
<td>Password is valid</td>
</tr>
<tr class="odd">
<td>'Pa$s$s'</td>
<td><p>Password must consist only of letters and digits</p>
<p>Password must have at least 2 digits</p></td>
</tr>
</tbody>
</table>

## NxN Matrix

Write a function that receives a single integer number **n** and prints
**nxn** matrix with that number.

### Examples

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 59%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>3</td>
<td><p>3 3 3</p>
<p>3 3 3</p>
<p>3 3 3</p></td>
</tr>
<tr class="even">
<td>7</td>
<td><p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p></td>
</tr>
<tr class="odd">
<td>2</td>
<td><p>2 2</p>
<p>2 2</p></td>
</tr>
</tbody>
</table>

## Perfect Number 

Write a function that receives a **number** and checks if that number is
perfect or NOT.

A perfect number is a **positive** integer that is equal to the **sum**
of its **proper positive divisors**. That is the sum of its positive
**divisors** excluding the number itself (also known as its **aliquot
sum**).

### Output

- If the number is perfect, print: **"We have a perfect number!"**

- Otherwise, print: **"It's not so perfect."**

### Examples

|           |                           |                    |
|-----------|---------------------------|--------------------|
| **Input** | **Output**                | **Comments**       |
| 6         | We have a perfect number! | 1 + 2 + 3          |
| 28        | We have a perfect number! | 1 + 2 + 4 + 7 + 14 |
| 1236498   | It's not so perfect.      |                    |

## Loading Bar

You will receive a **single number** between **0** and **100**, which is
divided with 10 without residue (0, 10, 20, 30...).

Your task is to create a function that visualizes a **loading bar**
depending on the number you have received in the input.

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
<td>30</td>
<td><p>30% [%%%.......]</p>
<p>Still loading...</p></td>
</tr>
<tr class="odd">
<td>50</td>
<td><p>50% [%%%%%.....]</p>
<p>Still loading...</p></td>
</tr>
<tr class="even">
<td>100</td>
<td><p>100% Complete!</p>
<p>[%%%%%%%%%%]</p></td>
</tr>
</tbody>
</table>

## Factorial Division

Write a function that receives **two** integer numbers. Calculate the
**factorial** of each number. Divide the first result by the second and
print the division formatted to the **second decimal** point.

### Examples

<table style="width:100%;">
<colgroup>
<col style="width: 19%" />
<col style="width: 23%" />
<col style="width: 13%" />
<col style="width: 19%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>5,</p>
<p>2</p></td>
<td>60.00</td>
<td></td>
<td><p>6,</p>
<p>2</p></td>
<td>360.00</td>
</tr>
</tbody>
</table>
