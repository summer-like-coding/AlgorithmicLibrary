import { lcm } from "./lcm.js";

console.log(lcm(2, 3));

// 因为使用了import .因为使用模块，那么就需要使用包管理器进行管理，npm init
// 因为使用的是import .所以它就是es modules ,所以我们需要将package.json里面的type改为modules
// 并且设置main:主入口文件
// 并且node 需要你提供后缀名来显示是不是es module
