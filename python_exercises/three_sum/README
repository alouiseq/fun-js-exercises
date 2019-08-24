# Three Sum

*Suitable for:* Everyone

*Minimum expertise required:* Beginner 

## Problem Statement 

Given an array of integers, find the triples whose sum is equal to zero.

For example `three_sum([0, -1, 2, -3, 1])` should return two triples:
`({0,-1,1}, {2,-3,1})`

and `three_sum([1, -2, 1, 0, 5])` only has one:
`({1, -2, 1})`

## FAQ

> Can there be multiple triples whose sum is equal to zero? If so, what do we return?

Return some kind of iterable or list containing all the matching triples.

> What if there are no triples whose sum equals zero?

Then the iterable or list should be empty.

> Can there be duplicate triples ? 

Interviewer's choice. The below solutions treat duplicates differently, as demonstrated with the input
`[0, 0, 0, 0]` in `three_sum.py`. This is a good area to have a discussion.

## Solution Guidance

Python implementations with doctests are provided in `three_sum.py`.

### Brute Force

The most obvious solution builds all the combinations of triples and tests which ones sum to 0.
It takes cubic time.

See `three_sum.brute_force_loop` and `three_sum.brute_force_itertools`.

### Hashing Pairs

Using a hash table over the sums of pairs eliminates a loop, so its time complexity is quadratic.

See `three_sum.hash_pairs_loop`

### Closing Window

By sorting the list of integers first, we can continuously shrink the search window around 0.
This approach is quadratic.

See `three_sum.closing_window`.

### Examples and tests

Python doctests make these examples runnable. Passing tests result in no output:

```
$ ./three_sum.py
$
```

Failing tests look like:

```
$ ./three_sum.py
**********************************************************************
File "./three_sum.py", line 12, in __main__.example
Failed example:
    True
Expected:
    False
Got:
    True
**********************************************************************
1 items had failures:
   1 of   1 in __main__.example
***Test Failed*** 1 failures.
```

## Notes

Optimizing this algorithm is hard. Subquadratic solutions exist, but are an area of current research, using tools like FT or relying on assumed characteristics of the inputs. Variants on [3SUM](https://en.wikipedia.org/wiki/3SUM) are an area of ongoing research in computational geometry and have their own classification: 3SUM-hard problems. So go easy on candidates and help them not get stuck trying to find a subquadratic answer. 

Most candidates should be able to come up with a brute force solution, but the quadratic solutions are harder to get right, particularly if the duplicate-handling requirements are rigid.
