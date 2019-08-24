# Given a string s and a dictionary of words d, determine if s can be segmented into a 
# space-separated sequence of one or more dictionary words.

sentence1 = "thisisan"
sentence2 = "thisisaninterviewforsyapsewhichisanamazingcompanytoworkfor"
sentence3 = "company"
word_bank = ["is", "a", "view", "this", "inter", "ape", "or", "intermediate", "interview", "in",
             "for", "syapse", "an", "which", "amazing", "any", "comp", "company", "tow", "work",
             "or", "am", "to"]


def is_sentence(sentence, word_bank):
	"""
	Returns: True if s can be broken into a valid sentence based on words in the dictionary
	"""
	return True


assert(is_sentence(sentence1, word_bank) == True)
assert(is_sentence(sentence2, word_bank) == True)
assert(is_sentence(sentence3, word_bank) == True)