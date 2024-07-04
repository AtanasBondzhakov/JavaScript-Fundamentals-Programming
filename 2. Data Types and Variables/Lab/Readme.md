# Data Types and Variables

1.  **Echo Type**

Write a JS function that takes **one parameter** and **prints** on two
lines the **type** of the parameter and then one of the following:

- If the parameter type is either **string** or **number**, print its
  value

- Otherwise, print the text **'Parameter is not suitable for printing'**

### Examples

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 61%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">'Hello, JavaScript!'</td>
<td style="text-align: left;"><p>string</p>
<p>Hello, JavaScript!</p></td>
</tr>
<tr>
<td style="text-align: left;">18</td>
<td style="text-align: left;"><p>number</p>
<p>18</p></td>
</tr>
<tr>
<td style="text-align: left;">null</td>
<td style="text-align: left;"><p>object</p>
<p>Parameter is not suitable for printing</p></td>
</tr>
</tbody>
</table>

### 

2.  **Concatenate Names**

Write a **function**, which receives two **names** as **string
parameters** and a **delimiter**. Print the names **joined** by the
delimiter.

**Examples**

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 61%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>'John',</p>
<p>'Smith',</p>
<p>'-&gt;'</p></td>
<td style="text-align: left;">John-&gt;Smith</td>
</tr>
<tr>
<td style="text-align: left;"><p>'Jan',</p>
<p>'White',</p>
<p>'&lt;-&gt;'</p></td>
<td style="text-align: left;">Jan&lt;-&gt;White</td>
</tr>
<tr>
<td style="text-align: left;"><p>'Linda',</p>
<p>'Terry',</p>
<p>'=&gt;'</p></td>
<td style="text-align: left;">Linda=&gt;Terry</td>
</tr>
</tbody>
</table>

## Right Place

You will receive **3 parameters (string, char, string).**  
The first string will be a word with a **missing char** replaced with an
underscore '**\_**'.  
You have to **replace** the missing character (**underscore**) of the
first string with the character passed as the second parameter and
**compare** the result with the second string.

If they are equals, you should print "**Matched**", otherwise print
"**Not Matched**".

### Examples

| **Input**               | **Output**  |
|:------------------------|:------------|
| 'Str_ng', 'I', 'Strong' | Not Matched |
| 'Str_ng', 'i', 'String' | Matched     |

### 

## Integer and Float

You will receive **3 numbers**. Your task is to find their **sum** and
print result to the console in the following format:  
**\`{sum} - {type of the number (Integer or Float)}\`**

### Examples

| **Input**     | **Output**    |
|:--------------|:--------------|
| 9, 100, 1.1   | 110.1 - Float |
| 100, 200, 303 | 603 - Integer |

### 

## Amazing Numbers

Write a **function**, which as **input** will receive a **number**.

**Check** and print if it is **amazing** or **not** into the following
format:

**"{number} Amazing? {True or False}"**

An amazing number includes the **digit 9** the sum of its digits.

**Examples** for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472
(5 + 8 + 3 + 4 + 7 + 2 = 29)

### Examples

| **Input** | **Output**         |
|:----------|:-------------------|
| 1233      | 1233 Amazing? True |
| 999       | 999 Amazing? False |

### 

## Gramophone

Write a **function**, which as **input** will receive **3 parameters
(strings)**

- **The first string** is the name of the **band**

- **The second string** is the name of the **album**

- **The third** is holding a **song** name from the album

You have to find out how many **times** the plate will **rotate** the
given song from the album.

<u>The plate makes a full rotation every **2.5** seconds.</u>

The song **duration in seconds** is calculate by the given formula:

**(albumName.length \* bandName.length) \* song-name.length / 2**

As **output,** you should print the following message:

**\`The plate was rotated {rotations} times.\`**

Rotations should be **rounded up**.

### Examples

| **Input**                               | **Output**                       |
|:----------------------------------------|:---------------------------------|
| 'Black Sabbath', 'Paranoid', 'War Pigs' | The plate was rotated 167 times. |
| 'Rammstein', 'Sehnsucht', 'Engel'       | The plate was rotated 81 times.  |

### 

## Required reading

Write a **function** to help **Ivan** calculate how many hours a day he
has to spend reading the necessary literature from the list given for
the summer vacation.

As **input,** you will receive **3 parameters:**

- **Number of pages of the current book** - **integer** \[1… 1000\]

- **Pages read in 1 hour** - **integer** \[1… 1000\]

- **The number of days for which you must read the book** - **integer**
  \[1… 1000\]

As **output** print on the console the **number of hours**, that Ivan
has to read each day.

**Examples**

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
<td style="text-align: left;"><p>212,</p>
<p>20 ,</p>
<p>2</p></td>
<td style="text-align: left;">5.3</td>
</tr>
<tr>
<td style="text-align: left;"><p>432,</p>
<p>15 ,</p>
<p>4</p></td>
<td style="text-align: left;">7.2</td>
</tr>
</tbody>
</table>

## Centuries to Minutes

Write a program that receives a **number** of **centuries** and converts
it to **years**, **days**, **hours**, and **minutes**.

**Examples**

| **Input** | **Output** |
|:---|:---|
| 1 | 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes |
| 5 | 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes |

**Hint**

- Assume that a year has 365.2422 days on average ([<u>the Tropical
  year</u>](https://en.wikipedia.org/wiki/Tropical_year)).

3.  **Special Numbers**

Write a program that receives a number **n.** For all numbers in the
range **\[1…n\]** print the number and if it is special or not (**True**
/ **False**).

- A **number** is **special** when its **sum of digits is 5, 7 or 11**.

  **Examples**

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">15</td>
<td style="text-align: left;"><p>1 -&gt; False</p>
<p>2 -&gt; False</p>
<p>3 -&gt; False</p>
<p>4 -&gt; False</p>
<p>5 -&gt; True</p>
<p>6 -&gt; False</p>
<p>7 -&gt; True</p>
<p>8 -&gt; False</p>
<p>9 -&gt; False</p>
<p>10 -&gt; False</p>
<p>11 -&gt; False</p>
<p>12 -&gt; False</p>
<p>13 -&gt; False</p>
<p>14 -&gt; True</p>
<p>15 -&gt; False</p></td>
</tr>
<tr>
<td style="text-align: left;">20</td>
<td style="text-align: left;"><p>1 -&gt; False</p>
<p>2 -&gt; False</p>
<p>3 -&gt; False</p>
<p>4 -&gt; False</p>
<p>5 -&gt; True</p>
<p>6 -&gt; False</p>
<p>7 -&gt; True</p>
<p>8 -&gt; False</p>
<p>9 -&gt; False</p>
<p>10 -&gt; False</p>
<p>11 -&gt; False</p>
<p>12 -&gt; False</p>
<p>13 -&gt; False</p>
<p>14 -&gt; True</p>
<p>15 -&gt; False</p>
<p>16 -&gt; True</p>
<p>17 -&gt; False</p>
<p>18 -&gt; False</p>
<p>19 -&gt; False</p>
<p>20 -&gt; False</p></td>
</tr>
</tbody>
</table>

4.  **Triples of Latin Letters**

Write a program that receives a string of **number** **n** and print all
**triples** of the first **n small Latin letters**, ordered
alphabetically:

**Examples**

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
<td style="text-align: left;">'3'</td>
<td style="text-align: left;"><p>aaa</p>
<p>aab</p>
<p>aac</p>
<p>aba</p>
<p>abb</p>
<p>abc</p>
<p>aca</p>
<p>acb</p>
<p>acc</p>
<p>baa</p>
<p>bab</p>
<p>bac</p>
<p>bba</p>
<p>bbb</p>
<p>bbc</p>
<p>bca</p>
<p>bcb</p>
<p>bcc</p>
<p>caa</p>
<p>cab</p>
<p>cac</p>
<p>cba</p>
<p>cbb</p>
<p>cbc</p>
<p>cca</p>
<p>ccb</p>
<p>ccc</p></td>
</tr>
<tr>
<td style="text-align: left;">2</td>
<td style="text-align: left;"><p>aaa</p>
<p>aab</p>
<p>aba</p>
<p>abb</p>
<p>baa</p>
<p>bab</p>
<p>bba</p>
<p>bbb</p></td>
</tr>
</tbody>
</table>
