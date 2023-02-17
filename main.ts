namespace SpriteKind {
    export const place = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile60`, function (sprite, location) {
    game.splash("Esteban Garcia 1985-1987", "Rest in peace")
    mySprite.setPosition(mySprite.x - 5, mySprite.y)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    game.splash("....")
    game.splash("* you escaped*", "alive and well")
    game.splash("Normal Ending")
    pause(2000)
    game.splash("Normal Ending?")
    game.gameOver(true)
    game.setGameOverEffect(true, effects.dissolve)
})
function Badguys () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 1 2 1 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 1 2 2 2 1 2 . . . . . 
        . . . . 2 1 1 2 1 1 2 . . . . . 
        . . . . . 2 1 1 1 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(50, 50))
    myEnemy.follow(mySprite, 30)
    Enemy_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 1 2 1 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 1 2 2 2 1 2 . . . . . 
        . . . . 2 1 1 2 1 1 2 . . . . . 
        . . . . . 2 1 1 1 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_2, tiles.getTileLocation(10, 10))
    Enemy_2.follow(mySprite, 30)
    myEnemy.setFlag(SpriteFlag.GhostThroughWalls, true)
    Enemy_2.setFlag(SpriteFlag.GhostThroughWalls, true)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    game.splash("kory jobs 1967-1971", "taken too soon")
    mySprite.setPosition(mySprite.x - 5, mySprite.y)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    game.splash("Missing: Eduardo Rodas 3yrs old", "last seen march 3 1978")
    mySprite.setPosition(mySprite.x - 5, mySprite.y)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    game.splash("Rest In Peace", name)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Alive = false
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 14))
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
let Enemy_2: Sprite = null
let myEnemy: Sprite = null
let name = ""
let mySprite: Sprite = null
let Alive = false
Alive = true
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
name = game.askForString("What is your name Traveler?")
game.splash("Everything around you:", "Black")
game.splash("Breathing", "makes you loose more air")
game.splash("....")
game.splash("You managed to stick", "your arm out!")
game.splash("You feel a cool breeze...")
game.splash("You stand up", "and look around")
game.splash("Where are you?")
controller.moveSprite(mySprite, 60, 60)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 14))
Badguys()
forever(function () {
    if (Alive == true) {
        music.play(music.stringPlayable("A F E F D F E F ", 105), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("E D E C D C D C ", 105), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.stringPlayable("C5 C5 C5 C5 B C5 C5 C5 ", 83), music.PlaybackMode.UntilDone)
    }
})
