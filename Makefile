default: build

build:
	@(yarn install; yarn build;)

lint:
	@(yarn prettier --write . --loglevel warn; cd ..)

test:
	@(yarn install; yarn test;)

test-warnings:
	./check-warnings.sh
