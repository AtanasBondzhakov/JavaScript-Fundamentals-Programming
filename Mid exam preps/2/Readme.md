# Problem 1 - SoftUni Reception

*Every day, thousands of students pass by the reception at SoftUni with
different questions to ask. The employees have to help everyone by
providing all the information and answering all of the questions.*

**Three employees** are working in the reception all day. Each of them
can handle a **different number** **of students** **per hour**. Your
task is to **calculate how much time** it will take to **answer all the
questions** of a given number of students.

First, you will receive 3 lines with integers, representing the number
of students that each **employee can help per hour.** On the following
line, you will receive **students count as a single integer**.

**<u>Every fourth</u> hour, all employees have a break, so they don't
work for an hour.** It is the only break for the employees, because they
don't need rest, nor have a personal life. Calculate the time needed to
answer all the student's questions and print it in the following format:
**"Time needed: {time}h."**

## Input / Constraints

- On the first three lines - **each employee efficiency** - integer in
  the range **\[1 - 100\].**

- On the fourth line - **students count** – integer in the range **\[0 –
  10000\].**

- Input will always be valid and in the range specified.

## Output

- Print a single line: **"Time needed: {time}h."**

- Allowed working **time/memory**: **100ms** / **16MB.**

## Examples

| **Input**            | **Output**        |
|:---------------------|:------------------|
| \['5','6','4','20'\] | Time needed: 2h.  |
| \['1','2','3','45'\] | Time needed: 10h. |
| \['3','2','5','40'\] | Time needed: 5h.  |

# Problem 2 - Array Modifier

You are given **an array with integers**. Write a program to **modify
the elements** after **receiving the following commands**:

1.  "**swap {index1} {index2}**" takes **two elements** and **swap their
    places**.

2.  "**multiply {index1} {index2}**" takes **element at the
    1<sup>st</sup> index** and **multiply** **it** **with the element at
    2<sup>nd</sup> index**. **Save the product at the 1<sup>st</sup>
    index.**

3.  "**decrease**" **decreases** **all elements** in the array **with
    1**.

## Input

On the **first input line,** you will be given **the initial array
values** separated by a single space.

On the **next lines,** you will receive commands **until** you receive
the **command "end"**. The **commands are** as follows:

- "**swap {index1} {index2}**"

- "**multiply {index1} {index2}**"

- "**decrease**"

## Output

**The output** should be printed on the console and consist of
**elements** **of the** **modified array** – **separated by a comma and
a single space** "**,** ".

## Constraints

- **Elements of the array** will be **integer numbers** in the range
  **\[-2<sup>31</sup>...2<sup>31</sup>\].**

- **Count of the array elements** will be in the range **\[2...100\].**

- **Indexes** **will be always in the range of the array.**

## Examples

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
<td style="text-align: left;"><p>[</p>
<p><mark>'23 -2 321 87 42 90 -123',</mark></p>
<p><mark>'swap 1 3',</mark></p>
<p><mark>'swap 3 6',</mark></p>
<p><mark>'swap 1 0',</mark></p>
<p><mark>'multiply 1 2',</mark></p>
<p><mark>'multiply 2 1',</mark></p>
<p><mark>'decrease',</mark></p>
<p>'end'</p>
<p>]</p></td>
<td style="text-align: left;">86, 7382, 2369942, -124, 41, 89, -3</td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'1 2 3 4',</p>
<p>'swap 0 1',</p>
<p>'swap 1 2',</p>
<p>'swap 2 3',</p>
<p>'multiply 1 2',</p>
<p>'decrease',</p>
<p>'end'</p>
<p>]</p></td>
<td style="text-align: left;">1, 11, 3, 0</td>
</tr>
</tbody>
</table>

# Problem 3 – Numbers

Write a program to **read a sequence of integers** and find and print
the **top 5** numbers **greater than the average** value in the
sequence, sorted in descending order.

## Input

- Read from the console a single line holding **space-separated
  integers**.

## Output

4.  Print the above-described numbers on a single line, space-separated.

5.  If **less than 5 numbers** hold the property mentioned above,
    **print less** than 5 numbers.

6.  Print **"No"** if no numbers hold the above property.

## Constraints

- All input **numbers** are integers in the **range \[-1 000 000 …
  1 000 000\]**.

- The **count of numbers** is in the **range \[1…10 000\]**.

## Examples

| **Input**                             | **Output**     |
|:--------------------------------------|:---------------|
| '10 20 30 40 50'                      | 50 40          |
| '5 2 3 4 -10 30 40 50 20 50 60 60 51' | 60 60 51 50 50 |
| '1'                                   | No             |
| '-1 -2 -3 -4 -5 -6'                   | -1 -2 -3       |
