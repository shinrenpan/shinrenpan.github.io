
<script>
  import { onMount } from "svelte";

  export let id;
  let div;
  
  onMount(function()
  {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "shinrenpan/shinrenpan.github.io");
    script.setAttribute("issue-number", id);
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");
    div.appendChild(script);
  })
</script>

<div bind:this={div}></div>
