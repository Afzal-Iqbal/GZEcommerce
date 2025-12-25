
import { Product } from '../types';

export const COUNTRIES = [
  { name: 'United Arab Emirates', code: 'ae' },
  { name: 'Australia', code: 'au' },
  { name: 'China', code: 'cn' },
  { name: 'Germany', code: 'de' },
  { name: 'Denmark', code: 'dk' },
  { name: 'France', code: 'fr' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'Italy', code: 'it' },
  { name: 'Russia', code: 'ru' },
  { name: 'United States', code: 'us' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "T-shirts with multiple colors, for men",
    price: 10.30,
    rating: 4.5,
    reviewsCount: 32,
    soldCount: 154,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUGTzLMOaAGDoQ3wHt1qKEr_JMbMzCFjZKIneZPfGeiJQnICuDMiWg22lv5gnbc_RyjjRboap2-I3OCF4gAKvpEHeOMGOoghjQfc1Yhrkxoz7RtfSXFIHcBSuE1vjmH5cKuWTYEUbZnYggVl0OY676fLeUXSmw8oiJDDeoDXp7rwIrjS8pi2RMJLOxuWUiN2EVdlYEPQF7C7TxQdCKdQud7KhGXpFJfPraUVNBMtVE_S3mnhMZhU8cBX7RSIGKwAKAZpe6gvXTnXM",
    category: "Clothes",
    description: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle"
  },
  {
    id: '2',
    name: "Jeans shorts for men blue color",
    price: 15.30,
    rating: 4.2,
    reviewsCount: 12,
    soldCount: 89,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATFA_fIKk8CSUvrh3z2VhpoWg-8yOjqIe4sV7Tfk44VgoJ4BTOerfaELNNQFIafFH0dlU5nVVzgmeiZ6VQke0mosibjivEwmuj2IHByLUflnNKtQbCksmZX0_IkkhJSmeyeGxfHXfcCf587-324P4J3mO35nWSc4F9j-S6khazCmLALLAtNTclyD_30oxgGcPIk4cqAGx0lKfO789Y8wZ0wyh7OsnmK_ExbC36dXe6-UV2Oxm11o6MXHzncwcgOwqfsM9LZDhS4lU",
    category: "Clothes",
    description: "Summer comfort denim shorts"
  },
  {
    id: '3',
    name: "Brown winter coat medium size",
    price: 42.50,
    rating: 4.8,
    reviewsCount: 45,
    soldCount: 210,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeqfaQniqqSzoa9Rd2mBdCHOZXyYk5B0wIGZ20Hm7TtRDN5-s4UrRGCYeRo5-t4OiukDv70SpaLpo2f2pRc46-DI_oQdEOmY4iZaWFWKO63WfETzAaC2NsyRlzZFoDBi2anQJpYh9zq9IALjW3GM48UeyuS544dv3FNei_SF7VDHZhk8wXUvHJAaEqCdUo7X_R4xGBoi6F4XT2vlG22wemw9maHWvOFrhYWBNVymMStomcZ2OxVVdCGcDyOZ99g_D3189jsOBPGEE",
    category: "Clothes",
    description: "Warm insulated winter coat"
  },
  {
    id: '4',
    name: "Jeans bag for travel for men",
    price: 34.00,
    rating: 4.0,
    reviewsCount: 8,
    soldCount: 42,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE-cBdQjwyJ5a4W7YbQnYY0s3sru1oafaSC8qhJZObMnc9Gf94Wy_0JUhG19QKLeZhymBTRqlY_WkOUcPT2pweZCtZNHgi2K4NRwfG1eF_2WR-sJS-JVz7m5fPx_nneL5yZuqg426V9iLlV5DXMqykMgi99Pt0Pv-dS0glOPpX6l7nB6o0baeVsr63sAFKYYTuxIrTnzY-bRBXvOg6imaK2FWc8ajZAesU4hRo6leiJHLMcvoSDqmusL2DbN8h-EB6KDHbC0iVOdY",
    category: "Accessories",
    description: "Durable travel backpack"
  },
  {
    id: '5',
    name: "Leather wallet premium",
    price: 99.00,
    rating: 4.9,
    reviewsCount: 150,
    soldCount: 500,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVDHHyEgnnkOJKnSVhTCXjuszvNrW977FdpDn4RX9z6HIM2uWtBuYhSC6c7APAwdth4xi37wOf8I3hH0MjONwN8jPDjBKFU2eaU4CBBGO6Fj4H4FdG3ul9e7kssdfQbonXpoc_V_JMVZKYt5BvFOtOvl9_d0csZzJDXjje4vDknln-G_fj6I9tVVZzR5fQ2WpyjzwrEkUx7_wFWpiupZpcH9CP4XGxkOTjNvdSZheSz5E0Sb8PTECy8xBrR0T6pC2iJTqzAKy2Hoo",
    category: "Accessories",
    description: "Premium leather wallet"
  },
  {
    id: '6',
    name: "GoPro HERO6 4K Action Camera",
    price: 299.50,
    originalPrice: 428.00,
    rating: 4.7,
    reviewsCount: 320,
    soldCount: 1200,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0_tNNlr6JNTm4-LHemJCaOW4JlnGeE_GYHb1Cu_L1cbU25BQKO8xI9qQy2HtkknIp_cA_C3-fyGlleoXItb2lFjuj0pr-ojV4pVGpYEbfM8zOt36vPNoZttCSsXq7vsVs2NEHfem6DXxqfemOGRgGumwnh1dVrnHpTISdnYzXsty-40srq5_O0tCgIqVBajYm27mGJtzlWRrwo4exuIqcDyzNe4w7I_5z0U6BdivFd7Huwi4Q-YgcjoB2UtQhimHsTXDxrDLE00Q",
    category: "Electronics",
    description: "4K High definition action camera"
  },
  {
    id: '7',
    name: "Apple Watch Series Space Gray",
    price: 197.00,
    originalPrice: 299.50,
    rating: 4.6,
    reviewsCount: 540,
    soldCount: 2300,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNKYK9WttyJfIitXJBnAiDZaHVEc8xCXxCTSmKN0En2x4Ii9gStGP-DWJRy68FZHRf9C-pt6_YW_qM72Ai1WEDlGWHMhrDO4VimzDMObeLXLxMqFJR_jXGITUTnZtTJX5NG_TWlx6_2B--VPk1ewNAofqDgRMvGURUgk3FqcFRwMlXalVWFlTBvx3IxE__29brhsvdUlb4DgjV7Wqkj0YalKIW8yqxY88blNbrp4R04RXtHEXmby83EMLeQNuP2UBoxXbj0uvjQGk",
    category: "Electronics",
    description: "Smart wearable technology"
  },
  {
    id: '8',
    name: "Premium Wireless Headphones",
    price: 348.00,
    originalPrice: 399.99,
    rating: 4.8,
    reviewsCount: 2405,
    soldCount: 5000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNNjgm5M0ogTWgmMRH8LxcmJ3_tEwXLHE7rnWosLeGotFA2DZYpGJtW7E-p1kkvrABSMEXUV3T11qn96UhsNqfzipTya7dJ7GgIFkhL_p93d2nZV0o-5mmhd5UOc6U59Tt0BFO6PFr2fHkm4B6pyu76ILSTHmXDh5KriGkxZuPcHDbXVIaelqRmwnINE4Oy8tlXSpOaqKdjbhkCUNjiJe9MClZgyXdp5KpiVR9Wlxek14dwiuDnnE4jZLo7Lgjqaq23Em7yDmi_Ek",
    category: "Audio",
    description: "Sony WH-1000XM5 Noise Canceling Headphones"
  }
];
