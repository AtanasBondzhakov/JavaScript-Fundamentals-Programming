## Problem 1 - Computer Store

Write a program that **prints you a receipt** for your new computer. You
will receive the **parts\' prices (without tax)** until you receive what
type of customer this is - **special** or **regular**. Once you receive
the type of customer you should print the receipt.

The **taxes are 20%** of each part\'s price you receive.

If the customer is **special**, he has a 10% discount on the total price
with taxes.

If a given price is not a positive number, you should print **\"Invalid
price!\"** on the console and continue with the next price.

If the total price is equal to zero, you should print **\"Invalid
order!\"** on the console.

### Input

-   You will receive numbers representing **prices (without tax)** until
    the command **\"special\"** or **\"regular\":**

### Output

-   The receipt should be in the following format:

**\"Congratulations you\'ve just bought a new computer!**

**Price without taxes: {total price without taxes}\$**

**Taxes: {total amount of taxes}\$**

**\-\-\-\-\-\-\-\-\-\--**

**Total price: {total price with taxes}\$\"**

**[Note: All prices should be displayed to the second digit after the
decimal point! The discount is applied only on the total price. Discount
is only applicable to the final price!]{.underline}**

### Examples

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 78%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>([</p>
<p>'1050',</p>
<p>'200',</p>
<p>'450',</p>
<p>'2',</p>
<p>'18.50',</p>
<p>'16.86',</p>
<p>'special'</p>
<p>])</p></td>
<td style="text-align: left;"><p>Congratulations you've just bought a
new computer!</p>
<p>Price without taxes: 1737.36$</p>
<p>Taxes: 347.47$</p>
<p>-----------</p>
<p>Total price: 1876.35$</p></td>
</tr>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: left;"><p>([</p>
<p>'1023',</p>
<p>'15',</p>
<p>'<mark>-20</mark>',</p>
<p>'<mark>-5.50</mark>',</p>
<p>'450',</p>
<p>'20',</p>
<p>'17.66',</p>
<p>'19.30', 'regular'</p>
<p>])</p></td>
<td style="text-align: left;"><p><mark>Invalid price!</mark></p>
<p><mark>Invalid price!</mark></p>
<p>Congratulations you've just bought a new computer!</p>
<p>Price without taxes: 1544.96$</p>
<p>Taxes: 308.99$</p>
<p>-----------</p>
<p>Total price: 1853.95$</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>([</p>
<p>'regular'</p>
<p>])</p></td>
<td style="text-align: left;">Invalid order!</td>
</tr>
</tbody>
</table>

## Problem 2 - The Lift

Write a program that **finds a place for the tourist on a lift. **

Every wagon should have **a maximum of 4 people on it**. If a wagon is
full, you should direct the people to **the next one with space**
available.

### Input

-   **On the first line,** you will receive **how many people** are
    waiting to get **on the lift**

-   **On the second line**, you will receive the **current state of the
    lift separated by a single space:** **\" \"**.

### Output

**When there is no more available space left on the lift**, or there are
**no more people in the queue**, you should print on the console the
final state of the lift\'s wagons separated by **\" \"** and one of the
following messages:

-   If there are no more people and the lift has empty spots, you should
    print:\
    **\"The lift has empty spots!\
    {wagons separated by \' \'}\"**

-   If there are still people in the queue and no more available space,
    you should print:\
    **\"There isn\'t enough space! {people} people in a queue!\
    {wagons separated by \' \'}\"**

-   If the lift is full and there are no more people in the queue, you
    should print only the wagons separated by **\" \"**.

###  Examples

<table>
<colgroup>
<col style="width: 39%" />
<col style="width: 60%" />
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
<p>"15",</p>
<p>"0 0 0 0 0"</p>
<p>]</p></td>
<td style="text-align: left;"><p>The lift has empty spaces!</p>
<p>4 4 4 3 0</p></td>
</tr>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>"20",</p>
<p>"0 2 0"</p>
<p>]</p></td>
<td style="text-align: left;"><p>There isn't enough space! 10 people in
a queue!</p>
<p>4 4 4</p></td>
</tr>
</tbody>
</table>

# Problem 3 - Memory game

Write a program that recreates the **Memory game**.

On the first line, you will **receive a sequence of elements**. Each
element in the sequence **will have a** **twin**. Until the player
receives **\"end\"** from the console, you will receive **strings with
two integers** separated by a space, representing **the indexes** of
elements in the sequence.

If the player **tries to cheat** and enters **two equal indexes** or
indexes which are **out of bounds of the sequence**, you should **add**
two matching elements at the middle of the sequence in the following
format:

**\"-{number of moves until now}a\"**

Then print this message on the console:

**\"Invalid input! Adding additional elements to the board\"**

### Input

-   On the **first** line**,** you will receive a **sequence of
    elements.**

-   On the **following** lines, you will receive **integers** until the
    command **\"end\".**

### Output

-   Every time the player hit **two matching elements**, you should
    **remove** them from the sequence and **print** on the console the
    following message:

**\"Congrats! You have found matching elements - {element}!\"**

-   If the player hit **two different elements**, you should **print**
    on the console the following message:

**\"Try again!\"**

-   If the player hit **all matching elements** before he receives
    **\"end\"** from the console, you should **print** on the console
    the following message:

**\"You have won in {number of moves until now} turns!\"**

-   If the player receives **\"end\"** **before** **he hits all matching
    elements**, you should **print** on the console the following
    message:

**\"Sorry you lose :(**

**{the current sequence\'s state}\"**

## Constraints

-   **All elements in the sequence will always have a matching
    element.**

## Examples

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
<td style="text-align: left;"><p>[</p>
<p>"1 1 2 2 3 3 4 4 5 5",</p>
<p>"1 0",</p>
<p>"-1 0",</p>
<p>"1 0",</p>
<p>"1 0",</p>
<p>"1 0",</p>
<p>"end"</p>
<p>]</p></td>
<td style="text-align: left;"><p>Congrats! You have found matching
elements - 1!</p>
<p>Invalid input! Adding additional elements to the board</p>
<p>Congrats! You have found matching elements - 2!</p>
<p>Congrats! You have found matching elements - 3!</p>
<p>Congrats! You have found matching elements - -1a!</p>
<p>Sorry you lose :(</p>
<p>4 4 5 5</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>"a 2 4 a 2 4",</p>
<p>"0 3",</p>
<p>"0 2",</p>
<p>"0 1",</p>
<p>"0 1",</p>
<p>"end"</p>
<p>]</p></td>
<td style="text-align: left;"><p>Congrats! You have found matching
elements - a!</p>
<p>Congrats! You have found matching elements - 2!</p>
<p>Congrats! You have found matching elements - 4!</p>
<p>You have won in 3 turns!</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>"a 2 4 a 2 4",</p>
<p>"4 0",</p>
<p>"0 2",</p>
<p>"0 1",</p>
<p>"0 1",</p>
<p>"end"</p>
<p>]</p></td>
<td style="text-align: left;"><p>Try again!</p>
<p>Try again!</p>
<p>Try again!</p>
<p>Try again!</p>
<p>Sorry you lose :(</p>
<p>a 2 4 a 2 4</p></td>
</tr>
</tbody>
</table>
