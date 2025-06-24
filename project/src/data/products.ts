import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 24
  },
  {
    id: '2',
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 18
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 32
  },
  {
    id: '4',
    name: 'Sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 15
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    rating: 4.8,
    reviews: 124,
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30-hour Battery', 'Premium Materials', 'Wireless Charging'],
    inStock: true,
    isNew: true,
    isSale: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    rating: 4.6,
    reviews: 89,
    description: 'Track your fitness goals with advanced health monitoring, GPS, and smart notifications.',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery'],
    inStock: true,
    isNew: true
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    price: 189,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    rating: 4.9,
    reviews: 67,
    description: 'Handcrafted genuine leather jacket with modern design and premium finishing.',
    features: ['Genuine Leather', 'Handcrafted', 'Modern Design', 'Premium Lining'],
    inStock: true,
    isSale: true
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    price: 79,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home & Garden',
    rating: 4.7,
    reviews: 156,
    description: 'Sleek and modern desk lamp with adjustable brightness and USB charging port.',
    features: ['LED Technology', 'Adjustable Brightness', 'USB Charging', 'Touch Control'],
    inStock: true
  },
  {
    id: '5',
    name: 'Professional Camera',
    price: 899,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    rating: 4.9,
    reviews: 203,
    description: 'Capture stunning photos with this professional-grade camera featuring advanced autofocus and 4K video recording.',
    features: ['4K Video Recording', 'Advanced Autofocus', 'Weather Sealed', 'Professional Grade'],
    inStock: true,
    isNew: true
  },
  {
    id: '6',
    name: 'Yoga Mat Premium',
    price: 45,
    originalPrice: 65,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sports',
    rating: 4.5,
    reviews: 92,
    description: 'Non-slip premium yoga mat made from eco-friendly materials with superior grip and comfort.',
    features: ['Eco-Friendly', 'Non-Slip Surface', 'Extra Thick', 'Carrying Strap'],
    inStock: true,
    isSale: true
  },
  {
    id: '7',
    name: 'Ceramic Coffee Mug Set',
    price: 32,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home & Garden',
    rating: 4.4,
    reviews: 78,
    description: 'Elegant ceramic coffee mug set perfect for your morning routine or as a thoughtful gift.',
    features: ['Premium Ceramic', 'Dishwasher Safe', 'Set of 4', 'Gift Box Included'],
    inStock: true
  },
  {
    id: '8',
    name: 'Wireless Charging Pad',
    price: 39,
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    rating: 4.3,
    reviews: 145,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices with sleek design.',
    features: ['Fast Charging', 'Qi Compatible', 'LED Indicator', 'Non-Slip Base'],
    inStock: false
  }
];