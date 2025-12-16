require('dotenv').config();
const mongoose = require('mongoose');
const Ride = require('./models/Ride');
const Ticket = require('./models/Ticket');

const sampleRides = [
  {
    name: "Thunder Roller Coaster",
    description: "High-speed thrill ride with loops and drops",
    category: "thrill",
    adultPrice: 50,
    childPrice: 30,
    seniorPrice: 35,
    duration: 3,
    capacity: 24,
    minHeight: 140,
    isActive: true
  },
  {
    name: "Water Splash Ride",
    description: "Cool water ride perfect for hot days",
    category: "water",
    adultPrice: 40,
    childPrice: 25,
    seniorPrice: 30,
    duration: 5,
    capacity: 16,
    minHeight: 100,
    isActive: true
  },
  {
    name: "Haunted House",
    description: "Spooky dark ride with scary surprises",
    category: "family",
    adultPrice: 35,
    childPrice: 20,
    seniorPrice: 25,
    duration: 8,
    capacity: 12,
    minHeight: 0,
    isActive: true
  },
  {
    name: "Bumper Cars",
    description: "Fun bumper car arena for all ages",
    category: "family",
    adultPrice: 25,
    childPrice: 15,
    seniorPrice: 20,
    duration: 4,
    capacity: 20,
    minHeight: 0,
    isActive: true
  },
  {
    name: "Giant Ferris Wheel",
    description: "Panoramic views from 100 feet high",
    category: "family",
    adultPrice: 30,
    childPrice: 18,
    seniorPrice: 22,
    duration: 12,
    capacity: 48,
    minHeight: 0,
    isActive: true
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Ride.deleteMany({});
    await Ticket.deleteMany({});
    console.log('Cleared existing data');

    // Insert sample rides
    const rides = await Ride.insertMany(sampleRides);
    console.log(`Added ${rides.length} sample rides`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();