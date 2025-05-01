//****************JAVASCRIPT EXECUTION CONTEXT*************

/*
=>WE HAVE 3 GLOBAL EXECUTION CONTEXT
1.GLOBAL EXECUTION CONTEXT
2.FUNCTION EXECUTION CONTEXT
3.EVAL EXECUTION CONTEXT
*/


/*
 JavaScript Execution Context 

1️ Global Execution Context:
- Created when the JS program starts.
- Sets up the global `this` object.
- Two phases: Memory Phase & Execution Phase.

2️ Memory Phase (Creation Phase):
- JS scans the code and sets up memory.
- Variables declared with `let/const/var` are initialized to `undefined`.
- Functions are stored as whole definitions.

Example Code:
------------------------------------
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
------------------------------------

Memory Phase:
val1      → undefined
val2      → undefined
addNum    → full function definition
result1   → undefined
result2   → undefined

3️⃣ Execution Phase:
- Now JS runs the code line-by-line.
val1      = 10
val2      = 5


- addNum(val1, val2) is called:
  → Creates a NEW FUNCTION EXECUTION CONTEXT
    - Memory Phase inside function:
        num1 → 10
        num2 → 5
        total → undefined
    - Execution Phase:
        total = num1 + num2 → 15
        return 15 → assigned to result1

- addNum(10, 2) is called:
  → Creates another NEW FUNCTION EXECUTION CONTEXT
    - num1 → 10
    - num2 → 2
    - total = 12 → returned to result2

4️ Summary:
- Every time a function is called, a **new execution context** is created.
- The JS engine uses a **call stack** to keep track of these contexts.
- Once a function finishes execution, its context is popped off the stack.

 Result:
result1 = 15
result2 = 12

*/

/*



 Note on Function Parameters in Execution Context

Function parameters (like num1, num2) are special:

- When a function is invoked, JavaScript creates a new execution context for it.
- During the Memory Phase of that context:
   🔹 Function parameters immediately receive the values passed as arguments.
   🔹 So, num1 and num2 are **not initialized to `undefined`** like regular variables.
   🔹 They are assigned real values right away from the function call.

Example:
---------------
function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}
addNum(10, 2);
---------------

In the function's memory phase:
num1 → 10
num2 → 2
total → undefined

Then in the execution phase:
total = num1 + num2 → 12
return 12

 Summary:
- Parameters = immediately assigned argument values.
- Local variables (like `total`) = start as `undefined`.
*/

