// Меняем текст существующих элементов страницы.
let latin = false;
document.getElementById('change').addEventListener('click', function () {
    latin = !latin;
    document.getElementById('surname').textContent = latin ? 'Tabakov' : 'Табаков';
    document.getElementById('first-name').textContent = latin ? 'Artem' : 'Артём';
    document.getElementById('patronymic').textContent = latin ? 'Vladimirovich' : 'Владимирович';
    document.getElementById('sex').textContent = latin ? 'M' : 'МУЖ.';
    // Год записан цифрами: при транслитерации он не меняется.
});
