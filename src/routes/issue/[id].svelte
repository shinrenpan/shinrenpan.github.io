
<script context="module">
  export async function load({page, fetch})
  {
    try
    {
      const id = page.params.id;
      const params = new URLSearchParams({id: id});
      const response = await fetch("/api/issue_article_by_id?" + params);
      const json = await response.json();
      const innerHTML = json.innerHTML

      const result =
      {
        props: { innerHTML, id }
      };

      return result;
    }
    catch(error)
    {
      console.log(error);
    }
  }
</script>

<script>
  import Command from '$lib/Command.svelte';
  export let innerHTML;
  export let id;
</script>

<article contenteditable="false" bind:innerHTML={innerHTML}></article>
<Command {id}></Command>
