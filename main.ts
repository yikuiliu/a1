input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
	
})
