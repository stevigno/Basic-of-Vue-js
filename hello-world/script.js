const application = {
    data(){
        return{
           title: 'Hello world',
           message: 'Voici notre premiere application vue js' 
        } 
    }
}

Vue.createApp(application).mount('#app');