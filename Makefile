start: install
	yarn start

install:
	yarn

test: install
	yarn test

ci.lint:
	CI=true npx eslint src
ci.test:
	CI=true yarn test
ci.build:
	NODE_ENV=production yarn build
