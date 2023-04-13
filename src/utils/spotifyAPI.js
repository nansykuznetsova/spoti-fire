export async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
   }, 
   body: {
    grant_type: 'client_credentials',
    client_id: '04f422d25fa14a2eb2549dd07babfd76',
    client_secret: 'bd4ec73679de434e9935f0db3ca15a12'
   }
  });
  return await response.json();
}
