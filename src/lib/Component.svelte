<script lang="ts">
    export let title = "Title";
</script>

<div class="box-shadow component">
    <div class="title">{title}</div>
    <slot />
</div>

<style lang="scss">
    .component {
        margin: 30px;
        background-color: #ffffff;
        padding: 10px;
        border-radius: 10px;
    }

    .title {
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
    }
</style>
