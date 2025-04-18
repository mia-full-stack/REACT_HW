# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

React домашнее задание 10

Задание

Создание React-приложения, которое отображает случайные картинки кошек, получая их с сервера.

Кошачий API: “https://api.thecatapi.com/v1/images/search”

Создание нового React-приложения:

Создайте новое React-приложение с помощью Create React App.

Установите axios для выполнения HTTP-запросов.

Создание компонента для отображения изображений кошек:

Внутри папки `src` создайте папку `components` для хранения компонентов приложения.

В папке `components` создайте файлы `CatImage.js` и `CatImage.module.css`.

Написание компонента `CatImage`:

Импортируйте необходимые библиотеки: React, axios и модульные стили.

Создайте функциональный компонент, который будет получать и отображать случайное изображение кошки.

Используйте `useEffect` для загрузки изображения при монтировании компонента.

Создайте кнопку для загрузки нового изображения по нажатию.

Добавление модульных стилей для компонента `CatImage`:

В файле `CatImage.module.css`:

Создайте стили для контейнера, заголовка, изображения и кнопки.

Определите стили для различных состояний кнопки, таких как `hover`.

Настройка основного компонента `App`:

В папке `components` создайте файл стилей `App.module.css`.

В файле `App.js`:

Импортируйте компонент `CatImage` и модульные стили.

Создайте функциональный компонент, который будет использовать компонент `CatImage`.

Добавление модульных стилей для компонента `App`:

В файле `App.module.css`:

Создайте стили для контейнера приложения, чтобы центрировать содержимое и задать фоновый цвет.

Запуск приложения:
Запустите приложение с помощью команды: npm start

Перейдите в браузере по адресу `http://localhost:3000`, чтобы увидеть ваше приложение.
