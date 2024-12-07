# Petite Sno

> A 0.27KB cousin to snocrystal

This version is for _petite_ DOM manipulation.<br/>
This is __not__ a framework built for scale.

---

### Worried about eval?

[No Eval](#NoEval)

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

### NoEval

If the js eval is a security concern use noeval.<br/>
The equivalent counter code is..,

```html
<p id="count"></p>
<button onclick="inc()">+</button>
<script>
  let count = 0;
  function inc(){
    count = $set(count+1);
  }
  $scope(()=>{return count},"count");
</script>
```

Noeval comes in at 201B or 0.2KB!!
