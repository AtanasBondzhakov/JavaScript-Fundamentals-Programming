# Objects and Classes

## Person Info

Write a function that receives **3 parameters**, sets them to an
**object**, and **returns** that object.

The input comes as **3 separate strings** in the following order:
**firstName**, **lastName**, **age**.

### Examples

<table>
<colgroup>
<col style="width: 51%" />
<col style="width: 48%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Object Properties</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">"Peter",<br />
"Pan",<br />
"20"</td>
<td style="text-align: left;"><p>firstName: Peter</p>
<p>lastName: Pan</p>
<p>age: 20</p></td>
</tr>
<tr>
<td style="text-align: left;">"George",<br />
"Smith",<br />
"18"</td>
<td style="text-align: left;"><p>firstName: George</p>
<p>lastName: Smith</p>
<p>age: 18</p></td>
</tr>
</tbody>
</table>

### 

## City

Write a function that receives a **single** **parameter** – an
**object**, containing **five properties**:

**{ name, area, population, country, postcode }**

Loop through all the **keys** and **print** them with their **values**
in format: "**{key} -\> {value}**"

See the examples below.

### Examples

<table>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>{</p>
<p>name: "Sofia",</p>
<p>area: 492,</p>
<p>population: 1238438,</p>
<p>country: "Bulgaria",</p>
<p>postCode: "1000"</p>
<p>}</p></td>
<td style="text-align: left;"><p>name -&gt; Sofia</p>
<p>area -&gt; 492</p>
<p>population -&gt; 1238438</p>
<p>country -&gt; Bulgaria</p>
<p>postCode -&gt; 1000</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>{</p>
<p>name: "Plovdiv",</p>
<p>area: 389,</p>
<p>population: 1162358,</p>
<p>country: "Bulgaria",</p>
<p>postCode: "4000"</p>
<p>}</p></td>
<td style="text-align: left;"><p>name -&gt; Plovdiv</p>
<p>area -&gt; 389</p>
<p>population -&gt; 1162358</p>
<p>country -&gt; Bulgaria</p>
<p>postCode -&gt; 4000</p></td>
</tr>
</tbody>
</table>

## Convert to Object

Write a function that receives a **string** in **JSON format** and
converts it to an **object**.

Loop through all the keys and print them with their values in format:
"**{key}: {value}**"

### Examples

<table>
<colgroup>
<col style="width: 76%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">'{"name": "George", "age": 40, "town":
"Sofia"}'</td>
<td style="text-align: left;"><p>name: George</p>
<p>age: 40</p>
<p>town: Sofia</p></td>
</tr>
<tr>
<td style="text-align: left;">'{"name": "Peter", "age": 35, "town":
"Plovdiv"}'</td>
<td style="text-align: left;"><p>name: Peter</p>
<p>age: 35</p>
<p>town: Plovdiv</p></td>
</tr>
</tbody>
</table>

## Convert to JSON

Write a function that receives a **first name**, **last name**, **hair
color** and sets them to an **object**.

Convert the **object** to **JSON string** and print it.

Input is provided as **3 single strings** in the order stated above.

### Examples

| **Input** | **Output** |
|:---|:---|
| 'George', 'Jones', 'Brown' | {"name":"George","lastName":"Jones","hairColor":"Brown"} |
| 'Peter', 'Smith', 'Blond' | {"name":"Peter","lastName":"Smith","hairColor":"Blond"} |

### 

## Cats

Write a function that receives **array** of strings in the following
format **'{cat name} {age}'**.

Create a **Cat** **class** that receives in the **constructor** the
**name** and the **age** parsed from the input.

It should also have a method named **"meow"** that will print **"{cat
name}, age {age} says Meow"** on the console.

For each of the strings provided, you must **create a cat object** and
invoke the **.meow ()** method**.**

### Examples

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 59%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">['Mellow 2', 'Tom 5']</td>
<td style="text-align: left;"><p>Mellow, age 2 says Meow</p>
<p>Tom, age 5 says Meow</p></td>
</tr>
<tr>
<td style="text-align: left;">['Candy 1', 'Poppy 3', 'Nyx 2']</td>
<td style="text-align: left;"><p>Candy, age 1 says Meow</p>
<p>Poppy, age 3 says Meow</p>
<p>Nyx, age 2 says Meow</p></td>
</tr>
</tbody>
</table>

### 

## Songs

Define a **class** **Song**, which holds the following information about
songs: **typeList**, **name,** and **time**.

You will receive the input as an **array**.

The first element **n** will be the number of songs. Next **n** elements
will be the songs data in the following format:
**"{typeList}\_{name}\_{time}"**, and the last element will be
**typeList** / **"all".**

Print only the **names of the songs**, which have the same **typeList
(**obtained as the last parameter**)**. If the value of the last element
is **"all",** print the names of all the songs.

**Examples**

<table>
<colgroup>
<col style="width: 60%" />
<col style="width: 39%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>[3,</p>
<p>'favourite_DownTown_3:14',</p>
<p>'favourite_Kiss_4:16',</p>
<p>'favourite_Smooth Criminal_4:01',</p>
<p>'favourite']</p></td>
<td style="text-align: left;"><p>DownTown</p>
<p>Kiss</p>
<p>Smooth Criminal</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[4,</p>
<p>'favourite_DownTown_3:14',</p>
<p>'listenLater_Andalouse_3:24',</p>
<p>'favourite_In To The Night_3:58',</p>
<p>'favourite_Live It Up_3:48',</p>
<p>'listenLater']</p></td>
<td style="text-align: left;">Andalouse</td>
</tr>
<tr>
<td style="text-align: left;"><p>[2,</p>
<p>'like_Replay_3:15',</p>
<p>'ban_Photoshop_3:48',</p>
<p>'all']</p></td>
<td style="text-align: left;"><p>Replay</p>
<p>Photoshop</p></td>
</tr>
</tbody>
</table>

### 
