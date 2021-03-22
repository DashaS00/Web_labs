var app1 = new Vue({
        el: '#app-1',
        data: {
        message: 'Поздравляю, вы с делали первый шаг в изучении адаптивного дизайна!'
    },
    methods: {
       reverseMessage: function () {
       this.message = this.message.split('').reverse().join('')
       }
    }
  })