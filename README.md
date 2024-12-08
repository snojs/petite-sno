# Petite Sno

> A 0.27KB cousin to snocrystal

This version is for _petite_ DOM manipulation.<br/>
This is __not__ a framework built for scale.

---

### Worried about eval?

> Or if you think its too slow

[No Eval](https://github.com/snojs/petite-sno/tree/main/noeval)

---

### The Basics

Declare a variable

```js
let count = 0;
```

Change it

```js
$("count++");
```

How do I have this show up on the users end??

```html
<!-- Make a DOM element with the id as the variable name -->
<p id="count"></p>
```

Now bind it in the JS.

```js
$scope("count");
```

__CONGRATS!!__ Now every time you update the variable it will reactively update the HTML.
