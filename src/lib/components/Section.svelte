<div class="container">
    <slot>Psuedo Text</slot>
</div>


<style>
    .container {
        height: max-content;
        width: 100svw;
        padding: 0 4px;
    }

    @media (min-width: 1031px) {
        .container {
            height: 600px;
        }
    }
</style>