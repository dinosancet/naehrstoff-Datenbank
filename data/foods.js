const foods = [
  {
    name: "Banane",
    calories: 89,
    macros: {
      protein: 1.1,
      fat: 0.3,
      carbs: 23
    },
    vitamins: [
      { name: "Vitamin B6", amount: "0.4 mg", daily: "33%", benefit: "Wichtig für Nervenfunktion" },
      { name: "Vitamin C", amount: "9 mg", daily: "10%", benefit: "Unterstützt Immunsystem" }
    ],
    minerals: [
      { name: "Kalium", amount: "358 mg", daily: "18%", benefit: "Reguliert Blutdruck" },
      { name: "Magnesium", amount: "27 mg", daily: "7%", benefit: "Muskel- und Nervenfunktion" }
    ],
    aminoacids: [
      { name: "Leucin", amount: "70 mg", daily: "-", benefit: "Muskelaufbau" }
    ]
  }
]

export default foods
