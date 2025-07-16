package suitmedia

import "strings"

func HasLetters(firstWord, secondWord string) bool {
	firstWordLower := strings.ToLower(firstWord)
	secondWordLower := strings.ToLower(secondWord)

	lettersInSecondWord := make(map[rune]struct{})
	for _, letter := range secondWordLower {
		lettersInSecondWord[letter] = struct{}{}
	}

	for _, letter := range firstWordLower {
		if _, ok := lettersInSecondWord[letter]; !ok {
			return false
		}
	}

	return true
}
