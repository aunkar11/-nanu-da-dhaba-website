
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Clock,
  MapPin,
  Menu,
  Phone,
  Star,
  Utensils,
  X,
} from "lucide-react";
import "./App.css";

const PHONE_NUMBER = "9982981864";

const dishes = [
  // MAIN COURSE — LEFT COLUMN
{
    name: "Palak Paneer",
  category: "MAIN COURSE",
  price: 240,
  description: "Fresh spinach cooked with soft paneer.",
  image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
},
{
  name: "Mattar Paneer",
  category: "MAIN COURSE",
  price: 220,
  description: "Paneer and green peas in Indian gravy.",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
},
{
    name: "Shahi Paneer",
  category: "MAIN COURSE",
  price: 240,
  description: "Rich and creamy royal paneer curry.",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
},
{
  name: "Kadhai Paneer",
  category: "MAIN COURSE",
  price: 240,
  description: "Paneer cooked with peppers and spices.",
image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800"
},
{
  name: "Paneer Pasanda",
  category: "MAIN COURSE",
  price: 270,
  description: "A rich paneer delicacy.",
 image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800"
},
{
  name: "Paneer Jaipuri",
  category: "MAIN COURSE",
  price: 270,
  description: "A flavorful Rajasthani-style paneer curry.",
 image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
},
{
  name: "Matar Mushroom",
  category: "MAIN COURSE",
  price: 250,
  description: "Mushrooms and peas in aromatic gravy.",
image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800"
},
{
  name: "Mushroom Masala",
  category: "MAIN COURSE",
  price: 250,
  description: "Mushrooms cooked in spiced masala.",
image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800"
},
{
  name: "Kadhai Mushroom",
  category: "MAIN COURSE",
  price: 240,
  description: "Mushrooms cooked in kadhai spices.",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800"
},
{
    name: "Paneer - Do - Pyaz",
  category: "MAIN COURSE",
  price: 240,
  description: "Paneer cooked with onions and spices.",
image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800"
},
{
  name: "Paneer Banjara",
  category: "MAIN COURSE",
  price: 270,
  description: "Paneer cooked in a rich, smoky Rajasthani-style gravy.",
  image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800"
},
{
  name: "Paneer Lahsunia",
  category: "MAIN COURSE",
  price: 270,
  description: "Paneer cooked in a flavorful garlic-rich gravy.",
image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800"
},
{
    name: "Handi Paneer",
  category: "MAIN COURSE",
  price: 240,
  description: "Traditional handi-style paneer curry.",
  image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800"
},
{
  name: "Paneer Salsa",
  category: "MAIN COURSE",
  price: 300,
  description: "A special paneer preparation.",
image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800"
},
{
  name: "Methi Malai Matter",
  category: "MAIN COURSE",
  price: 270,
  description: "Creamy curry with fenugreek and peas.",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800"
},
{
    name: "Navratan Korma",
  category: "MAIN COURSE",
  price: 280,
  description: "A rich mixed vegetable royal curry.",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
},
{
  name: "Aloo-do-pyaz",
  category: "MAIN COURSE",
  price: 220,
  description: "Potatoes cooked with onions.",
  image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800"
},
{
  name: "Aloo Jeera",
  category: "MAIN COURSE",
  price: 160,
  description: "Potatoes tempered with cumin.",
  image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800"
},
{
  name: "Aloo Shimla",
  category: "MAIN COURSE",
  price: 220,
  description: "Potatoes and capsicum cooked with spices.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Capsicum_Aloo_Tomato_sabzi.jpg"
},
{
  name: "Stuff Dum Aloo",
  category: "MAIN COURSE",
  price: 240,
  description: "Stuffed potatoes in rich gravy.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stuffed_Aloo_Dum_-_Kolkata_2015-07-17_9521.JPG"
},
  // MAIN COURSE — RIGHT COLUMN
{
  name: "Paneer Bhurji",
  category: "MAIN COURSE",
  price: 280,
  description: "Crumbled paneer cooked with spices.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paneer_Bhurji.jpg"
},
{
    name: "Paneer Lababdar",
  category: "MAIN COURSE",
  price: 240,
  description: "Paneer in a rich tomato-based gravy.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paneer_Lababdaar.jpg"
},
{
  name: "Paneer Butter Masala",
  category: "MAIN COURSE",
  price: 250,
  description: "Soft paneer in creamy buttery gravy.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paneer_Butter_Masala_-_Garnished.jpg"
},
{
  name: "Paneer Tikka Masala",
  category: "MAIN COURSE",
  price: 270,
  description: "Tandoori-style paneer in masala gravy.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paneer_Tikka_Masala_(2026)_01.jpg"
},

{
    name: "Mix Veg.",
    category: "MAIN COURSE",
    price: 210,
    description: "Seasonal vegetables cooked with spices.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mixed%20Vegetable%20Curry.JPG"
  },
  {
    name: "Malai Kofta",
    category: "MAIN COURSE",
    price: 250,
        description: "Soft kofta in creamy gravy.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Special%20Malai%20Kofta.jpg"
  },
// Malai Kofta
{
  name: "Malai Kofta",
  category: "MAIN COURSE",
  price: 250,
  description: "Soft kofta in creamy gravy.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/MalaiKofta.jpg"
},

// Malai Kofta White Gravy
{
  name: "Malai kofta white gravy",
  category: "MAIN COURSE",
  price: 300,
  description: "Malai kofta in rich white gravy.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Malai%20Kofta%20Curry.jpg"
},

// Kaju Curry
{
  name: "Kaju Curry",
  category: "MAIN COURSE",
  price: 310,
  description: "Cashews in a rich Indian curry.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kaju%20curry%20and%20Paratha.jpg"
},

// Besan Gatta
{
  name: "Besan gatta",
  category: "MAIN COURSE",
  price: 200,
  description: "Traditional Rajasthani gatta curry.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Besan%20Gatta%20curry03.jpg"
},

// Kadi Pakoda
{
  name: "Kadi Pakoda",
  category: "MAIN COURSE",
  price: 190,
  description: "Kadhi with soft pakoda.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kadhi%20Pakoda%20-%20Mehsana%20-%20Gujarat%20-%2001.jpg"
},

// Lahsun Chatni
{
  name: "Lahsun Chatni",
  category: "MAIN COURSE",
  price: 130,
  description: "Traditional spicy garlic chutney.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lahsun%20Onion%20Bhuni%20Chatni.jpg"
},
  {
    name: "Besan gatta",
    category: "MAIN COURSE",
    price: 200,
    description: "Traditional Rajasthani gatta curry.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Besan_Gatta_curry03.jpg"
  },
  {
        name: "Kadi Fry",
    category: "MAIN COURSE",
    price: 170,
    description: "Traditional kadhi prepared with spices.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kadhi%20Pakoda.JPG"
  },
  {
    name: "Kadi Pakoda",
    category: "MAIN COURSE",
    price: 190,
    description: "Kadhi with soft pakoda.",
    image:  "https://commons.wikimedia.org/wiki/Special:FilePath/Kadhi%20Pakora.jpg"
  },
{
  name: "Palak Corn",
  category: "MAIN COURSE",
  price: 240,
  description: "Spinach and sweet corn curry.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Palak%20dall%20curry.jpg"
},
  {
    name: "Soya Masala",
    category: "MAIN COURSE",
    price: 240,
    description: "Soya chunks in spicy masala gravy.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nutrela_Soya_Chunks_Curry.jpg"
  },
{
  name: "Soya Lababdar",
  category: "MAIN COURSE",
  price: 250,
  description: "Soya chunks in rich lababdar gravy.",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900"
},
  {
    name: "Kaju Pyaz",
    category: "MAIN COURSE",
    price: 320,
    description: "Cashews and onions in rich gravy.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kaju%20curry%20and%20Paratha.jpg"
  },
  {
    name: "Malai Pyaz",
    category: "MAIN COURSE",
    price: 270,
    description: "Creamy onion curry.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900"
},
  {
    name: "Dahi Aloo",
    category: "MAIN COURSE",
    price: 200,
    description: "Potatoes cooked in yogurt gravy.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yogurt%20Potato%20Curry%20Recipe%20From%20North%20Indian%20Cuisine%20By%20Sonia%20Goyal.jpg"
},
  {
    name: "Paneer Patiyala",
    category: "MAIN COURSE",
    price: 320,
    description: "A rich special paneer preparation.",
   image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paneer%20special.JPG"
},
  {
    name: "Chaap Gravy",
    category: "MAIN COURSE",
    price: 250,
    description: "Soya chaap cooked in flavorful gravy.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Soya_Chaap_with_curry.jpg"
  },
  {
    name: "Nanu Dhaba Special",
    category: "MAIN COURSE",
    price: 300,
    description: "The signature special from Nanu Da Dhaba.",
     image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mixed%20Vegetable%20Curry.JPG"
},
  {
    name: "Dal Tadka",
    category: "MAIN COURSE",
    price: 180,
    description: "Yellow lentils cooked with Indian spices and a flavorful tadka.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dal_Tadka.jpg"
  },
 // HALKA - FULKA
{
  name: "Pav Bhaji",
  category: "HALKA - FULKA",
  price: 90,
  description: "Spiced vegetable bhaji served with pav.",
  image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800"
},
{
  name: "Extra Pav",
  category: "HALKA - FULKA",
  price: 20,
  description: "Extra pav.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800"
},
{
  name: "Chola Bhatura",
  category: "HALKA - FULKA",
  price: 130,
  description: "Chole served with fluffy bhatura.",
  image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800"
},
{
  name: "Extra Bhatura",
  category: "HALKA - FULKA",
  price: 50,
  description: "Extra bhatura.",
  image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800"
},
{
  name: "Poha",
  category: "HALKA - FULKA",
  price: 70,
  description: "A light Indian breakfast favorite.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Poha%2C_a_snack_made_of_flattened_rice.jpg"
},
{
  name: "Cold Drink",
  category: "BEVERAGES",
  price: 40,
  description: "Chilled soft drink.",
  image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800"
},
{
  name: "Mineral Water",
  category: "BEVERAGES",
  price: 40,
  description: "Refreshing packaged drinking water.",
  image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800"
},

  // BEVERAGES
 {
  name: "Masala Chhachh",
  category: "BEVERAGES",
  price: 40,
  description: "Refreshing spiced buttermilk.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Masala%20chaas.JPG"
},
{
  name: "Salted Lassi",
  category: "BEVERAGES",
  price: 45,
  description: "Refreshing salted lassi.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Salt%20lassi.jpg"
},
{
  name: "Sweet Lassi",
  category: "BEVERAGES",
  price: 80,
  description: "Traditional sweet lassi.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sweet%20Lassi.JPG"
},
{
  name: "Tea",
  category: "BEVERAGES",
  price: 30,
  description: "A warm cup of chai.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Masala%20Chai.JPG"
},
{
  name: "Coffee",
  category: "BEVERAGES",
  price: 40,
  description: "Freshly prepared coffee.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Masala%20Tea%20and%20South%20Indian%20Filter%20Coffee.jpg"
},
{
  name: "Cold Coffee",
  category: "BEVERAGES",
  price: 100,
  description: "A chilled coffee treat.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cold%20coffee%20and%20hazelnut%20dark%20chocolate.jpg"
},
{
  name: "Cold Coffee with Ice Cream",
  category: "BEVERAGES",
  price: 120,
  description: "Cold coffee topped with ice cream.",
  image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900"
},
{
  name: "Milk",
  category: "BEVERAGES",
  price: 40,
  description: "A glass of fresh milk.",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Khurlar%20Dhoodh.jpg"
},

  // KIDS MENU
    {
  name: "French Fry",
  category: "KIDS MENU",
  price: 90,
  description: "Crispy fries for a tasty snack.",
  image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900"
},
{
  name: "Meggie Plain",
  category: "KIDS MENU",
  price: 60,
  description: "Simple, warm noodles.",
  image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900"
},
{
  name: "Meggie Masala",
  category: "KIDS MENU",
  price: 90,
  description: "Noodles with a flavorful masala twist.",
  image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=900"
},
];
const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

function App() {
  const heroRef = useRef(null);

useEffect(() => {
  const hero = heroRef.current;
  if (!hero) return;
  let maxProgress = 0;

  const updateHeroPan = () => {
    const rect = hero.getBoundingClientRect();
    const scrollRange = rect.height - window.innerHeight;

    const progress = Math.max(
      0,
      Math.min(1, -rect.top / scrollRange)
    );

   maxProgress = Math.max(maxProgress, progress);
hero.style.setProperty("--hero-pan", `${maxProgress * 100}%`);
  };

  window.addEventListener("scroll", updateHeroPan, { passive: true });
  window.addEventListener("resize", updateHeroPan);
  updateHeroPan();

  return () => {
    window.removeEventListener("scroll", updateHeroPan);
    window.removeEventListener("resize", updateHeroPan);
  };
}, []);
  const [menuOpen, setMenuOpen] = useState(false);

  // Move the hero photo slightly as the visitor moves the mouse.
  const handleHeroMouseMove = (event) => {
    const hero = event.currentTarget;
    const image = hero.querySelector(".hero-image");
    if (!image) return;

    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    image.style.backgroundPosition = `${50 + x * 10}% ${50 + y * 10}%`;
  };

  const handleHeroMouseLeave = (event) => {
    const image = event.currentTarget.querySelector(".hero-image");
    if (image) {
      image.style.backgroundPosition = "center center";
    }
  };

  return (
    <main>
      <div className="announcement">
        <span>✦</span>
        GOOD FOOD. WARM HEARTS. RAJASTHANI SOUL.
        <span>✦</span>
      </div>

      <header className="navbar">
        <a className="brand" href="#home" aria-label="Nanu Da Dhaba home">
          <span className="brand-mark">न</span>
          <span>
            <strong>NANU DA DHABA</strong>
            
          
          </span>
        </a>
        
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>The Menu</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>Find Us</a>
          <a
            className="nav-cta"
            href="#menu"
            onClick={() => setMenuOpen(false)}
          >
            Explore flavours <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>


<section
  className="hero"
  id="home"
  ref={heroRef}
  onMouseMove={handleHeroMouseMove}
  onMouseLeave={handleHeroMouseLeave}
>
  <div className="hero-stage">
    <div className="hero-image" />
    <div className="hero-shade" />
    <div className="hero-grain" />

    <motion.div
      className="hero-content"
      initial="hidden"
      animate="visible"
      variants={reveal}
    >
      <div className="eyebrow">
        <span className="eyebrow-line" />
        ROOTED IN RAJASTHAN
        <span className="eyebrow-line" />
      </div>

      <h1>
        A little
        <br />
        <em>desi magic.</em>
        <br />
        A lot of <span>love.</span>
      </h1>

      <p>
        Honest flavours, fresh food, and the kind of warmth
        that makes every meal feel like home.
      </p>

      <div className="hero-actions">
        <a className="button button-gold" href="#menu">
          Discover our menu <ArrowUpRight size={17} />
        </a>
        <a className="text-link" href="#story">
          Our story <ArrowDown size={15} />
        </a>
      </div>
    </motion.div>

    <div className="hero-note">
      <span className="note-star">✳</span>
      <span>MADE WITH HEART</span>
      <span>·</span>
      <span>SERVED WITH PRIDE</span>
    </div>

    <div className="hero-index">RAJASTHAN · THE DESI TABLE</div>

    <div className="hero-scroll">
      SCROLL TO SAVOUR <ArrowDown size={13} />
    </div>
  </div>
</section>

      <section className="intro" id="story">
        <motion.div
          className="intro-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <div className="section-label">
            <span>01</span> THE NANU DA EXPERIENCE
          </div>
          <h2>
            Not just a meal.
            <br />
            <em>A feeling.</em>
          </h2>
          <p>
            Some flavours take you back home. To the warmth of a shared
            table, the aroma of fresh rotis, and recipes made with care.
            At Nanu Da Dhaba, every plate celebrates the simple joy of
            eating well, together.
          </p>
          <a href="#menu" className="underlined-link">
            Taste the tradition <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.div
          className="intro-art"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="intro-photo" />
          <div className="round-stamp">
            <span>DESI • DIL SE • DESI • DIL SE •</span>
            <strong>नमस्ते</strong>
          </div>
          <div className="photo-caption">FRESHLY MADE, ALWAYS.</div>
        </motion.div>
      </section>
      <section className="menu-section" id="menu">
        <div className="menu-heading">
          <div>
            <div className="section-label">
              <span>02</span> STRAIGHT FROM OUR KITCHEN
            </div>
            <h2>
              Made to be <em>remembered.</em>
            </h2>
          </div>
          <p>
            Good ingredients. Familiar flavours.
            <br />
            Nothing but proper desi comfort.
          </p>
        </div>

        <div className="dish-grid">
          {dishes.map((dish, index) => (
            <motion.article
              className="dish-card"
              key={dish.name}
              initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
            >
              <div className="dish-image-wrap">
                {dish.image && (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                )}
                <span className="dish-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="dish-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </div>
              <div className="dish-info">
                <span className="dish-category">{dish.category}</span>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="menu-disclaimer">
          A selection of favourites. Please ask us for today's complete
          menu and prices.
        </p>
      </section>

      <section className="quote-section">
        <div className="quote-motif">✳</div>
        <div className="quote-kicker">THE SECRET INGREDIENT?</div>
        <h2>
          Thoda sa pyaar.
          <br />
          <em>Bahut saara swaad.</em>
        </h2>
        <p>
          Because the best memories are always served around a table.
        </p>
        <div className="quote-stars" aria-label="Five decorative stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} />
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-copy">
          <div className="section-label">
            <span>03</span> YOUR TABLE IS WAITING
          </div>
          <h2>
            Come hungry.
            <br />
            <em>Leave happy.</em>
          </h2>
          <p>
            Good food tastes even better when shared. Come by and enjoy
            a little desi magic.
          </p>

          <div className="visit-details">
            <div>
  <a
  href="https://www.google.com/maps/dir/?api=1&destination=27.5715932,75.1465825"
  target="_blank"
  rel="noopener noreferrer"
  className="visit-map-card"
>
  <div className="visit-map-icon">
    <MapPin />
  </div>

  <div className="visit-map-text">
    <strong>Find our dhaba</strong>
    <small>Get directions on Google Maps</small>
  </div>

  <ArrowUpRight className="visit-map-arrow" />
</a>
</div>
            <div>
              <Clock />
              <span>
                <strong>Opening hours</strong>
                <small>Please call to confirm</small>
              </span>
            </div>
          </div>

          <a
            className="button button-dark"
            href={`tel:+91${PHONE_NUMBER}`}
          >
            <Phone size={17} /> Call to enquire
          </a>
        </div>

        <div className="visit-art">
          <div className="visit-photo" />
          <div className="visit-badge">
            <Utensils size={21} />
            <span>GOOD FOOD</span>
            <strong>GOOD MOOD</strong>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">न</span>
          <span>
            <strong>NANU DA DHABA</strong>
            <small>DESI SWAAD · DIL SE</small>
          
          </span>
        </a>
        <p>Rooted in tradition. Made with love.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nanu Da Dhaba</span>
          <span>KHANA DIL SE. HAMESHA.</span>
        </div>
      </footer>

      <motion.a
        className="floating-call"
        href={`tel:+91${PHONE_NUMBER}`}
        aria-label={`Call Nanu Da Dhaba at ${PHONE_NUMBER}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="floating-call-icon">
          <Phone size={21} />
        </span>
        <span className="floating-call-text">
          <strong>Call the Dhaba</strong>
          <small>{PHONE_NUMBER}</small>
        </span>
      </motion.a>
      <motion.a
  className="floating-instagram"
  href="https://www.instagram.com/nanu_da_dhaba/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Follow Nanu Da Dhaba on Instagram"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.5 }}
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
>
  <span className="floating-instagram-icon">◎</span>
  <span className="floating-instagram-text">
    <strong>Follow on Instagram</strong>
    <small>@nanu_da_dhaba</small>
  </span>
</motion.a>
    </main>
  );
}

export default App;                                        