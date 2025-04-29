import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono rounded-sharp mb-4">
              Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Recent Projects
            </h1>
            <div className="h-1 w-20 bg-highlight mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A showcase of my technical skills and entrepreneurial ventures, demonstrating expertise in Java, DevOps, and problem-solving.
            </p>
          </div>

          <div className="space-y-24">

{/* DevOps-Powered Portfolio Project */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 lg:pr-6">
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  <span className="text-highlight mr-2">#</span> DevOps-Powered Portfolio
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Modern, cloud-native portfolio application showcasing advanced DevOps practices including CI/CD, containerization, Kubernetes, IaC, and GitOps. Completed in 2025.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">Azure</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">Kubernetes</span>
                    
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">GitHub Actions</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">ArgoCD</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">Helm</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">Docker</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">GitOps</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">CI/CD</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-mono font-bold mb-3">Key Features</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>Multi-Stage CI/CD Pipeline (GitHub Actions)</li>
                    <li>Containerization (Multi-stage Docker builds)</li>
                    <li>Kubernetes Orchestration (AKS, Helm)</li>
                    <li>GitOps Workflow (ArgoCD)</li>
                    <li>NGINX Ingress with custom domain</li>
                    <li>Resource Optimization & Health Checks</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/ashrafxbilal/portfolio-devopsified.git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Github size={16} className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-secondary/80 backdrop-blur-sm p-6 rounded-sharp shadow-lg border border-border hover:border-highlight transition-all duration-300">
                <div className="bg-background rounded-sharp border border-border p-4 h-96 flex flex-col">
                  <div className="mb-4 p-2 bg-muted rounded-sharp border-b border-border flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono">DevOps Pipeline</div>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <div className="mb-4 p-3 bg-muted rounded-sharp">
                      <h4 className="text-sm font-bold mb-2">CI/CD Pipeline Status</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-medium">Build</span>
                              <span className="text-xs font-mono text-green-500">Passed</span>
                            </div>
                            <div className="h-1 w-full bg-background rounded-full mt-1">
                              <div className="h-1 w-full bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-medium">Test</span>
                              <span className="text-xs font-mono text-green-500">Passed</span>
                            </div>
                            <div className="h-1 w-full bg-background rounded-full mt-1">
                              <div className="h-1 w-full bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-medium">Docker Build</span>
                              <span className="text-xs font-mono text-green-500">Passed</span>
                            </div>
                            <div className="h-1 w-full bg-background rounded-full mt-1">
                              <div className="h-1 w-full bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 mr-2 flex-shrink-0 animate-pulse"></div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-medium">Deploy to AKS</span>
                              <span className="text-xs font-mono text-blue-500">In Progress</span>
                            </div>
                            <div className="h-1 w-full bg-background rounded-full mt-1">
                              <div className="h-1 w-3/4 bg-blue-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 bg-muted rounded-sharp">
                        <h4 className="text-xs font-bold mb-2">Infrastructure</h4>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px]">AKS Cluster</span>
                            <span className="text-[10px] font-mono text-green-500">Healthy</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px]">Nodes</span>
                            <span className="text-[10px] font-mono">2/2</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px]">Pods</span>
                            <span className="text-[10px] font-mono">12/12</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-sharp">
                        <h4 className="text-xs font-bold mb-2">ArgoCD Sync</h4>
                        <div className="flex items-center">
                          <div className="w-full bg-background rounded-full h-2 mr-2">
                            <div className="bg-highlight h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                          <span className="text-xs font-mono">Synced</span>
                        </div>
                        <div className="mt-2 text-[10px] text-muted-foreground">Last: 10 minutes ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono">GitHub Actions</span>
                      <span className="font-mono text-highlight">Run #42</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Azure AKS Project */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 lg:pr-6">
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  <span className="text-highlight mr-2">#</span> Azure AKS Multi-Environment Deployment
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Infrastructure as Code implementation for deploying Azure Kubernetes Service clusters 
                  across multiple environments using Terraform and Azure DevOps pipelines. Completed in 2025.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">Terraform</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">Azure</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">Kubernetes</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">AKS</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">IaC</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">DevOps</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">CI/CD</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-mono font-bold mb-3">Key Features</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>Custom modules for reusable infrastructure components</li>
                    <li>Multi-AZ deployment for high availability</li>
                    <li>Node pool auto-scaling configuration</li>
                    <li>Azure-native network plugin integration</li>
                    <li>Remote state storage in Azure Storage</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/ashrafxbilal/azure-aks-terraform.git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Github size={16} className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-secondary/80 backdrop-blur-sm p-6 rounded-sharp shadow-lg border border-border hover:border-highlight transition-all duration-300">
                <pre className="font-mono text-xs text-muted-foreground overflow-auto p-4 bg-background rounded-sharp border border-border h-96">
{`# main.tf - Azure AKS Terraform Configuration

module "aks_cluster" {
  source              = "./modules/aks"
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location
  cluster_name        = "\${var.prefix}-aks-\${var.environment}"
  kubernetes_version  = var.kubernetes_version
  
  default_node_pool = {
    name                = "default"
    node_count          = var.node_count
    vm_size             = var.vm_size
    availability_zones  = ["1", "2", "3"]
    enable_auto_scaling = true
    min_count           = var.min_node_count
    max_count           = var.max_node_count
    os_disk_size_gb     = var.os_disk_size_gb
  }

  network_profile = {
    network_plugin    = "azure"
    load_balancer_sku = "standard"
    network_policy    = "calico"
  }
  
  identity_type = "SystemAssigned"
  
  tags = {
    Environment = var.environment
    ManagedBy   = "Terraform"
    Owner       = "DevOps"
  }
}`}
                </pre>
              </div>
            </div>

            {/* Moodify Project */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  <span className="text-highlight mr-2">#</span> Moodify Firefox Extension
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  A Firefox extension that enhances browsing with intuitive color adjustments that adapt to content sentiment. Developed in 2025.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">JavaScript</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">CSS</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Firefox</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">WebExtension</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">UI/UX</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-mono font-bold mb-3">Features</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>Mood-based color adaptation that adjusts website colors according to content sentiment</li>
                    <li>Customization options to fine-tune color intensity and contrast</li>
                    <li>Easy toggle functionality to quickly enable or disable the extension</li>
                    <li>Lightweight implementation with minimal performance impact</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://addons.mozilla.org/en-US/firefox/addon/moodify/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <ExternalLink size={16} className="mr-2" /> View on Firefox Add-ons
                  </a>
                </div>
              </div>
              <div className="bg-secondary/80 backdrop-blur-sm p-6 rounded-sharp shadow-lg">
                <div className="bg-background rounded-sharp border border-border p-4 h-96 flex flex-col">
                  <div className="mb-4 p-2 bg-muted rounded-sharp border-b border-border flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono">Moodify Extension</div>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div className="p-3 bg-muted rounded-sharp">
                      <h4 className="text-sm font-bold mb-2">Mood Settings</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Calm</span>
                          <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Energetic</span>
                          <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Focused</span>
                          <div className="w-4 h-4 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Relaxed</span>
                          <div className="w-4 h-4 rounded-full bg-purple-400"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-muted rounded-sharp">
                      <h4 className="text-sm font-bold mb-2">Intensity</h4>
                      <div className="h-2 bg-background rounded-full">
                        <div className="h-2 w-3/4 bg-highlight rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-3 bg-muted rounded-sharp">
                      <h4 className="text-sm font-bold mb-2">Contrast</h4>
                      <div className="h-2 bg-background rounded-full">
                        <div className="h-2 w-1/2 bg-highlight rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <button className="w-full py-2 bg-highlight hover:bg-highlight/90 text-black font-medium rounded-sharp text-sm transition">
                      Apply Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rowzah Project */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  <span className="text-highlight mr-2">#</span> Rowzah - Online Umrah Booking Platform
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  India's first online Umrah booking platform, leveraging technical insights to address a $20B market gap in religious tourism.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">JavaScript</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">CSS</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Firefox</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">WebExtension</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">UI/UX</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-mono font-bold mb-3">Key Achievements</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>Built a scalable platform architecture from the ground up</li>
                    <li>Designed user-centric journey to optimize conversion rates</li>
                    <li>Implemented secure payment processing and booking management system</li>
                    <li>Developed comprehensive backend APIs for booking, user management, and inventory</li>
                    <li>Attracted 415 unique visitors, validating the platform's demand and usability</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://rowzah.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <ExternalLink size={16} className="mr-2" /> Visit Website
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center items-center bg-secondary/80 backdrop-blur-sm p-8 rounded-sharp shadow-lg border border-border hover:border-highlight transition-all duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-highlight/50 to-transparent rounded-sharp transform rotate-2"></div>
                  <div className="relative z-10 bg-card shadow-lg rounded-sharp p-8 border border-border">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold font-mono">Rowzah</h3>
                      <p className="text-xs text-muted-foreground">India's First Umrah Platform</p>
                    </div>
                    <div className="space-y-4 mb-8">
                      <div className="p-3 bg-muted rounded-sharp">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Active Users</span>
                          <span className="text-xs font-mono">415</span>
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-sharp">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Social Reach</span>
                          <span className="text-xs font-mono">80,000+</span>
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Webinar Attendees</span>
                          <span className="text-xs font-mono">150</span>
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Market Size</span>
                          <span className="text-xs font-mono">$20B</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-xs text-muted-foreground">
                      Founded 2024 • New Delhi, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stock Market Prediction Project */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  <span className="text-highlight mr-2">#</span> Stock Market Prediction using LSTM
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  A deep learning model using Long Short-Term Memory (LSTM) neural networks to predict stock market prices (AAPL), employing technical indicators and feature engineering. Completed in 2022.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Python</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">LSTM</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Deep Learning</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">TensorFlow/Keras</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Pandas</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">NumPy</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-mono font-bold mb-3">Key Features</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>LSTM model for time-series forecasting</li>
                    <li>Analysis of historical AAPL stock data</li>
                    <li>Integration of technical indicators (e.g., MA, RSI)</li>
                    <li>Feature engineering for improved prediction</li>
                    <li>Demonstrated ability to capture temporal dependencies</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/ashrafxbilal/stock-market-prediction.git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Github size={16} className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>
              <div className="bg-secondary/80 backdrop-blur-sm p-6 rounded-sharp shadow-lg border border-border hover:border-highlight transition-all duration-300">
                <div className="bg-background rounded-sharp border border-border p-4 h-96 flex flex-col">
                  <div className="mb-4 p-2 bg-muted rounded-sharp border-b border-border flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono">LSTM Stock Prediction</div>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <div className="mb-4 p-3 bg-muted rounded-sharp">
                      <h4 className="text-sm font-bold mb-2">AAPL Stock Prediction</h4>
                      <div className="relative h-40 w-full bg-background rounded-sharp p-2">
                        <div className="absolute inset-0 p-2">
                          {/* Stock chart visualization */}
                          <div className="relative h-full w-full">
                            {/* Actual price line */}
                            <div className="absolute bottom-0 left-0 w-full h-full">
                              <svg viewBox="0 0 100 40" className="h-full w-full" preserveAspectRatio="none">
                                <path d="M0,20 L5,18 L10,22 L15,15 L20,17 L25,16 L30,20 L35,18 L40,15 L45,10 L50,12 L55,8 L60,15 L65,14 L70,18 L75,16 L80,20 L85,15 L90,17 L95,13 L100,15" 
                                  stroke="#a3a3a3" strokeWidth="1" fill="none" />
                              </svg>
                            </div>
                            {/* Predicted price line */}
                            <div className="absolute bottom-0 left-0 w-full h-full">
                              <svg viewBox="0 0 100 40" className="h-full w-full" preserveAspectRatio="none">
                                <path d="M60,15 L65,12 L70,16 L75,14 L80,18 L85,13 L90,15 L95,10 L100,12" 
                                  stroke="#22c55e" strokeWidth="1.5" strokeDasharray="2" fill="none" />
                              </svg>
                            </div>
                            {/* Prediction point marker */}
                            <div className="absolute left-[60%] bottom-[37.5%] w-2 h-2 bg-highlight rounded-full"></div>
                          </div>
                          <div className="absolute bottom-1 right-2 text-[10px] text-muted-foreground">Prediction Start →</div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 bg-muted rounded-sharp">
                        <h4 className="text-xs font-bold mb-2">Model Accuracy</h4>
                        <div className="flex items-center">
                          <div className="w-full bg-background rounded-full h-2 mr-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '87%'}}></div>
                          </div>
                          <span className="text-xs font-mono">87%</span>
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-sharp">
                        <h4 className="text-xs font-bold mb-2">RMSE</h4>
                        <div className="flex items-center">
                          <div className="w-full bg-background rounded-full h-2 mr-2">
                            <div className="bg-yellow-400 h-2 rounded-full" style={{width: '23%'}}></div>
                          </div>
                          <span className="text-xs font-mono">2.3</span>
                        </div>
                      </div>
                    </div>
                    {/* Technical indicators section removed to fix alignment */}
                  </div>
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono">LSTM Layers: 3</span>
                      <span className="font-mono text-highlight">Epochs: 100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pattern Recognition Search Project */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 lg:pr-6">
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  <span className="text-highlight mr-2">#</span> Pattern Recognition Search (IEEE Paper)
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Published research paper in IEEE proposing Pattern Recognition Search (PRS), an advancement over Interpolation Search for sorted arrays. Completed in 2022.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Algorithms</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Data Structures</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Research</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">IEEE</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Search Algorithms</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-mono font-bold mb-3">Key Contributions</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>Proposed novel Pattern Recognition Search (PRS) algorithm</li>
                    <li>Demonstrated PRS as an advancement over Interpolation Search</li>
                    <li>Utilized pattern-based divide and conquer strategy</li>
                    <li>Addressed key drawbacks of Interpolation Search</li>
                    <li>Published in a peer-reviewed IEEE conference</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://ieeexplore.ieee.org/document/9753537" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <ExternalLink size={16} className="mr-2" /> View Publication
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-secondary/80 backdrop-blur-sm p-6 rounded-sharp shadow-lg border border-border hover:border-highlight transition-all duration-300">
                <div className="bg-background rounded-sharp border border-border p-4 h-96 flex flex-col">
                  <div className="mb-4 p-2 bg-muted rounded-sharp border-b border-border flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono">IEEE Research Paper</div>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <div className="mb-4 p-3 bg-muted rounded-sharp">
                      <h4 className="text-sm font-bold mb-2">Algorithm Comparison</h4>
                      <div className="relative h-40 w-full bg-background rounded-sharp p-2">
                        <div className="absolute inset-0 p-2">
                          {/* Algorithm comparison visualization */}
                          <div className="relative h-full w-full">
                            <div className="absolute top-2 left-2 right-2 flex justify-between text-[10px] text-muted-foreground">
                              <span>O(log n)</span>
                              <span>O(n)</span>
                            </div>
                            {/* X-axis labels */}
                            <div className="absolute bottom-0 left-2 right-2 flex justify-between text-[10px] text-muted-foreground">
                              <span>10²</span>
                              <span>10⁴</span>
                              <span>10⁶</span>
                              <span>10⁸</span>
                            </div>
                            {/* Binary Search line */}
                            <div className="absolute bottom-6 left-0 w-full h-[calc(100%-24px)]">
                              <svg viewBox="0 0 100 40" className="h-full w-full" preserveAspectRatio="none">
                                <path d="M0,40 L25,30 L50,20 L75,10 L100,0" 
                                  stroke="#a3a3a3" strokeWidth="1" fill="none" />
                              </svg>
                            </div>
                            {/* Interpolation Search line */}
                            <div className="absolute bottom-6 left-0 w-full h-[calc(100%-24px)]">
                              <svg viewBox="0 0 100 40" className="h-full w-full" preserveAspectRatio="none">
                                <path d="M0,40 L25,25 L50,15 L75,12 L100,10" 
                                  stroke="#eab308" strokeWidth="1" fill="none" />
                              </svg>
                            </div>
                            {/* Pattern Recognition Search line */}
                            <div className="absolute bottom-6 left-0 w-full h-[calc(100%-24px)]">
                              <svg viewBox="0 0 100 40" className="h-full w-full" preserveAspectRatio="none">
                                <path d="M0,40 L25,20 L50,10 L75,5 L100,2" 
                                  stroke="#22c55e" strokeWidth="1.5" fill="none" />
                              </svg>
                            </div>
                          </div>
                          {/* Legend */}
                          <div className="absolute bottom-1 right-2 flex items-center space-x-3 text-[10px]">
                            <div className="flex items-center">
                              <div className="w-2 h-1 bg-gray-400 mr-1"></div>
                              <span>Binary</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-1 bg-yellow-400 mr-1"></div>
                              <span>Interpolation</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-1 bg-green-500 mr-1"></div>
                              <span>PRS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 bg-muted rounded-sharp">
                        <h4 className="text-xs font-bold mb-2">Time Complexity</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Binary</span>
                          <span className="text-xs font-mono">O(log n)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Interpolation</span>
                          <span className="text-xs font-mono">O(log log n)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">PRS</span>
                          <span className="text-xs font-mono text-highlight">O(log log n)*</span>
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-sharp">
                        <h4 className="text-xs font-bold mb-2">Performance Gain</h4>
                        <div className="flex items-center">
                          <div className="w-full bg-background rounded-full h-2 mr-2">
                            <div className="bg-highlight h-2 rounded-full" style={{width: '42%'}}></div>
                          </div>
                          <span className="text-xs font-mono">42%</span>
                        </div>
                        <div className="mt-2 text-[10px] text-muted-foreground">vs. Interpolation Search</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono">IEEE Conference 2022</span>
                      <span className="font-mono text-highlight">DOI: 10.1109/ICPC53822</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              Get in Touch <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;