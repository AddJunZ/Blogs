# 无限滚动

## 监听scroll
每当我们做无限滚动需求的时候，我们会经常使用下面这种方法来判断是否触底。

```js{4}
window.addEventListener('scroll', onScroll);
const onScroll = () => {
  const elem = document.querySelector('container');
  if (elem.scrollHeight >= elem.clientHeight + elem.scrollTop) {
    // loadMore...
  }
}
const loadMore = () => {
  // your logic code
}
```
这一般会起到不错的效果。然而当我们遇到某些场景下【**比如说在移动端**】，我们可能会遇到【**一像素**】问题，这时候我们可能代码写成这样。
```js{4}
window.addEventListener('scroll', onScroll);
const onScroll = () => {
  const elem = document.querySelector('container');
  if (elem.scrollHeight - 10 >= elem.clientHeight + elem.scrollTop) {
    // loadMore...
  }
}
const loadMore = () => {
  // your logic code
}
```
不得已必须在相等像素前做`loadMore`操作，这就会带来新的问题，就是在上面例子中的【**10像素**】区间，滚动事件一直在触发，因此我们就需要对`loadMore`方法进行【**节流**】。这无疑会给加重我们的代码量。最重要的是一般这个监听事件会伴随着该组件的整个生命周期，通常在组件```destroyed```钩子取消监听，会比较消耗性能。

## IntersectionObserver

> 这是一个能监听目标元素与其祖先元素或顶级视图的交叉状态。[MDN介绍地址](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)，[阮一峰教程](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)。这是DOM的自己的原生Api。

```vue
<template>
  <div v-for="(item,index) in list" :key="index">
    <div>{{ item }}</div>
  </div>
  <div id="bottom"></div>
</template>
```
将使用`IntersectionObserver`监听的元素放在渲染列表的最底下，当触底的时候，就会监听到视图交叉状态发生变化，执行对应的监听函数。
```js
const loadMore = function() {
  console.log('loadMore');// fetch data, and reload view due to vm's data change.
};
const observer = new IntersectionObserver(function(entries) {
  // intersectionRatio 为 0 表示不在视图窗口内
  if (entries[0].intersectionRatio <= 0) return;
  // 在窗口内
  loadMore();
});
const bottom = document.querySelector('#bottom');
observer.observe(bottom);

// 常用接口
/**
 * 1. observer.observe(dom) 监听某个元素
 * 2. observer.unobserve(dom) 取消某个元素的监听
 * 3. observer.disconnect() observer停止监听工作
*/
```