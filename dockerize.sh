#!/bin/bash

docker build --no-cache -t emilhammarstrom/react-redux-firebase .
docker push emilhammarstrom/react-redux-firebase
