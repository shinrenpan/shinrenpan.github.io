
<script context="module">
  export async function load({fetch})
  {
    try
    {
      const params = new URLSearchParams({id: "8"});
      const response = await fetch("/api/issue_article_by_id?" + params);
      const data = await response.json();
      const innerHTML = data.innerHTML;
      const result = { props: { innerHTML } };

      return result;
    }
    catch(error)
    {
      console.log(error);
    }
  }
</script>

<script>
  export let innerHTML;
</script>

<article contenteditable="false" bind:innerHTML={innerHTML}></article>
