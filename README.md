# 🪣 Dreamwall
Dreamwall is a web application that helps everyone who needs to know how much paint they need to paint their 4 walled room.

Are you tired of buying too much paint and having to store then away in some corner of your house?

Or did it happen to you of buying less paint then you needed so you had to go again to the store to buy some more?

It doesn't need to be like that anymore! Let Dreamwall take care of all the math you need to not waste your money and time when you need to paint your walls.

Welcome to Dreamwall! 🪣

## 💻 Getting started

With yarn

```sh
$ git clone git@gitlab.com:antoniobfm/dreamwall.git
$ cd dreamwall
$ yarn
$ yarn dev
```

With npm

```sh
$ git clone git@gitlab.com:antoniobfm/dreamwall.git
$ cd dreamwall
$ npm i
$ npm dev
```

## ⚙️ Features
- Specify the height and width of your walls;
- Add windows and doors to each wall;
- Get the amount of paint you need to cover all your walls.

## 💼 Business Requirements
1. No wall can have less than 1 meter square or more than 50 meters square of area, but they can have different heights and widths
2. The total area of the doors and windows have to be less than 50% of the area of its wall
3. The height of walls with doors shall be, at least, 30 centimeter taller than the height of the door
4. Each window has these measurements: 2,00 x 1,20 meters
5. Each door has these measurements: 0,80 x 1,90 meters
6. Each liter of paint is capable of covering 5 meters square
7. Do not consider ceiling and floor
8. The variations of the cans of paint are:
   - 0,5 L
   - 2,5 L
   - 3,6 L
   - 18 L



## 📚 Tech Stack

**Client:** React/Next.js, Redux, Styled Components, React Hook Forms


## 📄 License
Licensed under the MIT License, Copyright © 2022-present Antônio Moraes.

See LICENSE for more information
