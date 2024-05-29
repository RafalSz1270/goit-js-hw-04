const profile = {
  username: "Jacob",
  playTime: 300,

  // Metoda do zmiany nazwy użytkownika
  changeUsername(newName) {
    this.username = newName;
  },

  // Metoda do aktualizacji czasu gry
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // Metoda do pobierania informacji o użytkowniku
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};



console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
