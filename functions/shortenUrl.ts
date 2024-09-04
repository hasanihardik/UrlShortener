import { Config } from '@netlify/functions';

const apiKey = process.env.URL_KEY;

export default async (req: Request) => {
  const urlParams = new URLSearchParams(await req.text());

  const url = urlParams.get('url');

  if (!url) {
    return new Response(JSON.stringify({ error: 'URL is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const inputBody = JSON.stringify({
    url: url,
    expiry: '5m',
  });

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Api key is missing' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': apiKey,
  };

  try {
    const response = await fetch(
      'https://api.manyapis.com/v1-create-short-url',
      {
        method: 'POST',
        headers: headers,
        body: inputBody,
      }
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to shorten url' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const config: Config = {
  path: '/api/*',
};
