
<script context="module">
  export async function load({page, fetch})
  {
    try
    {
      const category = page.params.category;
      const params = new URLSearchParams({labels: [category]});
      const response = await fetch("/api/issues_by_labels?" + params);
      const issues = await response.json();

      const result = 
      {
        props: { category, issues }
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
  export let category;
  export let issues;
</script>

<h1>分類: {category}</h1>
<div class="issue_container">
  {#each issues as issue}
    <div class="issue_box">
      <!--Title-->
      <h2><a href="/issue/{issue.number}">{issue.title}</a></h2>
      <!--Date-->
      <p class="issue_date">{new Date(issue.created_at).toISOString().substring(0, 10)}</p>
    </div>
  {/each}
</div>
  
  <style>
    .issue_container
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
  
    h2
    {
      margin: 0;
      font-size: 1.3em;
      border: none;
    }
  </style>
  