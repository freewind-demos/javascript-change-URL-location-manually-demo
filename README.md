JavaScript Change URL Location Manually Demo
============================================

`window.URL`是readonly的，直接赋值无效，但由于它是configurable，所以可以使用`Object.defineProperty`强行设值。

```
pnpm start
```