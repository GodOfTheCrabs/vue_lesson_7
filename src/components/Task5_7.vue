<!--5. Створіть базовий міксін, який додає декілька методів або даних у компонент.

 6. Створіть міксін, який включає хуки життєвого циклу для логування повідомлень при створенні та знищенні компоненту.

7. Створіть глобальний міксін і додайте його глобально в вашому основному файлі main.js або main.ts.  -->


<template>
     <div class="task-border">
        <div class="row-center">
            <p class="h4 text-center">Task 5-7</p>
            <div>
                <div class="text-center">{{counter}}</div>
            </div>
        </div>
        <div class="row-center">
            <div class="action-block">
                <button class="btn btn-success btn-counter" @click="increment">+</button>
                <button class="btn btn-danger btn-counter" @click="decrement">-</button>
            </div>
        </div> 
    </div>
</template>

<script>

</script>

<style>

</style>