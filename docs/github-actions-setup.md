# Setting Up GitHub Actions for CI/CD

This document explains how to set up the GitHub Actions workflows for continuous integration and deployment of both the frontend and backend components of the Azure Resume Challenge project.

## Required GitHub Secrets

To ensure security, all Azure credentials and sensitive information are stored as GitHub Secrets. **Never commit credentials directly to your repository!**

You need to add the following secrets to your GitHub repository:

### For Both Workflows
- `AZURE_CREDENTIALS`: JSON object containing service principal credentials
  ```json
  {
    "clientId": "<service-principal-client-id>",
    "clientSecret": "<service-principal-client-secret>",
    "subscriptionId": "<azure-subscription-id>",
    "tenantId": "<azure-tenant-id>"
  }
  ```
- `AZURE_SUBSCRIPTION_ID`: Your Azure subscription ID
- `AZURE_RESOURCE_GROUP`: The name of your Azure resource group

### For Backend Workflow
- `AZURE_LOCATION`: The Azure region where resources are deployed (e.g., "eastus")
- `AZURE_FUNCTION_APP_NAME`: The name of your Azure Function App

### For Frontend Workflow
- `AZURE_STORAGE_ACCOUNT`: The name of your Azure Storage account
- `AZURE_CDN_ENDPOINT`: The name of your CDN endpoint
- `AZURE_CDN_PROFILE`: The name of your CDN profile
- `VITE_VISITOR_API_URL`: The URL to your visitor counter API

## Creating a Service Principal

To create a service principal for GitHub Actions:

```bash
az ad sp create-for-rbac --name "github-actions-azure-resume" \
                         --role contributor \
                         --scopes /subscriptions/<subscription-id>/resourceGroups/<resource-group-name> \
                         --sdk-auth
```

The output JSON should be saved as the `AZURE_CREDENTIALS` secret.

## Workflow Behavior

### Backend CI/CD
1. Triggered when changes are pushed to the `api/` or `infrastructure/` directories
2. Runs Python tests for the Azure Function
3. If tests pass, deploys the ARM template and Function App

### Frontend CI/CD
1. Triggered when changes are pushed to the frontend code
2. Builds the React application
3. Uploads the build files to Azure Storage
4. Purges the CDN cache to ensure visitors see the latest version

## Running Tests Locally

To run the Python tests locally before pushing:

```bash
cd api
pip install pytest pytest-mock
pip install -r requirements.txt
python -m pytest tests/
```