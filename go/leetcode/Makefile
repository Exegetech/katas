.PHONY: test testv fmt commit

testv:
	cd problems && go test -v ./...

test:
	cd problems && go test ./...

fmt:
	gofmt -s -w .

commit: test fmt
	git add -A && \
	git commit -m "Update" && \
	git push origin master
