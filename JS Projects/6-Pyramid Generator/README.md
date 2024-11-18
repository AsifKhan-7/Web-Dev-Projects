## How to get the last index of an array

```js
arr[arr.length - 1];
```

_console is an object._

---

### array methods

<ul>
<li>
push : returns the new length of the array, after adding the value you give it.
</li>

<li>
pop : returns the popped value of the array
</li>
</ul>

---

### String methods

**repeat()** : accepts a number as an argument, specifying the number of times to repeat the target string.

```js
let str = "Asif";

console.log(str.repeat(3));
//AsifAsifAsif
```

_What's off-by-one error_ ↴

**Error** : It's a common mistake in which the values are counted one step more or less. Specially jab arrays ya loop me index ka use karte hain.
