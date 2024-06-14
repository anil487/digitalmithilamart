const express = require('express');
const app = express();
const PORT = 4000; 

const jsonData = {
  "categories": [
    {
      "id": 1,
      "name": "Accessories",
      "products": [
        {
          "id": 1,
          "name": "purse",
          "price": 5000,
          "description": "red purse",
          "picture": "https://burst.shopifycdn.com/photos/bright-red-purse-with-gold.jpg?width=925&format=pjpg&exif=0&iptc=0",
          "category": "Accessories"
        },
        {
          "id": 2,
          "name": "Earings",
          "price": 300,
          "description": "earrings",
          "picture": "https://burst.shopifycdn.com/photos/boho-earrings.jpg?width=925&format=pjpg&exif=0&iptc=0",
          "category": "Accessories"
        },
        {
          "id": 3,
          "name": "bracelets",
          "price": 1000,
          "description": "stainless steel bracelets",
          "picture": "https://burst.shopifycdn.com/photos/stacked-bracelets-set.jpg?width=925&format=pjpg&exif=0&iptc=0",
          "category": "Accessories"
        },
        {
          "id": 4,
          "name": "fitness watch",
          "price": 90000,
          "description": "fitness tracker watch",
          "picture": "https://burst.shopifycdn.com/photos/aliexpress-fitness-trackers.jpg?width=925&format=pjpg&exif=0&iptc=0",
          "category": "Accessories"
        }
      ]
    },
    {
      "id": 2,
      "name": "Clothing",
      "products": [
        {
          "id": 5,
          "name": "B-Tshirt",
          "price": 600,
          "description": "Made with cotton",
          "picture": "https://burst.shopifycdn.com/photos/cobalt-blue-t-shirt.jpg?width=925&format=pjpg&exif=0&iptc=0",
          "category": "Clothing"
        },
        {
          "id": 6,
          "name": "stripped-dress",
          "price": 2500,
          "description": "Girls stripped dress",
          "picture": "https://burst.shopifycdn.com/photos/girls-striped-dress.jpg?width=925&format=pjpg&exif=0&iptc=0",
          "category": "Clothing"
        }
      ]
    },
    {
      "id": 3,
      "name": "Footwear",
      "products": [
        {
          "id": 7,
          "name": "sneakers",
          "price": 1200,
          "description": "black sneakers",
          "picture": "https://burst.shopifycdn.com/photos/black-sneakers-with-white-sole.jpg?width=925&format=pjpg&exif=0&iptc=0",
          "category": "Footwear"
        }
      ]
    },
    {
      "id": 4,
      "name": "Electronics",
      "products": [
        {
          "id": 8,
          "name": "watch",
          "price": 900,
          "description": "Leather watch",
          "picture": "https://burst.shopifycdn.com/photos/watches-in-black-white.jpg?width=925&format=pjpg&exif=0&iptc=0",
          "category": "Electronics"
        },
        {
          "id": 9,
          "name": "Headphones",
          "price": 900,
          "description": "wireless headphones",
          "picture": "https://burst.shopifycdn.com/photos/wireless-headphones.jpg?width=925&format=pjpg&exif=0&iptc=0",
          "category": "Electronics"
        }
      ]
    },
    {
      "id": 5,
      "name": "Personal Care",
      "products": [
        {
          "id": 10,
          "name": "beard oil",
          "price": 600,
          "description": "natural oil",
          "picture": "https://burst.shopifycdn.com/photos/beard-oil-product-photo.jpg?width=925&format=pjpg&exif=0&iptc=0",
          "category": "Personal Care"
        }
      ]
    }
  ]
};

app.get('/categories', (req, res) => {
  res.json(jsonData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
