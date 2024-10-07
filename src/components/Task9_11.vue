<!-- 9. Створіть базову власну директиву, яка змінює колір тексту елемента, на якому вона використовується.


10. Розробіть власну директиву, яка приймає параметр і виконує різні дії в залежності від його значення.


11. Створіть власну директиву для відображення тултипа при наведенні миші -->
<template>
    <div class="task-border">
        <p class="h4">Task 9-11</p>
        <p v-red>This text with custom directive v-red</p>
        <p v-color="color">You can change color for this text</p>
        <div>
            <button class="btn btn-primary" @click="changeColor('red')">red</button>
            <button class="btn btn-primary" @click="changeColor('blue')">blue</button>
            <button class="btn btn-primary" @click="changeColor('green')">green</button>
        </div>
        <input v-tooltip="'this is tooltip'" style="margin: 50px auto;" type="text" placeholder="Test input" >
    </div>
</template>

<script>
    export default {
        data() {
            return {
                color: 'black'
            }
        },
        directives: {
            red: {
                mounted(el) {
                    el.style.color = 'red';
                }
            },
            color: {            
                updated(el, binding) {
                    el.style.color = binding.value; 
                }
            },
            tooltip: {
                mounted(el, binding) {
                    const tooltip = document.createElement('div');
                    tooltip.textContent = binding.value;
                    tooltip.style.position = 'absolute';
                    tooltip.style.background = '#333';
                    tooltip.style.color = '#fff';
                    tooltip.style.padding = '5px 10px';
                    tooltip.style.borderRadius = '4px';
                    tooltip.style.fontSize = '12px';
                    tooltip.style.whiteSpace = 'nowrap';
                    tooltip.style.zIndex = '1000';
                    tooltip.style.visibility = 'hidden';
                    document.body.appendChild(tooltip);

                    const showTooltip = (event) => {
                        tooltip.style.top = `${event.pageY + 10}px`;
                        tooltip.style.left = `${event.pageX + 10}px`;
                        tooltip.style.visibility = 'visible';
                    };

                    const hideTooltip = () => {
                        tooltip.style.visibility = 'hidden'; 
                    };

                    el.addEventListener('mouseenter', showTooltip);
                    el.addEventListener('mousemove', showTooltip);
                    el.addEventListener('mouseleave', hideTooltip);
                }
            }
        },
        methods: {
            changeColor(color) {
                this.color = color;
                console.log(color);
            }
        }
    }
</script>

<style>

</style>