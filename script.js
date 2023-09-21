class PasswordGenerator {
  constructor() {
    this.weakCharacters = 'abcdefghijklmnopqrstuvwxyz';
    this.strongCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.superStrongCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPsQRSTUVWXYZ0123456789!@#$%^&*()';

  }

  generateRandomPassword(length, allowedCharacters) {
    let password = '';
    const charactersLength = allowedCharacters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      password += allowedCharacters[randomIndex];
    }

    return password;
  }

  generateWeakPassword() {
    return this.generateRandomPassword(6, this.weakCharacters);
  }

  generateStrongPassword() {
    return this.generateRandomPassword(12, this.strongCharacters);
  }

  generateSuperStrongPassword() {
    return this.generateRandomPassword(16, this.superStrongCharacters);
  }

  generateFunnyPassword() {
    let arr = [`Password`, `Admin`, `Something`, `YouFool`, `Gotohell`, `Forgot`, `KayHaalChal`, `MaiNahiBataunga`, `jhony_jhony`, `KissMyPassword`, `KissMyPassword`, `User`, `I Need A Password`, `Boring User`, `samajh rahe ho?`, `not found`, `Paisa do Password lo`, `Empty`, `Lollipop`
    ]
    let pass = arr[Math.floor(Math.random() * arr.length)]
    return pass
  }
}

const passwordGenerator = new PasswordGenerator();



document.getElementById('weakpass').addEventListener('click', () => {
  const weakPassword = passwordGenerator.generateWeakPassword();
  document.getElementById('showpass').innerText = weakPassword;
});


document.getElementById('strongpass').addEventListener('click', () => {
  const StrongPassword = passwordGenerator.generateStrongPassword();
  document.getElementById('showpass').innerText = StrongPassword;
});

document.getElementById('superstrongpass').addEventListener('click', () => {
  const SuperStrongPassword = passwordGenerator.generateSuperStrongPassword();
  document.getElementById('showpass').innerText = SuperStrongPassword;
});

document.getElementById('funnypass').addEventListener('click', () => {
  const FunnyPassword = passwordGenerator.generateFunnyPassword();
  document.getElementById('showpass').innerText = FunnyPassword;
});

// document.getElementById('strongpass').innerText = strongPassword;
// document.getElementById('superstrongpass').innerText = superStrongPassword;
// document.getElementById('funnypass').innerText = funnyPassword;
