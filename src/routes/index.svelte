
<script context="module">
  export async function load({fetch})
  {
    try
    {
      const response = await fetch("/api/issues");
      const issues = await response.json();

      const result = 
      {
        props: {issues}
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
  export let issues;
</script>

<div class="grip">
{#each issues as issue}
  <div class="issue_box">
    <!--Title-->
    <h2><a href="/issue/{issue.number}">{issue.title}</a></h2>
    <!--Date-->
    <p class="issue_date">{new Date(issue.created_at).toISOString().replace(/T|Z|\.\d{3}/g, ' ').trim()}</p>
    <!--Tags-->
    {#each issue.labels as label}
      <a class="issue_tag" href='/tag/{label.name}'>#{label.name}</a>
    {/each}
  </div>
{/each}
</div>

<style>
  .grip
  {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .issue_box
  {
    padding: 10px;
    border: 1px solid #ddd;
  }

  .issue_date
  {
    margin: 0;
  }

  .issue_tag {
    margin: 0 8px 0 0;
  }

  h2
  {
    margin: 0;
    font-size: 1.3em;
    border: none;
  }
</style>
