# Exercise Objects and Classes

## Employees

You're tasked to create a list of employees and their personal numbers.

You will receive an array of strings. Each string is an employee
**name** and to assign them a personal number you have to find the
**length of the name** (whitespace included).

***Try to use an object***.

At the end print all the list employees in the following format:

**"Name: {employeeName} -- Personal Number: {personalNum}"**

### Examples

<table>
<colgroup>
<col style="width: 31%" />
<col style="width: 68%" />
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
<p>'Silas Butler',</p>
<p>'Adnaan Buckley',</p>
<p>'Juan Peterson',</p>
<p>'Brendan Villarreal'</p>
<p>]</p></td>
<td style="text-align: left;"><p>Name: Silas Butler -- Personal Number:
12</p>
<p>Name: Adnaan Buckley -- Personal Number: 14</p>
<p>Name: Juan Peterson -- Personal Number: 13</p>
<p>Name: Brendan Villarreal -- Personal Number: 18</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'Samuel Jackson',</p>
<p>'Will Smith',</p>
<p>'Bruce Willis',</p>
<p>'Tom Holland'</p>
<p>]</p></td>
<td style="text-align: left;"><p>Name: Samuel Jackson -- Personal
Number: 14</p>
<p>Name: Will Smith -- Personal Number: 10</p>
<p>Name: Bruce Willis -- Personal Number: 12</p>
<p>Name: Tom Holland -- Personal Number: 11</p></td>
</tr>
</tbody>
</table>

## Towns

You’re tasked to create and print **objects** from a text table.

You will receive the input as an **array** of strings, where each string
represents a table row, with values on the row separated by pipes **" \|
"** and spaces.

The table will consist of exactly 3 columns **"Town"**, **"Latitude"**
and **"Longitude"**. The **latitude** and **longitude** columns will
always contain **valid numbers**. Check the examples to get a better
understanding of your task.

The **output** should be **objects**. Latitude and longitude must be
parsed to **numbers and formatted to the second decimal point**!

### Examples

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>['Sofia | 42.696552 | 23.32601',</p>
<p>'Beijing | 39.913818 | 116.363625']</p></td>
</tr>
<tr>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: left;"><p>{ town: 'Sofia', latitude: '42.70',
longitude: '23.33' }</p>
<p>{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }</p></td>
</tr>
</tbody>
</table>

| **Input**                                                    |
|:-------------------------------------------------------------|
| \['Plovdiv \| 136.45 \| 812.575'\]                           |
| **Output**                                                   |
| { town: 'Plovdiv', latitude: '136.45', longitude: '812.58' } |

## Store Provision

You will receive **two arrays**. The first array represents the current
**stock** of the local store. The second array will contain **products**
that the store has **ordered** for delivery.

The following information applies to both arrays:

Every **even** index will hold the **name** of the **product** and every
**odd** index will hold the **quantity** of that **product**. The second
array could contain products that are **already in** the local store. If
that happens **increase** the **quantity** for the given product. You
should store them into an **object**, and print them in the following
format: **(product -\> quantity)**

All of the arrays’ values will be **strings.**

### Examples

<table>
<colgroup>
<col style="width: 57%" />
<col style="width: 42%" />
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
<p>'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer',
'2'</p>
<p>],</p>
<p>[</p>
<p>'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70',
'Bananas', '30'</p>
<p>]</p></td>
<td style="text-align: left;"><p>Chips -&gt; 5</p>
<p>CocaCola -&gt; 9</p>
<p>Bananas -&gt; 44</p>
<p>Pasta -&gt; 11</p>
<p>Beer -&gt; 2</p>
<p>Flour -&gt; 44</p>
<p>Oil -&gt; 12</p>
<p>Tomatoes -&gt; 70</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice',
'5'</p>
<p>],</p>
<p>[</p>
<p>'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas',
'30'</p>
<p>]</p></td>
<td style="text-align: left;"><p>Salt -&gt; 2</p>
<p>Fanta -&gt; 4</p>
<p>Apple -&gt; 21</p>
<p>Water -&gt; 4</p>
<p>Juice -&gt; 5</p>
<p>Sugar -&gt; 44</p>
<p>Oil -&gt; 12</p>
<p>Tomatoes -&gt; 7</p>
<p>Bananas -&gt; 30</p></td>
</tr>
</tbody>
</table>

## Movies

Write a function that stores information about movies inside an array.
The movie's object info must be **name, director,** and **date**. You
can receive several types of input:

- **"addMovie {movie name}"** – add the movie

- **"{movie name} directedBy {director}"** – check if the movie
  **exists** and then add the director

- **"{movie name} onDate {date}"** – check if the movie **exists** and
  then add the date

At the end print all the movies that have **all the info** (if the movie
has **no** director, name, or date, **don’t** print it) in **JSON
format.**

### Examples

<table>
<colgroup>
<col style="width: 53%" />
<col style="width: 46%" />
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
<p>'addMovie Fast and Furious',</p>
<p>'addMovie Godfather',</p>
<p>'Inception directedBy <a
href="https://www.imdb.com/name/nm0634240/?ref_=tt_ov_dr">Christopher
Nolan</a>',</p>
<p>'Godfather directedBy <a
href="https://www.imdb.com/name/nm0000338/?ref_=tt_ov_dr">Francis Ford
Coppola</a>',</p>
<p>'Godfather onDate 29.07.2018',</p>
<p>'Fast and Furious onDate 30.07.2018',</p>
<p>'Batman onDate 01.08.2018',</p>
<p>'Fast and Furious directedBy <a
href="https://www.imdb.com/name/nm0003418/?ref_=tt_ov_dr">Rob
Cohen</a>'</p>
<p>]</p></td>
<td style="text-align: left;"><p>{"name":"Fast and
Furious","date":"30.07.2018","director":"Rob Cohen"}</p>
<p>{"name":"Godfather","director":"Francis Ford
Coppola","date":"29.07.2018"}</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'addMovie The Avengers',</p>
<p>'addMovie Superman',</p>
<p>'The Avengers directedBy Anthony Russo',</p>
<p>'The Avengers onDate 30.07.2010',</p>
<p>'Captain America onDate 30.07.2010',</p>
<p>'Captain America directedBy Joe Russo'</p>
<p>]</p></td>
<td style="text-align: left;">{"name":"The Avengers","director":"Anthony
Russo","date":"30.07.2010"}</td>
</tr>
</tbody>
</table>

## Inventory

Create a function, which creates a **register for heroes**, with their
**names**, **level**, and **items** (if they have such).

The **input** comes as an **array of strings**. Each element holds data
for a hero, in the following format:

**"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."**

You must store the data about every hero. The **name** is a **string**,
a **level** is a **number** and the items are all **strings.**

The **output** is all of the data for all the heroes you’ve stored
**sorted ascending by level**. The data must be in the following format
for each hero:

> **Hero: {heroName}**
>
> **level =\> {heroLevel}**
>
> **Items =\> {item1}, {item2}, {item3}**

### Examples

<table>
<colgroup>
<col style="width: 52%" />
<col style="width: 47%" />
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
<p>'Isacc / 25 / Apple, GravityGun',</p>
<p>'Derek / 12 / BarrelVest, DestructionSword',</p>
<p>'Hes / 1 / Desolator, Sentinel, Antara'</p>
<p>]</p></td>
<td style="text-align: left;"><p>Hero: Hes</p>
<p>level =&gt; 1</p>
<p>items =&gt; Desolator, Sentinel, Antara</p>
<p>Hero: Derek</p>
<p>level =&gt; 12</p>
<p>items =&gt; BarrelVest, DestructionSword</p>
<p>Hero: Isacc</p>
<p>level =&gt; 25</p>
<p>items =&gt; Apple, GravityGun</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'Batman / 2 / Banana, Gun',</p>
<p>'Superman / 18 / Sword',</p>
<p>'Poppy / 28 / Sentinel, Antara'</p>
<p>]</p></td>
<td style="text-align: left;"><p>Hero: Batman</p>
<p>level =&gt; 2</p>
<p>items =&gt; Banana, Gun</p>
<p>Hero: Superman</p>
<p>level =&gt; 18</p>
<p>items =&gt; Sword</p>
<p>Hero: Poppy</p>
<p>level =&gt; 28</p>
<p>items =&gt; Sentinel, Antara</p></td>
</tr>
</tbody>
</table>

## Make a Dictionary

You will receive an **array** with **strings in the form of JSON's.**

You have to parse these strings and combine them into **one object**.
Every string from the array will hold **terms** and a **description.**
If you receive the **same term** **twice,** replace it with the **new
definition**.

Print every term and definition in that dictionary on new line in
format:

**\`Term: \${term} =\> Definition: \${definition}\`**

**Don't forget to sor**t the dictionary **alphabetically** by the terms
as in real dictionaries.

### Examples

<table>
<colgroup>
<col style="width: 45%" />
<col style="width: 54%" />
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
<p>'{"Coffee":"A hot drink made from the roasted and ground seeds
(coffee beans) of a tropical shrub."}',</p>
<p>'{"Bus":"A large motor vehicle carrying passengers by road, typically
one serving the public on a fixed route and for a fare."}',</p>
<p>'{"Boiler":"A fuel-burning apparatus or container for heating
water."}',</p>
<p>'{"Tape":"A narrow strip of material, typically used to hold or
fasten something."}',</p>
<p>'{"Microphone":"An instrument for converting sound waves into
electrical energy variations which may then be amplified, transmitted,
or recorded."}'</p>
<p>]</p></td>
<td style="text-align: left;"><p>Term: Boiler =&gt; Definition: A
fuel-burning apparatus or container for heating water.</p>
<p>Term: Bus =&gt; Definition: A large motor vehicle carrying passengers
by road, typically one serving the public on a fixed route and for a
fare.</p>
<p>Term: Coffee =&gt; Definition: A hot drink made from the roasted and
ground seeds (coffee beans) of a tropical shrub.</p>
<p>Term: Microphone =&gt; Definition: An instrument for converting sound
waves into electrical energy variations which may then be amplified,
transmitted, or recorded.</p>
<p>Term: Tape =&gt; Definition: A narrow strip of material, typically
used to hold or fasten something.</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'{"Cup":"A small bowl-shaped container for drinking from, typically
having a handle"}',</p>
<p>'{"Cake":"An item of soft sweet food made from a mixture of flour,
fat, eggs, sugar, and other ingredients, baked and sometimes iced or
decorated."} ',</p>
<p>'{"Watermelon":"The large fruit of a plant of the gourd family, with
smooth green skin, red pulp, and watery juice."} ',</p>
<p>'{"Music":"Vocal or instrumental sounds (or both) combined in such a
way as to produce beauty of form, harmony, and expression of emotion."}
',</p>
<p>'{"Art":"The expression or application of human creative skill and
imagination, typically in a visual form such as painting or sculpture,
producing works to be appreciated primarily for their beauty or
emotional power."} '</p>
<p>]</p></td>
<td style="text-align: left;"><p>Term: Art =&gt; Definition: The
expression or application of human creative skill and imagination,
typically in a visual form such as painting or sculpture, producing
works to be appreciated primarily for their beauty or emotional
power.</p>
<p>Term: Cake =&gt; Definition: An item of soft sweet food made from a
mixture of flour, fat, eggs, sugar, and other ingredients, baked and
sometimes iced or decorated.</p>
<p>Term: Cup =&gt; Definition: A small bowl-shaped container for
drinking from, typically having a handle</p>
<p>Term: Music =&gt; Definition: Vocal or instrumental sounds (or both)
combined in such a way as to produce beauty of form, harmony, and
expression of emotion.</p>
<p>Term: Watermelon =&gt; Definition: The large fruit of a plant of the
gourd family, with smooth green skin, red pulp, and watery
juice.</p></td>
</tr>
</tbody>
</table>

## Class Vehicle

Create a class with the name **Vehicle** that has the following
properties:

- **type** – a string

- **model** – a string

- **parts** – an object that contains:

<!-- -->

- **engine** – number (quality of the engine)

- **power** – number

- **quality** – engine \* power

<!-- -->

- **fuel** – a number

- **drive** – a function that receives fuel loss and decreases the fuel
  of the vehicle by that number

The **constructor** should receive the **type**, the **model**, the
**parts** as an **object,** and the **fuel**

In judge post your **class** (**Note: all names should be as
described**)

### Example

Test your Vehicle class.

<table>
<colgroup>
<col style="width: 86%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>let parts = { engine: 6, power: 100
};</p>
<p>let vehicle = new Vehicle('a', 'b', parts, 200);</p>
<p>vehicle.drive(100);</p>
<p>console.log(vehicle.fuel);</p>
<p>console.log(vehicle.parts.quality);</p></td>
<td style="text-align: left;"><p>100</p>
<p>600</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>let parts = {engine: 9, power:
500};</p>
<p>let vehicle = new Vehicle('l', 'k', parts, 840);</p>
<p>vehicle.drive(20);</p>
<p>console.log(vehicle.fuel);</p></td>
<td style="text-align: left;">820</td>
</tr>
</tbody>
</table>

## \*Class Storage

Create a **class** **Storage**. It should have the following
**properties**, while the **constructor** should only receive a
**capacity**:

- **capacity** – a number that **decreases when adding a given
  quantity** of products to storage

- **storage** – **list of products** (object). **Each product** should
  have:

<!-- -->

- **name** - a string

- **price** – a number (price is for a single piece of product)

- **quantity** – a number

<!-- -->

- **totalCost** – the sum of the cost of the products

The class should also have the following **methods:**

- **addProduct** – a function that receives a product and adds it to the
  storage

- **getProcuts** – a function that returns all the products in storage
  in **JSON** format, each on a new line

Paste only the **class** **Storage in judge** (**Note: all names should
be as described**)

### Example

Test your Storage class.

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
<td style="text-align: left;"><p>let productOne = {name: 'Cucamber',
price: 1.50, quantity: 15};</p>
<p>let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};</p>
<p>let productThree = {name: 'Bread', price: 1.10, quantity: 8};</p>
<p>let storage = new Storage(50);</p>
<p>storage.addProduct(productOne);</p>
<p>storage.addProduct(productTwo);</p>
<p>storage.addProduct(productThree);</p>
<p>console.log(storage.getProducts());</p>
<p>console.log(storage.capacity);</p>
<p>console.log(storage.totalCost);</p></td>
<td
style="text-align: left;"><p>{"name":"Cucamber","price":1.5,"quantity":15}</p>
<p>{"name":"Tomato","price":0.9,"quantity":25}</p>
<p>{"name":"Bread","price":1.1,"quantity":8}</p>
<p>2</p>
<p>53.8</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>let productOne = {name: 'Tomato',
price: 0.90, quantity: 19};</p>
<p>let productTwo = {name: 'Potato', price: 1.10, quantity: 10};</p>
<p>let storage = new Storage(30);</p>
<p>storage.addProduct(productOne);</p>
<p>storage.addProduct(productTwo);</p>
<p>console.log(storage.totalCost);</p></td>
<td style="text-align: left;">28.1</td>
</tr>
</tbody>
</table>

## \*Catalogue

You have to create a sorted catalog of store **products**. You will be
given the products’ **names** and **prices**. You need to order them in
**alphabetical order**.

The **input** comes as an **array** of strings. Each element holds info
about a product in the following format:

> **"{productName} : {productPrice}"**

The **product’s name** will be a **string**, which will **always**
**start with a capital letter**, and the **price** will be **a number**.
You can safely assume there will be **NO duplicate product input**. The
comparison for alphabetical order is **case-insensitive**.

As **output,** you must print all the products in a specified format.
They must be ordered **exactly as specified above**. The products must
be **divided into groups**, by the **initial of their name**. The
**group's initial should be printed**, and after that, the products
should be printed with **2 spaces before their names**. For more info
check the examples.

### Examples

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
<td style="text-align: left;"><p>[</p>
<p>'Appricot : 20.4',</p>
<p>'Fridge : 1500',</p>
<p>'TV : 1499',</p>
<p>'Deodorant : 10',</p>
<p>'Boiler : 300',</p>
<p>'Apple : 1.25',</p>
<p>'Anti-Bug Spray : 15',</p>
<p>'T-Shirt : 10'</p>
<p>]</p></td>
<td style="text-align: left;"><p>A</p>
<p>Anti-Bug Spray: 15</p>
<p>Apple: 1.25</p>
<p>Appricot: 20.4</p>
<p>B</p>
<p>Boiler: 300</p>
<p>D</p>
<p>Deodorant: 10</p>
<p>F</p>
<p>Fridge: 1500</p>
<p>T</p>
<p>T-Shirt: 10</p>
<p>TV: 1499</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'Omlet : 5.4',</p>
<p>'Shirt : 15',</p>
<p>'Cake : 59'</p>
<p>]</p></td>
<td style="text-align: left;"><p>C</p>
<p>Cake: 59</p>
<p>O</p>
<p>Omlet: 5.4</p>
<p>S</p>
<p>Shirt: 15</p></td>
</tr>
</tbody>
</table>
