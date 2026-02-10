# Kubernetes 3-Tier Architecture Project

A Kubernetes-focused project showcasing production-style orchestration of a 3-tier application using core Kubernetes primitives and best practices.

## Kubernetes Focus

This project is designed to demonstrate practical Kubernetes knowledge, not application logic.

## Kubernetes Components Used

* **Namespaces** – workload isolation (frontend, backend, database)
* **ConfigMaps** – runtime configuration injection
* **Secrets** – secure database credentials
* **StatefulSet** – MongoDB with stable identity
* **PersistentVolumeClaim (PVC)** – data persistence
* **Headless Service** – stable DNS for StatefulSet
* **ClusterIP Services** – internal service discovery
* **Port Forwarding** – local access without exposure

## Architecture (Kubernetes View)

```
Client
  ↓
Frontend Service (ClusterIP)
  ↓
Backend Service (ClusterIP)
  ↓
MongoDB StatefulSet + PVC
```

## Key Kubernetes Concepts Demonstrated

* Stateful vs stateless workloads
* Service discovery using Kubernetes DNS
* Secure configuration management
* Persistent storage handling
* Debugging CrashLoopBackOff and auth issues
* Verifying persistence inside pods

## Local Access (No External Exposure)

```bash
kubectl port-forward svc/frontend -n frontend 8080:80
```

Access:
```
http://localhost:8080
```

## Why This Project

This project reflects real production troubleshooting and Kubernetes reasoning, including:

* Debugging container crashes
* Handling database authentication
* Verifying data persistence
* Understanding pod-to-pod communication

## Author

Azeem  
DevOps / Kubernetes Enthusiast
