# More Exercise Text Processing

## Value of a String

Write a function, which finds the **sum** of the **ASCII** **codes** of
the **letters** in a given **string**. Your tasks will be a bit harder
because you will have to find the **sum** of **either** the
**lowercase** or the **uppercase** letters.

On the **first** line, you will receive the **string**.

On the **second** line, you will receive **one of two possible inputs**:

- If you receive "**UPPERCASE**" 🡺 find the **sum** of **all**
  **uppercase** **English** **letters** in the previously received
  string

- If you receive "**LOWERCASE**" 🡺 find the **sum** of **all**
  **lowercase** **English** **letters** in the previously received
  string

You should **not** sum the **ASCII** codes of any characters, which are
**not** letters.

At the end print the sum in the following format:

- The total sum is: {sum}

### Examples

<table>
<colgroup>
<col style="width: 58%" />
<col style="width: 41%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>['HelloFromMyAwesomePROGRAM',</p>
<p>'LOWERCASE']</p></td>
<td style="text-align: left;">The total sum is: 1539</td>
</tr>
<tr>
<td style="text-align: left;"><p>['AC/DC',</p>
<p>'UPPERCASE']</p></td>
<td style="text-align: left;">The total sum is: 267</td>
</tr>
</tbody>
</table>

## Serialize String

You have been tasked to serialize a string. The serialization is done
specially, in which a character from that string is saved with the
indexes at which it is found.

The input will consist array, containing a single string, which may
consist of **ANY ASCII** characters. Your task is to serialize the
string in the following way:

{char}:{index1}/{index2}/{index3}

The **char** will be the **character**, and the **indexes** will be the
**indexes** it is **found** at in the **string**.

### Examples

<table>
<colgroup>
<col style="width: 65%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">["abababa"]</td>
<td style="text-align: left;"><p>a:0/2/4/6</p>
<p>b:1/3/5</p></td>
</tr>
<tr>
<td style="text-align: left;">["avjavamsdmcalsdm"]</td>
<td style="text-align: left;"><p>a:0/3/5/11</p>
<p>v:1/4</p>
<p>j:2</p>
<p>m:6/9/15</p>
<p>s:7/13</p>
<p>d:8/14</p>
<p>c:10</p>
<p>l:12</p></td>
</tr>
</tbody>
</table>

## Deserialize String

Write a function, which takes the **output** from the **previous task**
and turns it back into a **string**.

Until you receive the line “**end**”, you will receive several lines of
input on the console, in the following format:

- "**{letter}:{index1}/{index2}/{index…}/{indexN}**"

Your task is to take every **letter** and its **index** and **form a
string** out of them.

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
<td style="text-align: left;"><p>['a:0/2/4/6',</p>
<p>'b:1/3/5',</p>
<p>'end']</p></td>
<td style="text-align: left;">abababa</td>
</tr>
<tr>
<td style="text-align: left;"><p>['a:0/3/5/11',</p>
<p>'v:1/4',</p>
<p>'j:2',</p>
<p>'m:6/9/15',</p>
<p>'s:7/13',</p>
<p>'d:8/14',</p>
<p>'c:10',</p>
<p>'l:12',</p>
<p>'end']</p></td>
<td style="text-align: left;">avjavamsdmcalsdm</td>
</tr>
</tbody>
</table>

## Ascii Sumator

Write a function that prints a **sum of all characters between two given
characters** (their **ASCII code**). On the **first line,** you will get
a **character**. On the **second line,** you get **another character**.
On the **last line**, you get a **random string**. Find all the
characters **between the two given** and **print their ASCII sum**.

### Example

<table>
<colgroup>
<col style="width: 75%" />
<col style="width: 24%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>['.',</p>
<p>'@',</p>
<p>'dsg12gr5653feee5']</p></td>
<td style="text-align: left;">363</td>
</tr>
<tr>
<td style="text-align: left;"><p>['?',</p>
<p>'E',</p>
<p>'@ABCEF']</p></td>
<td style="text-align: left;">262</td>
</tr>
<tr>
<td style="text-align: left;"><p>['a',</p>
<p>'1',</p>
<p>'jfe392$#@j24ui9ne#@$']</p></td>
<td style="text-align: left;">445</td>
</tr>
</tbody>
</table>

## Treasure Finder

Write a function that **decrypts a message** by a given **key** and
gathers information about the hidden **treasure type** and its
**coordinates.** On the **first line,** you will receive a **key
(sequence of numbers).**

On the **next few lines until you receive "find"** you will get lines of
**strings**. You have to **loop through every string** and **decrease
the ASCII code of each character** with a **corresponding number of the
key** sequence. The way you choose a key number from the sequence is by
just **looping through it**. If the **length of the key** sequence is
**less than the string** sequence, you start **looping from the
beginning of the key.** For more clarification see the example below.
**After decrypting** the message, you will **get a type of treasure and
its coordinates.** The **type** will be **between** the symbol **'&'**
and the coordinates will be between the symbols **'\<'** and **'\>'**.
For each line, **print the type and the coordinates** in the format:  
**\`Found {type} at {coordinates}\`**

### Example

<table>
<colgroup>
<col style="width: 51%" />
<col style="width: 48%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>["1 2 1 3",</p>
<p>"ikegfp'jpne)bv=41P83X@",</p>
<p>"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",</p>
<p>"find"]</p></td>
<td style="text-align: left;"><p>Found gold at 10N70W</p>
<p>Found Silver at 32S43W</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>["1 4 2 5 3 2 1",</p>
<p>`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,</p>
<p>"tsojPqsf$(lrne'$CYfqpshksdvfT$&gt;634O57YC",</p>
<p>"'stj)&gt;34W68Z@",</p>
<p>"find"]</p></td>
<td style="text-align: left;"><p>Found gold at 0S123E</p>
<p>Found gold at 102N43W</p>
<p>Found ore at 23S43W</p></td>
</tr>
</tbody>
</table>

## Melrah Shake

You are given a **string** of random characters and a **pattern** of
random characters. You need to “shake off” (**remove**) all of the
**border** occurrences of that pattern, in other words, the **very**
**first** **match** and the **very last match** of the pattern you find
in the string.

When you successfully shake off a match, you **remove** from the pattern
the character which corresponds to the **index** equal to **the
pattern’s length / 2**. Then you continue to shake off the border
occurrences of the new pattern until the pattern becomes **empty** or
until there is **less** than the - needed for a shake, matches in the
remaining string.

In case you have found at least **two** matches, and you have
successfully shaken them off, you print "**Shaked it.**" on the console.
Otherwise, you print "**No shake.**", the remains of the main string,
and you end the program. See the examples for more info.

### Input

- The input will consist only of two lines.

- On the first line, you will get a string of random characters.

- On the second line, you will receive the pattern and that ends the
  input sequence.

### Output

- You must print "**Shaked it.**" for every time you successfully do the
  melrah shake.

- If the melrah shake fails, you print "**No shake.**", and on the next
  line you print what has remained of the main string.

### Constraints

- The two strings may contain **ANY** ASCII character.

- Allowed time/memory: 250ms/16MB.

### Examples

<table>
<colgroup>
<col style="width: 56%" />
<col style="width: 43%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>['astalavista baby',</p>
<p>'sta']</p></td>
<td><p>Shaked it.</p>
<p>No shake.</p>
<p>alavi baby</p></td>
</tr>
<tr>
<td><p>['##mtm!!mm.mm*mtm.#',</p>
<p>'mtm']</p></td>
<td><p>Shaked it.</p>
<p>Shaked it.</p>
<p>No shake.</p>
<p>##!!.*.#</p></td>
</tr>
</tbody>
</table>
