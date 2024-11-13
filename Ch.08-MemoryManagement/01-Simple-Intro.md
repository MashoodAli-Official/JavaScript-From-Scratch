# Memory management in Javascript
Memory management in Javascript is handled by the runtime environment like in Web-browser and Node.js. Javascript uses a garbage collector to manage the memory by this developer don't have to worry about memory allocate or deallocate.

## Memory life cycle in Javascript
There are 3 main steps in memory allocation in Javascript,
<li>1: Allocate the memory that we need.</li>
<li>2: Use the allocated memory</li>
<li>3: Release the memory when it is not in use</li>

## In Javascript, data store in two areas of the memory
<li><b>Stack</b></li>
Stack is fast memory area using for simple data or Primitives data (Number, String, Boolean, Null,  Undefined, BigInit and Symbol) where is small and fixed size data is using. It is operates upon Last In And First Out (LIFO) manner. 
<li><b>Heap</b></li>
On the other hand Heap is a slow memory area where little bit complex data or non-Primitives data (Object, Function) is stored. The heap is using the flexible memory allocation with garbage collector to clean the unused data in the program

