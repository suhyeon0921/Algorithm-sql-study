class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        one = len(word1)
        two = len(word2)

        smallest = min(one, two)

        mergeResponse = ''

        for letter in range(smallest):
            mergeResponse += word1[letter]
            mergeResponse += word2[letter]

        if one < two:
            mergeResponse += word2[one: ]
        else: 
            mergeResponse += word1[two: ]
        
        return mergeResponse
        