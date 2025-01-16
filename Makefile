IMAGE_NAME=formigteen
CONTAINER_NAME=formigteen

all: build start

build:
	podman build -t $(IMAGE_NAME) .

start:
	podman run --rm --name $(CONTAINER_NAME) -p 27017:27017 $(IMAGE_NAME)

connect:
	podman exec -it $(CONTAINER_NAME) mongosh
