const products = {
  1: {
    name: "Treadmill X300",
    oldPrice: 1199,
    newPrice: 999,
    price: 999,
    rating: 4,
    description:
      "High-quality treadmill with adjustable incline and built-in heart rate monitor.",
    features: ["Adjustable Incline", "Built-in Heart Rate Monitor"],
    image: "assets/images/img1.webp",
    video: "https://www.example.com/video1.mp4",
  },
  2: {
    name: "Exercise Bike Y200",
    oldPrice: 699,
    newPrice: 599,
    price: 599,
    rating: 5,
    description:
      "Compact and efficient exercise bike with multiple resistance levels.",
    features: ["Multiple Resistance Levels", "LCD Display"],
    image: "assets/images/img3.webp",
    video: "https://www.example.com/video2.mp4",
  },
  3: {
    name: "Rowing Machine Z100",
    oldPrice: 899,
    newPrice: 799,
    price: 799,
    rating: 4,
    description:
      "Smooth rowing experience with adjustable resistance and ergonomic design.",
    features: ["Adjustable Resistance", "Ergonomic Design"],
    image: "assets/images/img4.webp",
    video: "https://www.example.com/video3.mp4",
  },
  4: {
    name: "Pump Set — 20kg",
    oldPrice: 79.95,
    newPrice: 69.9,
    price: 69.9,
    rating: 4.5,
    description:
      "A versatile pump set ideal for aerobic and strength workouts. Includes a bar and multiple weight plates.",
    features: ["Easy-grip bar", "Vinyl-coated weights"],
    image: "assets/images/img5.webp",
    video: "https://www.example.com/video4.mp4",
  },
  5: {
    name: "Vinyl Studio Barbell Pump Set — 20kg",
    oldPrice: 89.95,
    newPrice: 79.9,
    price: 79.9,
    rating: 4.8,
    description:
      "Perfect for body pump classes and home workouts, this set includes a barbell and weight plates.",
    features: ["Non-slip grip", "Color-coded weights"],
    image: "assets/images/img6.webp",
    video: "https://www.example.com/video5.mp4",
  },
  6: {
    name: "Adjustable Dumbbells — 32kg Pair",
    oldPrice: 349.95,
    newPrice: 299.95,
    price: 299.95,
    rating: 5.0,
    description:
      "Adjustable dumbbells providing a range of weights in a single set. Great for a variety of strength exercises.",
    features: ["Easy adjustment", "Compact design"],
    image: "assets/images/img1.webp",
    video: "https://www.example.com/video6.mp4",
  },
  7: {
    name: "Kettlebell — 16kg",
    oldPrice: 59.95,
    newPrice: 49.9,
    price: 49.9,
    rating: 4.7,
    description:
      "High-quality kettlebell suitable for various exercises to build strength and endurance.",
    features: ["Ergonomic handle", "Durable coating"],
    image: "assets/images/img2.webp",
    video: "https://www.example.com/video7.mp4",
  },
  8: {
    name: "Medicine Ball — 10kg",
    oldPrice: 69.95,
    newPrice: 59.9,
    price: 59.9,
    rating: 4.6,
    description:
      "Ideal for functional training and core exercises, this medicine ball is durable and easy to handle.",
    features: ["Non-slip surface", "Balanced weight distribution"],
    image: "assets/images/img6.webp",
    video: "https://www.example.com/video8.mp4",
  },
  9: {
    name: "Battle Rope — 12m",
    oldPrice: 99.95,
    newPrice: 79.9,
    price: 79.9,
    rating: 4.9,
    description:
      "Perfect for high-intensity interval training (HIIT) and building endurance.",
    features: ["Heavy-duty rope", "Comfortable grip"],
    image: "assets/images/img4.webp",
    video: "https://www.example.com/video9.mp4",
  },
};

// Convert the products object to an array for easier handling
const productsArray = Object.keys(products).map((key) => ({
  id: key,
  ...products[key],
}));

// Export the products array
export default productsArray;
