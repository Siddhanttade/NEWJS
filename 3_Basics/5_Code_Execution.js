let val1=10;
let val2=20;

function sum(n1,n2){
    let total=n1+n2
    return total;
}

let r1=sum(val1,val2);
let r2=sum(3,4)

//How the code is executed

/* step1:global execution occurs and code is allocated in this
step2:memory phase(every variable is taken and undefined is stored in it,function store the definition) [from above code] this is the first cycle
    val1:undefined
    val2:undefined
    sum:definition
    r1:undefined
    r2:undefined
step3:Execution phase second cycle
      val1:10
      val2:20

line4 sum:nothing is to be done because the definition is stored already

line9 sum:because we are seeing r1. A seperate new execution context is created(it occurs everytime for new function)
          it would contain new variable environment and execution thread
          Now for this new box again memory allocation and execution

          1.memory:
          val1:undefined
          val2:undefined
          total:undeined(we should refer the definition of function)
          2.Execution:
          val1:10
          val2:20
          total:30  total gets return in global execution context
          THE NEW EXECUTION CONTEXT CREATED ON LINE 9 WOULD BE DELETED AFTER THIS
        
line10 sum:because we are at r2(again new execution context is created similar to above)
          
          1.memory:
          val1:undefined
          val2:undefined
          total:undeined(we should refer the definition of function)
          
          2.Execution
          val1:3
          val2:4
          total:7  total gets return in global execution context
          THE NEW EXECUTION CONTEXT CREATED ON LINE 10 WOULD BE DELETED AFTER THIS

