# Rentflow



**RentFlow 360** is a **Full-Stack** real estate website built with **React, Next.js, TypeScript**, and a **Node.js (Express) backend**. The platform allows users to browse, list, and manage properties seamlessly.

##  Features
-  **Property listing & management**
- **User authentication** (Signup/Login)
-  **Admin Dashboard** for managing users & listings
- **Backend API** built with Express & Sequelize

  ### Backend:
- **Authentication & Authorization** (JWT-based login/signup)
- **Profile Management** (Edit user details)
- **Real Estate Listings** (Add, update, delete properties)
  


##  Tech Stack

### Frontend
- **React.js** 
- **TypeScript**
- **Tailwind CSS & CSS** 
- **SCSS**
- **Framer Motion** 
- **Three.js**
- **Axios** 

###  Backend 
- **Node.js** 
- **Express.js** 
- **Sequelize** 
- **JWT (JSON Web Token)** 
- **bcrypt.js** 
- **Multer** 


##  Installation & Setup

### 1️⃣ Install Node.js and npm
Ensure you have **Node.js** and **npm** installed. If not, install it from:
 [Download Node.js](https://nodejs.org/)

Check installation:
```sh
node -v
npm -v
```

### 2 Install PostgreSQL Database
Download and install **PostgreSQL**:
[Download PostgreSQL](https://www.postgresql.org/download/)
After installation, create a new database:
```sh
psql -U postgres
CREATE DATABASE rent_flow_backend;
```

### 3 Clone the Repository
```sh
git clone https://github.com/gathei-iraki/rentflow360.git
cd rentflow360
cd rentflow-main

```

### 4 Install dependencies:
```sh
# Install frontend dependencies
cd rentflow-main
npm install

# Install backend dependencies
cd rentflow-main
cd ../rentflow360-backend
npm install
```

### 5 Setup environment variables:
**Frontend (`.env.local`):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Backend (`.env`):**
```
PORT=5000
DATABASE_URL=postgres://user:password@localhost:5432/rent_flow_backend
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the project:
```sh
# Start backend server
cd ../rentflow360-backend
npm run dev

# Start frontend
cd rentflow-main

npx ts-node src/server.ts
or
npm run dev

```
