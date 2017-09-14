## Build the docker Image

$ docker build -t image .

## Run Docker container

$ docker run -p <public_port>:<private_port> -d <image>  
docker run -it -p 8082:8082 -d image

## Remove all images and containers

# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)