<script lang="ts">
    import {currentUser, pb} from '$lib/pocketbase';

    let username;
    let password;
    let email;

    async function login(){
        await pb.collection('users').authWithPassword(username, password);
    }

    async function signUp(){

        try {
            const data = {
                username, password, passwordConfirm: password, email: email
            };
            const createdUser = await pb.collection('users').create(data);
            await login();
        }
        catch (err){
            console.log(err);
        }
    }

    function signOut(){
        pb.authStore.clear();
    }
</script>

{#if $currentUser}
<p>Signed in as {$currentUser.username}</p>

{:else}
    <form on:submit|preventDefault>
        <input placeholder="Username" type="text" bind:value={username}>
        <input placeholder="Email" type="email" bind:value={email}>
        <input placeholder="Password" type="password" bind:value={password}>

        <button on:click={signUp}>Sign Up</button>
        <button on:click={login}>Login</button>
    </form>



{/if}

<button on:click={signOut}>Sign Out</button>

