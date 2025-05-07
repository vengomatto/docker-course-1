# docker-course-1

## Docker compose

### Run compose
```sh
docker compose up -d --no-deps --build 
```

### Open hostname endpoint
- Navigate to http://localhost/hostname

### Stop compose
```sh
docker compose down
```

## K8s + Kind

### Build and push course image
```sh
docker build . --push  -t darkares96/unige-course-1:course-app-1
```

### Create cluster
```sh
kind create cluster --config ./k8s/kind/multi-node.yaml
```

### Switch context to kind cluster
```sh
kubectl config use-context kind-kind
```

### Deploy application
```sh
kubectl apply -f ./k8s/manifests/app.yaml
```

### Show Nodes using kubectl
```sh
kubectl get node -o wide
```

### Show Kind nodes containers
```sh
docker ps | grep kind-
```

### Show containers running on a Kind node
```sh
KIND_NODE_CONTAINER_ID="SET_THIS"
docker exec -it ${KIND_NODE_CONTAINER_ID} /bin/bash
crictl ps
```

### Forward local port 80 traffic to our nginx service in K8s
```sh
kubectl -n course-app port-forward svc/nginx-course-app 3000:80
```

### Open k8snode endpoint
- Navigate to http://localhost/k8snode

### Delete cluster
```sh
kind delete cluster
```
