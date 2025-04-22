# 🧑‍💼 Employee Management System

The **Employee Management System** is a full-stack web application that allows users to manage employee information seamlessly. It supports basic CRUD functionalities—Create, Read, Update, and Delete—using a modern stack of **Next.js (frontend)** and **Spring Boot (backend)**. 

This system helps organizations to maintain a simplified employee directory and is built with a developer-friendly architecture that emphasizes clarity, performance, and ease of use.

---

## 🚀 Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/)
- **Backend**: [Spring Boot](https://spring.io/projects/spring-boot) (Java 21 or below)
- **Database**: MySQL
- **Editors Used**: IntelliJ IDEA (backend), VS Code (frontend)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Thenuka09/employee-management-system.git
```

### 2. Backend Setup (Spring Boot)

- Open the backend folder in IntelliJ (or your preferred IDE).
- Create a MySQL database with the name:
  ```bash
  employee_management_system
  ```
- Navigate to the application.properties file and add your MySQL username and password:
  ```bash
  spring.datasource.username=YOUR_USERNAME
  spring.datasource.password=YOUR_PASSWORD
  ```
- Make sure Java 21 or below is installed and configured properly.
- Run the Spring Boot project.

### 3. Frontend Setup (Next.js)

- Open the frontend folder in VS Code (or your preferred editor).
- Make sure Node.js is installed on your machine.
- Install frontend dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm run dev
  ```
## 🧪 Using the Application

- 🔹 Navigate to Add Employee to insert new employee data.
- 🔹 Go to View Employees to see the list of all employees.
- 🔹 Edit or Delete records using the action buttons next to each employee.

⚠️ If the database is initially empty, add employee details via the Add Employee section to populate the data.

## 📦 Features

- ✅ Add New Employees
- ✅ View All Employees
- ✅ Update Existing Records
- ✅ Delete Employees

## 📚 Acknowledgements

This project was built with guidance and reference from the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/using-vite)









