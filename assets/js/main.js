(function () {
  function handleRandomPassword(
    length,
    useUppercase,
    useLowercase,
    useNumbers,
    useSymbols
  ) {
    // Các ký tự có thể sử dụng
    let characters = "";
    if (useUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) characters += "0123456789";
    if (useSymbols) characters += "!@#$%^&*()";

    // Kiểm tra nếu không có yêu cầu nào được chọn
    if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
      return "Please select at least one option.";
    }
    // Kiểm tra nếu không có yêu cầu nào được chọn
    if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
      return "Please select at least one option.";
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

    return password;
  }

  function checkPasswordStrength() {
    const length = parseInt(passwordLengthInput.value);
    let strength = "";

    if (length < 5) {
      strength = "Rất yếu";
      passwordStrength.className = "too-weak";
    } else if (length < 8) {
      strength = "Yếu";
      passwordStrength.className = "weak";
    } else if (length < 10) {
      strength = "Tốt";
      passwordStrength.className = "good";
    } else if (length < 12) {
      strength = "Mạnh";
      passwordStrength.className = "strong";
    } else {
      strength = "Rất mạnh";
      passwordStrength.className = "very-strong";
    }

    // Thêm class mới
    passwordStrength.textContent = strength;
  }
  // Lấy tham chiếu đến các phần tử HTML
  let passwordLengthInput = document.getElementById("passwordLengthInput");
  let passwordLengthDisplay = document.getElementById("passwordLengthDisplay");
  let passwordInput = document.getElementById("passwordInput");
  let generateButton = document.getElementById("generateButton");
  let copyButton = document.getElementById("copyButton");
  let passwordStrength = document.getElementById("passwordStrength");
  let increaseButton = document.getElementById("increaseButton");
  let decreaseButton = document.getElementById("decreaseButton");

  // Lấy tham chiếu đến các checkbox
  let uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
  let lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
  let numbersCheckbox = document.getElementById("numbersCheckbox");
  let symbolsCheckbox = document.getElementById("symbolsCheckbox");

  // Xử lý sự kiện click của các checkbox
  uppercaseCheckbox.addEventListener("click", function () {
    if (countCheckedInputs() === 1) {
      disableLastCheckedInput();
    } else {
      enableAllInputs();
    }
    generatePass();
  });
  lowercaseCheckbox.addEventListener("click", function () {
    if (countCheckedInputs() === 1) {
      disableLastCheckedInput();
    } else {
      enableAllInputs();
    }
    generatePass();
  });
  numbersCheckbox.addEventListener("click", function () {
    if (countCheckedInputs() === 1) {
      disableLastCheckedInput();
    } else {
      enableAllInputs();
    }
    generatePass();
  });
  symbolsCheckbox.addEventListener("click", function () {
    if (countCheckedInputs() === 1) {
      disableLastCheckedInput();
    } else {
      enableAllInputs();
    }
    generatePass();
  });

  // Đếm số lượng input được chọn
  function countCheckedInputs() {
    let count = 0;
    if (uppercaseCheckbox.checked) count++;
    if (lowercaseCheckbox.checked) count++;
    if (numbersCheckbox.checked) count++;
    if (symbolsCheckbox.checked) count++;
    return count;
  }

  // Disable input được chọn cuối cùng
  function disableLastCheckedInput() {
    if (uppercaseCheckbox.checked) uppercaseCheckbox.disabled = true;
    if (lowercaseCheckbox.checked) lowercaseCheckbox.disabled = true;
    if (numbersCheckbox.checked) numbersCheckbox.disabled = true;
    if (symbolsCheckbox.checked) symbolsCheckbox.disabled = true;
  }

  // Enable tất cả các input
  function enableAllInputs() {
    uppercaseCheckbox.disabled = false;
    lowercaseCheckbox.disabled = false;
    numbersCheckbox.disabled = false;
    symbolsCheckbox.disabled = false;
  }

  function generatePass() {
    const length = parseInt(passwordLengthInput.value);
    let useUppercase = uppercaseCheckbox.checked;
    let useLowercase = lowercaseCheckbox.checked;
    let useNumbers = numbersCheckbox.checked;
    let useSymbols = symbolsCheckbox.checked;
    const randomPassword = handleRandomPassword(
      length,
      useUppercase,
      useLowercase,
      useNumbers,
      useSymbols
    );
    passwordInput.value = randomPassword;
    handleCheckboxClick();
  }
  // Xử lý sự kiện click của checkbox
  function handleCheckboxClick() {
    generateButton.classList.add("rotate");
    setTimeout(function () {
      generateButton.classList.remove("rotate");
    }, 700);
  }
  function colorRange() {
    const length = parseInt(passwordLengthInput.value);

    var value =
      ((passwordLengthInput.value - passwordLengthInput.min) /
        (passwordLengthInput.max - passwordLengthInput.min)) *
      100;
    passwordLengthInput.style.background =
      "linear-gradient(90deg,transparent " +
      value +
      "%, #0070f6 " +
      value +
      "%)";
  }
  // Xử lý sự kiện change của input range "passwordLengthInput"
  passwordLengthInput.addEventListener("input", function () {
    const length = parseInt(passwordLengthInput.value);

    var value = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.style.background =
      "linear-gradient(90deg,transparent " +
      value +
      "%, #0070f6 " +
      value +
      "%)";
    passwordLengthDisplay.textContent = length;
    let useUppercase = uppercaseCheckbox.checked;
    let useLowercase = lowercaseCheckbox.checked;
    let useNumbers = numbersCheckbox.checked;
    let useSymbols = symbolsCheckbox.checked;
    const randomPassword = handleRandomPassword(
      length,
      useUppercase,
      useLowercase,
      useNumbers,
      useSymbols
    );
    passwordInput.value = randomPassword;
    checkPasswordStrength();
  });

  // Xử lý sự kiện click của nút "Increase"
  increaseButton.addEventListener("click", function () {
    let length = parseInt(passwordLengthInput.value);
    if (length < parseInt(passwordLengthInput.max)) {
      length++;
      passwordLengthInput.value = length;
      passwordLengthDisplay.textContent = length;
      let useUppercase = uppercaseCheckbox.checked;
      let useLowercase = lowercaseCheckbox.checked;
      let useNumbers = numbersCheckbox.checked;
      let useSymbols = symbolsCheckbox.checked;
      const randomPassword = handleRandomPassword(
        length,
        useUppercase,
        useLowercase,
        useNumbers,
        useSymbols
      );
      passwordInput.value = randomPassword;
    }
    checkPasswordStrength();
    colorRange();
  });

  // Xử lý sự kiện click của nút "Decrease"
  decreaseButton.addEventListener("click", function () {
    let length = parseInt(passwordLengthInput.value);
    if (length > parseInt(passwordLengthInput.min)) {
      length--;
      passwordLengthInput.value = length;
      passwordLengthDisplay.textContent = length;
      let useUppercase = uppercaseCheckbox.checked;
      let useLowercase = lowercaseCheckbox.checked;
      let useNumbers = numbersCheckbox.checked;
      let useSymbols = symbolsCheckbox.checked;
      const randomPassword = handleRandomPassword(
        length,
        useUppercase,
        useLowercase,
        useNumbers,
        useSymbols
      );
      passwordInput.value = randomPassword;
    }
    checkPasswordStrength();
    colorRange();
  });

  // Xử lý sự kiện click của nút "Generate Password"
  generateButton.addEventListener("click", function () {
    generatePass();
    handleCheckboxClick();
    checkPasswordStrength();
    colorRange();
  });

  // Xử lý sự kiện click của nút "Copy"
  copyButton.addEventListener("click", function () {
    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  });

  window.addEventListener("DOMContentLoaded", function () {
    generateButton.click();
    const length = parseInt(passwordLengthInput.value);
    passwordLengthDisplay.textContent = length;
  });
})();
