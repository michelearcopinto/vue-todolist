const { createApp } = Vue

const app = createApp({
    data() {
        return {
            newTask: '',
            tasks: []
        }
    },
    created() {

    },
    methods: {
        addTask() {

            if (this.newTask !== '') {

                this.tasks.unshift({ text: this.newTask, key: false });
            }

            this.newTask = '';
        },
        removeTask(index) {

            this.tasks.splice(index, 1);

        },
        checkTaskToggle(index) {

            if (this.tasks[index].key === false) {

                this.tasks[index].key = true;

            } else {

                this.tasks[index].key = false;

            }
        }
    }
}).mount('#app')