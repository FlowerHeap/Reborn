/*
 * @Author: FlowerHeap flowerheap@qq.com
 * @Date: 2024-09-13 23:55:15
 * @LastEditors: FlowerHeap flowerheap@qq.com
 * @LastEditTime: 2024-09-14 00:07:51
 * @FilePath: \Reborn\js-test\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//变量提升

function student() {
  a = 1;
  console.log('a', a);
}
student();
console.log('a', a);
//todo: 111