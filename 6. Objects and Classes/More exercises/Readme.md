# More Exercise Objects and Classes

## Class Laptop

Create a **class Laptop** that has the following properties:

- **info** – object that contains:

<!-- -->

- **producer** – string

- **age** – number

- **brand** – string

<!-- -->

- **isOn** – boolean (false by default)

- **turnOn** – a function that **sets the isOn** variable to **true**

- **turnOff** – a function that **sets the isOn** variable to **false**

- **showInfo** – a function that returns the **producer, age, and brand
  as JSON**

- **quality** – number (every time the laptop **is turned on/off the
  quality decreases by 1**)

- **getter price** – number (**800 – {age \* 2} + (quality \* 0.5)**)

The **constructor** should receive the **info as an object and the
quality.**

### Examples

Test your class.

<table>
<colgroup>
<col style="width: 42%" />
<col style="width: 57%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>let info = {producer: "Dell", age: 2,
brand: "XPS"}</p>
<p>let laptop = new Laptop(info, 10)</p>
<p>laptop.turnOn()</p>
<p>console.log(laptop.showInfo())</p>
<p>laptop.turnOff()</p>
<p>console.log(laptop.quality)</p>
<p>laptop.turnOn()</p>
<p>console.log(laptop.isOn)</p>
<p>console.log(laptop.price)</p></td>
<td
style="text-align: left;"><p>{"producer":"Dell","age":2,"brand":"XPS"}</p>
<p>8</p>
<p>true</p>
<p>799.5</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>let info = {producer: "Lenovo", age: 1,
brand: "Legion"}</p>
<p>let laptop = new Laptop(info, 10)</p>
<p>laptop.turnOn()</p>
<p>console.log(laptop.showInfo())</p>
<p>laptop.turnOff()</p>
<p>laptop.turnOn()</p>
<p>laptop.turnOff()</p>
<p>console.log(laptop.isOn)</p></td>
<td
style="text-align: left;"><p>{"producer":"Lenovo","age":1,"brand":"Legion"}</p>
<p>false</p></td>
</tr>
</tbody>
</table>

## 2. Flight Schedule

You will receive an **array** with **arrays.**

The first array (**at index 0**) will hold all flights on a **specific**
**sector** in the airport. The second array (**at index 1**) will
contain **newly changed statuses** of **some** of the **flights** at
this airport. The third array (**at index 2**) will have a single
**string,** which will **be the flight status** you need to check. When
you put all flights into an **object** and change the statuses depends
on the new information on the second array. You must print all flights
with the given status from the last **array**.

- If the value of the string obtained from the third array is "**Ready
  to fly**":

<!-- -->

- then you must **print** flights that have **not changed** their
  **status** in the second array

- and automatically **change** the status to "**Ready to fly**"

<!-- -->

- Otherwise, print **only flights** that have **changed** their status.

### Examples

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
<td style="text-align: left;"><p>[['WN269 Delaware',</p>
<p>'FL2269 Oregon',</p>
<p>'WN498 Las Vegas',</p>
<p>'WN3145 Ohio',</p>
<p>'WN612 Alabama',</p>
<p>'WN4010 New York',</p>
<p>'WN1173 California',</p>
<p>'DL2120 Texas',</p>
<p>'KL5744 Illinois',</p>
<p>'WN678 Pennsylvania'],</p>
<p>['DL2120 Cancelled',</p>
<p>'WN612 Cancelled',</p>
<p>'WN1173 Cancelled',</p>
<p>'SK430 Cancelled'],</p>
<p>['Cancelled']</p>
<p>]</p></td>
<td style="text-align: left;"><p>{ Destination: 'Alabama', Status:
'Cancelled' }</p>
<p>{ Destination: 'California', Status: 'Cancelled' }</p>
<p>{ Destination: 'Texas', Status: 'Cancelled' }</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[['WN269 Delaware',</p>
<p>'FL2269 Oregon',</p>
<p>'WN498 Las Vegas',</p>
<p>'WN3145 Ohio',</p>
<p>'WN612 Alabama',</p>
<p>'WN4010 New York',</p>
<p>'WN1173 California',</p>
<p>'DL2120 Texas',</p>
<p>'KL5744 Illinois',</p>
<p>'WN678 Pennsylvania'],</p>
<p>['DL2120 Cancelled',</p>
<p>'WN612 Cancelled',</p>
<p>'WN1173 Cancelled',</p>
<p>'SK330 Cancelled'],</p>
<p>['Ready to fly']</p>
<p>]</p></td>
<td style="text-align: left;"><p>{ Destination: 'Delaware', Status:
'Ready to fly' }</p>
<p>{ Destination: 'Oregon', Status: 'Ready to fly' }</p>
<p>{ Destination: 'Las Vegas', Status: 'Ready to fly' }</p>
<p>{ Destination: 'Ohio', Status: 'Ready to fly' }</p>
<p>{ Destination: 'New York', Status: 'Ready to fly' }</p>
<p>{ Destination: 'Illinois', Status: 'Ready to fly' }</p>
<p>{ Destination: 'Pennsylvania', Status: 'Ready to fly' }</p></td>
</tr>
</tbody>
</table>

## School Register

In this problem, you have to arrange all students by **grade**. You as
the secretary of the school principal will process students and store
them into a school register before the new school year hits. As a draft,
you have a list of all the students from **last year** but mixed.
<u>Keep in mind that if a student has a lower score than 3, he does not
go into the next class</u>. As a result of your work, you have to print
the entire school register **sorted** in **ascending order by grade**
already filled with all the students from last year in the format:

**\`{nextGrade} Grade**

**List of students: {All students in that grade}**

**Average annual score from last year: {average annual score on the
entire class from last year}\`**

And empty row **{console.log}**

The input will be an **array** with strings, each containing a student's
name, last year's grade, and an annual score. The **average annual score
from last year** should be **formatted to the second decimal point**.

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
<p>"Student name: Mark, Grade: 8, Graduated with an average score:
4.75",</p>
<p>"Student name: Ethan, Grade: 9, Graduated with an average score:
5.66",</p>
<p>"Student name: George, Grade: 8, Graduated with an average score:
2.83",</p>
<p>"Student name: Steven, Grade: 10, Graduated with an average score:
4.20",</p>
<p>"Student name: Joey, Grade: 9, Graduated with an average score:
4.90",</p>
<p>"Student name: Angus, Grade: 11, Graduated with an average score:
2.90",</p>
<p>"Student name: Bob, Grade: 11, Graduated with an average score:
5.15",</p>
<p>"Student name: Daryl, Grade: 8, Graduated with an average score:
5.95",</p>
<p>"Student name: Bill, Grade: 9, Graduated with an average score:
6.00",</p>
<p>"Student name: Philip, Grade: 10, Graduated with an average score:
5.05",</p>
<p>"Student name: Peter, Grade: 11, Graduated with an average score:
4.88",</p>
<p>"Student name: Gavin, Grade: 10, Graduated with an average score:
4.00"</p>
<p>]</p></td>
<td style="text-align: left;"><p>9 Grade</p>
<p>List of students: Mark, Daryl</p>
<p>Average annual score from last year: 5.35</p>
<p>10 Grade</p>
<p>List of students: Ethan, Joey, Bill</p>
<p>Average annual score from last year: 5.52</p>
<p>11 Grade</p>
<p>List of students: Steven, Philip, Gavin</p>
<p>Average annual score from last year: 4.42</p>
<p>12 Grade</p>
<p>List of students: Bob, Peter</p>
<p>Average annual score from last year: 5.02</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'Student name: George, Grade: 5, Graduated with an average score:
2.75',</p>
<p>'Student name: Alex, Grade: 9, Graduated with an average score:
3.66',</p>
<p>'Student name: Peter, Grade: 8, Graduated with an average score:
2.83',</p>
<p>'Student name: Boby, Grade: 5, Graduated with an average score:
4.20',</p>
<p>'Student name: John, Grade: 9, Graduated with an average score:
2.90',</p>
<p>'Student name: Steven, Grade: 2, Graduated with an average score:
4.90',</p>
<p>'Student name: Darsy, Grade: 1, Graduated with an average score:
5.15'</p>
<p>]</p></td>
<td style="text-align: left;"><p>2 Grade</p>
<p>List of students: Darsy</p>
<p>Average annual score from last year: 5.15</p>
<p>3 Grade</p>
<p>List of students: Steven</p>
<p>Average annual score from last year: 4.90</p>
<p>6 Grade</p>
<p>List of students: Boby</p>
<p>Average annual score from last year: 4.20</p>
<p>10 Grade</p>
<p>List of students: Alex</p>
<p>Average annual score from last year: 3.66</p></td>
</tr>
</tbody>
</table>

## Browser History

As input, you will receive **two parameters**: **an** **object and a
string array.**

The object will be in format: **{Browser Name}:{Name of the browser},
Open tabs:\[…\], Recently Closed: \[…\], Browser Logs: \[…\]**. Your
task is to fill in the object based on the actions we will get in the
array of strings.

You can **open** any site in the world as many times as you like; if you
do that <u>add it to the open tabs</u>.

You can **close** only these tabs you have **opened already**! If the
current action contains a valid opened site, you should remove it from
"**Open Tabs**" and put it into "**Recently closed**", otherwise **don't
do anything!**

**Browser Logs** will hold every single **Valid** action, which you did
(Open and Close).

There is a **special case** in which you can get an action that says:
**"Clear History and Cache".** That means you should **empty the whole
object**.

In the end, print the object in the format:

**{Browser name}**

**Open Tabs: {\[…\]}** // Joined by comma and space

**Recently Closed: {\[…\]}** // Joined by comma and space

**Browser Logs: {\[…\]}** // Joined by comma and space

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
<td style="text-align: left;"><p>{"Browser Name":"Google Chrome","Open
Tabs":["Facebook","YouTube","Google Translate"],</p>
<p>"Recently Closed":["Yahoo","Gmail"],</p>
<p>"Browser Logs":["Open YouTube","Open Yahoo","Open Google
Translate","Close Yahoo","Open Gmail","Close Gmail","Open
Facebook"]},</p>
<p>["Close Facebook", "Open StackOverFlow", "Open Google"]</p></td>
<td style="text-align: left;"><p>Google Chrome</p>
<p>Open Tabs: YouTube, Google Translate, StackOverFlow, Google</p>
<p>Recently Closed: Yahoo, Gmail, Facebook</p>
<p>Browser Logs: Open YouTube, Open Yahoo, Open Google Translate, Close
Yahoo, Open Gmail, Close Gmail, Open Facebook, Close Facebook, Open
StackOverFlow, Open Google</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>{"Browser Name":"Mozilla Firefox",</p>
<p>"Open Tabs":["YouTube"],</p>
<p>"Recently Closed":["Gmail", "Dropbox"],</p>
<p>"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open
YouTube", "Close Dropbox"]},</p>
<p>["Open Wikipedia", "Clear History and Cache", "Open
Twitter"]</p></td>
<td style="text-align: left;"><p>Mozilla Firefox</p>
<p>Open Tabs: Twitter</p>
<p>Recently Closed:</p>
<p>Browser Logs: Open Twitter</p></td>
</tr>
</tbody>
</table>

## Sequences

You are tasked with storing sequences of numbers. You will receive an
**array of strings; each of them will contain** an unknown amount of
**arrays containing numbers,** from which you must store only the
**unique** arrays (duplicate arrays should be discarded). An array is
considered the **same** (**NOT unique**) if it contains the **same
numbers** as another array**, regardless of their order**.

After storing all arrays, your program should print them back in
**ascending** order based on their **length**, if two arrays have the
same length, they should be printed in **order of being received from
the input**. Each array should be printed in **descending order** in the
format **"\[a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>,…
a<sub>n</sub>\]"**. Check the examples below.

The **input** comes as an **array of strings** where **each entry is a
JSON representing an array of numbers**.

The **output** should be printed on the console - each array printed on
a new line in the format **"\[a1, a2, a3,… an\]",** following the
above-mentioned ordering.

### Examples

<table>
<colgroup>
<col style="width: 55%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Input</strong></th>
<th style="text-align: center;"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><p>["[-3, -2, -1, 0, 1, 2, 3, 4]",</p>
<p>"[10, 1, -17, 0, 2, 13]",</p>
<p>"[4, -3, 3, -2, 2, -1, 1, 0]"]</p></td>
<td style="text-align: left;"><p>[13, 10, 2, 1, 0, -17]</p>
<p>[4, 3, 2, 1, 0, -1, -2, -3]</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>["[7.14, 7.180, 7.339, 80.099]",</p>
<p>"[7.339, 80.0990, 7.140000, 7.18]",</p>
<p>"[7.339, 7.180, 7.14, 80.099]"]</p></td>
<td style="text-align: left;">[80.099, 7.339, 7.18, 7.14]</td>
</tr>
</tbody>
</table>
