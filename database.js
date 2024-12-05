let database = [
  {
    flower: "rose",
    description:
      "Classic, fragrant flowers available in a variety of colors, symbolizing love and romance.",
    color: "#D14343, white, pink",
    stock: 1,
    sunlight: "Full sun",
    watering: 1,
    price: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Frose.png?alt=media&token=266adf80-0893-4375-bfa8-d399f07e3652",
  },
  {
    flower: "tulips",
    description:
      "Elegant, cup-shaped flowers that bloom in vibrant colors, often seen in spring.",
    color: "#D14343, #FEE86C, #A799C6",
    stock: 1,
    sunlight: "Full sun",
    watering: 1,
    price: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Ftulip.png?alt=media&token=2f4379b7-a311-4482-aa92-e158f4f6355e",
  },
  {
    flower: "lilies",
    description:
      "Fragrant, large flowers with a trumpet shape, often symbolizing purity and beauty.",
    color: "white, pink, orange",
    stock: 1,
    sunlight: "Full sun, partial sun",
    watering: 3,
    price: 10,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Flily.png?alt=media&token=e0ed2c3b-6a4c-4d31-ab9d-0c33478482da",
  },
  {
    flower: "sunflower",
    description:
      "Bright yellow flowers with large, round heads that follow the sun, symbolizing happiness.",
    color: "#FEE86C, orange, #D14343",
    stock: 0,
    sunlight: "Full sun",
    watering: 1,
    price: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Fsunflower.png?alt=media&token=1ba83115-2c5a-4381-a7d0-9525f84d747a",
  },
  {
    flower: "daisy",
    description:
      "Simple, white flowers with a  center, representing innocence and purity.",
    color: "white, #FEE86C, pink",
    stock: 1,
    sunlight: "Full sun, partial sun",
    watering: 1,
    price: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Fdaisy.png?alt=media&token=0d03f612-5488-4c0d-b5fa-e2498602ab8d",
  },
  {
    flower: "orchid",
    description:
      "Exotic flowers with intricate patterns, symbolizing luxury, beauty, and strength.",
    color: "white, #A799C6, pink",
    stock: 1,
    sunlight: "Indirect light",
    watering: 1,
    price: 20,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Forchid.png?alt=media&token=97682672-05f1-4108-a74b-2502865f4302",
  },
  {
    flower: "carnations",
    description:
      "Frilly, long-lasting flowers in various colors, often used in bouquets and arrangements.",
    color: "#D14343, white, pink",
    stock: 1,
    sunlight: "Full sun",
    watering: 3,
    price: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Fcarnation.png?alt=media&token=eccbfdce-a818-4a58-bd27-ec287adf0319",
  },
  {
    flower: "chrysanthemus",
    description: "Bold, colorful blooms, symbolizing longevity and happiness.",
    color: "#FEE86C, white, #D14343",
    stock: 1,
    sunlight: "Full sun",
    watering: 1,
    price: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Fchrysanthemus.png?alt=media&token=3ef2cca8-c216-4edd-a544-f61057505943",
  },
  {
    flower: "peonies",
    description:
      "Large, fragrant blooms with soft petals, symbolizing romance and prosperity.",
    color: "#D14343, white, pink",
    stock: 1,
    sunlight: "Full sun",
    watering: 1,
    price: 15,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Fpeony.png?alt=media&token=2f07458d-9697-43ac-b150-61f508b66a23",
  },
  {
    flower: "gerbera",
    description:
      "Bright, cheerful flowers with a daisy-like appearance, symbolizing beauty and innocence.",
    color: "#D14343, #FEE86C, pink",
    stock: 0,
    sunlight: "Full sun",
    watering: 3,
    price: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Fgerbera.png?alt=media&token=1ca57850-d107-4672-a086-f3b885fd9e76",
  },
  {
    flower: "iris",
    description:
      "Graceful flowers with striking colors, often associated with royalty and wisdom.",
    color: "#A799C6, white, #92a6d2",
    stock: 1,
    sunlight: "Full sun",
    watering: 1,
    price: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Firis.png?alt=media&token=40d5b77d-e873-416e-b957-2af6d1841323",
  },
  {
    flower: "lavender",
    description:
      "Purple flowers with a calming fragrance, known for their soothing properties.",
    color: "#A799C6, white, #92a6d2",
    stock: 0,
    sunlight: "Full sun",
    watering: 0,
    price: 6,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Flavanda.png?alt=media&token=e75fa9a2-08ea-4d5b-8beb-a8f03cf9ec5b",
  },
  {
    flower: "violet",
    description:
      "Small, delicate flowers in purple or white, representing modesty and love.",
    color: "#A799C6, white, #92a6d2",
    stock: 1,
    sunlight: "Indirect light",
    watering: 7,
    price: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Fviolet.png?alt=media&token=3080c430-8482-421e-a487-406a9b4c3b11",
  },
  {
    flower: "magnolia",
    description:
      "Large, fragrant flowers with waxy petals, symbolizing strength and dignity.",
    color: "#92a6d2, pink, white",
    stock: 1,
    sunlight: "Full sun, partial sun",
    watering: 1,
    price: 15,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Fmagnolia.png?alt=media&token=563652db-9ada-40eb-81f3-e673f34b9222",
  },
  {
    flower: "hydrangeas",
    description:
      "Round clusters of small flowers in a variety of colors, symbolizing gratitude and grace.",
    color: "#92a6d2, pink, white",
    stock: 0,
    sunlight: "Partial sun",
    watering: 7,
    price: 15,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/flores%2Fhydrangeas.png?alt=media&token=b460bbd3-bf6c-43be-bd87-32f32000793f",
  },
];

// Function to generate the HTML for the cards
function generateFlowerCards() {
  const container = document.getElementById("container"); // Get the container where the cards will go

  // Loop through the database array and create a card for each flower
  database.forEach((flower) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${flower.image}" class="flower_img" alt="${flower.flower}" />
        <p class="price">$${flower.price}</p>
        <div class="information">
          <p>Flower: ${
            flower.flower.charAt(0).toUpperCase() + flower.flower.slice(1)
          }</p>
          <p>Description: ${flower.description}</p>
            <p>Sunlight: ${flower.sunlight}</p>
            <p>Watering: ${getWateringDescription(flower.watering)}</p>
         <div class="color-icons" id="color-icons-${flower.flower}">
          <p>Colors:</p>
        </div>  
      `;

    // Append the card to the container
    container.appendChild(card);

    setTimeout(() => {
      let colorIcons = document.getElementById(`color-icons-${flower.flower}`);
      let colors = flower.color.replace(/\s+/g, "").split(",");
      colors.forEach((color) => {
        let colorIcon = document.createElement("div");
        colorIcon.style.backgroundColor = color;
        colorIcons.appendChild(colorIcon);
      });
    }, 50);
  });
}

// Helper function to convert watering level into description
function getWateringDescription(wateringLevel) {
  switch (wateringLevel) {
    case 1:
      return "Low (Water once a week)";
    case 3:
      return "Medium (Water every 3 days)";
    case 7:
      return "High (Water every day)";
    case 0:
      return "Minimal (Water very rarely)";
    default:
      return "Unknown watering needs";
  }
}

// Call the function to generate cards when the page loads
window.onload = generateFlowerCards;
