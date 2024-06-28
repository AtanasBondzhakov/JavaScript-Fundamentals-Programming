## Problem 1 - Counter-Strike

Write a program that **keeps track of every won** battle against an
**enemy**. You will receive **initial energy**. Afterward, you will
start receiving the **distance** you need **to reach an enemy** until
the **"End of battle"** command is given, or you **run out of energy**.

The **energy** you need for reaching an enemy is **equal to the distance
you receive**. Each time you reach an enemy, you **win** a battle, and
your **energy is reduced**. Otherwise, if you don't have **enough
energy** to reach an enemy, **end the program** and **print**: **"Not
enough energy! Game ends with {count} won battles and {energy}
energy"**.

Every **third won battle** increases **your energy with the value of
your current count of won battles**.

Upon receiving the **"End of battle"** command**,** print the **count of
won battles** in the following format:

### "Won battles: {count}. Energy left: {energy}" 

### Input / Constraints

- On the **first line,** you will receive **initial energy** – an
  **integer \[1-10000\]**.

- On the **following lines,** you will be receiving the **distance** of
  an enemy – an **integer** **\[1-10000\].**

### Output

- The description contains the proper output messages for each case and
  the format they should be printed.

### Examples

<table>
<colgroup>
<col style="width: 34%" />
<col style="width: 65%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>(["100",</p>
<p>"10",</p>
<p>"10",</p>
<p>"10",</p>
<p>"1",</p>
<p>"2",</p>
<p>"3",</p>
<p>"73",</p>
<p>"10"])</p></td>
<td style="text-align: left;">Not enough energy! Game ends with 7 won
battles and 0 energy</td>
</tr>
<tr>
<td style="text-align: left;"><p>(["200",</p>
<p>"54",</p>
<p>"14",</p>
<p>"28",</p>
<p>"13",</p>
<p>"End of battle"])</p></td>
<td style="text-align: left;">Won battles: 4. Energy left: 94</td>
</tr>
</tbody>
</table>

## Problem 2 - Shoot for the Win

Write a program that helps you keep track of your **shot targets**. You
will receive a **sequence with integers**, separated by a single space,
representing targets and their value. Afterward, you will be receiving
indices until the **"End"** command is given, and you need to print the
**targets** and the **count of shot targets**.

Every time you receive an **index**, you need to shoot the target on
that index, **if it is possible**.

Every time you **shoot a target**, its value becomes **-1, and it is
considered a shot**. Along with that, you also need to:

- **Reduce** all the other **targets**, which have **greater values**
  than your **current** target, **with its value**.

- **Increase** all the other **targets**, which **have less than or
  equal** value to the **shot target**, **with its value.**

**Keep in mind that you can't shoot a target, which is already shot.**
**You also can't increase or reduce a target, which is considered a
shot.**

When you receive the **"End"** command, print the targets in their
current state and the **count of shot targets** in the following format:

**"Shot targets: {count} -\> {target<sub>1</sub>} {target<sub>2</sub>}…
{target<sub>n</sub>}"**

### Input / Constraints

- On the **first line** of input, you will receive a **sequence** of
  **integers**, **separated** by **a single space – the targets
  sequence**.

- On the **following lines**, until the **"End"** command, you be
  receiving **integers** each on a single line – **the index of the
  target to be shot.**

### Output

- The format of the output is described above in the problem
  description.

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
<td style="text-align: left;"><p>(["24 50 36 70",</p>
<p>"0",</p>
<p>"4",</p>
<p>"3",</p>
<p>"1",</p>
<p>"End"])</p></td>
<td style="text-align: left;">Shot targets 3 -&gt; -1 -1 130 -1</td>
</tr>
<tr>
<td style="text-align: left;"><p>(["30 30 12 60 54 66",</p>
<p>"5",</p>
<p>"2",</p>
<p>"4",</p>
<p>"0",</p>
<p>"End"])</p></td>
<td style="text-align: left;">Shot targets: 4 -&gt; -1 120 -1 66 -1
-1</td>
</tr>
</tbody>
</table>

## 

## Problem 3 - Moving Target

You are at the shooting gallery again, and you need a program that helps
you keep track of moving targets. On the first line, you will receive a
**sequence of targets with their integer values**, split by a **single
space**. Then, you will start receiving **commands for manipulating the
targets** until the **"End"** command. The commands are the following:

- **"Shoot {index} {power}"**

  - Shoot the target at the index **if it exists** by **reducing** its
    **value** by the **given** **power** (**integer value**).

  - Remove the target **if it is shot**. A target is considered **shot**
    when **its value reaches 0**.

- **"Add {index} {value}"**

  - Insert a target with the received value at the received **index if
    it exists**.

  - If not, print: **"Invalid placement!"**

- **"Strike {index} {radius}"**

  - **Remove** the target at the given **index** and **the ones before
    and after it** depending on the **radius**.

  - If **any of the indices** in the range is **invalid**, print:
    **"Strike missed!"** and **skip** this command.

> **Example:** **"Strike 2 2"**

|     | {radius} | {radius} | {strikeIndex} | {radius} | {radius} |     |     |
|-----|----------|----------|---------------|----------|----------|-----|-----|

- **"End"**

  - **Print** the sequence with targets in the following format and
    **end** **the program**:

> **"{target<sub>1</sub>}\|{target<sub>2</sub>}…\|{target<sub>n</sub>}"**

### Input / Constraints

- On the **first line,** you will receive **the sequence of targets** –
  **integer values \[1-10000\]**.

- On the **following lines,** until the **"End"** will be receiving the
  command described above – **strings**.

- There will never be a case when the **"Strike"** command would empty
  the whole sequence.

### Output

- Print the appropriate message in case of any command if necessary.

- In the end, print the sequence of targets in the format described
  above.

### Examples

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 63%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>(["52 74 23 44 96 110",</p>
<p>"Shoot 5 10",</p>
<p>"Shoot 1 80",</p>
<p>"Strike 2 1",</p>
<p>"Add 22 3",</p>
<p>"End"])</p></td>
<td style="text-align: left;"><p>Invalid placement!</p>
<p>52|100</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>(["1 2 3 4 5",</p>
<p>"Strike 0 1",</p>
<p>"End"])</p></td>
<td style="text-align: left;"><p>Strike missed!</p>
<p>1|2|3|4|5</p></td>
</tr>
</tbody>
</table>
