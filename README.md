Issue: Async iteration does not work if `Symbol.asyncIterator` is not defined.

```
> npm i
> npm run build
```

Does not work with Node 8:

```
> node -v
v8.11.3
> node dist/index.js
TypeError: Object is not async iterable
    at _asyncIterator (/tmp/babel-issue-async-iteration/dist/index.js:1:387)
    at main (/tmp/babel-issue-async-iteration/dist/index.js:40:26)
    at Object.<anonymous> (/tmp/babel-issue-async-iteration/dist/index.js:60:1)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
```

But works with Node 10:

```
> node -v
v10.8.0
> node dist/index.js
1
```
