# Arrays

## Sum First and Last Array Elements

Write a function that receives an **array of numbers** and prints the
sum of the **first** and **last** element in that array.

### Examples

| **Input**          | **Output** |
|:-------------------|:-----------|
| \[20, 30, 40\]     | 60         |
| \[10, 17, 22, 33\] | 43         |
| \[11, 58, 69\]     | 80         |

### 

## Day of Week

Write a program, which receives a **number** and prints the
corresponding **name** of the **day** of the week (in English).

If the number is **NOT** a valid day, print: **"Invalid day!"**.

### Examples

| **Input** | **Output**   |
|:----------|:-------------|
| 3         | Wednesday    |
| 6         | Saturday     |
| 11        | Invalid day! |

### 

## Reverse an Array of Numbers

Write a program, which receives a number **n** and an **array** of
elements. Your task is to **create** a new array with **n** numbers from
the original array, **reverse** it and print its elements on a single
line, space-separated.

### Examples

| **Input**                 | **Output** |
|:--------------------------|:-----------|
| 3, \[10, 20, 30, 40, 50\] | 30 20 10   |
| 4, \[-1, 20, 99, 5\]      | 5 99 20 -1 |
| 2, \[66, 43, 75, 89, 47\] | 43 66      |

### 

## Reverse In Place

Write a program, which receives an **array of strings**. Your task is to
**reverse** the array **without** creating a new array. **Print** the
resulting elements on a single line, space-separated.

### Examples

| **Input**                             | **Output**          |
|:--------------------------------------|:--------------------|
| \['a', 'b', 'c', 'd', 'e'\]           | e d c b a           |
| \['abc', 'def', 'hig', 'klm', 'nop'\] | nop klm hig def abc |
| \['33', '123', '0', 'dd'\]            | dd 0 123 33         |

### 

## Sum Even Numbers

Write a program, which receives an **array** of strings**,** **parse**
them into numbers, and **sum** only the **even** numbers.

### Examples

| **Input**                   | **Output** |
|:----------------------------|:-----------|
| \['1','2','3','4','5','6'\] | 12         |
| \['3','5','7','9'\]         | 0          |
| \['2','4','6','8','10'\]    | 30         |

### 

## Even and Odd Subtraction

Write a program that calculates the **difference** between the sum of
the **even** and the sum of the **odd** numbers in an array.

### Examples

| **Input**       | **Output** |
|:----------------|:-----------|
| \[1,2,3,4,5,6\] | 3          |
| \[3,5,7,9\]     | -24        |
| \[2,4,6,8,10\]  | 30         |

### 

## Equal Arrays

Write a program, which receives two **string** arrays containing number
representations, and prints on the console whether they are
**identical**.

Arrays **are identical** if their elements at same indexes are
**equal**. If they are identical, find the **sum** of the first array
and print the following message:

> **\`Arrays are identical. Sum: {sum}\`**

If the arrays are **NOT identical,** find the **first index** where the
arrays **differ** and print the following message:

> **\`Arrays are not identical. Found difference at {index} index\`**

### Examples

| **Input** | **Output** |
|:---|:---|
| \['10','20','30'\], \['10','20','30'\] | Arrays are identical. Sum: 60 |
| \['1','2','3','4','5'\], \['1','2','4','4','5'\] | Arrays are not identical. Found difference at 2 index |
| \['1'\], \['10'\] | Arrays are not identical. Found difference at 0 index |

### 

## Condense Array to Number

Write a program, which receives an array of numbers, and **condenses**
them by **summing** adjacent couples of elements until a **single
number** is obtained.

### Examples

For example, if we have 3 elements **\[2,** **10,** **3\]**, we sum the
first two and the second two elements and obtain **{2+10, 10+3} = {12,
13}**, then we sum again all adjacent elements and obtain **{12+13} =
{25}.**

| **Input**     | **Output** |
|:--------------|:-----------|
| \[2,10,3\]    | 25         |
| \[5,0,4,1,2\] | 35         |
| \[1\]         | 1          |

### 
