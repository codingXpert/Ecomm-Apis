# E-commerce API

![Project Banner](path/to/your/banner.png)

## Description

E-commerce API is a Node.js-based RESTful API for managing products and variants in an e-commerce system. It provides functionalities such as product creation, updating, deletion, and searching.

### Prerequisites

- Node.js installed on your machine
- MongoDB installed or access to a MongoDB instance


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Features](#Features)
- [Apis](#Apis)
- [Postman Documentation](#postman_Documentation)
- [Deployed Link](#Deployed_Link)

## Getting Started

To get started with this project, follow these steps:

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codingXpert/Ecomm-Api

2. Navigate to the project directory:
   ```bash
   cd Ecomm-Api

3. Install dependencies:
    ```bash
   npm install

4. Set up environment variables:
    Create a .env file in the root directory and define the following variables:
    ```bash
    LOCAL_DATABASE=mongodb://localhost:27017/Ecomm_db
    PROD_DATABASE=mongodb+srv://<username>:<password>@<cluster>/<database>
    PORT = 8000
    NODE_ENV=development

## Usage

* To run the project in development mode:
    ```bash
    npm run start:dev

* To run the project in production mode:
    ```bash
    npm run start:prod
    
## Features

- Create, update, delete, and retrieve products
- Manage product variants with names, SKUs, additional costs, and stock counts
- Search products by name, description, or variant name.

## APIS(Accessible While Production)
* **Create Product:** ```https://url-shortener-rfpt.onrender.com/api/product/create```
* **Get Products:** ```https://url-shortener-rfpt.onrender.com/api/product/get```
* **Search Products:** ```https://url-shortener-rfpt.onrender.com/api/product/search```
* **Update Product:** ```https://url-shortener-rfpt.onrender.com/api/product/update```
* **Delete Product:** ```https://url-shortener-rfpt.onrender.com/api/product/Delete```

## APIS(Accessible While Development)
* **Create Product:** ```http://localhost:8000/api/product/creater```
* **Get Products:** ```http://localhost:8000/api/product/get```
* **Search Products:** ```http://localhost:8000/api/product/search```
* **Update Product:** ```http://localhost:8000/api/product/updat```
* **Delete Product:** ```http://localhost:8000/api/product/Delete```

### Postman_Documentation
```bash
    https://documenter.getpostman.com/view/20576167/2s9Ykrbzvk
```

### Deployed_Link
* **Access all the available APIs using Swagger-UI**
 ```bash
    https://url-shortener-rfpt.onrender.com/api-docs/
```