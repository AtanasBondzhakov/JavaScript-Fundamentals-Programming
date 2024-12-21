# Problem 1 – Galactic Code Decryption

*Welcome codebreaker. You have been recruited by the Galactic Federation
to assist in deciphering transmissions intercepted from a mysterios
alien civilization. These coded messages are crucial for understanding
their technology and intentions. Your mission is to modify these
transmissions using a set of decryption commands until the command
"Finalize" is given.*

You are provided with a **coded message** in the form of a **string**.
Until receiving the command "**Finalize**" you must process this string
using **various commands** to manipulate and decode the message. Each
command will alter the message in a specified manner**:**

- **"Encrypt"**

  - **Reverse** the order of the characters in the message.

  - **Print** the message.

- **"Decrypt"**

  - **Swap** the case of all characters in the message (uppercase to
    lowercase, lowercase to uppercase).

  - **Print** the message.

- **"Substitute {old_char} {new_char}"**

  - **Replace** all occurrences of the specified character **{old_char}
    (case-sensitive!)** with the character **{new_char}.**

  - **Print** the message.

  - If **{old_char}** is not found, print: **"Character not found.".**

- **"Scramble {index} {char}"**

  - **Replace** the **character** at the specified index with
    **{char}.**

  - **Print** the message.

  - If the index is out of range, print: **"Index out of bounds."**.

- **"Remove {substring}"**

  - **Delete** all instances of the specified substring from the message
    **(case-sensitive!)** .

  - **Print** the message.

If a command that does not match any of the above is received, print
**"Invalid command detected!"**.

## Input / Constraints

- The first line will contain the initial coded message as a string.

- Subsequent line will contain commands until the **"Finalize"** command
  is encountered.

- All commands are **case-sensitive**.

## Output

- **Print** the **output** of the **commands** in the **format described
  above**.

## Examples

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>(["helloWorld",</p>
<p>"Encrypt",</p>
<p>"Decrypt",</p>
<p>"Substitute L z",</p>
<p>"Remove O",</p>
<p>"Scramble 0 H",</p>
<p>"Invalid command detected!",</p>
<p>"Finalize"])</p></td>
<td><p>dlroWolleh</p>
<p>DLROwOLLEH</p>
<p>DzROwOzzEH</p>
<p>DzRwzzEH</p>
<p>HzRwzzEH</p>
<p>Invalid command detected!</p></td>
</tr>
<tr class="even">
<td><p>(["GalacticMission",</p>
<p>"Decrypt",</p>
<p>"Scramble 5 Z",</p>
<p>"Remove S",</p>
<p>"Substitute G X",</p>
<p>"Encrypt",</p>
<p>"Finalize"])</p></td>
<td><p>gALACTICmISSION</p>
<p>gALACZICmISSION</p>
<p>gALACZICmIION</p>
<p>Character not found.</p>
<p>NOIImCIZCALAg</p></td>
</tr>
<tr class="odd">
<td><p>(["Federation1",</p>
<p>"Encrypt",</p>
<p>"Decrypt",</p>
<p>"Remove 1",</p>
<p>"Substitute E e",</p>
<p>"Scramble 2 X",</p>
<p>"Encrypt",</p>
<p>"Finalize"])</p></td>
<td><p>1noitaredeF</p>
<p>1NOITAREDEf</p>
<p>NOITAREDEf</p>
<p>NOITAReDef</p>
<p>NOXTAReDef</p>
<p>feDeRATXON</p></td>
</tr>
</tbody>
</table>

# Problem 2 - Easter Eggs

*Easter is coming and your job is to find all the hidden eggs' colors
and their amount.*

You will be given a **text string**. To find the hidden **eggs and their
amount**, read them and mark the ones that are **valid**, considering
the following **rules**:

- Eggs' color:

<!-- -->

- Surrounded by one or more **"@"** or **"#"** (they don't have to be
  the same).

- It is written with **lower case** **alphabetical letters** only.

- Each color should be minimum 3 letters long.

<!-- -->

- Amount:

<!-- -->

- Always positioned after the color.

- **Between** the **color** and the **amount** there **could or could
  not be any other characters**. If there are, they **must NOT** be
  **alphabetical letters or digits**. Otherwise, the color-amount
  combination is **invalid**.

- Surrounded by one or more **"/"**.

- Contains only digits.

- If the **color** or the **amount is not valid**, we consider that the
  color-amount combination is **invalid**.

Examples of valid eggs: **<span class="mark">@red@\*/54/</span>**,
**<span class="mark">\#green##//2//</span>**,
**<span class="mark">@@@yellow#@\*/%^&/36/</span>**,
**<span class="mark">@#blue@\*/1//</span>**

Examples of invalid eggs:
**<span class="mark">\##@InvalidColor##/54/</span>**,
**<span class="mark">@notc0l0r@\*23\*</span>**,
**<span class="mark">@invalid_color@/notnumber/</span>**

Next, you will have to print all the valid eggs like following:

**"**You found {amount} {color} eggs!**" for every color-amount
combination.**

## Examples

- **The input data will be an array with only one string in it.**

- Print the proper output messages in the proper cases as described in
  the problem description.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>(['<strong><mark>@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&amp;/6/@gree_een@/notnumber/###purple@@@@@*$%^&amp;*/5/</mark></strong>'])</td>
</tr>
<tr class="even">
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><p>You found 10 green eggs!</p>
<p>You found 8 red eggs!</p>
<p>You found 6 red eggs!</p>
<p>You found 5 purple eggs!</p></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
</tr>
<tr class="odd">
<td>[(<strong>'<mark>#@##@red@#/8/@rEd@/2/#@purple@////10/</mark>'</strong>])</td>
</tr>
<tr class="even">
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><p>You found 8 red eggs!</p>
<p>You found 10 purple eggs!</p></td>
</tr>
</tbody>
</table>

# Problem 3 - Wild Zoo

*Peter owns a zoo for exotic animals, but he is having difficulties
keeping track of the animals' food and feeding schedule. He needs your
help to facilitate the process.*

Create a program that organizes the **daily feeding of the animals at
the zoo**. You need to keep information about **animals**, their **daily
food limit,** and the **areas** **they** **live** **in**. You will be
receiving **lines** with commands until you receive the **"EndDay"**
message. There are **two** **possible** commands:

- **"Add: {animal_name}-{needed_food_quantity}-{area}":**

  - Add the animal and the quantity of needed food to your records. It
    is guaranteed that the **names** of the animals are **unique**, and
    there will **never** be animals with the **same** name.

  - **If** the animal already **exists**, just **increase** the value of
    its **needed food** with the **given** **one**.

  - **You should keep track of the animal living in each area.**

- **"Feed: {animalName}-{food}":**

  - If the animal **exists**, **reduce** its **quantity of needed food**
    with the given **food** **for** **feeding**.

  - If the animal **does not exist**, **ignore** the command.

  - If its **limit** reaches **0** or **less**, the **animal** is
    considered **successfully fed**, and you need to **remove** it from
    your **records** and **print** the following **message**:

    - **"{animalName} was successfully fed"**

You need to know **the number of** **hungry** **animals** there are left
in **each area**. If an animal has a daily food **limit above 0**, it is
considered **hungry**.

In the end, you should **print each animal** with its **quantity of
needed food** in the following format:

**"Animals:"**

**" {animal_name} -\> {needed_food_quantity}g"**

**…**

**" {animal_name} -\> {needed_food_quantity}g"**

Afterward, **print** only the **areas** with **hungry animals** in the
following **format**:

**"Areas with hungry animals:"**

**" {area_name}: {number_of_hungry_animals}"**

**…**

**" {area_name}: {number_of_hungry_animals}"**

## Input / Constraints

- You will be receiving lines until you receive the **"EndDay"**
  command.

- The **food** comes in **grams** and is an **integer** number in the
  range **\[1...100000\]**.

- The input will **always** be **valid**.

- There will never be a case in which an animal is in two or more areas
  at the same time.

## Output

- Print the appropriate message after the **"Feed"** command **if** an
  **animal** is **fed**.

- Print the animals with their **quantity of** **needed food** in the
  **format** described above.

- Print the **areas** with the **number of hungry** **animals** in them
  in the **format** described above.

## Examples

The input will be provided as an array of strings.

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["Add: Adam-4500-ByTheCreek",</p>
<p>"Add: Maya-7600-WaterfallArea",</p>
<p>"Add: Maya-1230-WaterfallArea",</p>
<p>"Feed: Jamie-2000",</p>
<p>"EndDay"])</p></td>
<td><p>Animals:</p>
<p>Adam -&gt; 4500g</p>
<p>Maya -&gt; 8830g</p>
<p>Areas with hungry animals:</p>
<p>ByTheCreek: 1</p>
<p>WaterfallArea: 1</p></td>
</tr>
<tr class="odd">
<td><p>(["Add: Jamie-600-WaterfallArea",</p>
<p>"Add: Maya-6570-WaterfallArea",</p>
<p>"Add: Adam-4500-ByTheCreek",</p>
<p>"Add: Bobbie-6570-WaterfallArea",</p>
<p>"Feed: Jamie-2000",</p>
<p>"Feed: Adam-2000",</p>
<p>"Feed: Adam-2500",</p>
<p>"EndDay"])</p></td>
<td><p>Jamie was successfully fed</p>
<p>Adam was successfully fed</p>
<p>Animals:</p>
<p>Maya -&gt; 6570g</p>
<p>Bobbie -&gt; 6570g</p>
<p>Areas with hungry animals:</p>
<p>WaterfallArea: 2</p></td>
</tr>
<tr class="even">
<td><p>(["Add: Bonie-3490-RiverArea",</p>
<p>"Add: Sam-5430-DeepWoodsArea",</p>
<p>"Add: Bonie-200-RiverArea",</p>
<p>"Add: Maya-4560-ByTheCreek",</p>
<p>"Feed: Maya-2390",</p>
<p>"Feed: Bonie-3500",</p>
<p>"Feed: Johny-3400",</p>
<p>"Feed: Sam-5500",</p>
<p>"EndDay"])</p></td>
<td><p>Sam was successfully fed</p>
<p>Animals:</p>
<p>Bonie -&gt; 190g</p>
<p>Maya -&gt; 2170g</p>
<p>Areas with hungry animals:</p>
<p>RiverArea: 1</p>
<p>ByTheCreek: 1</p></td>
</tr>
</tbody>
</table>
