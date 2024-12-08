# The final Petite Sno Varient

> Give it to me straight doc why does this one exist??

__NOT SO PETITE USES CLASSES; ALL OTHER VERSIONS USE ID__

This is the ___best___ version of Petite Sno.<br/>
It is not the smallest or the fastest but there is __NO BOILERPLATE__!

...Lets compare...

1. Regular Petite
_Uses eval, short code, security concerns_

```html
<p id="count"></p>
<button onclick="add()">+</button>
<script>
  let count = 0;
  $scope("count");
  function add(){
    $("count++");
  }
</script>
```

2. No Eval
_No security concerns, a bit verbose_

```html
<p id="count"></p>
<button onclick="add()">+</button>
<script>
  let count = 0;
  $scope(()=>{return count},"count");
  function add(){
    count = $set(count+1);
  }
</script>
```

3. Not so Petite Sno
_Larger size, no concerns, 0 boilerplate_

```html
<p class="count"></p>
<button onclick="add()">+</button>
<script>
  state.count = 0;
  function add(){
    state.count++;
  }
</script>
```

### Other key features

Notsopetite has array functionality.<br/>
__ALWAYS MATCH VARIABLE NAMES TO CLASSES__

```js
let arr ["a","b"];
/*
array, template
You can reference {{item}} for the value and {{i}} for the index
*/
state.text = forEach(arr, "<li id='{{i}}'>{{item}}</li>")
```
