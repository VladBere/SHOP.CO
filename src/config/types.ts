interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductData {
  limit?: number;
  products: Product[];
  skip?: number;
  total: number;
}

export interface CategoryData {
  slug: string,
  name: string,
  url: string
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number | string;
  tags: string[];
  brand: string | undefined;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export interface ProductsQueryParams {
  limit: number;
  skip: number;
  category?: string;
}

export interface ReviewInterface {
  name: string;
  review: string;
}

export interface LoginInterface {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string; 
    refreshToken: string; 
}

export interface FormUser {
  username: string,
  password: string,
}

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
      color: string,
      type: string
    },
    ip: string,
    address: {
      address: string,
      city: string,
      state: string,
      stateCode: string,
      postalCode: number,
      coordinates: {
        lat: number,
        lng: number
      },
      country: string
    },
    macAddress: string,
    university: string,
    bank: {
      cardExpire: string,
      cardNumber: number,
      cardType: string,
      currency: string,
      iban: string
    },
    company: {
      department: string,
      name: string,
      title: string,
      address: {
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: number,
        coordinates: {
          lat: number,
          lng: number
        },
        country: string
      }
    },
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: {
      coin: string,
      wallet: string,
      network: string
    },
    role: "admin" | "moderator" | "user"
}