window.onload = () => {
  const welcomeMsg = `
🌟 Welcome to Ahmed's World ♟️ 🌟
🔥 Follower & Successor of 『𝐀𝐈𝐙𝐄𝐍 ♟️』
`;
  alert(welcomeMsg);
  console.log(welcomeMsg);

  // زر "About Me"
  document.getElementById('aboutBtn').addEventListener('click', () => {
    alert(`
👤 Name: Ahmed
🎂 Age: 13 (turning 14 soon)
📚 Grade: 8th
💻 Goal: Become a programmer
⭐ Role model: My brother
`);
  });

  // زر "Achievements"
  document.getElementById('achievementsBtn').addEventListener('click', () => {
    alert(`
🏆 My Achievements:
1️⃣ Currently creating WhatsApp bots
2️⃣ Planning to develop Telegram bots soon
`);
  });
};
