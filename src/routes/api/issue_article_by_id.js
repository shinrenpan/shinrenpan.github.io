
export async function get(params)
{
  const Authorization = import.meta.env.VITE_AUTHORIZATION;

  const header =
  {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': "token " + Authorization,
  };

  const id = params.query.get("id");
  let uri;
  let response;

  try
  {
    // get issue by id
    uri = "https://api.github.com/repos/shinrenpan/shinrenpan.github.io/issues/" + id;
    response = await fetch(uri, {headers: header});
    const issue = await response.json();

    // get markdown to html
    const text = issue.body;
    const data = {text: text};
    uri = "https://api.github.com/markdown"

    const request =
    {
      body: JSON.stringify(data),
      headers: header,
      method: "POST",
    };

    response = await fetch(uri, request);
    const innerHTML = await response.text();
    const json = {innerHTML: innerHTML};

    const result = 
    {
      status: response.status,
      body: json,
    };

    return result;
  }
  catch(error)
  {
    console.log(error);
  }
}
