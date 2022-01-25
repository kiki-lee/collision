sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let alone = sprites.create(img`
    2 2 2 2 . 
    2 . . . 2 
    2 2 2 2 . 
    `, SpriteKind.Player)
let friend = img`
    5 5 5 5 5 
    5 5 5 5 5 
    5 5 5 5 5 
    `
let together = img`
    6 6 6 6 
    6 6 6 6 
    6 6 6 6 
    `
let coll = img`
    7 . . 7 7 
    . 7 7 . . 
    . 7 7 . . 
    7 . . 7 7 
    `
for (let index = 0; index < 10; index++) {
    info.changeLifeBy(1)
    alone.x = randint(0, scene.screenWidth())
    alone.y = randint(0, scene.screenHeight())
    alone.vx = randint(-10, 10)
    alone.vy = randint(-10, 10)
    pause(1000)
}
