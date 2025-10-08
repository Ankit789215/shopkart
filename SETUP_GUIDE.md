# ShopKart - Quick Setup Guide

## 🚀 Quick Start (5 Minutes)

### Step 1: Backend Setup
\`\`\`bash
# Open Terminal 1
cd backend
mvn spring-boot:run
\`\`\`

Wait for message: **"Started ShopKartApplication"**

### Step 2: Frontend Setup
\`\`\`bash
# Open Terminal 2
cd frontend
npm install
npm start
\`\`\`

Browser will automatically open at **http://localhost:3000**

### Step 3: Test the Application
1. Click **Sign Up** button
2. Create account:
   - Name: Test User
   - Email: test@example.com
   - Password: test123
3. You'll be automatically logged in
4. Start shopping! 🎉

## ✅ Verification Checklist

- [ ] Backend running on port 8080
- [ ] Frontend running on port 3000
- [ ] Can create new account
- [ ] Can login
- [ ] Can see products
- [ ] Can add to cart
- [ ] Can toggle dark mode
- [ ] Can filter products

## 🔧 Troubleshooting

### Backend won't start
**Error: Port 8080 already in use**
\`\`\`bash
# Kill process on port 8080
lsof -ti:8080 | xargs kill -9
\`\`\`

**Error: Maven not found**
\`\`\`bash
# Install Maven
brew install maven  # macOS
\`\`\`

### Frontend won't start
**Error: Port 3000 already in use**
\`\`\`bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
\`\`\`

**Error: npm not found**
\`\`\`bash
# Install Node.js from https://nodejs.org/
\`\`\`

### CORS Errors
- Make sure backend is running
- Check backend console for errors
- Clear browser cache

### Login/Signup not working
- Check browser console for errors
- Verify backend is running on port 8080
- Check network tab in browser DevTools

## 📱 Testing Features

### Test Dark Mode
1. Click moon icon in header
2. Theme should switch to dark
3. Refresh page - theme persists

### Test Cart
1. Click "Add to Cart" on any product
2. Click cart icon in header
3. Adjust quantity with +/- buttons
4. Remove items with Remove button

### Test Wishlist
1. Click heart icon on product card
2. Click wishlist icon in header
3. Move items to cart
4. Remove from wishlist

### Test Filters
1. Set price range (e.g., 5000 to 50000)
2. Click Apply
3. Select rating filter
4. Select discount filter
5. Try different categories

### Test Search
1. Type product name in search bar
2. Press Enter or click search icon
3. Results filter in real-time

## 🎯 Test Credentials

You can use these for quick testing:
- **Email**: demo@shopkart.com
- **Password**: demo123

(Create this account on first signup)

## 📊 Database Access

View data in H2 Console:
1. Go to: http://localhost:8080/h2-console
2. JDBC URL: \`jdbc:h2:mem:shopkartdb\`
3. Username: \`sa\`
4. Password: (leave empty)
5. Click Connect
6. Run SQL: \`SELECT * FROM USERS\`

## 🎨 Customization Tips

### Change Primary Color
Edit \`frontend/src/styles/index.css\`:
\`\`\`css
:root {
  --primary-color: #2874f0;  /* Change this */
}
\`\`\`

### Add More Products
Edit \`frontend/src/data/products.js\`:
\`\`\`javascript
{ 
  id: 21, 
  name: "New Product", 
  category: "electronics", 
  price: 15999, 
  originalPrice: 19999, 
  discount: 20, 
  rating: 4.5, 
  image: "📱" 
}
\`\`\`

### Change Currency
All prices are in ₹ (Rupees). To change symbol:
1. Search for \`₹\` in frontend/src folder
2. Replace with desired currency symbol

## 📞 Need Help?

If you encounter issues:
1. Check terminal outputs for errors
2. Clear browser cache
3. Restart both servers
4. Check port availability
5. Verify Java & Node versions

## 🎉 Success!

If you can:
- ✅ Sign up & login
- ✅ See products
- ✅ Add to cart
- ✅ Toggle dark mode

**You're all set!** Enjoy exploring ShopKart! 🛍️
