const app = Vue.createApp({
  data() {
    return {
      showCompletedTasks: true,  
      newTask: '',      
      tasks: [          
        { title: 'Do dishes', isDone: true },
        { title: 'Buy food', isDone: false },
        { title: 'Clean the apartment', isDone: true }
      ]
    }
  },
  computed: {
    filteredTasks() {
      if (this.showTasks){
        return this.tasks
      }
      else {
        return this.tasks.filter(task => this.showCompletedTasks || !task.isDone);
      }
    }
  },
  methods: {
    toggleDone(task) {
      task.isDone = !task.isDone;
    },
    addTask() {
      if (this.newTask.trim() !== '') { 
        this.tasks.push({ title: this.newTask, isDone: false });
        this.newTask = '';  
      }
    },
    toggleShowCompletedTasks() {
      console.log("click")
      this.showCompletedTasks = !this.showCompletedTasks;
    }
  }
});

app.mount('#app');
