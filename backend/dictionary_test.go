package suitmedia

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestDictionary(t *testing.T) {
	dic := NewDictionary()

	t.Logf("Create new dictionary...\n")
	t.Logf("Add new data:\n")

	t.Logf("big => large, great\n")
	dic.Add("big", []string{"large", "great"})

	t.Logf("big => huge, fat\n")
	dic.Add("big", []string{"huge", "fat"})

	t.Logf("huge => enormous, gigantic\n")
	dic.Add("huge", []string{"enormous", "gigantic"})

	t.Logf("Running 5 tests...\n")

	t.Logf("[1] Run test...\n")
	assert.ElementsMatch(t, []string{"large", "great", "huge", "fat"}, dic.GetSynonym("big"), "The synonyms for 'big' should match 'large', 'great', 'huge', 'fat'")

	t.Logf("[2] Run test...\n")
	assert.ElementsMatch(t, []string{"big", "enormous", "gigantic"}, dic.GetSynonym("huge"), "The synonyms for 'huge' should match 'big', 'enormous', 'gigantic'")

	t.Logf("[3] Run test...\n")
	assert.ElementsMatch(t, []string{"huge"}, dic.GetSynonym("gigantic"), "The synonyms for 'gigantic' should match 'huge'")

	t.Logf("[4] Run test...\n")
	assert.Nil(t, dic.GetSynonym("colossal"), "The synonyms for 'colossal' should match 'nil'")
}
