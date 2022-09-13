input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Random_Number = randint(1, 2)
    if (Random_Number == 1) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Random_Number = randint(1, 8)
    if (Random_Number == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (Random_Number == 2) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (Random_Number == 3) {
        basic.showArrow(ArrowNames.East)
    } else if (Random_Number == 4) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (Random_Number == 5) {
        basic.showArrow(ArrowNames.South)
    } else if (Random_Number == 6) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (Random_Number == 7) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
let Random_Number = 0
basic.showString("Press A for Truth or Dare!")
basic.clearScreen()
