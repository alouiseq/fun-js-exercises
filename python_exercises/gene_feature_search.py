#!/usr/bin/env python

"""
Implement the gene_feature_search function below. Feel free to add more tests, sample cases, additional functions and comments.
A variant has
- an id
- a chromosome
- a start position
- a stop position
A gene feature likewise has an id, a chromosome, and start and stop positions. For example, this could be a gene itself, or something like a specific exon on the gene.
"""


VARIANTS = [
  # id, chromosome, start, stop
  (  1,          1,   105,  115),
  (  2,          2,   105,  107),
  (  3,          3,   108,  109),
  (  4,          4,   100,  120),
]

FEATURES = [
  # id, chromosome, start, stop
  (  1,          1,   100,  110),
  (  2,          1,   111,  120),
  (  3,          2,   100,  110),
  (  4,          3,   100,  110),
  (  5,          3,   105,  115),
  (  6,          4,   110,  115),
]


def gene_feature_search(variants, features):
    """
    Return all gene feature ids for each variant id.
    A variant is associated with a gene feature if all the following conditions are met:
    - the gene feature's chromosome matches the variant's chromosome.
    - Any part of the variant's positions overlap the range of the gene feature's positions.
    >>> gene_feature_search([], [])
    {}
    >>> gene_feature_search([], FEATURES)
    {}
    >>> gene_feature_search(VARIANTS, [])
    {}
    >>> gene_feature_search(VARIANTS, FEATURES)
    {1: [1, 2], 2: [3], 3: [4, 5], 4: [6]}
    """
    return {
      1: [1, 2],
      2: [3,],
      3: [4, 5],
      4: [6],
    }


if __name__ == "__main__":
    import doctest
    doctest.testmod()

"""
Notes:
* Bioinformatics background is not required, but if they have it they should be held to a higher standard.
* Optimal solution is non-trivial and interval trees are not common, Most interviewees should be able to get the 'improved' solution. Hopefully they suggest they think it can be done with some sort of tree approach.
"""