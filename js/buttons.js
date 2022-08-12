buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  
    countdown()

    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut)
    sound.pressAudio()
  })
  
  buttonStop.addEventListener('click', function() {
    resetControls()
    resetTimer()
    sound.pressButton()
  })
  
  buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
  })
  
  buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })
  
  buttonSet.addEventListener('click', function() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      resetTimer()
      return
    }
  
    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
  })