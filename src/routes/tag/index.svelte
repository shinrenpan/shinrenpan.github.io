<script context="module">
  export async function load({fetch})
  {
    try
    {
      const response = await fetch("/api/tags");
      const tags = await response.json();
      const result = 
      {
        props: {tags}
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
  export let tags;
</script>

<div class="tag_container">
{#each tags as tag}
  <a class="tag" href='tag/{tag.name}'>#{tag.name}</a>
{/each}
</div>

<style>
  .tag_container
  {
    border-radius: 15px;
    display: flex;
    justify-content: space;
    overflow-wrap: break-word;
    text-align: left;
    flex-wrap: wrap;
  }

  .tag
  {
    margin: 1em;
  }
</style>
