<svelte:options tag='cobalt-input' />

<script lang="ts">
    export let label = 'Label:';
    export let placeholder = '';
    export let fieldType = 'text';
    export let disabled = false;
    export let inputName = '';
    export let fieldId = '';

    function onInput(event: Event) {
        event.target.dispatchEvent(new CustomEvent('oninput', { composed: true }));
    }
</script>


<div class="cobalt">
    {#if label}
        <label for={fieldId}>{label}</label>
    {/if}
    <input
        type={fieldType}
        id={fieldId}
        name={inputName}
        {placeholder}
        {disabled}
        on:input={onInput}
        {...$$props}
    />
</div>

<style>
   .cobalt {
       display: flex;
       flex-direction: row;
       font-family: Arial, Helvetica, sans-serif;
   }

   input[type="text"] {
       width: 200px;
       border-radius: 4px;
       border-color: #19247c;
       height: 30px;
       outline: none;
   }

   input[type="email"] {
       width: 200px;
       border-radius: 4px;
       border-color: #19247c;
       height: 30px;
       outline: none;
   }

   label {
       padding-right: 10px;
       display: flex;
       align-self: center;
   }
</style>

