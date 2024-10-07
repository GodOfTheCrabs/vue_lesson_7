<!-- 4. Стовріть слот для модального вікна за допомогою которого можно будет встановлювати контент для хедера, футера та тіла. -->

<template>
    <div v-if="isVisible" class="task-border">
        <p class="h4">Task 4</p>
        <div class="modal-window">
            <div>
                <slot name="header"></slot>
            </div>
            <div>
                <slot name="main"></slot>
            </div>
            <div>
                <slot name="footer">
                    
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Task4',
        props: {
            isVisible: {
            type: Boolean,
            default: false
            }
        }
    }
</script>

<style>

</style>