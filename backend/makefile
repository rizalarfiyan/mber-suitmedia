# Default target
.PHONY: all
all: tidy test

# Run go mod tidy
.PHONY: tidy
tidy:
	go mod tidy

# Run tests
.PHONY: test
test:
	go test -v ./...
