namespace SpriteKind {
    export const fruit2 = SpriteKind.create()
    export const fruit1 = SpriteKind.create()
    export const fruit5 = SpriteKind.create()
    export const junk5 = SpriteKind.create()
    export const junk10 = SpriteKind.create()
    export const junk15 = SpriteKind.create()
}
function spawnicecream () {
    IceCream = sprites.create(img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `, SpriteKind.junk5)
    IceCream.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    IceCream.setVelocity(25, 25)
    IceCream.setBounceOnWall(true)
}
function spawnburger () {
    burger = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.junk15)
    burger.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    burger.setVelocity(25, 25)
    burger.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fruit2, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 2)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 2)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score, 2)
    } else {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score, 2)
    }
    otherSprite.destroy(effects.spray, 100)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fruit5, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 5)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 5)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score, 5)
    } else {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score, 5)
    }
    otherSprite.destroy(effects.bubbles, 100)
    music.powerUp.play()
})
info.onCountdownEnd(function () {
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score)) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score)) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
    } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score)) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Three))
    } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) && mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score) > mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score)) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Four))
    } else {
        game.setGameOverMessage(true, "It's a Tie!!!")
    }
})
function spawnpizza () {
    pizza = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.junk10)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    pizza.setVelocity(25, 25)
    pizza.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.junk10, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, -10)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, -10)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score, -10)
    } else {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score, -10)
    }
    otherSprite.destroy(effects.fire, 100)
    scene.cameraShake(4, 100)
    music.zapped.play()
    spawnpizza()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.junk5, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, -5)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, -5)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score, -5)
    } else {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score, -5)
    }
    otherSprite.destroy(effects.fire, 100)
    scene.cameraShake(4, 100)
    music.zapped.play()
    spawnicecream()
})
function start () {
    scene.setBackgroundColor(6)
    effects.blizzard.startScreenEffect()
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player))
    for (let value of mp.allPlayers()) {
        mp.getPlayerSprite(value).setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        mp.getPlayerSprite(value).setStayInScreen(true)
        mp.moveWithButtons(value)
        mp.setPlayerState(value, MultiplayerState.score, 0)
    }
    spawnicecream()
    spawnburger()
    spawnpizza()
    info.startCountdown(30)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fruit1, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score, 1)
    } else {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score, 1)
    }
    otherSprite.destroy(effects.spray, 100)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.junk15, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, -15)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, -15)
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.score, -15)
    } else {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.score, -15)
    }
    otherSprite.destroy(effects.fire, 100)
    scene.cameraShake(4, 100)
    music.zapped.play()
    spawnburger()
})
let strawberry: Sprite = null
let cherry: Sprite = null
let lemon: Sprite = null
let pizza: Sprite = null
let burger: Sprite = null
let IceCream: Sprite = null
story.startCutscene(function () {
    story.printDialog("You and your 3 other siblings are diagnosed with a disease with is very rare and it is affecting your health.", 80, 90, 50, 150)
    story.printDialog("You all try every medication recommended by doctors but nothing works.", 80, 90, 50, 150)
    story.printDialog("suddenly you decide to eat fruits as it has many health benefits.", 80, 90, 50, 150)
    story.printDialog("this is a race to see who can eat the most fruits", 80, 90, 50, 150)
    story.printDialog("cherries give 1 point, strawberries give 2 and lemons give 5", 80, 90, 50, 150)
    story.printDialog("but there is also junk food which take away points", 80, 90, 50, 150)
    start()
})
game.onUpdateInterval(5000, function () {
    lemon = sprites.createProjectileFromSide(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, 50, 0)
    lemon.setPosition(0, randint(0, scene.screenHeight()))
    lemon.setKind(SpriteKind.fruit5)
})
game.onUpdateInterval(1000, function () {
    cherry = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, 50, 0)
    cherry.setPosition(0, randint(0, scene.screenHeight()))
    cherry.setKind(SpriteKind.fruit2)
})
game.onUpdateInterval(500, function () {
    strawberry = sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, 50, 0)
    strawberry.setPosition(0, randint(0, scene.screenHeight()))
    strawberry.setKind(SpriteKind.fruit1)
})
