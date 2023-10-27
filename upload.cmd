doctl auth switch --context boreal
docker build -t registry.digitalocean.com/boreal-quebec/website:latest .
doctl registry login --context boreal
docker push registry.digitalocean.com/boreal-quebec/website:latest