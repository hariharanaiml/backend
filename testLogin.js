require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function testLogin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Find the user
    const user = await User.findOne({ email: 'john@example.com' });
    if (!user) {
      console.log('User not found');
      return;
    }

    console.log('User found:', user.email);
    console.log('Stored password hash:', user.password);

    // Test password comparison
    const testPassword = '123456';
    const isMatch = await user.comparePassword(testPassword);
    console.log('Password comparison result:', isMatch);

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

testLogin();