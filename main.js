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

//Note - Methods & Computed Properties
//NOTE - using a method or a computed property pretty much achieved the same outcome. The key difference to using computed properties is that computed properties.
//NOTE - are cached based on the dependencies they depend on.
//NOTE - reverseMessage computed property we've declared, we can see it has one data dependancy - the message property.
// computed: {
//     reverseMessage() {
//         return this.message.split('').reverse().join('');
//     }
// }
// The value of reverseMessage directly depends on the message data property. When the value "message" changes, so does the reverseMessage. Computed properties are useful because as long as the dependant data property(message) remains constant
//