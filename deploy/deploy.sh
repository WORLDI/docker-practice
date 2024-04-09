echo "1. stop container"
docker stop nextjs-docker

echo "2. remove container"
docker rm nextjs-docker

echo "3. start container"
docker run -p 3000:3000 -d nextjs-docker

docker ps