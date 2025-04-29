#!/bin/bash

# Azure Resume Challenge Deployment Script

# Variables
RG_NAME="azure-resume-challenge-rg"
LOCATION="westus2"
TEMPLATE_FILE="azuredeploy.json"

# Colors for output
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

echo -e "${YELLOW}=== Azure Resume Challenge Deployment ===${NC}"

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo -e "${RED}Azure CLI is not installed. Please install it first.${NC}"
    echo "Visit: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

# Check if user is logged in to Azure
echo -e "${YELLOW}Checking Azure login status...${NC}"
az account show &> /dev/null
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}You are not logged in to Azure. Initiating login...${NC}"
    az login
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to login to Azure. Exiting.${NC}"
        exit 1
    fi
fi

# Create resource group if it doesn't exist
echo -e "${YELLOW}Creating resource group if it doesn't exist...${NC}"
az group create --name "$RG_NAME" --location "$LOCATION" --output none
echo -e "${GREEN}Resource group '$RG_NAME' is ready.${NC}"

# Deploy ARM template
echo -e "${YELLOW}Deploying Azure resources using ARM template...${NC}"
echo -e "${YELLOW}This may take several minutes...${NC}"

az deployment group create \
    --name "AzureResumeDeployment" \
    --resource-group "$RG_NAME" \
    --template-file "$TEMPLATE_FILE" \
    --output none

if [ $? -ne 0 ]; then
    echo -e "${RED}Deployment failed. Please check the error messages above.${NC}"
    exit 1
fi

# Get deployment outputs
DEPLOYMENT_OUTPUT=$(az deployment group show \
    --name "AzureResumeDeployment" \
    --resource-group "$RG_NAME" \
    --output json)

if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to retrieve deployment information. Please check if deployment completed successfully.${NC}"
    exit 1
fi

# Extract outputs from deployment
STORAGE_ACCOUNT=$(echo $DEPLOYMENT_OUTPUT | jq -r '.properties.outputs.storageAccountName.value')
CDN_ENDPOINT=$(echo $DEPLOYMENT_OUTPUT | jq -r '.properties.outputs.cdnEndpointUrl.value')
FUNCTION_APP=$(echo $DEPLOYMENT_OUTPUT | jq -r '.properties.outputs.functionAppUrl.value')
COSMOS_ACCOUNT=$(echo $DEPLOYMENT_OUTPUT | jq -r '.properties.outputs.cosmosAccountName.value')

# Display deployment information
echo -e "\n${GREEN}=== Deployment Completed Successfully ===${NC}"
echo -e "${YELLOW}Storage Account:${NC} $STORAGE_ACCOUNT"
echo -e "${YELLOW}CDN Endpoint:${NC} $CDN_ENDPOINT"
echo -e "${YELLOW}Function App URL:${NC} $FUNCTION_APP"
echo -e "${YELLOW}CosmosDB Account:${NC} $COSMOS_ACCOUNT"

echo -e "\n${GREEN}=== Next Steps ===${NC}"
echo -e "1. Build your React app: ${YELLOW}npm run build${NC}"
echo -e "2. Upload the build files to the Storage Account: ${YELLOW}az storage blob upload-batch -d '$web' -s ./dist --account-name $STORAGE_ACCOUNT${NC}"
echo -e "3. Deploy the Azure Function code: ${YELLOW}cd api && func azure functionapp publish $(echo $FUNCTION_APP | cut -d'/' -f3)${NC}"
echo -e "4. Update your .env file with the Function App URL: ${YELLOW}VITE_VISITOR_API_URL=$FUNCTION_APP/api/GetVisitorCount${NC}"
echo -e "5. Configure your custom domain in Azure CDN and create a CNAME record pointing to the CDN endpoint"

echo -e "\n${GREEN}Thank you for using the Azure Resume Challenge deployment script!${NC}"