<div class="container">
    <slot>Psuedo Text</slot>
</div>


<style>
    .container {
        height: 750px;
        width: 100svw;
        padding: 0 4px;
    }

    @media (min-width: 768px) {
        .container {
            height: 600px;
        }
    }
</style>