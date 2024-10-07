<!-- 12. Розробіть директиву, яка дозволяє зробити елемент перетягуваним. (Плохо понял задание так что код полностью взят chatGPT) -->

<template>
    <div class="block" v-drag>Task 12</div>
</template>

<script>
    export default {
        directives: {
            drag: {
                mounted(el) {
                    let offsetX, offsetY;

                    el.onmousedown = (event) => {

                    offsetX = event.clientX - el.getBoundingClientRect().left;
                    offsetY = event.clientY - el.getBoundingClientRect().top;


                    document.onmousemove = (event) => {
                        el.style.left = `${event.clientX - offsetX}px`;
                        el.style.top = `${event.clientY - offsetY}px`;
                    };


                    document.onmouseup = () => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                    };
                },
            }
        }
    }
</script>

<style>
    .block {
        width: 100px;
        height: 100px;
        background-color: red;
        position: absolute;
        cursor: move;
        left: 0;
    }
</style>