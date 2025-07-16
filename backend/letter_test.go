package suitmedia

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestLetter(t *testing.T) {
	testCases := []struct {
		firstWord  string
		secondWord string
		expected   bool
	}{
		{
			firstWord:  "cat",
			secondWord: "antarctica",
			expected:   true,
		},
		{
			firstWord:  "cat",
			secondWord: "australia",
			expected:   false,
		},
		{
			firstWord:  "cat",
			secondWord: "ANTARCTICA",
			expected:   true,
		},
	}

	for _, tc := range testCases {
		result := HasLetters(tc.firstWord, tc.secondWord)
		if tc.expected {
			assert.True(t, result, "should have returned true for %s in %s", tc.firstWord, tc.secondWord)
		} else {
			assert.False(t, result, "should have returned false for %s in %s", tc.firstWord, tc.secondWord)
		}
	}
}
