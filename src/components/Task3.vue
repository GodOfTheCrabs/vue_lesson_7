<!-- 3. Реалізуйте компонент, який передає дані назад у батьківський компонент через scoped slot. -->

<template>
    <div class="task-border">
        <ul style="width: 300px; margin: 0 auto;">
            <p class="h4">Task 3</p>
            <li v-for="(item, index) in items" :key="index">
                <slot :item="item"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Task3',
        props: {
            items: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style>

</style>