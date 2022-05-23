# Data structures tutorial for becoming a better programmer

- reasons to learn Data Structures

  - to become a better engineer
  - to pass the technical interview

- Abstraction

  - abstraction is the higher level understanding of the functionality or the definition of it.
  - in a car, the steering wheel adn the brake pedal is the abstraction, the engine is the implementation.
  - In a restaurant, the waiters are the abstraction over the chefs.
  - The push, pop, shift, unshift are the abstractions over the array data structure.

- Algorithms
  - we analyse the algorithm speed according to the input size.
  - we care about the worst care scenario.

## Big-O

- Upper bound of the running time according to the input size in the worst case scenario.
- we usually denote input sizes with n

## different algorithmic times

- Constant - O(1)
- Logarithmic - O(logn)
- Linear - O(n)
- Linearithmic - O(nlogn)
- Quadratic - O(n^2)
- Exponential - O(a^n)
- Factorial - O(n!)

- Big O only cares about the largest input sizes, we can ignore squares and constants in a cubic time algorithm
  - example - the Big O of f(n) = 8n^3 + 4n^2 + 34 is O(n^3)

## Static and Dynamic arrays

- Static Array
  - The length of the array does not change in a static array.
  - static arrays are indexable, from range [0,n-1], we can access any element using it's index.
  - One of the most common used data structures.
  - Reading,Inserting and Updating an element into a static array is done in O(1)
  - Deleting and Searching an element from a static array is O(n)
    - Deleting an element is O(n) as we need to shift n number of elements to the left when we remove an element.
    - Searching is O(n) for obvious reasons.
  - Problem with static arrays - We need to know the size of the array beforehand i.e. at compile time.

- Solution - Dynamic Arrays

  -for one element array - a static array of length 1 is created
  - if a new element needs to be added, the static array is doubled - 2 places
  - if another element needs to be added, it is doubled again and copied into the new array.
  - so the size increases like 1, 2, 4,8, 16 etc
  - the time complexity for static array and dynamic array are same for read, append, update and delete operations
  - Dynamic arrays are built into JavaScript.
