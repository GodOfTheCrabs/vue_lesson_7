<!-- 8. Розробіть міксін, який додає валідацію для форми в компоненті. -->

<template>
    <div class="task-border">
        <p class="h4">Task 8</p>
        <form class="form-task" @submit.prevent="handleSubmit">
            <div class="form-group">
                <label class="h5">Login</label>
                <input type="text" class="form-control" placeholder="Enter Login" v-model="formData.name" v-focus>
                <span v-if="errors.name" class="text-danger">{{ errors.name}}</span>
            </div>
            <div class="form-group">
                <label class="h5">Password</label>
                <input type="password" class="form-control" placeholder="Password" v-model="formData.password">
                <span v-if="errors.password" class="text-danger">{{ errors.password}}</span>
            </div>
            <div class="form-group">
                <label class="h5">Age</label>
                <input type="number" class="form-control" placeholder="Password" v-model="formData.age">
                <span v-if="errors.password" class="text-danger">{{ errors.password}}</span>
            </div>
            <p class="h5" style="margin-top: 10px;">Gender</p>
            <div class="form-check">             
                <input class="form-check-input" type="radio" value="male" v-model="formData.gender">
                <label class="form-check-label" for="exampleRadios1">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="female" v-model="formData.gender">
                <label class="form-check-label" for="exampleRadios2">
                    Female
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>

<script>
import { validationMixin } from '@/mixin/validationMixin.js';

    export default {
        name: 'Form',
        mixins: [validationMixin],
        data() {
            return {
                formData: {
                    name: '',
                    password: '',
                    gender: '',
                    age: 0,
                },
                counterResult: 0,
                errors: {},
                submittedData: null,
                isToggled: true,
                selectOptions: ''
            }
        },
        methods: {
            handleSubmit() {
                if(this.validateForm(this.formData)) {
                    this.submittedData = this.formData
                    if(this.formData.name === 'admin'){
                        localStorage.setItem('adminToken', 'admin-token')
                        localStorage.setItem('authToken', 'example-token');
                    }
                    else {
                        localStorage.setItem('authToken', 'example-token');
                    }
                    alert('Form submitted successfully')

                    this.formData.name = ''
                    this.formData.password = ''
                    this.errors = {}
                } else {
                    alert('Correct errors in the form')
                }
            },
        }
    }
</script>

<style scoped> 
    .form-task {
        width: 350px;
        margin: 0 auto;
        text-align: left;
    }
    .form-group {
        margin-top: 25px;
    }
    .btn {
        margin-top: 25px;
    }
    label {
        margin-bottom: 10px;
    }
    .form-control {
        border: 1px solid black;
    }
    .form-check-input {
        border: 1px solid black;
    }
    .task-margin{
        margin-top: 25px;
    }
</style>