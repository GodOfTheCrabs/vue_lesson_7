<!-- 2. Розробіть компонент з декількома іменованими слотами та передайте у них різний контент.

Створіть компонент з слотами, які мають фолбек контент, що відображається, якщо немає переданого контенту. -->

<template>
    <div class="task-border">
        <p class="h4">Task 2</p>
        <div>
            <slot name="header"></slot>
        </div>
        <div>
            <slot name="main">If not main slot</slot>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>    
</template>

<script>

</script>

<style scoped>
    div {
        font-size: 16px;
    }
</style>