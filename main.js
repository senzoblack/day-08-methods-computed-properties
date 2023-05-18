const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Greetings!'
    }
  },
  computed: {
    reverseMessage() {
        return this.message.split('').reverse().join('');
    }
  }
}).mount('#app')