boot:
	python3 -m venv venv
	. venv/bin/activate && pip install -r requirements.txt

PHONY: boot

test:
	. venv/bin/activate && python -m pytest -s

PHONY: test

fmt: 
	. venv/bin/activate && python -m black lib

PHONY: fmt

cmt: test fmt
	git add -A && \
	git commit -m "Update" && \
	git push origin master

PHONY: cmt

commit:
	git add -A && \
	git commit -m "Update" && \
	git push origin master

PHONY: commit
