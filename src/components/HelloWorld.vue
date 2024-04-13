<script setup>
import layer8 from 'layer8_interceptor'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

async function checkPersistence() {
  let number = await layer8.persistenceCheck()
  let persistenceCheckDiv = document.getElementById('persistence-check-div')
  persistenceCheckDiv.innerHTML = 'persistence check @ ' + number
}

async function checkTunnel() {
  try {
    await layer8.initEncryptedTunnel(
      {
        providers: ['http://127.0.0.1:8000'],
        proxy: 'http://127.0.0.1:5001' // works
      },
      'dev'
    )
  } catch (err) {
    console.log('.initEncryptedTunnel error: ', err)
  }

  let checkTunnelDiv = document.getElementById('check-tunnel-div')
  // let result = await layer8.fetch('http://192.168.2.19:8000/nextpoem') //RAVI: this arg causes go to crash: http://localhost:8000/nextpoem
  // let fetchStatus = result.status
  checkTunnelDiv.innerHTML = 'Fetch status: ' + 'fetchStatus'
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Layer8 E2E Test Suite</h3>

    <button id="layer8-persistence-check-btn" @click="checkPersistence">
      Layer8 Persistence Check
    </button>
    <div id="persistence-check-div"></div>
    <button id="check-tunnel-btn" @click="checkTunnel">
      This button shows if the encrypted tunnel is open
    </button>
    <div id="check-tunnel-div"></div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
