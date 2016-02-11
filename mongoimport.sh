#!/bin/bash
mongoimport --db test --collection users --drop --file data/users.json --jsonArray
mongoimport --db test --collection companies --drop --file data/companies.json --jsonArray
