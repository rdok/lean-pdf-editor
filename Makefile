start: install
	yarn start

install:
	yarn

ci.lint:
	CI=true npx eslint src
ci.build:

prettier-fix:
	yarn run prettier:fix
