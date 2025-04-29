# Bilal Ashraf's Portfolio - Azure Resume Challenge

A modern, responsive portfolio website showcasing my work as a Java Developer and DevOps Engineer, implemented as part of the Azure Resume Challenge.

## Azure Resume Challenge Implementation

This project follows the Cloud Resume Challenge on Azure, featuring:

- Static website hosted on Azure Storage
- HTTPS enabled through Azure CDN
- Custom domain configuration (bilalashraf.xyz)
- Visitor counter using serverless architecture
- Infrastructure as Code deployment with ARM templates

## Architecture

The project uses the following Azure services:

- **Frontend**: React with TypeScript, TailwindCSS hosted on Azure Storage
- **Backend**: Azure Functions with Python
- **Database**: Azure CosmosDB (Table API) in serverless mode
- **HTTPS & CDN**: Azure CDN for secure delivery
- **Infrastructure as Code**: ARM Templates for resource provisioning

## Project Structure

```
├── api/                      # Azure Functions code
│   ├── function_app.py       # Python function for visitor counter
│   ├── host.json             # Function configuration
│   └── requirements.txt      # Python dependencies
├── infrastructure/           # IaC resources
│   ├── azuredeploy.json      # ARM template for Azure resources
│   └── deploy.sh             # Deployment script
├── src/                      # Frontend React application
│   ├── components/           # React components
│   │   └── VisitorCounter.tsx # Visitor counter component
└── README.md                 # Project documentation
```

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Azure Functions
- Azure CosmosDB
- Azure Storage
- Azure CDN

## Getting Started

### Prerequisites

- Node.js & npm installed
- Azure account
- Azure CLI installed

### Installation

1. Clone the repository:
```sh
git clone https://github.com/ashrafxbilal/azure-resume-challenge.git
cd azure-resume-challenge
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

## Features

- Responsive design
- Modern UI with shadcn-ui components
- TypeScript for type safety
- Tailwind CSS for styling
- Vite for fast development and building
- Visitor counter using Azure Functions and CosmosDB
- Infrastructure as Code with ARM templates

## Deployment

### 1. Deploy Azure Resources

Use the provided ARM template to deploy all required Azure resources:

```bash
cd infrastructure
chmod +x deploy.sh
./deploy.sh
```

This script will:
- Create a resource group
- Deploy the ARM template with all resources
- Output important information for the next steps

### 2. Build and Deploy the Frontend

1. Update the environment variable with your Function App URL:
   ```bash
   echo "VITE_VISITOR_API_URL=https://your-function-app.azurewebsites.net/api/GetVisitorCount" > .env
   ```

2. Build the React application:
   ```bash
   npm run build
   ```

3. Upload the build files to Azure Storage:
   ```bash
   az storage blob upload-batch -d '$web' -s ./dist --account-name your-storage-account-name
   ```

### 3. Deploy the Azure Function

1. Navigate to the API directory:
   ```bash
   cd api
   ```

2. Deploy the function to Azure:
   ```bash
   func azure functionapp publish your-function-app-name
   ```
