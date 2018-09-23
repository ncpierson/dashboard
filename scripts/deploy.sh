#! /bin/bash

source ~/.nvm/nvm.sh

cd ~/Deployment

rm -rf dashboard

git clone git@github.com:ncpierson/dashboard.git

cd dashboard

yarn

yarn build

cp -R build/* /var/www/nick.exposed
