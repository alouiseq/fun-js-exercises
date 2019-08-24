def water(topography):
    """You're looking at the topography of some land (2D only) and wondering how much water they 
    will hold if it were poured over the land. (Think ant farm perhaps?)
	
	The land is represented as a list, with the value in the list being the height of the land at 
	that point.
	For example:
	O is land
	w is water
	The list [5, 3, 2, 4, 1, 2] would look like this: 
	O
	OwwO
	OOwO
	OOOOwO
	OOOOOO 
	and hold 4 units of water
	Given a list of arbitrary length, how much water will the land hold?
	"""
	return

"""
Notes:
* A naive solution will probably run in quadratic time and calculates the amount of water for each
index as you go through the list.
* The optimal solution pre-computes some values and runs in linear time.
* Edge cases to consider: range of inputs (negative values?), ints vs. floats, height of "empty"
land on either edge (how does it interact with negative values, empty list, really long list?)
"""