<script setup>
import { ref, onMounted } from 'vue'

const christmas = ['🎄', '❄️', '🎅', '⛄', '🦌', '🎁']
const easter = ['🐰', '🐣', '🌷', '🐑', '🥚']
const winter = ['❄️', '⛄', '🌨️', '🏂', '🧣', '🧤']
const spring = ['🌸', '🌷', '☀️', '🌼', '🐝', '🍃']
const summer = ['🌞', '🏖️', '🍉', '🌊', '🏄', '🌴']
const autumn = ['🍁', '🍂', '🎃', '🌰', '🦉', '🔥']
const defaultEmojis = ['🌟', '✨']

const emojiContainer = ref(null)

const shuffleArray = array => {
  return array.sort(() => Math.random() - 0.5)
}

const getSeasonEmojis = () => {
  const month = new Date().getMonth()
  if (month === 11 || (month === 10 && day >= 25)) {
    return christmas
  }

  if (month === 3 || (month === 2 && day >= 22)) {
    return easter
  }
  if (month >= 2 && month <= 4) return spring
  if (month >= 5 && month <= 7) return summer
  if (month >= 8 && month <= 10) return autumn
  if (month === 11 || month === 0 || month === 1) return winter
  return defaultEmojis
}

const generateRandomPositionStyle = () => {
  const top = Math.random() * 100 // Random percentage for top position
  const left = Math.random() * 100 // Random percentage for left position
  const size = Math.random() * (3 - 1) + 1 // Random size between 1x and 3x
  return `position: absolute; top: ${top}%; left: ${left}%; font-size: ${size}rem;`
}

onMounted(() => {
  const emojis = getSeasonEmojis()

  // Create an array of 100 emojis, repeating and shuffling the season emojis
  const mixedEmojis = shuffleArray([...emojis, ...emojis, ...emojis]).slice(
    0,
    1000,
  )

  const container = emojiContainer.value
  if (container) {
    container.innerHTML = mixedEmojis
      .map(
        emoji =>
          `<span style="${generateRandomPositionStyle()}">${emoji}</span>`,
      )
      .join('')
  }
})
</script>

<template>
  <div ref="emojiContainer" class="emoji-container"></div>
  <RouterView />
</template>

<style scoped>
.emoji-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}
</style>
