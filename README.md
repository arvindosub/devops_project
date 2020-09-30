# Currency Exchange API – NodeJS

## Instructions

1. docker build -t myapp .

2. docker run -d -p 8080:8080 myapp

3. Query the API
- curl localhost:8080
- curl localhost:8080/api
- curl localhost:8080/fx-static
- curl localhost:8080/fx
- curl localhost:8080/random

## Workflows

(Triggered when Commit is Pushed)
- Super-Linter Code Testing
- Telegram Notification

(Triggered when Release is Published)
- Package and Publish to Docker