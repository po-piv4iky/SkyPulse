const user = {
  name: 'Ivan',
  age: 28,
} as const

// Тип объекта
type User = typeof user
/*
{
  readonly name: "Ivan"
  readonly age: 28
}
*/

// Все ключи объекта
type UserKeys = keyof typeof user
// "name" | "age"

// Все значения объекта
type UserValues = (typeof user)[keyof typeof user]
// "Ivan" | 28