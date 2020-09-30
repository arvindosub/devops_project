# Currency Exchange API – NodeJS

## Workflows

(Triggered when Commit is Pushed)
- Super-Linter Code Testing: To ensure that code that is changed does not break the overall project.
- Telegram Notification: To notify team members of any changes made to the repository.

(Triggered when Release is Published)
- Package and Publish to Docker: Once a stable version of the code is produced, it can be packaged and uploaded to the cloud.

## Instructions

1. docker build -t myapp .

2. docker login

3. docker push myapp

4. docker run -d -p 8080:8080 myapp

5. Query the API
- curl localhost:8080
- curl localhost:8080/api
- curl localhost:8080/fx-static
- curl localhost:8080/fx
- curl localhost:8080/random
