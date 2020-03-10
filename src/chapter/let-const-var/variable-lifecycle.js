console.log('-------------------变量的生命周期-------------------');

/**
 *   一、变量的生命周期：
 *          1. declaration声明阶段: 正在其作用域内注册变量（不同于平时所说的变量声明）
 *          2. initialization初始化阶段：正在分配内存并且为作用域内的变量创建绑定，在此阶段变量会被自动地初始化为undefined
 *          3. assignment赋值阶段：将一个值赋给已经初始化的变量
 */
const VarLifecycle =()=>{
    console.log('变量声明',variable);
    var variable;
    console.log('before assginment',variable);
    variable = 'be assgined';
    console.log(variable);
}
VarLifecycle();