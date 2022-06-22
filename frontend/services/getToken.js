import { baseUrl } from 'core/conf';

export default async function getMeetToken(username, room) {
  try {
    const response = await fetch(
      `${baseUrl}/get-token`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, room })
      }
    ).then(res => res.json());

    return response;
  } catch (e) {
    console.error(e);
  }
}