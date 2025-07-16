package suitmedia

type Dictionary struct {
	data map[string][]string
}

func NewDictionary() *Dictionary {
	return &Dictionary{
		data: make(map[string][]string),
	}
}

func (d *Dictionary) Add(word string, synonym []string) {
	d.data[word] = d.appendIfMissing(d.data[word], synonym...)

	for _, s := range synonym {
		d.data[s] = d.appendIfMissing(d.data[s], word)
	}
}

func (d *Dictionary) GetSynonym(word string) []string {
	return d.data[word]
}

func (d *Dictionary) appendIfMissing(slice []string, items ...string) []string {
	existingItems := make(map[string]bool)
	for _, s := range slice {
		existingItems[s] = true
	}

	for _, item := range items {
		if !existingItems[item] {
			slice = append(slice, item)
			existingItems[item] = true
		}
	}

	return slice
}
