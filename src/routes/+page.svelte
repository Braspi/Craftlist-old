<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faCrown, faDotCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
    import ServerCardView from "$lib/components/ServerCardView.svelte";
</script>
<div class="text-white uppercase text-center mt-10">
    <h1 class="text-5xl md:text-6xl font-bold">Nowoczesna</h1>
    <h2 class="text-2xl font-semibold">Lista serwerów minecraft</h2>
</div>
<div class="flex justify-center mt-6 text-white mx-8">
    <div class="w-full md:w-1/2">
        <input class="bg-[#121212] w-full rounded-md p-2 border-none outline-none px-5" placeholder="Wpisz adres lub nazwe serwera" type="text">
        <div class="flex justify-between mt-2">
            <div>
                <select class="bg-[#121212] py-2 px-5 rounded-md">
                    <option value="" selected disabled>Tryb</option>
                    <option>Survival</option>
                </select>
                <select class="bg-[#121212] py-2 px-5 rounded-md">
                    <option value="" selected disabled>Wersja</option>
                    <option>1.20.1</option>
                </select>
            </div>
            <button class="bg-[#121212] py-2 px-5 rounded-md">Szukaj serwer</button>
        </div>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center mt-24 mx-10">
    <ServerCardView/>
    <ServerCardView/>
    <ServerCardView/>
</div>