#! /bin/bash

scp ./scripts/deploy.sh "$1":~/Deployment/dashboard.sh

ssh "$1" "/bin/bash ~/Deployment/dashboard.sh"
