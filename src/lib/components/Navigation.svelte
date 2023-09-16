<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faBars } from '@fortawesome/free-solid-svg-icons'

    let sidebar = false;
    let items = [
        {
            name: "Losuj serwer",
            action: () => {}
        },
        {
            name: "Discord",
            action: () => window.location.replace("https://google.com")
        },
        {
            name: "Dodaj serwer",
            action: () => {}
        },
        {
            name: "Zaloguj się",
            action: () => {}
        }
    ]
</script>

<nav class="flex justify-between my-8 mx-10">
    <a href="/" class="font-bold text-2xl uppercase text-white">CraftList.pl</a>
    <ul class="hidden md:flex gap-20 text-white font-semibold uppercase cursor-pointer select-none">
        {#each items as item}
            <button on:click={() => item.action()}>{item.name}</button>
        {/each}
    </ul>
    <button on:click={() => sidebar = !sidebar} class="md:hidden text-white text-2xl">
        <Fa icon={faBars} />
    </button>
</nav>
{#if sidebar}
    <aside style="height: calc(100vh - 100px)" class="bg-[#1B1B1B] w-full  absolute left-0">
        <ul class="flex flex-col h-full gap-8 justify-center items-center text-white font-semibold uppercase cursor-pointer select-none">
            {#each items as item}
                <button on:click={() => item.action()}>{item.name}</button>
            {/each}
        </ul>
    </aside>
{/if}