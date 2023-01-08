## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`.
Тестами покрыты вспомогательные функции, редюссеры, асихноррные редюссеры и функции, селекторы. Для тестирования асинхронного кода создан класс TestAsyncThunk([подробнее](src/shared/lib/tests/TestAsyncThunk/readme.md)).
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`