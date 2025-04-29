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
- **CI/CD**: GitHub Actions for automated testing and deployment

## Project Structure

```
├── api/                      # Azure Functions code
│   ├── function_app.py       # Python function for visitor counter
│   ├── host.json             # Function configuration
│   ├── requirements.txt      # Python dependencies
│   ├── pytest.ini            # Pytest configuration
│   └── tests/                # Python tests
│       ├── __init__.py
│       └── test_function_app.py # Tests for the visitor counter
├── infrastructure/           # IaC resources
│   ├── azuredeploy.json      # ARM template for Azure resources
│   └── deploy.sh             # Deployment script
├── .github/workflows/        # GitHub Actions workflows
│   ├── backend-ci-cd.yml     # CI/CD for backend
│   ├── backend-security-ci-cd.yml # Security-enhanced CI/CD for backend
│   ├── codeql-analysis.yml   # CodeQL security scanning
│   ├── frontend-ci-cd.yml    # CI/CD for frontend
│   └── frontend-security-ci-cd.yml # Security-enhanced CI/CD for frontend
├── docs/                     # Documentation
│   └── github-actions-setup.md # GitHub Actions setup guide
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
- GitHub Actions
- CodeQL (Security scanning)
- Syft (SBOM generation)
- Grype (Vulnerability scanning)

## Testing

The project includes automated tests for the backend Python code. To run the tests locally:

```bash
cd api
pip install pytest pytest-mock
pip install -r requirements.txt
python -m pytest
```

## CI/CD Pipelines

This project uses GitHub Actions for continuous integration and deployment:

### Backend Pipeline
- Triggered when changes are pushed to `api/` or `infrastructure/` directories
- Runs Python tests
- Generates SBOM (Software Bill of Materials) using Syft
- Scans for vulnerabilities using Grype
- If tests and security scans pass, deploys the ARM template and Function App to Azure

### Frontend Pipeline
- Triggered when changes are pushed to frontend code
- Generates SBOM (Software Bill of Materials) using Syft
- Scans for vulnerabilities using Grype
- Builds the React application
- Uploads build files to Azure Storage
- Purges the CDN cache

### Security Scanning
- CodeQL analysis runs on pull requests to main branch and on a monthly schedule
- Fails builds if high-severity security issues are detected
- SBOM generation provides inventory of all dependencies
- Grype vulnerability scanning provides defense-in-depth alongside GitHub's security features

For detailed setup instructions, see [GitHub Actions Setup](./docs/github-actions-setup.md).  
For information about security measures, see [Security Measures](./docs/security-measures.md).

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
