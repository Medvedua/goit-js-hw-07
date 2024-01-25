// Отримуємо список категорій
const categoriesList = document.getElementById('categories');

// Отримуємо всі елементи li.item в списку категорій
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Для кожної категорії виводимо текст заголовка та кількість елементів у категорії
categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElementsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});








































