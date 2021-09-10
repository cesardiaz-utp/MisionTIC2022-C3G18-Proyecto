const Application = {
    data(){
        return {
        }
    }

}
const app = Vue.createApp(Application)

app.component('todo-item', {
    template: `<li>Este es una tarea pendiente por hacer</li>`
})

app.mount("#app")