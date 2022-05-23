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
