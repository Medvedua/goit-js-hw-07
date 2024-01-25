function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}
    
    const amountInput = document.querySelector('#controls input');
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    

    function createBoxes(amount) {
      boxesContainer.innerHTML = '';

      let size = 30;

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);

        size += 10;
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    function handleCreateButtonClick() {
      const amount = parseInt(amountInput.value);

      if (amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
      }

      createBoxes(amount);
      amountInput.value = '';
    }

    createButton.addEventListener('click', handleCreateButtonClick);
    destroyButton.addEventListener('click', destroyBoxes);