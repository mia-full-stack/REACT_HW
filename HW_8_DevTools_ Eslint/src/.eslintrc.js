module.exports = {
    // Определение сред выполнения
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    // Расширения конфигурации
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
    // Настройки парсера
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    // Используемые плагины
    plugins: ["react", "react-hooks"],
    // Правила линтера
    rules: {
        "react/react-in-jsx-scope": "off", // Не требуется в React 17+
        "react/prop-types": "off", // Пропускаем валидацию пропсов для этого примера
        "react-hooks/rules-of-hooks": "error", // Проверка правил хуков
        "react-hooks/exhaustive-deps": "warn", // Предупреждение о неполных зависимостях
    },
    // Настройки для React
    settings: {
        react: {
            version: "detect", // Автоматическое определение версии React
        },
    },
}

