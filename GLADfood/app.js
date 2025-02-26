window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY >= window.innerHeight) {
      header.style.backgroundColor = '#0e1828';  // Change to your desired color
  } else {
      header.style.backgroundColor = 'transparent';  // Reset to the original color or set another one
  }
});


angular.module("gladFoodApp", [])
  .controller("HeaderController", function () {
    this.title = "GLAD Food Corner";
  })
  .controller("MainController", function () {
    this.highlights = [
      {
        img:'assets/freshIng.jpg',
        title: "Fresh Ingredients",
        description: "We use only the freshest ingredients in our dishes.",
      },
      {
        img:'assets/chef.jpg',
        title: "Master Chefs",
        description: "Discover our chef’s special dishes, crafted with care.",
      },
      {
        img:'assets/quality.jpg',
        title: "Quality Food",
        description: "A perfect spot for family meals and gatherings.",
      },
      {
        img:'assets/ordInTime.jpg',
        title: "Delivery On Time",
        description: "A perfect spot for family meals and gatherings.",
      },
    ];

    // Simulating menuCtrl's categories for popular dishes
    this.categories = [
        {
          name: "Appetizers",
          items: [
            {
              img :'assets/menu/springRoll.jpg',
              name: "Spring Rolls",
              description: "Crispy rolls with veggies.",
              price: 100,
            },
            {
              img :'assets/menu/chickenWings.jpg', 
              name: "Chicken Wings",
              description: "Spicy chicken wings.",
              price: 150,
            },
          ]
        },
        {
          name: "Main Course",
          items: [
            {
              img :'assets/menu/butterChicken.jpg',
              name: "Butter Chicken",
              description: "Creamy chicken with spices.",
              price: 250,
            },
            {
              img :'assets/menu/paneerTikka.jpg',
              name: "Paneer Tikka",
              description: "Marinated paneer chunks.",
              price: 200,
            },
          ],
        },
        {
          name: "Desserts",
          items: [
            {
              img :'assets/menu/gulabJamun.jpg',
              name: "Gulab Jamun",
              description: "Sweet milk dumplings.",
              price: 50,
            },
            { 
              img :'assets/menu/iceCream.jpg',
              name: "Ice Cream", 
              description: "Assorted flavors.", 
              price: 70 
            },
          ],
        },
        {
            name: "Bevarages",
            items: [
              { img :'assets/menu/eggnog.jpg',
                name: "Eggnog", 
                description: "Thick and creamy with the perfect mild flavor and hint of nutmeg.", 
                price: 40 
              },
              {
                img :'assets/menu/oreoMilkshake.jpg',
                name: "Oreo Milkshake",
                description: "thick, creamy, and everyone’s favorite dessert!",
                price: 50,
              },
            ],
          },
      ];
      
      this.loadPopularDishes = function () {
          this.popularDishes = [];
          // Select some dishes from the categories
          this.categories.forEach(category => {
              this.popularDishes.push(...category.items.slice(0, 2)); // Select the first dish from each category as popular
          });
      };
      
      this.loadPopularDishes(); // Load popular dishes when the controller is initialized

      this.chefInf = [
          {
            img : 'assets/chefGautam.jpg',
            name : 'Gautam Tungariya',
            desig : 'Cool Chef',
            insta:'https://www.instagram.com/m.r_rishu_08?igsh=dnM3aWJydmoxa2Jo',
            linked:'https://www.linkedin.com/in/gautam-tungariya/',
            google:'https://www.google.com/search?q=gautam+tungariya&rlz=1C1GCEA_enIN1100IN1100&oq=gautam+tungariya&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGD3SAQg0MTMyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'
              
          },
          {
            img:'assets/chefCP.jpg',
            name : 'Laxminarayan',
            desig : 'Main Chef',
            insta:'https://www.instagram.com/nar_ayan9425?igsh=dTZ1dW53N2RrdnM5',
            linked:'https://www.linkedin.com/in/laxminarayan-chorotiya-943139319 ',
            google:'https://www.google.com/search?q=Laxminarayan+chorotiya&sca_esv=8a5f3c529fc99551&rlz=1C1GCEA_enIN1100IN1100&sxsrf=AHTn8zppEPcwFHwRoqCyy7zRRzGxds0jAQ%3A1740060250581&ei=Wja3Z4CQI_Ke4-EP7drziAE&ved=0ahUKEwiApf7ItdKLAxVyzzgGHW3tHBEQ4dUDCBA&uact=5&oq=Laxminarayan+chorotiya&gs_lp=Egxnd3Mtd2l6LXNlcnAiFkxheG1pbmFyYXlhbiBjaG9yb3RpeWEyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGApIqqIBUNtoWMWhAXAFeACQAQCYAdYBoAH2HKoBBjAuMjAuMrgBA8gBAPgBAZgCG6AC0h7CAgoQABiABBiwAxgNwgIQEC4YgAQYsAMYxwEYDRivAcICCRAAGLADGA0YHsICBxAAGLADGB7CAgoQIxiABBgnGIoFwgILEC4YgAQYkQIYigXCAg4QABiABBixAxiDARiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAgUQLhiABMICDRAuGIAEGLEDGEMYigXCAgoQLhiABBhDGIoFwgIKEAAYgAQYQxiKBcICCBAAGIAEGLEDwgILEAAYgAQYkQIYigXCAgsQLhiABBixAxiDAcICEBAAGIAEGLEDGEMYgwEYigXCAhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEBwgIIEC4YgAQYsQPCAg4QLhiABBiRAhixAxiKBcICERAuGIAEGJECGLEDGNQCGIoFwgIFEAAYgATCAg4QLhiABBjHARiOBRivAcICCxAuGIAEGMcBGK8BwgIHEAAYgAQYCsICERAuGIAEGMcBGJgFGJkFGK8BwgIGEAAYFhgewgICECbCAgUQIRigAZgDAIgGAZAGCroGBggBEAEYFJIHBjUuMTkuM6AH38MD&sclient=gws-wiz-serp'
              
          },
          {
            img:'assets/chefCP.jpg',
            name : 'Dilip Kurdiya',
            desig : 'Hardest Chef',
            insta:'https://www.instagram.com/rohit2.0891?igsh=MWEyYXhoanZxMHdyOQ==',
            linked:'https://www.linkedin.com/in/dilip-kurdiya-373348288 ',
            google:'https://www.google.com/search?q=dilip+kurdiya&rlz=1C1GCEA_enIN1100IN1100&oq=dilip+kurdiya&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDzSAQg3ODI0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'
          },
          {
            img:'assets/chefCP.jpg',
            name : 'Atul Gaud',
            desig : 'Head Chef',
            insta:'https://www.instagram.com/theatulgaud?igsh=Y3U5djhhYmh0dTY1',
            linked:'https://www.linkedin.com/in/atul-gaud-625973286 ',
            google:'https://www.google.com/search?q=Atul+gaud&sca_esv=8a5f3c529fc99551&rlz=1C1GCEA_enIN1100IN1100&sxsrf=AHTn8zrTAdNo28G8yadYdAqNF3szwu42Sw%3A1740060233525&ei=STa3Z8nXH8CZ4-EPmbW0kAs&ved=0ahUKEwiJoO3AtdKLAxXAzDgGHZkaDbIQ4dUDCBA&uact=5&oq=Atul+gaud&gs_lp=Egxnd3Mtd2l6LXNlcnAiCUF0dWwgZ2F1ZDIIEC4YgAQY1AIyCBAuGIAEGNQCMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyIBAuGIAEGNQCGJcFGNwEGN4EGOAEGPQDGPEDGPUD2AEBSPwjUN4TWJcjcAJ4AJABAJgBgwKgAboLqgEFMC42LjK4AQPIAQD4AQGYAgqgAqYMwgIIEAAYsAMY7wXCAgsQABiABBiwAxiiBMICChAuGIAEGCcYigXCAgsQABiABBiRAhiKBcICERAuGIAEGJECGNEDGMcBGIoFwgIKEC4YgAQYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIIEAAYgAQYsQPCAg4QLhiABBixAxiDARiKBcICFxAuGIAEGIoFGJcFGNwEGN4EGN8E2AEBwgILEC4YgAQYkQIYigXCAgoQABiABBhDGIoFwgIQEC4YgAQYsQMYQxiDARiKBcICGhAuGIAEGJECGIoFGJcFGNwEGN4EGN8E2AEBwgINEC4YgAQYQxjUAhiKBcICDRAuGIAEGLEDGEMYigXCAggQLhiABBixA8ICDhAuGIAEGLEDGNEDGMcBwgIcEC4YgAQYQxjUAhiKBRiXBRjcBBjeBBjgBNgBAcICDhAuGIAEGMcBGI4FGK8BwgIFEC4YgATCAiAQLhiABBjUAhiXBRjcBBjeBBjgBBj0AxjxAxj1A9gBAZgDAIgGAZAGBboGBggBEAEYFJIHBTIuNi4yoAeKnQI&sclient=gws-wiz-serp'
              
          },
      ];
  })
  .controller("MenuController", function () {
    this.categories = [
      {
        name: "Appetizers",
        items: [
          {
            img :'assets/menu/springRoll.jpg',
            name: "Spring Rolls",
            description: "Crispy rolls with veggies.",
            price: 100,
          },
          {
            img :'assets/menu/chickenWings.jpg', 
            name: "Chicken Wings",
            description: "Spicy chicken wings.",
            price: 150,
          },
          {
            img :'assets/menu/samosa.jpg',
            name: "Samosa",
            description: "Fried pastry with spiced potatoes and peas.",
            price: 50,
          },
          {
            img :'assets/menu/bruschetta.jpg',
            name: "Bruschetta",
            description: "Grilled bread with tomato and basil.",
            price: 120,
          },
          {
            img :'assets/menu/partyCheeseBread.jpg',
            name: "Party Cheese Bread",
            description: "It's better than the usual garlic bread with pasta, too. ",
            price: 190,
          },
          {
            img :'assets/menu/teriyakiMeatballs.jpg', 
            name: "Teriyaki Pineapple Meatballs",
            description: "Spicy Flavoured Meatballs.",
            price: 250,
          },
          {
            img :'assets/menu/fruitBoard.jpg',
            name: "Fruit Charcuterie Board",
            description: "Fruity and Delicious!",
            price: 180,
          },
          {
            img :'assets/menu/grilledTomatoPizza.jpg',
            name: "Grilled Tomato-Peach Pizza",
            description: "The fresh flavors make it a perfect appetizer for a summer party.",
            price: 200,
          },
        ],
      },
      {
        name: "Main Course",
        items: [
          {
            img :'assets/menu/butterChicken.jpg',
            name: "Butter Chicken",
            description: "Creamy chicken with spices.",
            price: 250,
          },
          {
            img :'assets/menu/paneerTikka.jpg',
            name: "Paneer Tikka",
            description: "Marinated paneer chunks.",
            price: 200,
          },
          {
            img :'assets/menu/vegBiryani.jpg',
            name: "Veg Biryani",
            description: "Fragrant rice with mixed vegetables.",
            price: 180,
          },
          {
            img :'assets/menu/lambRoganJosh.jpg',
            name: "Lamb Rogan Josh",
            description: "Spiced lamb curry.",
            price: 300,
          },
          {
            img :'assets/menu/searedScallops.jpg',
            name: "Seared Scallops ",
            description: "Juice lemons. Spoon out capers. Heat pan. Cook scallops. ",
            price: 380,
          },
          {
            img :'assets/menu/grilledPizza.jpg',
            name: "Grilled Pizza",
            description: "This dough is designed for the grill—you can get creative with your toppings, or let your guests go wild.",
            price: 290,
          },
          {
            img :'assets/menu/quickPotatoGnocchi.jpg',
            name: "Quick Potato Gnocchi",
            description: "These pillowy Italian dumplings were made quicker with instant mashed potatoes. Top with Parmesan and fresh herbs, and serve a salad after.",
            price: 480,
          },
          {
            img :'assets/menu/classicSole.jpg',
            name: "Classic Sole Meunière",
            description: "we promise that it's truly easy to pull off at home.",
            price: 350,
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            img :'assets/menu/gulabJamun.jpg',
            name: "Gulab Jamun",
            description: "Sweet milk dumplings.",
            price: 50,
          },
          { 
            img :'assets/menu/iceCream.jpg',
            name: "Ice Cream", 
            description: "Assorted flavors.", 
            price: 70 
          },
          {
            img :'assets/menu/chocolateMousse.jpg',
            name: "Chocolate Mousse",
            description: "Creamy chocolate dessert.",
            price: 90,
          },
          {
            img :'assets/menu/rasgulla.jpg',
            name: "Rasgulla",
            description: "Soft and spongy syrupy dessert.",
            price: 60,
          },
          {
            img :'assets/menu/buckeyeCake.jpg',
            name: "Buckeye Bundt Cake",
            description: " A creamy peanut butter cheesecake mixture is sandwiched inside rich chocolate cake.",
            price: 50,
          },
          { 
            img :'assets/menu/Charcuterie.jpg',
            name: "Dessert 'Charcuterie' Board", 
            description: "It’s packed with chocolate salami, rainbow confetti cream cheese dip, peanut butter crispy rice squares, cookies, cupcakes and much more.", 
            price: 70 
          },
          {
            img :'assets/menu/glazedMocha.jpg',
            name: "Glazed Mocha Chocolate Chip Cookies",
            description: "Espresso powder and chopped chocolate-covered espresso beans.",
            price: 90,
          },
          {
            img :'assets/menu/skilletCookie.jpg',
            name: "Skillet Cookie Sundae",
            description: "Top with your favorite ice cream, hot fudge, whipped cream and maraschino cherries.",
            price: 60,
          },
        ],
      },
      {
        name: "Beverages",
        items: [
          { 
            img :'assets/menu/masalaChai.jpg',
            name: "Masala Chai", 
            description: "Spiced tea.", 
            price: 30 
          },
          { img :'assets/menu/lassi.jpg',
            name: "Lassi", 
            description: "Yogurt-based drink.", 
            price: 40 
          },
          {
            img :'assets/menu/mangoShake.jpg',
            name: "Mango Shake",
            description: "Refreshing mango drink.",
            price: 50,
          },
          { 
            img :'assets/menu/coffee.jpg',
            name: "Coffee", 
            description: "Freshly brewed coffee.", 
            price: 35 
          },
          { 
            img :'assets/menu/horchata.jpg',
            name: "Horchata", 
            description: "made with rice, milk, vanilla, cinnamon, and water. ", 
            price: 30 
          },
          { img :'assets/menu/eggnog.jpg',
            name: "Eggnog", 
            description: "Thick and creamy with the perfect mild flavor and hint of nutmeg.", 
            price: 40 
          },
          {
            img :'assets/menu/oreoMilkshake.jpg',
            name: "Oreo Milkshake",
            description: "thick, creamy, and everyone’s favorite dessert!",
            price: 50,
          },
          { 
            img :'assets/menu/orangeJulius.jpg',
            name: "Orange Julius", 
            description: "orange juice, milk, water, ice, vanilla, a frozen banana, and a secret ingredient that makes it the best!", 
            price: 35 
          },
        ],
      },
    ];
    this.selectedItem = null;
    this.selectedQuantity = 1;
    

    this.increaseQuantity = function () {
      this.selectedQuantity++;
    };
    
    this.clearSelection = function() {
      this.selectedItem = null;
    };

    this.decreaseQuantity = function () {
      if (this.selectedQuantity > 1) {
        this.selectedQuantity--;
      }
    };
    this.cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage

    this.selectItem = function (item) {
      this.selectedItem = item;
      this.selectedQuantity = 1; // Reset quantity when selecting a new item
    };

    this.getTotalPrice = function () {
      if (this.selectedItem) {
        return this.selectedItem.price * this.selectedQuantity;
      }
      return 0;
    };

    this.addToCart = function () {
      var itemInCart = this.cart.find(
        (item) => item.item.name === this.selectedItem.name
      );
      if (itemInCart) {
        itemInCart.quantity += this.selectedQuantity;
        itemInCart.totalPrice = itemInCart.item.price * itemInCart.quantity;
      } else {
        this.cart.push({
          item: this.selectedItem,
          quantity: this.selectedQuantity,
          totalPrice: this.getTotalPrice(),
        });
      }

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(this.cart));
      alert(`Item added to cart!\n\nName: ${this.selectedItem.name}\nPrice: ${this.selectedItem.price} INR (per quantity)\nQuantity: ${this.selectedQuantity}`);
      this.selectedItem = null; // Reset the selected item
    };

    this.saveAndViewCart = function () {
      // Save the cart to localStorage
      localStorage.setItem("cart", JSON.stringify(this.cart));
      window.location.href = "cart.html";
    };
  })
  .controller("CartController", function () {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    this.showPaymentDetails = false; // Flag to show payment details
    this.decrementItem = function (index) {
      const item = this.cart[index];
      item.quantity--;
      item.totalPrice = item.item.price * item.quantity;
      if (item.quantity <= 0) {
        this.cart.splice(index, 1);
      }
      this.saveCart();
    };

    this.removeItem = function (index) {
      this.cart.splice(index, 1);
      this.saveCart();
    };

    this.returnToCart = function(){
      window.location.href='cart.html';
    }

    this.getTotalPrice = function () {
      return this.cart.reduce((total, item) => total + item.totalPrice, 0);
    };

    this.saveCart = function () {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    };

    this.payNow = function () {
        // let message = "Proceeding to payment with the following items:\n\n";
        // this.cart.forEach(item => {
        //   message += `Name: ${item.item.name}\nPrice: ${item.item.price} INR\nQuantity: ${item.quantity}\nTotal Price: ${item.totalPrice} INR\n\n`;
        // });
        // message += `Total Amount: ${this.getTotalPrice()} INR`;
        // alert(message);
        this.showPaymentDetails = true; 
    };

    this.cancelPayment = function () {
        this.showPaymentDetails = false; // Hide payment details section
        alert(`Your payment is cancelled !!`);
        this.cart = [];
        localStorage.setItem("cart", JSON.stringify(this.cart));
      
        // Redirect to menu.html
        window.location.href = "menu.html";
      };
  
    this.confirmPayment = function () {
        alert(`Total Amount: ${this.getTotalPrice()} INR Payed successfully!!\nThank you ordering !!`);
        this.cart = [];
        localStorage.setItem("cart", JSON.stringify(this.cart));
      
        // Redirect to menu.html
        window.location.href = "menu.html";
      };
  })
  .controller('AboutController', function() {
    this.teamMembers = [
      {
        img : 'assets/chefGautam.jpg',
        name : 'Gautam Tungariya',
        desig : 'Cool Chef',
        insta:'https://www.instagram.com/m.r_rishu_08?igsh=dnM3aWJydmoxa2Jo',
        linked:'https://www.linkedin.com/in/gautam-tungariya/',
        google:'https://www.google.com/search?q=gautam+tungariya&rlz=1C1GCEA_enIN1100IN1100&oq=gautam+tungariya&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGD3SAQg0MTMyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'
          
      },
      {
        img:'assets/chefCP.jpg',
        name : 'Laxminarayan',
        desig : 'Main Chef',
        insta:'https://www.instagram.com/nar_ayan9425?igsh=dTZ1dW53N2RrdnM5',
        linked:'https://www.linkedin.com/in/laxminarayan-chorotiya-943139319 ',
        google:'https://www.google.com/search?q=Laxminarayan+chorotiya&sca_esv=8a5f3c529fc99551&rlz=1C1GCEA_enIN1100IN1100&sxsrf=AHTn8zppEPcwFHwRoqCyy7zRRzGxds0jAQ%3A1740060250581&ei=Wja3Z4CQI_Ke4-EP7drziAE&ved=0ahUKEwiApf7ItdKLAxVyzzgGHW3tHBEQ4dUDCBA&uact=5&oq=Laxminarayan+chorotiya&gs_lp=Egxnd3Mtd2l6LXNlcnAiFkxheG1pbmFyYXlhbiBjaG9yb3RpeWEyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGApIqqIBUNtoWMWhAXAFeACQAQCYAdYBoAH2HKoBBjAuMjAuMrgBA8gBAPgBAZgCG6AC0h7CAgoQABiABBiwAxgNwgIQEC4YgAQYsAMYxwEYDRivAcICCRAAGLADGA0YHsICBxAAGLADGB7CAgoQIxiABBgnGIoFwgILEC4YgAQYkQIYigXCAg4QABiABBixAxiDARiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAgUQLhiABMICDRAuGIAEGLEDGEMYigXCAgoQLhiABBhDGIoFwgIKEAAYgAQYQxiKBcICCBAAGIAEGLEDwgILEAAYgAQYkQIYigXCAgsQLhiABBixAxiDAcICEBAAGIAEGLEDGEMYgwEYigXCAhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEBwgIIEC4YgAQYsQPCAg4QLhiABBiRAhixAxiKBcICERAuGIAEGJECGLEDGNQCGIoFwgIFEAAYgATCAg4QLhiABBjHARiOBRivAcICCxAuGIAEGMcBGK8BwgIHEAAYgAQYCsICERAuGIAEGMcBGJgFGJkFGK8BwgIGEAAYFhgewgICECbCAgUQIRigAZgDAIgGAZAGCroGBggBEAEYFJIHBjUuMTkuM6AH38MD&sclient=gws-wiz-serp'
          
      },
      {
        img:'assets/chefCP.jpg',
        name : 'Dilip Kurdiya',
        desig : 'Hardest Chef',
        insta:'https://www.instagram.com/rohit2.0891?igsh=MWEyYXhoanZxMHdyOQ==',
        linked:'https://www.linkedin.com/in/dilip-kurdiya-373348288 ',
        google:'https://www.google.com/search?q=dilip+kurdiya&rlz=1C1GCEA_enIN1100IN1100&oq=dilip+kurdiya&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDzSAQg3ODI0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'
      },
      {
        img:'assets/chefCP.jpg',
        name : 'Atul Gaud',
        desig : 'Head Chef',
        insta:'https://www.instagram.com/theatulgaud?igsh=Y3U5djhhYmh0dTY1',
        linked:'https://www.linkedin.com/in/atul-gaud-625973286 ',
        google:'https://www.google.com/search?q=Atul+gaud&sca_esv=8a5f3c529fc99551&rlz=1C1GCEA_enIN1100IN1100&sxsrf=AHTn8zrTAdNo28G8yadYdAqNF3szwu42Sw%3A1740060233525&ei=STa3Z8nXH8CZ4-EPmbW0kAs&ved=0ahUKEwiJoO3AtdKLAxXAzDgGHZkaDbIQ4dUDCBA&uact=5&oq=Atul+gaud&gs_lp=Egxnd3Mtd2l6LXNlcnAiCUF0dWwgZ2F1ZDIIEC4YgAQY1AIyCBAuGIAEGNQCMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyIBAuGIAEGNQCGJcFGNwEGN4EGOAEGPQDGPEDGPUD2AEBSPwjUN4TWJcjcAJ4AJABAJgBgwKgAboLqgEFMC42LjK4AQPIAQD4AQGYAgqgAqYMwgIIEAAYsAMY7wXCAgsQABiABBiwAxiiBMICChAuGIAEGCcYigXCAgsQABiABBiRAhiKBcICERAuGIAEGJECGNEDGMcBGIoFwgIKEC4YgAQYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIIEAAYgAQYsQPCAg4QLhiABBixAxiDARiKBcICFxAuGIAEGIoFGJcFGNwEGN4EGN8E2AEBwgILEC4YgAQYkQIYigXCAgoQABiABBhDGIoFwgIQEC4YgAQYsQMYQxiDARiKBcICGhAuGIAEGJECGIoFGJcFGNwEGN4EGN8E2AEBwgINEC4YgAQYQxjUAhiKBcICDRAuGIAEGLEDGEMYigXCAggQLhiABBixA8ICDhAuGIAEGLEDGNEDGMcBwgIcEC4YgAQYQxjUAhiKBRiXBRjcBBjeBBjgBNgBAcICDhAuGIAEGMcBGI4FGK8BwgIFEC4YgATCAiAQLhiABBjUAhiXBRjcBBjeBBjgBBj0AxjxAxj1A9gBAZgDAIgGAZAGBboGBggBEAEYFJIHBTIuNi4yoAeKnQI&sclient=gws-wiz-serp'
          
      },
    ];
  });


  /*back to top */

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress_value");
  let pos =document.documentElement.scrollTop;

  let calcHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
  let scrollValue = Math.round((pos*100)/calcHeight);
  if (pos>100){
      scrollProgress.style.display = "grid";
  }
  else {
      scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click",() => {
      document.documentElement.scrollTop = 0;
  })

  scrollProgress.style.background = `conic-gradient(#feb03c ${scrollValue}%, #0e1828 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



// Initialize login state from localStorage
window.onload = function() {
  updateLoginState();
};

function updateLoginState() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const loginBtn = document.getElementById('lgBtn');
  // const logoutBtn = document.getElementById('loutBtn');
  const proBtn = document.getElementById('profile');

  if (isLoggedIn === 'true') {
    loginBtn.style.display = 'none';
    // logoutBtn.style.display = 'block';
    proBtn.style.display = 'block';
  } else {
    loginBtn.style.display = 'block';
    // logoutBtn.style.display = 'none';
    proBtn.style.display = 'none';
  }
}

// Function to handle login
function login() {
  localStorage.setItem('isLoggedIn', 'true');
  location.href = 'indexLog.php';
  updateLoginState();
}

// Function to handle logout
function logout() {
  localStorage.setItem('isLoggedIn', 'false');
  updateLoginState();
  location.href = 'home.html';
}


document.getElementById('profile-icon').addEventListener('click', function() {
  var dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.classList.toggle('show');
});

window.addEventListener('click', function(event) {
  var dropdownMenu = document.getElementById('dropdown-menu');
  if (!event.target.matches('#profile-icon')) {
      if (dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.remove('show');
      }
  }
});
