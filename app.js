const app = Vue.createApp({
    data(){
        return {
            enteredValue: '',
            tasks:[],
            completed: false,
            status:'pending',
            completedTasks:[],
        }
    },

    methods:{
        addTask(){
            this.tasks.push(this.enteredValue)
            this.enteredValue = ''
        },
        removeTask(ind){
            this.tasks.splice(ind,1)
        },
        clearTasks(){
             this.tasks = []
        },
        
    },

    computed:{
        // clearTasks(){
        //     return this.tasks = []
        // },
        haveTasks(){
            return this.tasks.length > 0;
        },
        taskCompleted(){
            this.completedTasks.push
        }
    },

    watch:{}
});

app.mount('#assignment')