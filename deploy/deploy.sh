echo "1. stop container"
sudo docker stop nextjs-docker

echo "2. remove container"
sudo docker rm nextjs-docker

echo "3. start container"
sudo docker run -p 3000:3000 -d nextjs-docker

sudo docker ps