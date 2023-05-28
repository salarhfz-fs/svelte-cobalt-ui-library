<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

    import Input from './Input.svelte';
</script>

<Meta
    title='Cobalt UI Library/Basic Components/Input'
    component={Input}
/>

<Template let:args>
    <Input {...args} />
</Template>

<Story
    name='Default'
    args={
        { placeholder: 'example test', label: 'Text:', onInput: () => alert('this is a text field')  }
    }
/>

<Story
    name='Email'
    args={
        {
            placeholder: 'email@example.com',
            label: 'Email:',
            fieldType: 'email',
            onInput: () => alert('this is an email field')
        }
    }
/>

<Story
    name='No label'
    args={
        {
            placeholder: 'no label',
            label: '',
            fieldType: 'text',
            onInput: () => alert('this is an field with no label') }
    }
/>

<Story
    name='Disabled'
    args={
        { placeholder: 'disabled field', label: 'Text:', fieldType: 'text', disabled: true }
    }
/>

