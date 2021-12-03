sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.bigCrash.play()
    info.changeLifeBy(-1)
})
let NotMe1: Sprite = null
let projectile: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . a a a a . . . . . . . 
    . . . . . a f a f . . . . . . . 
    . . . . . a f a f . . . . . . . 
    . . . . a a a f a . . . . . . . 
    . . . . . a a a a . . . . . . . 
    . . . . . a a . . . . . . . . . 
    . . . . a a a a . . . . . . . . 
    . a a . a a a a . . . . . . . . 
    . a a . a a a a . a a . . . . . 
    . . . . a a a a . a a . . . . . 
    . . . . a a a a . . . . . . . . 
    . . . a a . . . . . . . . . . . 
    . . . a a . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . a a a a . . . . . . . 
    . . . . . a f a f . . . . . . . 
    . . . . . a f a f . . . . . . . 
    . . . . a a a f a . . . . . . . 
    . . . . . a a a a . . . . . . . 
    . . . . . a a . . . . . . . . . 
    . . . . a a a a . . . . . . . . 
    . . . . a a a a . a a . . . . . 
    . a a . a a a a . a a . . . . . 
    . a a . a a a a . . . . . . . . 
    . . . . a a a a . . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . a a . . a a . . . . . . . 
    . . . a a . . . . . . . . . . . 
    `],
500,
true
)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a f a f . . . . . . 
        . . . . . . a f a f . . . . . . 
        . . . . . a a a f a . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    NotMe1 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 f 5 f . . . . . . 
        . . . . . . 5 f 5 f . . . . . . 
        . . . . . 5 5 5 f 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    NotMe1.setKind(SpriteKind.Enemy)
})
