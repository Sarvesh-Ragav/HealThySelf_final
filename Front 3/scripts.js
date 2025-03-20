// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for saved theme preference or use default
const savedTheme = localStorage.getItem('theme');
console.log('Saved theme:', savedTheme); // Check what theme is saved
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeIcon.textContent = '☀️';
} else {
    themeIcon.textContent = '🌙'; // Default icon if no saved theme
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Your existing code for diet form and meal plan calculation

document.getElementById("diet-form").addEventListener("submit", (e) => {
  e.preventDefault()
  const calories = Number.parseInt(document.getElementById("calorie-intake").value)
  const preference = document.getElementById("dietary-preference").value
  const resultElement = document.getElementById("diet-result")

  // Calculate calorie distribution
  const breakfastCalories = Math.round(calories * 0.25)
  const lunchCalories = Math.round(calories * 0.35)
  const dinnerCalories = Math.round(calories * 0.3)
  const snackCalories = Math.round(calories * 0.1)

  // Meal options based on preference
  let breakfastOptions = []
  let lunchOptions = []
  let dinnerOptions = []
  const snackOptions = [
    {
      name: "Fresh fruits",
      details: "Apple, banana, or orange - approximately 100 calories, 1g protein, 25g carbs, 0g fats",
    },
    { name: "Mixed nuts", details: "30g mixed nuts - approximately 170 calories, 6g protein, 5g carbs, 15g fats" },
    {
      name: "Greek yogurt",
      details: "1 cup Greek yogurt - approximately 150 calories, 15g protein, 8g carbs, 5g fats",
    },
  ]

  if (preference === "standard") {
    breakfastOptions = [
      {
        name: "Poha",
        details:
          "1 cup poha with peanuts, curry leaves, turmeric, and vegetables - 150 calories, 4g protein, 30g carbs, 2g fats",
      },
      {
        name: "Upma",
        details: "1 cup roasted semolina with vegetables - 200 calories, 5g protein, 35g carbs, 4g fats",
      },
      {
        name: "Egg Omelette with Toast",
        details: "2 eggs with 2 slices of whole wheat bread - 250 calories, 15g protein, 20g carbs, 10g fats",
      },
    ]
    lunchOptions = [
      {
        name: "Dal, Rice, and Salad",
        details: "1 cup dal, 1 cup rice, salad - 350 calories, 12g protein, 65g carbs, 5g fats",
      },
      {
        name: "Rajma Chawal",
        details: "1 cup rajma curry and 1 cup rice - 400 calories, 15g protein, 70g carbs, 8g fats",
      },
      {
        name: "Vegetable Pulao with Raita",
        details: "1 cup pulao and 1/2 cup raita - 350 calories, 10g protein, 60g carbs, 6g fats",
      },
    ]
    dinnerOptions = [
      {
        name: "Chicken Curry with Rice",
        details: "1 cup chicken curry and 1 cup rice - 400 calories, 25g protein, 45g carbs, 12g fats",
      },
      {
        name: "Palak Paneer with Roti",
        details: "1 cup palak paneer and 2 rotis - 400 calories, 18g protein, 45g carbs, 15g fats",
      },
      { name: "Vegetable Khichdi", details: "1 cup khichdi - 300 calories, 10g protein, 50g carbs, 6g fats" },
    ]
  } else if (preference === "vegetarian") {
    breakfastOptions = [
      { name: "Besan Chilla", details: "1 cup besan with vegetables - 180 calories, 10g protein, 20g carbs, 5g fats" },
      {
        name: "Idli with Sambar",
        details: "2 idlis and 1/2 cup sambar - 150 calories, 6g protein, 30g carbs, 2g fats",
      },
      {
        name: "Dosa with Coconut Chutney",
        details: "1 dosa with chutney - 200 calories, 5g protein, 35g carbs, 5g fats",
      },
    ]
    lunchOptions = [
      {
        name: "Vegetable Pulao with Raita",
        details: "1 cup pulao and 1/2 cup raita - 350 calories, 10g protein, 60g carbs, 6g fats",
      },
      {
        name: "Sambar with Rice",
        details: "1 cup sambar and 1 cup rice - 300 calories, 10g protein, 55g carbs, 5g fats",
      },
      {
        name: "Palak Paneer with Roti",
        details: "1 cup palak paneer and 2 rotis - 400 calories, 18g protein, 45g carbs, 15g fats",
      },
    ]
    dinnerOptions = [
      {
        name: "Dal, Rice, and Salad",
        details: "1 cup dal, 1 cup rice, salad - 350 calories, 12g protein, 65g carbs, 5g fats",
      },
      {
        name: "Mixed Vegetable Curry with Roti",
        details: "1 cup curry and 2 rotis - 350 calories, 10g protein, 50g carbs, 10g fats",
      },
      {
        name: "Paneer Butter Masala with Naan",
        details: "1 cup paneer butter masala and naan - 500 calories, 18g protein, 60g carbs, 20g fats",
      },
    ]
  } else if (preference === "vegan") {
    breakfastOptions = [
      {
        name: "Tofu Scramble",
        details: "1 cup tofu scramble with vegetables - 180 calories, 12g protein, 10g carbs, 10g fats",
      },
      {
        name: "Oatmeal with Fruit",
        details: "1 cup oatmeal with berries - 200 calories, 5g protein, 40g carbs, 3g fats",
      },
      {
        name: "Avocado Toast",
        details: "2 slices whole grain bread with 1/2 avocado - 250 calories, 8g protein, 30g carbs, 12g fats",
      },
    ]
    lunchOptions = [
      {
        name: "Quinoa Bowl",
        details: "1 cup quinoa with roasted vegetables - 350 calories, 12g protein, 60g carbs, 6g fats",
      },
      {
        name: "Chickpea Salad",
        details: "1 cup chickpeas with mixed greens - 300 calories, 15g protein, 45g carbs, 5g fats",
      },
      {
        name: "Vegan Buddha Bowl",
        details: "Mixed vegetables, tofu, and brown rice - 400 calories, 15g protein, 65g carbs, 8g fats",
      },
    ]
    dinnerOptions = [
      {
        name: "Lentil Soup with Bread",
        details: "1 cup lentil soup with 1 slice bread - 300 calories, 15g protein, 50g carbs, 5g fats",
      },
      {
        name: "Vegan Stir Fry",
        details: "Tofu and vegetables with rice - 350 calories, 15g protein, 55g carbs, 8g fats",
      },
      {
        name: "Stuffed Bell Peppers",
        details: "2 peppers with quinoa filling - 320 calories, 12g protein, 45g carbs, 10g fats",
      },
    ]
  } else if (preference === "gluten-free") {
    breakfastOptions = [
      {
        name: "Rice Porridge",
        details: "1 cup rice porridge with nuts - 200 calories, 5g protein, 35g carbs, 6g fats",
      },
      { name: "Quinoa Bowl", details: "1 cup quinoa with fruit - 220 calories, 8g protein, 40g carbs, 4g fats" },
      {
        name: "Banana Oat Smoothie",
        details: "Gluten-free oats with banana and milk - 250 calories, 10g protein, 45g carbs, 5g fats",
      },
    ]
    lunchOptions = [
      {
        name: "Rice Bowl with Grilled Chicken",
        details: "1 cup rice with chicken and vegetables - 380 calories, 25g protein, 50g carbs, 8g fats",
      },
      {
        name: "Quinoa Salad",
        details: "1 cup quinoa with mixed vegetables - 320 calories, 10g protein, 55g carbs, 6g fats",
      },
      {
        name: "Corn Tortilla Wrap",
        details: "2 corn tortillas with beans and vegetables - 350 calories, 12g protein, 60g carbs, 7g fats",
      },
    ]
    dinnerOptions = [
      {
        name: "Grilled Fish with Rice",
        details: "150g fish with 1 cup rice - 400 calories, 30g protein, 45g carbs, 10g fats",
      },
      { name: "Lentil Stew", details: "1 cup lentil stew - 300 calories, 18g protein, 45g carbs, 5g fats" },
      {
        name: "Stuffed Sweet Potato",
        details: "1 large sweet potato with beans - 350 calories, 12g protein, 65g carbs, 4g fats",
      },
    ]
  }

  const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)]

  const breakfast = getRandomItem(breakfastOptions)
  const lunch = getRandomItem(lunchOptions)
  const dinner = getRandomItem(dinnerOptions)
  const snack = getRandomItem(snackOptions)

  // Extract macronutrients from details string for each meal
  const extractMacros = (detailsString) => {
    const proteinMatch = detailsString.match(/(\d+)g protein/)
    const carbsMatch = detailsString.match(/(\d+)g carbs/)
    const fatsMatch = detailsString.match(/(\d+)g fats/)

    return {
      protein: proteinMatch ? Number.parseInt(proteinMatch[1]) : 0,
      carbs: carbsMatch ? Number.parseInt(carbsMatch[1]) : 0,
      fats: fatsMatch ? Number.parseInt(fatsMatch[1]) : 0,
    }
  }

  const breakfastMacros = extractMacros(breakfast.details)
  const lunchMacros = extractMacros(lunch.details)
  const dinnerMacros = extractMacros(dinner.details)
  const snackMacros = extractMacros(snack.details)

  const recommendation = `
        <h3>Daily Meal Plan (${calories} calories)</h3>
        <h4>Breakfast (${breakfastCalories} calories)</h4>
        <p><strong>${breakfast.name}:</strong> ${breakfast.details}</p>
        <h4>Lunch (${lunchCalories} calories)</h4>
        <p><strong>${lunch.name}:</strong> ${lunch.details}</p>
        <h4>Dinner (${dinnerCalories} calories)</h4>
        <p><strong>${dinner.name}:</strong> ${dinner.details}</p>
        <h4>Snacks (${snackCalories} calories)</h4>
        <p><strong>${snack.name}:</strong> ${snack.details}</p>
        <p><em>Notes:</em></p>
        <ul>
            <li>Use minimal oil while cooking</li>
            <li>Adjust portion sizes as needed</li>
            <li>Pair meals with chutney, pickle, or curd</li>
            <li>Drink plenty of water</li>
        </ul>
    `

  resultElement.innerHTML = recommendation
  resultElement.style.display = "block"

  // Create pie charts for macronutrients
  createMacroChart("breakfastChart", breakfastMacros, breakfast.name)
  createMacroChart("lunchChart", lunchMacros, lunch.name)
  createMacroChart("dinnerChart", dinnerMacros, dinner.name)
})

function createMacroChart(canvasId, macros, mealName) {
  // Destroy previous chart if exists
  if (window.chartInstances && window.chartInstances[canvasId]) {
    window.chartInstances[canvasId].destroy()
  }

  const ctx = document.getElementById(canvasId).getContext("2d")

  // Create new chart
  const chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Protein", "Carbs", "Fats"],
      datasets: [
        {
          data: [macros.protein, macros.carbs, macros.fats],
          backgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)", "rgba(255, 206, 86, 0.7)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: mealName + " - Macros (g)",
          font: {
            size: 14,
          },
        },
        legend: {
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = context.label || ""
              const value = context.raw || 0
              const total = context.dataset.data.reduce((a, b) => a + b, 0)
              const percentage = Math.round((value / total) * 100)
              return `${label}: ${value}g (${percentage}%)`
            },
          },
        },
      },
    },
  })

  // Store chart instance for later reference
  if (!window.chartInstances) window.chartInstances = {}
  window.chartInstances[canvasId] = chart
}
