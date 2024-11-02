let id = 1

const app = Vue.createApp( {
    data() {
        const message = ("Hello Vue JS")
        const count = 1
        const todos = Vue.ref([])
        return {message, count, todos}
    },
    methods: {
    createLine() {
        const todo = {id: id++, text: "Text"}
        this.todos.push(todo)
    },
    removeTask: function (event) {
        console.log(event)
        if (this.count == 0) {
            return
        }
        this.count--
        return {count}
    }
}
})
app.mount('#app')