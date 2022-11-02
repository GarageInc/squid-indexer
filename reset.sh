make codegen
sleep 2
make build
sleep 2
make down
sleep 2
rm -rf db/migrations/*.js
make up
sleep 2
yarn db:generate
sleep 2
make migrate