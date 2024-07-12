#  Associative Arrays

## Phone Book

Write a function that stores information about a **person’s name** and
**phone number**. The input is an **array of strings** with
space-separated name and number. **Replace duplicate names**. Print the
result as shown.

### Example

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>['Tim 0834212554',</p>
<p>'Peter 0877547887',</p>
<p>'Bill 0896543112',</p>
<p>'Tim 0876566344']</p></td>
<td style="text-align: left;"><p>Tim -&gt; 0876566344</p>
<p>Peter -&gt; 0877547887</p>
<p>Bill -&gt; 0896543112</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>['George 0552554',</p>
<p>'Peter 087587',</p>
<p>'George 0453112',</p>
<p>'Bill 0845344']</p></td>
<td style="text-align: left;"><p>George -&gt; 0453112</p>
<p>Peter -&gt; 087587</p>
<p>Bill -&gt; 0845344</p></td>
</tr>
</tbody>
</table>

## Meetings

Write a function that manages meeting appointments. The input comes as
an **array of strings**. Each string contains a **weekday** and person’s
**name**. For each **successful** meeting, **print a message**. If you
receive the **same weekday** twice, the meeting cannot be scheduled so
print a **conflicting message**. In the end, print a list of all
**successful** meetings.

### Example

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
<td style="text-align: left;"><p>['Monday Peter',</p>
<p>'Wednesday Bill',</p>
<p>'Monday Tim',</p>
<p>'Friday Tim']</p></td>
<td style="text-align: left;"><p>Scheduled for Monday</p>
<p>Scheduled for Wednesday</p>
<p>Conflict on Monday!</p>
<p>Scheduled for Friday</p>
<p>Monday -&gt; Peter</p>
<p>Wednesday -&gt; Bill</p>
<p>Friday -&gt; Tim</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>['Friday Bob',</p>
<p>'Saturday Ted',</p>
<p>'Monday Bill',</p>
<p>'Monday John',</p>
<p>'Wednesday George']</p></td>
<td style="text-align: left;"><p>Scheduled for Friday</p>
<p>Scheduled for Saturday</p>
<p>Scheduled for Monday</p>
<p>Conflict on Monday!</p>
<p>Scheduled for Wednesday</p>
<p>Friday -&gt; Bob</p>
<p>Saturday -&gt; Ted</p>
<p>Monday -&gt; Bill</p>
<p>Wednesday -&gt; George</p></td>
</tr>
</tbody>
</table>

## Address Book

Write a function that stores information about a person’s **name** and
his **address**. The input comes as an **array of strings**. Each string
contains the **name** and the **address** separated by a **colon**. If
you receive the same name **twice** just **replace** the address. In the
end, print the full list, **sorted alphabetically** by the person’s
name.

### Example

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>['Tim:Doe Crossing',</p>
<p>'Bill:Nelson Place',</p>
<p>'Peter:Carlyle Ave',</p>
<p>'Bill:Ornery Rd']</p></td>
<td style="text-align: left;"><p>Bill -&gt; Ornery Rd</p>
<p>Peter -&gt; Carlyle Ave</p>
<p>Tim -&gt; Doe Crossing</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>['Bob:Huxley Rd',</p>
<p>'John:Milwaukee Crossing',</p>
<p>'Peter:Fordem Ave',</p>
<p>'Bob:Redwing Ave',</p>
<p>'George:Mesta Crossing',</p>
<p>'Ted:Gateway Way',</p>
<p>'Bill:Gateway Way',</p>
<p>'John:Grover Rd',</p>
<p>'Peter:Huxley Rd',</p>
<p>'Jeff:Gateway Way',</p>
<p>'Jeff:Huxley Rd']</p></td>
<td style="text-align: left;"><p>Bill -&gt; Gateway Way</p>
<p>Bob -&gt; Redwing Ave</p>
<p>George -&gt; Mesta Crossing</p>
<p>Jeff -&gt; Huxley Rd</p>
<p>John -&gt; Grover Rd</p>
<p>Peter -&gt; Huxley Rd</p>
<p>Ted -&gt; Gateway Way</p></td>
</tr>
</tbody>
</table>

## Storage

Write a function that takes a certain number of **items** and their
**quantity**. If the same item appears **more than once**, **add the new
amount** to the **existing one**. In the end, print all the items and
their amount without sorting them. The input comes as an **array of
strings**. Try using a **Map()**.

### Example

<table>
<colgroup>
<col style="width: 54%" />
<col style="width: 45%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>['tomatoes 10',</p>
<p>'coffee 5',</p>
<p>'olives 100',</p>
<p>'coffee 40']</p></td>
<td style="text-align: left;"><p>tomatoes -&gt; 10</p>
<p>coffee -&gt; 45</p>
<p>olives -&gt; 100</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>['apple 50',</p>
<p>'apple 61',</p>
<p>'coffee 115',</p>
<p>'coffee 40']</p></td>
<td style="text-align: left;"><p>apple -&gt; 111</p>
<p>coffee -&gt; 155</p></td>
</tr>
</tbody>
</table>

## School Grades

Write a function that stores **students** and their **grades**
throughout the year. If a student appears more than once, **add** the
new **grades** to **existing ones**. Finally, **print** the students and
their **average grades**, sorted **alphabetically** by **student name.**
The input comes as an **array of strings**.

**Note:** The **average grades** must be fixed to the second decimal
place.

### Example

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
<td style="text-align: left;"><p>['Lilly 4 6 6 5',</p>
<p>'Tim 5 6',</p>
<p>'Tammy 2 4 3',</p>
<p>'Tim 6 6']</p></td>
<td style="text-align: left;"><p>Lilly: 5.25</p>
<p>Tammy: 3.00</p>
<p>Tim: 5.75</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>['Steven 3 5 6 4',</p>
<p>'George 4 6',</p>
<p>'Tammy 2 5 3',</p>
<p>'Steven 6 3']</p></td>
<td style="text-align: left;"><p>George: 5.00</p>
<p>Steven: 4.50</p>
<p>Tammy: 3.33</p></td>
</tr>
</tbody>
</table>

## Word Occurrences

Write a function that **counts** the times each **word occurs** in a
text. Print the words **sorted by count** in **descending** order. The
input comes as an **array of strings**.

### Example

<table>
<colgroup>
<col style="width: 63%" />
<col style="width: 36%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And", "finally", "the", "third",
"sentence"]</td>
<td style="text-align: left;"><p>sentence -&gt; 3 times</p>
<p>Here -&gt; 2 times</p>
<p>is -&gt; 2 times</p>
<p>the -&gt; 2 times</p>
<p>first -&gt; 1 times</p>
<p>another -&gt; 1 times</p>
<p>And -&gt; 1 times</p>
<p>finally -&gt; 1 times</p>
<p>third -&gt; 1 times</p></td>
</tr>
<tr>
<td style="text-align: left;">["dog", "bye", "city", "dog", "dad",
"boys", "ginger"]</td>
<td style="text-align: left;"><p>dog -&gt; 2 times</p>
<p>bye -&gt; 1 times</p>
<p>city -&gt; 1 times</p>
<p>dad -&gt; 1 times</p>
<p>boys -&gt; 1 times</p>
<p>ginger -&gt; 1 times</p></td>
</tr>
</tbody>
</table>

### 
