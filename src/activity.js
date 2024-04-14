/**
 * Получает случайную активность из API и возвращает ее.
 * @async
 * @return {Promise<string>} Возвращает промис, который разрешается в строку, представляющую активность.
 * @throws {Error} Если происходит ошибка при получении данных из API, выводит ошибку в консоль и возвращает строку об ошибке.
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error(error);
        return "К сожалению, произошла ошибка";
    }
}

/**
 * Обновляет текст активности на странице, получая новую активность из функции getRandomActivity.
 */
export function updateActivity() {
    getRandomActivity().then(activity => {
        document.getElementById('activity').textContent = activity;
    });
}

/**
 * Начинает обновление активности каждую минуту.
 */
export function startUpdatingActivity() {
    updateActivity();
    setTimeout(startUpdatingActivity, 60000);
}
