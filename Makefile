default: build

build:
	@(yarn install; yarn build;)

lint:
	@(cd portal-ui; yarn prettier --write . --loglevel warn; cd ..)

test:
	@(yarn install; yarn test;)