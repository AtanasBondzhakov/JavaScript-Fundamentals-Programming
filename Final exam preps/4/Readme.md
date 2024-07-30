## Problem 1 - Password Reset

*Yet again, you have forgotten your password. Naturally, it's not the
first time this has happened. Actually, you got so tired of it that you
decided to help yourself with an intelligent solution.*

Write a password reset program that performs a series of commands upon a
predefined string. First, you will receive a string, and afterward,
until the command "**Done**" is given, you will be receiving strings
with commands split by a single space. The commands will be the
following:

- **"TakeOdd"**

  - Takes only the characters at **odd** **indices** and
    **concatenates** them to obtain the **new raw password** and then
    **prints** it.

- **"Cut {index} {length}"**

  - Gets the substring with the **given length** starting from the
    **given index** from the password and removes its **first
    occurrence**, then **prints** the password on the console.

  - The given index and the length will **always** be **valid**.

- **"Substitute {substring} {substitute}"**

  - If the raw password contains the given substring, replace all of its
    occurrences with the substitute text given and print the result.

  - If it doesn't, prints **"Nothing to replace!"**.

### Input

- You will be receiving strings until the "**Done**" command is given.

### Output

- After the **"Done"** command is received, print:

  - **"Your password is: {password}"**

### Constraints

- The indexes from the "**Cut {index} {length}**" command will always be
  valid.

### Examples

<table>
<colgroup>
<col style="width: 56%" />
<col style="width: 43%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",</p>
<p>"TakeOdd",</p>
<p>"Cut 15 3",</p>
<p>"Substitute :: -",</p>
<p>"Substitute | ^",</p>
<p>"Done"])</p></td>
<td><p>icecream::hot::summer</p>
<p>icecream::hot::mer</p>
<p>icecream-hot-mer</p>
<p>Nothing to replace!</p>
<p>Your password is: icecream-hot-mer</p></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>([<strong>"</strong>up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy<strong>",</strong></p>
<p><strong>"</strong>TakeOdd<strong>",</strong></p>
<p><strong>"</strong>Cut 18 2<strong>",</strong></p>
<p><strong>"</strong>Substitute ! ***<strong>",</strong></p>
<p><strong>"</strong>Substitute ? .!.<strong>",</strong></p>
<p><strong>"</strong>Done<strong>"</strong>])</p></td>
<td><p>programming!is!funny</p>
<p>programming!is!fun</p>
<p>programming***is***fun</p>
<p>Nothing to replace!</p>
<p>Your password is: programming***is***fun</p></td>
</tr>
</tbody>
</table>

# Problem 2 - Fancy Barcodes

Your first task is to determine if the given sequence of characters is a
**valid** barcode or **not**.

**Each line must not contain anything else but a valid barcode**. A
barcode is **valid** when:

- It is surrounded by a **"@"** followed by one or more **"#"**

- It is **at least 6 characters long** (without the surrounding **"@"**
  or **"#"**)

- **It starts** with a **capital letter**

- It contains **only letters** (lower and upper case) **and digits**

- **It ends** with a **capital letter**

Examples of valid barcodes: **<span class="mark">@###Che46sE@##</span>,
<span class="mark">@#FreshFisH@#</span>**,
**<span class="mark">@###Brea0D@###</span>**,
**<span class="mark">@##Che46sE@##</span>**

Examples of invalid barcodes:
**<span class="mark">\##InvaliDiteM##</span>**,
**<span class="mark">@InvalidIteM@</span>**,
**<span class="mark">@#Invalid_IteM@#</span>**

Next, you have to determine the **product group** of the item from the
**barcode**. The product group is obtained by **concatenating** **all
the digits** found in the barcode. If there are **no digits** present in
the barcode, the **default** product group is **"00".**

Examples:

**@#FreshFisH@#** -\> product group: 00

**@###Brea0D@###** -\> product group: 0

**@##Che4s6E@##** -\> product group: 46

### Input

On the first line, you will be given an integer **n** – the count of
barcodes that you will be receiving next.

On the following **n** lines, you will receive different strings.

### Output

For each barcode that you process, you need to print a message.

If the barcode is invalid:

- **"**Invalid barcode**"**

If the barcode is valid:

- **"**Product group: {product group}**"**

### Examples

<table>
<colgroup>
<col style="width: 46%" />
<col style="width: 53%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["3",</p>
<p>"@#FreshFisH@#",</p>
<p>"@###Brea0D@###",</p>
<p>"@##Che4s6E@##"])</p></td>
<td><p>Product group: <mark>00</mark></p>
<p>Product group: <mark>0</mark></p>
<p>Product group: <mark>46</mark></p></td>
</tr>
<tr class="odd">
<td><p>(["6",</p>
<p>"@###Val1d1teM@###",</p>
<p>"@#ValidIteM@#",</p>
<p>"##InvaliDiteM##",</p>
<p>"@InvalidIteM@",</p>
<p>"@#Invalid_IteM@#",</p>
<p>"@#ValiditeM@#"])</p></td>
<td><p>Product group: 11</p>
<p>Product group: 00</p>
<p>Invalid barcode</p>
<p>Invalid barcode</p>
<p>Invalid barcode</p>
<p>Product group: 00</p></td>
</tr>
</tbody>
</table>

## Problem 3 - Heroes of Code and Logic VII

*You got your hands on the most recent update on the best MMORPG of all
time – Heroes of Code and Logic. You want to play it all day long! So
cancel all other arrangements and create your party!*

On the first line of the standard input, you will receive an integer
**n** – the number of heroes that you can choose for your party. On the
next **n** lines, the heroes themselves will follow with their **hit
points** and **mana points** separated by a single space in the
following format:

**"{hero name} {HP} {MP}"**

- **HP** stands for hit points and **MP** for mana points

- a hero can have a **maximum** of **100 HP** and **200 MP**

After you have successfully picked your heroes, you can start playing
the game. You will be receiving different commands, each on a new line,
separated by **" – "**, until the **"End"** command is given.

There are several actions that the heroes can perform:

**"CastSpell – {hero name} – {MP needed} – {spell name}**"

- If the hero has the required MP, he casts the spell, thus reducing his
  MP. Print this message:

  - **"**{hero name} has successfully cast {spell name} and now has
    {mana points left} MP!**"**

- If the hero is unable to cast the spell print:

  - "**{hero name} does not have enough MP to cast {spell name}!**"

**"TakeDamage – {hero name} – {damage} – {attacker}"**

- Reduce the hero HP by the given damage amount. If the hero is still
  alive (his HP is greater than 0) print:

  - **"{hero name} was hit for {damage} HP by {attacker} and now has
    {current HP} HP left!"**

- If the hero has died, remove him from your party and print:

  - **"{hero name} has been killed by {attacker}!"**

**"Recharge – {hero name} – {amount}"**

- The hero increases his MP. If it brings the MP of the hero above the
  **maximum value** (**200)**, MP is increased to **200**. (the MP can't
  go over the maximum value).

- Print the following message:

  - **"{hero name} recharged for {amount recovered} MP!"**

**"Heal – {hero name} – {amount}"**

- The hero increases his HP. If a command is given that would bring the
  HP of the hero above the **maximum value (100)**, HP is increased to
  **100** (the HP can't go over the maximum value).

- Print the following message:

  - **"{hero name} healed for {amount recovered} HP!"**

### Input

- On the first line of the standard input, you will receive an integer
  **n.**

- On the following **n** lines, the heroes themselves will follow with
  their **hit points** and **mana points** separated by a space in the
  following format.

- You will be receiving different **commands**, each on a new line,
  separated by **" – "**, until the **"End"** command is given.

### Output

- Print all members of your party who are **still alive**, in the
  following format (their HP/MP need to be indented 2 spaces):

**"**{hero name}

HP: {current HP}

MP: {current MP}**"**

### Constraints

- The starting HP/MP of the heroes will be valid, 32-bit integers will
  never be negative or exceed the respective limits.

- The HP/MP amounts in the commands will never be negative.

- The hero names in the commands will always be valid members of your
  party. No need to check that explicitly.

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
<td><p>[</p>
<p>"2",</p>
<p>"Solmyr 85 120",</p>
<p>"Kyrre 99 50",</p>
<p>"<mark>Heal - Solmyr - 10</mark>",</p>
<p>"<mark>Recharge - Solmyr - 50</mark>",</p>
<p>"<mark>TakeDamage - Kyrre - 66 - Orc</mark>",</p>
<p>"<mark>CastSpell - Kyrre - 15 - ViewEarth</mark>",</p>
<p>"<mark>End</mark>"</p>
<p>]</p></td>
<td><p><mark>Solmyr healed for 10 HP!</mark></p>
<p><mark>Solmyr recharged for 50 MP!</mark></p>
<p><mark>Kyrre was hit for 66 HP by Orc and now has 33 HP
left!</mark></p>
<p><mark>Kyrre has successfully cast ViewEarth and now has 35
MP!</mark></p>
<p><mark>Solmyr</mark></p>
<p><mark>HP: 95</mark></p>
<p><mark>MP: 170</mark></p>
<p><mark>Kyrre</mark></p>
<p><mark>HP: 33</mark></p>
<p><mark>MP: 35</mark></p></td>
</tr>
<tr class="odd">
<td><p>[</p>
<p>"4",</p>
<p>"Adela 90 150",</p>
<p>"SirMullich 70 40",</p>
<p>"Ivor 1 111",</p>
<p>"Tyris 94 61",</p>
<p>"<mark>Heal - SirMullich - 50</mark>",</p>
<p>"<mark>Recharge - Adela - 100</mark>",</p>
<p>"<mark>CastSpell - Tyris - 1000 - Fireball</mark>",</p>
<p>"<mark>TakeDamage - Tyris - 99 - Fireball</mark>",</p>
<p>"<mark>TakeDamage - Ivor - 3 - Mosquito</mark>",</p>
<p>"<mark>End</mark>"</p>
<p>]</p></td>
<td><p><mark>SirMullich healed for 30 HP!</mark></p>
<p><mark>Adela recharged for 50 MP!</mark></p>
<p><mark>Tyris does not have enough MP to cast Fireball!</mark></p>
<p><mark>Tyris has been killed by Fireball!</mark></p>
<p><mark>Ivor has been killed by Mosquito!</mark></p>
<p><mark>Adela</mark></p>
<p><mark>HP: 90</mark></p>
<p><mark>MP: 200</mark></p>
<p><mark>SirMullich</mark></p>
<p><mark>HP: 100</mark></p>
<p><mark>MP: 40</mark></p></td>
</tr>
</tbody>
</table>
