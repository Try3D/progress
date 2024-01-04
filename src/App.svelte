<script lang="ts">
    import Component from "./lib/Component.svelte";

    import { month, today, progress } from "./lib/date.js";

    let filledSquares = Math.floor(progress * 365);
</script>

<h1 class="center">Year Progress tracker</h1>

<Component title="Year Progress">
    <div class="container">
        <div class="left-text extra">January 1</div>
        <div class="right-text extra">December 31</div>
    </div>
    <div class="progress-bar">
        <div class="progress-fill" style="width: {progress * 100}%;"></div>
    </div>
    <div class="container">
        <div class="left-text extra">0%</div>
        <div class="right-text extra">100%</div>
    </div>
</Component>

<Component title="Current Date">
    <div class="center extra">
        {month[today.getMonth()]}
        {today.getDate()}, {today.getFullYear()}
    </div>
</Component>

<Component title="Daily Progress">
    <div class="squares">
        {#each Array(365) as _, rowIndex}
            {#if rowIndex < filledSquares}
                <div class="square filled"></div>
            {:else}
                <div class="square"></div>
            {/if}
        {/each}
    </div>
</Component>
