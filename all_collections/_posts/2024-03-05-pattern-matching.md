---
layout: post
title: Pattern Matching
date: 2024-05-03
categories: ["Partial matches", "Matching tuples", "Loops", ".none", ".some", "Matching ranges", "Matching enums and associated values"]
---
### Partial matches

When any value is fine.

```
let friends = (you: "Silvina", friend: "Vera")

switch friends {
case ("Leonardo", _):
    print("Hello Leonardo")
case ("Leonardo", "Mariana":
    print("Hello, Leonardo and Mariana!")
default:
    print("Don't know who you are")
}

```
When you want to know about some values use let.

```
let authentication = (name: "silvina", password: "1d3cu2t")

switch authentication {
case ("leonardo", _):
    print("Enter your password")
case ("leonardo", let password):
    print("Hello, Leonardo!")
default:
    print("Don't know who you are")
}
```

### Matching tuples


```
func fizzbuzz(number: Int) -> String {
    switch (number % 3 == 0, number % 5 == 0) {
    case (true, false):
        return "Fizz"
    case (false, true):
        return "Buzz"
    case (true, true):
        return "Fizz Buzz"
    case (false, false):
        return String(number)
    }
}

print(fizzbuzz(number: 15))
```


### Loops

```
for case (let name, let id) in users {
    print("User \(name) has the id \(id)")
}
```

### Matching Optionals
When you want to match “has a value” and “has no value” use .some and .none.

```
let name: String? = "Silvina"
let id: String? = "123456"

switch (name, id) {
case let (.some(name), .some(id)):
    print("Hello, \(name)")
case let (.some(name), .none):
    print("Please enter an id.")
default:
    print("Who are you?")
}
```
for case let

```
let whatever: [Any?] = ["Jhon", 45, nil, "Mel"]

for case let .some(data) in whatever {
    print(data)
}

```
### Matching ranges

```
let price = 120

switch age {
case 0 ..< 200:
    print("Very cheap")
case 200 ..< 700:
    print("it's ok")
default:
    print("expensive")
}
```
### Matching enums and associated values
Basic enum

```
enum CoffeType {
    case expresso
    case latte
    case capuccino
}

let coffe: CoffeType = .expresso

switch coffe {
case .capuccino:
    print("It's capuccino")
case .expresso:
    print("It's an expresso")
case .latte:
    print("It's a latte")
}
```
with associated values:

```
enum CoffeType {
    case expresso(temperature: Int)
    case latte
    case capuccino
}

let coffe: CoffeType = .expresso(temperature: 20)

switch coffe {
case let .expresso(temperature):
    print("It's  an expresso at \(temperature) celsius degree")
case .capuccino:
    print("It's capuccino")
case .latte:
    print("It's a latte")
}

```
When you want to create a requirements clause that clarifies what you’re looking for use uses the **where** keyword

```
let coffe: CoffeType = .expresso(temperature: 0)

switch coffe {
case let .expresso(temperature) where temperature < 10:
    print("It's  a cold expresso")
case .expresso(temperature: let temperature):
    print("It's  an expresso at \(temperature) celsius degree")
case .capuccino:
    print("It's capuccino")
case .latte:
    print("It's a latte")
}
```
