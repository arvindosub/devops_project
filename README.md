# CI/CD Pipeline for GitHub Repos with Workflow Automation 

## Workflows
### (Refer to the PDF file to see what to expect when workflows are triggered)

(Triggered when a Commit is Pushed)
- Super-Linter Code Testing: To ensure that code that is changed does not break the overall project.
- Telegram Notification: To notify team members of any changes made to the repository.

(Triggered when a Release is Published)
- Package and Publish to Docker Hub: Once a stable version of the code is produced, it can be packaged and uploaded to the cloud.

# Example Repo: Currency Exchange API on NodeJS 

## Instructions

1. docker build -t <username>/app:latest .
2. docker login
3. docker push <username>/app:latest
4. docker run -d -p 8080:8080 --name myapp <username>/app:latest
5. Query the API
- curl localhost:8080
- curl localhost:8080/api
- curl localhost:8080/fx-static
- curl localhost:8080/fx
- curl localhost:8080/random