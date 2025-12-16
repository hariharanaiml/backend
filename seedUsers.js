require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const sampleUsers = [
  {
    name: "John Doe",
    email: "john@example.com",
    password: "123456",
    phone: "1234567890"
  },
  {
    name: "Jane Smith", 
    email: "jane@example.com",
    password: "123456",
    phone: "0987654321"
  }
];

async function seedUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await User.deleteMany({});
    console.log('Cleared existing users');

    // Create users one by one to trigger pre-save middleware
    for (const userData of sampleUsers) {
      const user = new User(userData);
      await user.save();
    }
    
    console.log(`Added ${sampleUsers.length} sample users`);
    console.log('Test credentials: john@example.com / 123456');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
}

seedUsers();