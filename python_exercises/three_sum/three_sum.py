#!/usr/bin/env python

"""Given a list of integers,
   find the triples that add to 0."""

# pylint: disable=invalid-name

import itertools

def brute_force_loop(ints):
    """A simple brute force approach
       that uses a triply-nested loop.
       Time complexity is cubic.
    >>> next(brute_force_loop([0, 0, 0]))
    (0, 0, 0)
    >>> sorted(brute_force_loop([0, 0, 0, 0]))
    [(0, 0, 0), (0, 0, 0), (0, 0, 0), (0, 0, 0)]
    >>> sorted(map(sorted, brute_force_loop([0, -4, 2, 3, -3, -5])))
    [[-5, 2, 3], [-3, 0, 3]]
    >>> sorted(map(sorted, brute_force_loop([0, -4, 2, 2, 3, -3, -5])))
    [[-5, 2, 3], [-5, 2, 3], [-4, 2, 2], [-3, 0, 3]]
    """
    for i, x in enumerate(ints[:-2]):
        for j, y in enumerate(ints[i + 1:-1], i + 1):
            for z in ints[j + 1:]:
                if x + y + z == 0:
                    yield x, y, z

def brute_force_itertools(ints):
    """A simple brute force approach
    that uses itertools.combinations.
    Time complexity is cubic.
    >>> next(brute_force_itertools([0, 0, 0]))
    (0, 0, 0)
    >>> sorted(brute_force_itertools([0, 0, 0, 0]))
    [(0, 0, 0), (0, 0, 0), (0, 0, 0), (0, 0, 0)]
    >>> sorted(map(sorted, brute_force_itertools([0, -4, 2, 3, -3, -5])))
    [[-5, 2, 3], [-3, 0, 3]]
    >>> sorted(map(sorted, brute_force_itertools([0, -4, 2, 2, 3, -3, -5])))
    [[-5, 2, 3], [-5, 2, 3], [-4, 2, 2], [-3, 0, 3]]
    """
    for triple in itertools.combinations(ints, 3):
        if sum(triple) == 0:
            yield triple

def hash_pairs_loop(ints):
    """
    Find the pairs whose sum is the opposite
    of another member of ints, using a doubly-nested loop.
    Time complexity is quadratic.
    This approach may eliminate duplicates.
    >>> next(hash_pairs_loop([0, 0, 0]))
    (0, 0, 0)
    >>> sorted(hash_pairs_loop([0, 0, 0, 0]))
    [(0, 0, 0), (0, 0, 0), (0, 0, 0)]
    >>> sorted(map(sorted, hash_pairs_loop([0, -4, 2, 3, -3, -5])))
    [[-5, 2, 3], [-3, 0, 3]]
    >>> sorted(map(sorted, hash_pairs_loop([0, -4, 2, 2, 3, -3, -5])))
    [[-5, 2, 3], [-5, 2, 3], [-4, 2, 2], [-3, 0, 3]]
    """
    for i, x in enumerate(ints[:-1]):
        sums = set()
        for y in ints[i+1:]:
            total = -x - y
            if total in sums:
                yield x, y, total
            else:
                sums.add(y)

def closing_window(ints):
    """
    When the list is sorted we can limit the search
    to similar-sized elements at opposite ends.
    Time complexity is still quadratic.
    >>> next(closing_window([0, 0, 0]))
    (0, 0, 0)
    >>> sorted(closing_window([0, 0, 0]))
    [(0, 0, 0)]
    >>> sorted(map(sorted, closing_window([0, -4, 2, 3, -3, -5])))
    [[-5, 2, 3], [-3, 0, 3]]
    >>> sorted(map(sorted, closing_window([0, -4, 2, 2, 3, -3, -5])))
    [[-5, 2, 3], [-5, 2, 3], [-4, 2, 2], [-3, 0, 3]]
    """
    sints = sorted(ints)
    for i, x in enumerate(sints):
        front = i + 1
        back = len(sints) - 1
        while front < back:
            y = sints[front]
            z = sints[back]
            total = x + y + z
            if total > 0:
                back -= 1
                continue
            front += 1
            if total == 0:
                yield x, y, z


if __name__ == "__main__":
    import doctest
    doctest.testmod()