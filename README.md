# ShopKart - E-Commerce Platform

A full-stack e-commerce application built with **React.js** frontend and **Java Spring Boot** backend.

## ✨ Features

### Frontend Features
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 🔐 **Authentication** - Login & Signup with JWT
- 🛒 **Shopping Cart** - Add, remove, and manage quantities
- ❤️ **Wishlist** - Save favorite products
- 🔍 **Search** - Real-time product search
- 🏷️ **Categories** - Filter by Electronics, Fashion, Home, Sports
- 💰 **Filters** - Price range, ratings, discounts
- 📊 **Sorting** - By popularity, price, rating
- 💱 **Currency** - All prices in Indian Rupees (₹)
- 🎨 **Animations** - Smooth hover effects and transitions
- 📱 **Responsive** - Mobile-friendly design

### Backend Features
- 🔒 **JWT Authentication** - Secure token-based auth
- 🗄️ **H2 Database** - In-memory database for development
- 🛡️ **Spring Security** - Password encryption & security
- 🔄 **RESTful API** - Clean API endpoints
- 📝 **Validation** - Input validation on all endpoints

## 🚀 Tech Stack

### Frontend
- **React 18.2**
- **React Router 6**
- **Axios**
- **Context API** (State Management)
- **CSS3** with CSS Variables

### Backend
- **Java 17**
- **Spring Boot 3.2**
- **Spring Security**
- **Spring Data JPA**
- **H2 Database**
- **JWT (JSON Web Tokens)**
- **Lombok**
- **Maven**

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Java 17 or higher
- Maven 3.6+

### Backend Setup

1. Navigate to backend directory:
\`\`\`bash
cd backend
\`\`\`

2. Build the project:
\`\`\`bash
mvn clean install
\`\`\`

3. Run the Spring Boot application:
\`\`\`bash
mvn spring-boot:run
\`\`\`

Backend will start on **http://localhost:8080**

### Frontend Setup

1. Navigate to frontend directory:
\`\`\`bash
cd frontend
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm start
\`\`\`

Frontend will start on **http://localhost:3000**

## 🔑 API Endpoints

### Authentication
- **POST** \`/api/auth/signup\` - Register new user
- **POST** \`/api/auth/login\` - Login user

### Request Body Examples

**Signup:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
\`\`\`

**Login:**
\`\`\`json
{
  "email": "john@example.com",
  "password": "password123"
}
\`\`\`

## 📂 Project Structure

\`\`\`
shreyanshpatel/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── context/          # Context API providers
│   │   ├── data/             # Product data
│   │   ├── styles/           # CSS files
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/shopkart/
│   │       │   ├── controller/    # REST controllers
│   │       │   ├── service/       # Business logic
│   │       │   ├── model/         # Entity models
│   │       │   ├── repository/    # Data repositories
│   │       │   ├── security/      # JWT utilities
│   │       │   └── config/        # Spring configurations
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
└── README.md
\`\`\`

## 🎨 Key Features Explained

### Dark Mode
- Toggle button in header
- Persists in localStorage
- Smooth transitions between themes
- CSS variables for easy theming

### Price Range Filter
- Fixed input width to prevent overflow
- Number inputs with min/max validation
- Apply button to filter products

### Hover Effects
- Product cards lift on hover
- Smooth scale transforms
- Color transitions
- Shadow effects
- Icon animations

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Collapsible filters on mobile
- Touch-friendly buttons

## 🔐 Security Features

- **Password Hashing** - BCrypt encryption
- **JWT Tokens** - Secure authentication
- **CORS Configuration** - Controlled access
- **Input Validation** - Server-side validation
- **Session Management** - Stateless authentication

## 🎯 Usage

1. **Sign Up**: Create a new account
2. **Login**: Access your account
3. **Browse**: Explore products by category
4. **Filter**: Use price, rating, discount filters
5. **Search**: Find specific products
6. **Add to Cart**: Manage cart quantities
7. **Wishlist**: Save favorites
8. **Dark Mode**: Toggle theme preference
9. **Checkout**: Proceed to payment (UI only)

## 🛠️ Development

### Frontend Development
\`\`\`bash
cd frontend
npm start
\`\`\`

### Backend Development
\`\`\`bash
cd backend
mvn spring-boot:run
\`\`\`

### H2 Database Console
Access at: **http://localhost:8080/h2-console**
- JDBC URL: \`jdbc:h2:mem:shopkartdb\`
- Username: \`sa\`
- Password: (leave empty)

## 📝 Future Enhancements

- [ ] Payment Gateway Integration
- [ ] Order Management System
- [ ] User Profile Management
- [ ] Product Reviews & Ratings
- [ ] Admin Dashboard
- [ ] Email Notifications
- [ ] MySQL/PostgreSQL Integration
- [ ] Product Image Upload
- [ ] Advanced Search with Filters
- [ ] Order History

## 🐛 Known Issues

None currently. Please report any issues you find!

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Shreyansh Patel

## 🙏 Acknowledgments

- Inspired by Flipkart's UI/UX design
- Built with modern web technologies
- Icons from Font Awesome

---

**Happy Shopping! 🛍️**
