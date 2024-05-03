// translation.js

const languages = {
  en: {
    "bakery": "Bakery",
    "bar": "Bar",
    "beauty": "Beauty",
    "bookstore": "Bookstore",
    "butcheries": "Butcheries",
    "coffee_shops": "Coffee Shops",
    "cosmetics": "Cosmetics",
    "decor": "Decor",
    "electronics": "Electronics",
    "fashion": "Fashion",
    "fast_food": "Fast Food",
    "florists": "Florists",
    "groceries": "Groceries",
    "gym": "Gym",
    "hotel": "Hotel",
    "laundry": "Laundry",
    "liquor_stores": "Liquor Stores",
    "pets": "Pets",
    "pharmacies": "Pharmacies",
    "resort": "Resort",
    "restaurant": "Restaurant",
    "saloon": "Saloon",
    "shopping": "Shopping",
    "spa": "Spa",
    "supermarkets": "Supermarkets",
    "travel": "Travel",
    "yoga": "Yoga",
    "business_category": "Business Category",
    "register": "Register",
    "first_name": "First Name",
    "last_name": "Last Name",
    "what_gender": "Gender",
    "female": "Female",
    "male": "Male",
    "phone_number": "Phone Number",
    "i_accept": "I Accept",
    "terms_condition": "Terms & Conditions",
    "terms_condition_desc": "Terms & Conditions Description",
    "proceed": "Proceed",
    "enter_first_name_msg": "Please Enter First Name",
    "enter_last_name_msg": "Please Enter Last Name",
    "enter_number_msg": "Please Enter Phone Number",
    "enter_valid_number_msg": "Please Enter Valid Phone Number",
    "read_condition_msg": "Please Read Terms & Conditions",
    "pin_setup": "PIN Setup",
    "pin_setup_desc": "Protect your information and rewards",
    "pin_missmatch": "PIN Mismatch, Please Try Again",
    "please_wait": "Please Wait...",
    "rewards": "Rewards",
    "redeem": "Redeem",
    "brands": "Brands",
    "hello":"Hello"

  },
  es: {
    "bakery": "Bakery",
    "bar": "Baa",
    "beauty": "Urembo",
    "bookstore": "Duka la vitabu",
    "butcheries": "Maduka ya nyama",
    "coffee_shops": "Coffee Shops",
    "cosmetics": "Vipodozi",
    "decor": "Samani",
    "electronics": "Vifaa vya umeme",
    "fashion": "Mitindo",
    "fast_food": "Fast Food ",
    "florists": "Wauza maua",
    "groceries": "Groceries",
    "gym": "Gym",
    "hotel": "Hoteli",
    "laundry": "Dobi",
    "liquor_stores": "Maduka ya pombe ",
    "pets": "Pets",
    "pharmacies": "Maduka ya dawa ",
    "resort": "Mapumziko",
    "restaurant": "Mgahawa",
    "saloon": "Saluni",
    "shopping": "Manunuzi",
    "spa": "Spa",
    "supermarkets": "Maduka makubwa",
    "travel": "Usafiri",
    "yoga": "Yoga",
    "business_category": "Aina ya Biashara",
    "rewards": "Tuzo",
    "redeem": "Chukua", 
    "brands": "Chapa",
    "hello": "Habari",
    "total_rewards_points": "Jumla ya pointi",
    "share_points": "Gawa pointi",
    "withdraw_from_program": "Jiondoe kwenye program",
    "enter_pin": "Ingiza PIN",
    "enter_pin_desc": "Enter your PIN to donate to  Nuru ya Upendo Home of Homeless",
    "proceed": "Endelea",
    "terms_condition": "Vigezo na Masharti",
    "i_accept": "Nimekubali",
    "phone_number": "Namba ya simu",

  }
  
};

const getLanguage = () => {
  let finallanguage = "en"; // Default to English

  my.getStorage({
    key: 'language',
    success: function(res) {
      finallanguage = res.data.newLanguage || finallanguage;
     
    },
    fail: function(res){
      my.alert({ content: res.errorMessage });
    },
    
  }); 
  console.log("language", finallanguage);
  // The language retrieval above is asynchronous, so you cannot return the language directly here
  // Instead, you can return a default language and handle the actual language when it's retrieved
  return finallanguage;
};

const translate = (key, language) => {
  // If the current language is not defined, default to English
  const languageStrings = languages[language] || languages.en;
  return languageStrings[key] || ""; // Return the translated string or empty string if not found
};

export default {
  getLanguage,
  translate
};