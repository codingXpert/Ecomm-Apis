# E-commerce API

## Description

E-commerce API is a Node.js-based RESTful API for managing products and variants in an e-commerce system. It provides functionalities such as product creation, updating, deletion, and searching.

### Prerequisites

- Node.js installed on your machine
- MongoDB installed or access to a MongoDB instance


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#Features)
- [Apis](#APIS(Accessible_While_Development))
- [Description Of The Routes](#Description_Of_The_Routes)
- [Swagger Documentation](#Swagger_Documentation)
- [Deployed Link](#Deployed_Link)

## Getting Started

To get started with this project, follow these steps:

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codingXpert/Ecomm-Apis

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

* To run the test command:
    ```bash
    npm run test    
    
## Features

- Create, update, delete, and retrieve products
- Manage product variants with names, SKUs, additional costs, and stock counts
- Search products by name, description, or variant name.

## APIS(Accessible_While_Production)
* **Create Product:** ```https://ecomm-apis-639j.onrender.com//api/product/create```
* **Get Products:** ```https://ecomm-apis-639j.onrender.com//api/product/get```
* **Search Products:** ```https://ecomm-apis-639j.onrender.com//api/product/search```
* **Update Product:** ```https://ecomm-apis-639j.onrender.com//api/product/update/{ productId}```
* **Delete Product:** ```https://ecomm-apis-639j.onrender.com//api/product/Delete/{productId}```

## APIS(Accessible_While_Development)
* **Create Product:** ```http://localhost:8000/api/product/creater```
* **Get Products:** ```http://localhost:8000/api/product/get```
* **Search Products:** ```http://localhost:8000/api/product/search```
* **Update Product:** ```http://localhost:8000/api/product/update/:productId```
* **Delete Product:** ```http://localhost:8000/api/product/Delete/:productId```

## Description_Of_The_Routes
* **Create Product:-** While Creating a product the variants[] is optional.
* If the variant is available create the product like this
```javascript
{
  "name": "samsung",
  "description": "This is an Android phone",
  "price": 123,
  "variants": [
    {
      "name": "S10+",
      "sku": "TYER1256U",
      "additional_cost": 1000,
      "stock_count": 100
    }
  ]
}
```
* if variants are not available while creating product(we can add variants latter by using update route) then create the product the like this:-
```javascript
{
  "name": "samsung",
  "description": "This is an Android phone",
  "price": 123,
}
```

* **Update Product:-** While Updating the product we can pass the the fields or we can just pass the single field which needs to be updated.

* If all the fields need to updated then pass the data as follows:-
```javascript
{
  "name": "samsung",
  "description": "This is an Android phone",
  "price": 123,
  "variants": [
    {
      "name": "S10+",
      "sku": "TYER1256U",
      "additional_cost": 1000,
      "stock_count": 100
    }
  ]
}
```

* If only single field needs to be updated, then:-
```javascript
{
  "name": "samsung",
}
```

```javascript
{
  "name": "samsung",
  "variants": [
    {
      "additional_cost": 1000,
    }
  ]
}
```

```javascript
{
  "variants": [
    {
      "additional_cost": 1000,
    }
  ]
}
```



### Swagger_Documentation
```bash
    https://ecomm-apis-639j.onrender.com/api-docs/
```

### Deployed_Link
* **Access all the available APIs using Swagger-UI**
 ```bash
    https://ecomm-apis-639j.onrender.com/api-docs/
```