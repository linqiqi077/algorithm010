学习笔记
递归的步骤：
1.找到递归终止条件
2.每一层递归需要处理的逻辑
3.递归处理
4.数据一些额外清理

哈希表的概念：
哈希表种元素是由哈希函数确定的。将数据元素的关键K作为自变量，通过一定的函数关系（哈希函数），计算出的值，称为该元素的存储地址。常用的数据结构Set,Map存储使用的算法就是哈希表。

如果计算的值一致，称为哈希冲突,常用的解决办法：
- 拉链法： 将具有同一散列地址的记录存储在一个链表中。