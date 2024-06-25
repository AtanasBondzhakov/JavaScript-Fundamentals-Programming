# JS Basic Syntax, Conditional Statements, and Loops {#js-basic-syntax-conditional-statements-and-loops .unnumbered}

## Multiply Number by 2

Write a function that receives a number and **prints** as result that
**number** **multiplied** by **two**.

### Examples {#examples .unnumbered}

  -----------------------------------------------------------------------
  **Input**                          **Output**
  ---------------------------------- ------------------------------------
  2                                  4

  5                                  10

  20                                 40
  -----------------------------------------------------------------------

## Student Information

You will be given **3 parameters** -- student name (string), age
(number), and average grade (number). Your task is to print all the info
about the student in the following format:

**\`Name: {student name}, Age: {student age}, Grade: {student grade}\`**

**Note**: The grade should be formatted to the **second decimal** point.

### Examples {#examples-1 .unnumbered}

  -----------------------------------------------------------------------
  **Input**                  **Output**
  -------------------------- --------------------------------------------
  \'John\', 15, 5.54678      Name: John, Age: 15, Grade: 5.55

  \'Steve\', 16, 2.1426      Name: Steve, Age: 16, Grade: 2.14

  \'Marry\', 12, 6.00        Name: Marry, Age: 12, Grade: 6.00
  -----------------------------------------------------------------------

## Excellent Grade

Write a function that receives a single number and checks if the grade
is **excellent** or **not**.\
If it is, print \"**Excellent**\", otherwise print \"**Not
excellent**\".

### Examples {#examples-2 .unnumbered}

  -----------------------------------------------------------------------
  **Input**                        **Output**
  -------------------------------- --------------------------------------
  5.50                             Excellent

  4.35                             Not excellent
  -----------------------------------------------------------------------

## Foreign Languages

Write a program, which prints the language, that a given country speaks.
You can receive only the following combinations:

-   English **is spoken** in England and USA;

-   Spanish **is spoken** in Spain, Argentina, and Mexico;

-   For the others**,** we should print \"**unknown**\";

### Input {#input .unnumbered}

You will receive a **single country name**.

### Output {#output .unnumbered}

**Print** the **language**, which the country **speaks**, or if it is
**unknown** for your program, print **\"unknown\"**.

### Examples {#examples-3 .unnumbered}

  ------------------------------------------------------------------------
  **Input**       **Output**            **Input**       **Output**
  --------------- ----------------- --- --------------- ------------------
  USA             English               Germany         unknown

  ------------------------------------------------------------------------

## Month Printer

Write a program, that takes an **integer** as a parameter and **prints**
the corresponding **month**. If the number **is more than 12** or **less
than 1** print \"**Error!**\"

### Input {#input-1 .unnumbered}

You will receive a **single number**.

### Output {#output-1 .unnumbered}

If the number is within the boundaries print the corresponding month,
otherwise print \"**Error!**\"

### Examples {#examples-4 .unnumbered}

  -------------------------------------------------------------------------
  **Input**     **Output**              **Input**       **Output**
  ------------- ----------------- ----- --------------- -------------------
  2             February                13              Error!

  -------------------------------------------------------------------------

## Theatre Promotions

A theatre **is doing a ticket sale**, but they need a program **to**
calculate the price of a single ticket. If the given age does not fit
one of the categories**,** you should print \"**Error!**\". You can see
the prices i**n** the table below:

  ------------------------------------------------------------------------
   **Day / Age**    **0 \<= age \<=    **18 \< age \<=    **64 \< age \<=
                          18**               64**              122**
  ---------------- ------------------ ------------------ -----------------
    **Weekday**           12\$               18\$              12\$

    **Weekend**           15\$               20\$              15\$

    **Holiday**           5\$                12\$              10\$
  ------------------------------------------------------------------------

### Input {#input-2 .unnumbered}

The input comes in **two parameters**. The **first** one will be the
**type of day (string)**. The **second** -- the **age** of the person
(number).

### Output {#output-2 .unnumbered}

Print the price of the ticket according to the table, or \"**Error!**\"
if the age is not in the table.

### Constraints {#constraints .unnumbered}

-   The age will be in the interval **\[-1000...1000\]**.

-   The type of day will **always be** **valid**.

### Examples {#examples-5 .unnumbered}

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 14%" />
<col style="width: 2%" />
<col style="width: 21%" />
<col style="width: 11%" />
<col style="width: 2%" />
<col style="width: 20%" />
<col style="width: 10%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
<th style="text-align: center;"></th>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
<th rowspan="2" style="text-align: center;"></th>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
<tr>
<th style="text-align: left;"><p>'Weekday',</p>
<p>42</p></th>
<th style="text-align: left;">18$</th>
<th style="text-align: left;"></th>
<th style="text-align: left;">'Holiday', -12</th>
<th style="text-align: left;">Error!</th>
<th style="text-align: left;">'Holiday', 15</th>
<th style="text-align: left;">5$</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Numbers from 1 to 5

Write a function that **prints** all the **numbers** from **1** **to**
**5** (inclusive) each on a separate line.

## Divisible by 3

Write a program, which prints all the numbers from **1 to 100**, which
are **divisible by 3**. You have to use a single **for** loop. The
program should not receive input.

## Numbers from N to 1

Write a function that receives a number **N** and prints all the numbers
from **N** **to 1**. Try using the while loop.

### Examples {#examples-6 .unnumbered}

<table>
<colgroup>
<col style="width: 48%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">5</td>
<td style="text-align: left;"><p>5</p>
<p>4</p>
<p>3</p>
<p>2</p>
<p>1</p></td>
</tr>
<tr>
<td style="text-align: left;">3</td>
<td style="text-align: left;"><p>3</p>
<p>2</p>
<p>1</p></td>
</tr>
</tbody>
</table>

## Numbers from M to N

Write a function that receives a number **M** and a number **N** (M will
always be bigger than N). Print all numbers from **M to N**.

### Examples {#examples-7 .unnumbered}

<table>
<colgroup>
<col style="width: 47%" />
<col style="width: 52%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">6, 2</td>
<td style="text-align: left;"><p>6<br />
5</p>
<p>4</p>
<p>3</p>
<p>2</p></td>
</tr>
<tr>
<td style="text-align: left;">4, 1</td>
<td style="text-align: left;"><p>4</p>
<p>3</p>
<p>2</p>
<p>1</p></td>
</tr>
</tbody>
</table>

## Sum of Odd Numbers

Write a program that prints the next **n** **odd numbers** (starting
from 1) and on the **last row** prints the **sum of them**.

### Input {#input-3 .unnumbered}

You will receive a number -- **n**. This number shows how many **odd
numbers** you should print.

### Output {#output-3 .unnumbered}

Print the next **n** odd numbers, starting from **1**, separated by
**newlines**.

On the last line, print the **sum** of these numbers in the following
format: **\`Sum: {total sum}\`.**

### Constraints {#constraints-1 .unnumbered}

-   **n** will be in the interval **\[1...100\]**

### Examples {#examples-8 .unnumbered}

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 24%" />
<col style="width: 5%" />
<col style="width: 22%" />
<col style="width: 26%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
<th style="text-align: center;"></th>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">5</td>
<td style="text-align: left;"><p>1</p>
<p>3</p>
<p>5</p>
<p>7</p>
<p>9</p>
<p>Sum: 25</p></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">3</td>
<td style="text-align: left;"><p>1</p>
<p>3</p>
<p>5</p>
<p>Sum: 9</p></td>
</tr>
</tbody>
</table>
