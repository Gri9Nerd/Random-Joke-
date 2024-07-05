const prompt = require("prompt-sync")();

for (;;) {
  let input = prompt("PRESS 1 TO GENERATE A JOKE , 0 TO EXIT :  ");
  if (input == 1) {
    let joke = [
      "Why don't skeletons fight each other? They don't have the guts.",
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
      "I told my wife she should embrace her mistakes. She gave me a hug.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "What do you get when you cross a snowman and a vampire? Frostbite.",
      "Why was the math book sad? It had too many problems.",
      "I used to play piano by ear, but now I use my hands like everyone else.",
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "I'm on a seafood diet. I see food and I eat it.",
      "Why don't eggs tell jokes? Because they might crack up.",
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "I used to play piano by ear, but now I use my hands like everyone else.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "Why was the math book sad? It had too many problems.",
      "I used to play piano by ear, but now I use my hands like everyone else.",
      "What do you get when you cross a snowman and a vampire? Frostbite.",
      "Why don't skeletons fight each other? They don't have the guts.",
      "I'm on a seafood diet. I see food and I eat it.",
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "I told my wife she should embrace her mistakes. She gave me a hug.",
      "I used to play piano by ear, but now I use my hands like everyone else.",
      "Why don't eggs tell jokes? Because they might crack up.",
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "I'm on a seafood diet. I see food and I eat it.",
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "Why was the math book sad? It had too many problems.",
      "I used to play piano by ear, but now I use my hands like everyone else.",
      "What do you get when you cross a snowman and a vampire? Frostbite.",
      "I told my wife she should embrace her mistakes. She gave me a hug.",
      "Why don't skeletons fight each other? They don't have the guts.",
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "What do you get when you cross a snowman and a vampire? Frostbite.",
      "I'm on a seafood diet. I see food and I eat it.",
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "I told my wife she should embrace her mistakes. She gave me a hug.",
      "Why was the math book sad? It had too many problems.",
    ];

    let n = Math.floor(Math.random() * 40);
    console.log("\n " + joke[n] + "\n");
  } else if (input == 0) {
    console.log("Adios Amigo!!!");
    break;
  }
}
