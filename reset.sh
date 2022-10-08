make codegen
make build
make down
rm -rf db/migrations/*.js
make up
yarn db:generate
make migrate