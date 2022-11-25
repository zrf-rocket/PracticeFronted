我们知道在 JavaScript 的 for 循环中，可以使用 continue 语句跳过本次循环，使用 break 语句跳出（结束）整个循环。而 jQuery 除了for 循环外，还有个 each() 方法也可以用来遍历元素，不过在该方法中不是通过 continue 或 break 来跳过循环，而是使用 return 语句实现类似的功能。

1，跳出 each() 循环的语句
return true：跳过本次循环（类似 for 循环的 continue）
return false：跳出所有循环（类似 for 循环的 break）
仅仅一个return 会不起作用