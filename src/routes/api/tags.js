
export async function get()
{
  const Authorization = import.meta.env.VITE_AUTHORIZATION;

  const header =
  {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': "token " + Authorization,
  };

  const uri = "https://api.github.com/repos/shinrenpan/shinrenpan.github.io/labels";

  try
  {
    const response = await fetch(uri, {headers: header});
    const json = await response.json();

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
