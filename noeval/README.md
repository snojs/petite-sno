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

Noeval comes in at 191B or 0.19KB!!
