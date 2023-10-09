# BookStore

# Project decription:
- 🫡Welcome to the BookStore project!🫡
- 😉This is a web application that provides various features including authentication, registration, and CRUD (Create, Read, Update, Delete) operations😉
- The project is built using the Hibernate and Spring frameworks, Spring Boot, which provide powerful tools for interacting with databases and developing robust web applications.
- Additionally, the BookStore is constructed using the Angular framework, enhancing its capabilities for creating dynamic and responsive user interfaces.
- With the BookStore, users can enjoy a simplified and user-friendly experience while managing book-store data and operations.
- 🌟 In addition to its powerful backend functionality, BookStrore boasts an intuitive and dynamic frontend, developed with Angular framework. 🌟
- 🚀 Angular empowers the project with dynamic, single-page applications that provide a seamless and responsive user experience. 🚀
- 💼 Users can effortlessly navigate through the web application's various sections, manage book inventory, and interact with the system effortlessly.

  
## Setup

To set up the project, follow these steps:

### Prerequisites

Make sure you have the following software installed on your system:

- Java Development Kit (JDK) 17 or higher
- Apache Maven
- Apache Tomcat vesion 9 or higher
- DataBase: MySql

### Installation
- First of all, you should made your fork
- Second, clink on Code<> and clone link, after that open your Intellij Idea, click on Get from VCS
- past link, which you clone later

### Replace Placeholders:
To connect to your DB, you should replace PlaceHolders in .env and application.properties
- Open package resources and open file env and application.properties in your project.
- Locate the placeholders that need to be replaced.
- These placeholders might include values such as
- spring.datasource.url= URL for your MySql
- spring.datasource.username= Replace with your MySql
- spring.datasource.password= Replace with your password Mysql
- spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
  

# Features 🤌:

## User  🤵‍♂️
- Registration like a user
- Authentication like a user
- Create/update/remove a user

## Book 📕
- Create/update/remove a book
- Find book by id
- Sorting books by parameters
- Display all available books

## Shopping-cart 💵
- Get all shopping-carts
- Get shopping-cart by user

## Cart-Item 💵
- Get cart-item by book id
- Create/update/remove a cart-item

## Order 💵
- Create/update/remove a order
- Find order by id
- Get order history by user
- Ger order by order id and orderItem id

## Order-Item 💵
- Ger orderItem by Book id
- Find orderItme by id
- Remove a orderItem


## Category ⏱
- Create/update/remove a category
- Display all available categories
- Find category by id
