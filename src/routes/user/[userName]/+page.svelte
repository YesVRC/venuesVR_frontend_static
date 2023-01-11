<script lang="ts">
    export let data;
    let source = `https://venuezvr.pockethost.io/api/files/_pb_users_auth_/${data.id}/${data.avatar}`;
</script>

{#if data.username != undefined}
    <p>{data.username}</p>
    <img src={source} />
{:else }
<p>{data.jsonError.status}</p>
{/if}

<style>
    img {
        size: 256px;
    }
</style>