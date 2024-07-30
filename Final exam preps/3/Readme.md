## Problem 1 - Secret Chat

*You have plenty of free time, so you decide to write a program that
conceals and reveals your received messages. Go ahead and type it in!*

On the first line of the input, you will receive the **concealed
message**. After that, until the **"Reveal"** command is given, **you
will receive strings with instructions for different operations that
need to be performed upon the concealed message** to **interpret**
**it** and reveal its actual content. There are several types of
instructions, split by **":\|:"**

- **"InsertSpace:\|:{index}"**:

  - Inserts a single **space** **at the given index**. The given index
    will always be valid.

- **"Reverse:\|:{substring}"**:

  - If the message contains the given **substring**, **cut it out**,
    **reverse** it and **add** it at the **end** of the message.

  - If not, print **"error"**.

  - This operation should replace only the first occurrence of the given
    **substring** **if there are two or more occurrences**.

- **"ChangeAll:\|:{substring}:\|:{replacement}"**:

  - Changes **all occurrences** of the given **substring** with the
    **replacement text**.

### Input / Constraints

- On the first line, you will receive a string with a message.

- On the following lines, you will be receiving commands, split by
  **":\|:"**.

### Output

- After each set of instructions, print the resulting string.

- After the **"Reveal"** command is received, print this message:  
  "**You have a new text message: {message}**"

### Examples

<table>
<colgroup>
<col style="width: 34%" />
<col style="width: 65%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'heVVodar!gniV',</p>
<p>'ChangeAll:|:V:|:l',</p>
<p>'Reverse:|:!gnil',</p>
<p>'InsertSpace:|:5',</p>
<p>'Reveal'</p>
<p>]</p></td>
<td style="text-align: left;"><p>hellodar!gnil</p>
<p>hellodarling!</p>
<p>hello darling!</p>
<p>You have a new text message: hello darling!</p></td>
</tr>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: left;"><p>[</p>
<p>'Hiware?uiy',</p>
<p>'ChangeAll:|:i:|:o',</p>
<p>'Reverse:|:?uoy',</p>
<p>'Reverse:|:jd',</p>
<p>'InsertSpace:|:3',</p>
<p>'InsertSpace:|:7',</p>
<p>'Reveal'</p>
<p>]</p></td>
<td style="text-align: center;"><p>Howare?uoy</p>
<p>Howareyou?</p>
<p>error</p>
<p>How areyou?</p>
<p>How are you?</p>
<p>You have a new text message: How are you?</p></td>
</tr>
</tbody>
</table>

## Problem 2 - Mirror words

*The SoftUni Spelling Bee competition is here. But it\`s not like any
other Spelling Bee competition out there. It\`s different and a lot more
fun! You, of course, are a participant, and you are eager to show the
competition that you are the best, so go ahead, learn the rules and
win!*

On the first line of the input, you will be given a **text string**. To
win the competition, you have to find all hidden **word pairs**, read
them, and mark the ones that are **mirror** **images** of each other.

First of all, you have to **extract the hidden word pairs**. Hidden word
pairs are:

- Surrounded by **"@"** or **"#"** (only one of the two) in the
  following pattern **\#wordOne##wordTwo#** or **@wordOne@@wordTwo@**

- At least **3 characters long each** (**without the surrounding
  symbols**).

- Made up of **letters** **only.**

If the second word, **spelled backward,** is the **same** **as the first
word** **and vice versa** (**casing matters**!), they are a **match,**
and you have to store them somewhere. **Examples** of mirror words:

**\#Part##traP# @leveL@@Level@ \#sAw##wAs#**

- If you don\`t find any valid pairs, print: **"No word pairs found!"**

- If you find valid pairs print their count: **"{valid pairs count} word
  pairs found!"**

- If there are no mirror words, print: **"No mirror words!"**

- If there are mirror words print:

> "The mirror words are:
>
> {wordOne} \<=\> {wordtwo}, {wordOne} \<=\> {wordtwo}, … {wordOne}
> \<=\> {wordtwo}"

### Input / Constraints

- **You will recive a string.**

### Output

- Print the proper output messages in the proper cases as described in
  the problem description.

- If there are pairs of mirror words, print them in the end, each pair
  separated by **", "**.

- Each pair of mirror word must be printed with **" \<=\> "** between
  the words.

### JS Examples

<table>
<colgroup>
<col style="width: 99%" />
<col style="width: 0%" />
</colgroup>
<tbody>
<tr>
<td colspan="2" style="text-align: center;"><strong>Input</strong></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><p>[</p>
<p>'@mix#tix3dj<mark>#poOl##loOp#</mark>wl@@bong&amp;song%4very$long@thong<mark>#Part##traP#</mark>#@<mark>@leveL@@Level@</mark>#<mark>#car#rac#</mark>#tu<mark>@pack@@ckap@</mark>#rr<mark>#sAw##wAs#</mark>r#@w1r'</p>
<p>]</p></td>
</tr>
<tr>
<td style="text-align: center;"><strong>Output</strong></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><p>5 word pairs found!</p>
<p>The mirror words are:</p>
<p>Part &lt;=&gt; traP, leveL &lt;=&gt; Level, sAw &lt;=&gt;
wAs</p></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>Input</strong></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">[ '#po0l##l0op# @bAc##cAB@
@LM@ML@ <mark>#xxxXxx##xxxXxx#</mark> <mark>@aba@@ababa@</mark>' ]</td>
</tr>
<tr>
<td style="text-align: center;"><strong>Output</strong></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><p><mark>2</mark> word pairs found!</p>
<p>No mirror words!</p></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>Input</strong></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">[ '#lol#lol# @#God@@doG@#
#abC@@Cba# @Xyu@#uyX#' ]</td>
</tr>
<tr>
<td style="text-align: center;"><strong>Output</strong></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><p>No word pairs found!</p>
<p>No mirror words!</p></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

## Problem 3 - Need for Speed III

*You have just bought the latest and greatest computer game – Need for
Seed III. Pick your favorite cars and drive them all you want! We know
that you can't wait to start playing.*

On the first line of the standard input, you will receive an integer
**n** – the **number of cars** that you can obtain. On the next **n**
lines, the **cars themselves** will follow with their **mileage** and
**fuel** **available**, separated by **"\|"** in the following format:

**"{car}\|{mileage}\|{fuel}"**

Then, you will be receiving different **commands**, each on a new line,
separated by **" : "**, until the **"Stop"** command is given:

- **"Drive : {car} : {distance} : {fuel}"**:

  - You need to **drive the given distance**, and you will **need the
    given** fuel to do that. If the car **doesn't have enough fuel**,
    print: "**Not enough fuel to make that ride**"

  - If the car has the required fuel available in the tank, **increase
    its mileage** with **the given distance**, **decrease its fuel with
    the given fuel,** and **print**:  
    "**{car} driven for {distance} kilometers. {fuel} liters of fuel
    consumed.**"

  - You like driving new cars only, so if a car's mileage reaches
    **100 000** km, remove it from the collection(s) and print: "**Time
    to sell the {car}!**"

- **"Refuel : {car} : {fuel}"**:

  - **Refill** the tank of your car.

  - Each tank can hold a **maximum of 75 liters of fuel**, so if the
    given amount of fuel is more than you can fit in the tank, take only
    what is required to fill it up.

  - Print a message in the following format: **"{car} refueled with
    {fuel} liters"**

- **"Revert : {car} : {kilometers}"**:

  - Decrease the **mileage** of the given **car with the given
    kilometers** and print the kilometers you have decreased it with in
    the following format:  
    **"{car} mileage decreased by {amount reverted} kilometers"**

  - If the mileage becomes **less** **than** **10 000km** **after** it
    is decreased, **just set it to 10 000km** and  
    **DO NOT print anything.**

Upon receiving the **"Stop"** command, you need to print all cars in
your possession in the following format:  
"**{car} -\> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt.**"

### Input / Constraints

- The **mileage** and **fuel** of the cars will be valid, 32-bit
  integers, and will never be negative.

- The **fuel** and **distance** amounts **in the commands will never be
  negative**.

- The **car** **names** in the **commands** will always be **valid cars
  in your possession**.

### Output

- All the output messages with the appropriate formats are described in
  the problem description.

### Examples

<table>
<colgroup>
<col style="width: 56%" />
<col style="width: 43%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: center;"><p>[</p>
<p>'3',</p>
<p>'Audi A6|38000|62',</p>
<p>'Mercedes CLS|11000|35',</p>
<p>'Volkswagen Passat CC|45678|5',</p>
<p>'Drive : Audi A6 : 543 : 47',</p>
<p>'Drive : Mercedes CLS : 94 : 11',</p>
<p>'Drive : Volkswagen Passat CC : 69 : 8',</p>
<p>'Refuel : Audi A6 : 50',</p>
<p>'Revert : Mercedes CLS : 500',</p>
<p>'Revert : Audi A6 : 30000',</p>
<p>'Stop'</p>
<p>]</p></td>
<td style="text-align: center;"><p>Audi A6 driven for 543 kilometers. 47
liters of fuel consumed.</p>
<p>Mercedes CLS driven for 94 kilometers. 11 liters of fuel
consumed.</p>
<p>Not enough fuel to make that ride</p>
<p>Audi A6 refueled with 50 liters</p>
<p>Mercedes CLS mileage decreased by 500 kilometers</p>
<p>Audi A6 -&gt; Mileage: 10000 kms, Fuel in the tank: 65 lt.</p>
<p>Mercedes CLS -&gt; Mileage: 10594 kms, Fuel in the tank: 24 lt.</p>
<p>Volkswagen Passat CC -&gt; Mileage: 45678 kms, Fuel in the tank: 5
lt.</p></td>
</tr>
<tr>
<td style="text-align: center;"><strong>Input</strong></td>
<td style="text-align: center;"><strong>Output</strong></td>
</tr>
<tr>
<td style="text-align: center;"><p>[</p>
<p>'4',</p>
<p>'Lamborghini Veneno|11111|74',</p>
<p>'Bugatti Veyron|12345|67',</p>
<p>'Koenigsegg CCXR|67890|12',</p>
<p>'Aston Martin Valkryie|99900|50',</p>
<p>'Drive : Koenigsegg CCXR : 382 : 82',</p>
<p>'Drive : Aston Martin Valkryie : 99 : 23',</p>
<p>'Drive : Aston Martin Valkryie : 2 : 1',</p>
<p>'Refuel : Lamborghini Veneno : 40',</p>
<p>'Revert : Bugatti Veyron : 2000',</p>
<p>'Stop'</p>
<p>]</p></td>
<td style="text-align: center;"><p>Not enough fuel to make that ride</p>
<p>Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel
consumed.</p>
<p>Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel
consumed.</p>
<p>Time to sell the Aston Martin Valkryie!</p>
<p>Lamborghini Veneno refueled with 1 liters</p>
<p>Bugatti Veyron mileage decreased by 2000 kilometers</p>
<p>Lamborghini Veneno -&gt; Mileage: 11111 kms, Fuel in the tank: 75
lt.</p>
<p>Bugatti Veyron -&gt; Mileage: 10345 kms, Fuel in the tank: 67 lt.</p>
<p>Koenigsegg CCXR -&gt; Mileage: 67890 kms, Fuel in the tank: 12
lt.</p></td>
</tr>
</tbody>
</table>
