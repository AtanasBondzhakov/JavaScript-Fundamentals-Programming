# Problem 1 - Registration

*John wants to register on a sales site, but too many people call him
John. It asks you to write a program that will generate an original
username.*

On the first line, you will **receive** **the username** that he wants
to use in the first place. On the following lines, you will be receiving
**commands** until the **"Registration"** command. There are **five**
possible commands:

- **"Letters {Lower/Upper}"**

  - **Replace** all letters with lower case or with upper case, then
    **print** the result.

- "**Reverse {startIndex} {endIndex}"**

  - **Reverse** the substring from the start index until the end index
    (both inclusive), then **print** it. Do **NOT** change it in the
    username.

> **Note:** Check if the indices are valid. If they aren't - skip the
> command. An index is valid when it is **non-negative** and **less than
> the size** of the collection.

- "**Substring {substring}"**

  - If the username **contains** **the** **given substring**, **cut** it
    out and **print** the result without the cut substring.

  - Otherwise, print:

> **"The username {string} doesn't contain {substring}."**

- "**Replace {char}"**

  - **Replace** all occurences of the **given char** with a **dash**
    (**-**) and **print** the result.

- "**IsValid {char}"**

  - For a username to be **valid,** it must contain **the given char**.
    If it is, print **"Valid username."**.

  - Otherwise, print: **"{char} must be contained in your username."**

### Input

- On the **first line,** you are going to receive the **string**.

- On the following **lines**, until the **"Registration"** command is
  received, you will be receiving commands.

- All commands are **case-sensitive**.

### Output

- **Print** the **output** of every **command** in the **format**
  **described** **above**.

### Examples

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
<td><p>['John',</p>
<p>'Letters Lower',</p>
<p>'Substring SA',</p>
<p>'IsValid @',</p>
<p>'Registration']</p></td>
<td><p>john</p>
<p>The username john doesn't contain SA.</p>
<p>@ must be contained in your username.</p></td>
</tr>
<tr>
<td><p>['ThisIsSoftUni',</p>
<p>'Reverse 1 3',</p>
<p>'Replace S',</p>
<p>'Substring hi',</p>
<p>'Registration']</p></td>
<td><p>sih</p>
<p>ThisIs-oftUni</p>
<p>TsIs-oftUni</p></td>
</tr>
</tbody>
</table>
