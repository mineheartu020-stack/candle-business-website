// Candle catalog data
const candleScents = [
    {
        name: "Lavender Dreams",
        scent: "Lavender & Vanilla",
        description: "Calm your mind with soothing lavender and creamy vanilla notes",
        price: "$12.99",
        emoji: "🟣"
    },
    {
        name: "Ocean Breeze",
        scent: "Sea Salt & Citrus",
        description: "Feel the fresh ocean air with zesty lemon and ocean mist",
        price: "$13.99",
        emoji: "🔵"
    },
    {
        name: "Rose Garden",
        scent: "Rose & Peony",
        description: "Delicate floral blend perfect for romantic evenings",
        price: "$14.99",
        emoji: "🌹"
    },
    {
        name: "Vanilla Bliss",
        scent: "Vanilla & Caramel",
        description: "Sweet and comforting with rich caramel undertones",
        price: "$11.99",
        emoji: "🟡"
    },
    {
        name: "Minty Fresh",
        scent: "Peppermint & Eucalyptus",
        description: "Energizing blend to refresh any room",
        price: "$12.99",
        emoji: "🟢"
    },
    {
        name: "Cozy Spice",
        scent: "Cinnamon & Clove",
        description: "Warm spices create a homey, welcoming atmosphere",
        price: "$13.99",
        emoji: "🟠"
    },
    {
        name: "Cherry Blossom",
        scent: "Cherry & Almond",
        description: "Soft and sweet with hints of spring",
        price: "$12.99",
        emoji: "🌸"
    },
    {
        name: "Tropical Paradise",
        scent: "Coconut & Pineapple",
        description: "Escape to an island getaway with every breath",
        price: "$13.99",
        emoji: "🏝️"
    },
    {
        name: "Honey Glow",
        scent: "Honey & Beeswax",
        description: "Natural sweetness with a gentle, warm glow",
        price: "$14.99",
        emoji: "🍯"
    },
    {
        name: "Forest Escape",
        scent: "Pine & Cedarwood",
        description: "Natural forest fragrance for peaceful relaxation",
        price: "$12.99",
        emoji: "🌲"
    },
    {
        name: "Berry Bliss",
        scent: "Strawberry & Blueberry",
        description: "Sweet berry medley that feels like summer",
        price: "$11.99",
        emoji: "🍓"
    },
    {
        name: "Evening Jasmine",
        scent: "Jasmine & Musk",
        description: "Sophisticated and mysterious evening scent",
        price: "$15.99",
        emoji: "🌙"
    }
];

// Function to generate random candles
function generateRandomCatalog() {
    const candleGrid = document.getElementById('candleGrid');
    candleGrid.innerHTML = '';
    
    // Shuffle and select random candles
    const shuffled = candleScents.sort(() => Math.random() - 0.5);
    const randomCandles = shuffled.slice(0, Math.floor(Math.random() * 4) + 4);
    
    randomCandles.forEach(candle => {
        const candleCard = document.createElement('div');
        candleCard.className = 'candle-card';
        candleCard.innerHTML = `
            <div class="candle-image">${candle.emoji}</div>
            <div class="candle-name">${candle.name}</div>
            <div class="candle-scent">${candle.scent}</div>
            <div class="candle-description">${candle.description}</div>
            <div class="candle-price">${candle.price}</div>
            <button class="add-to-cart">Add to Cart</button>
        `;
        
        // Add click animation
        candleCard.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
        
        candleGrid.appendChild(candleCard);
    });
}

// Generate catalog on page load
document.addEventListener('DOMContentLoaded', function() {
    generateRandomCatalog();
    
    // CTA button functionality
    const ctaBtn = document.querySelector('.cta-btn');
    ctaBtn.addEventListener('click', function() {
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const candleName = e.target.parentElement.querySelector('.candle-name').textContent;
            alert(`✨ ${candleName} added to your cart! 🛒`);
        }
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting Bubble Bliss Candles! We will get back to you soon. 💌');
            this.reset();
        });
    }
});

// Refresh button on catalog header
document.addEventListener('DOMContentLoaded', function() {
    const refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            this.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 600);
        });
    }
});
