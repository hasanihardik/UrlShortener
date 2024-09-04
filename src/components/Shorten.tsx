import { FormEvent, useEffect, useState } from 'react';

interface ShortenedUrl {
  originalUrl: string;
  shortUrl: string;
}

const Shorten = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>(() => {
    const storedUrls = localStorage.getItem('shortenUrl');
    return storedUrls ? JSON.parse(storedUrls) : [];
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // save the data when changes are made
  useEffect(() => {
    localStorage.setItem('shortenUrl', JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!url) {
      setErrorMessage('Please add a link');
    }

    try {
      setLoading(true);
      const response = await fetch('/api/shortenUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ url }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortenedUrls([
          ...shortenedUrls,
          {
            originalUrl: url,
            shortUrl: data.shortUrl,
          },
        ]);

        setErrorMessage('');
        setUrl('');
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (shortUrl: string, index: number) => {
    navigator.clipboard.writeText(shortUrl);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="shorten">
      <div className="container">
        {/* Shorten content */}
        <div className="shorten__content">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-control">
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className={`${errorMessage ? 'error-input' : ''}`}
                type="text"
                placeholder="Shorten a link here..."
              />
              {errorMessage && <p className="error-text">{errorMessage}</p>}
            </div>

            <button className="btn" datatype="wide" disabled={loading}>
              {loading ? 'Loading...' : ' Shorten It!'}
            </button>
          </form>
        </div>

        {/* Shorten Output */}
        {shortenedUrls.length > 0 && (
          <div className="shorten__cards">
            {/* Shorten Card */}
            {shortenedUrls.map((shortenedUrl, index) => (
              <div key={index} className="shorten__card">
                <div className="actual-link">
                  <span>{shortenedUrl.originalUrl}</span>
                </div>

                <hr className="line" />

                <div className="shorten__link">
                  <a href={`${shortenedUrl.shortUrl}`} target="_blank">
                    {shortenedUrl.shortUrl}
                  </a>
                  <button
                    className={`btn ${copiedIndex === index ? 'copied' : ''}`}
                    datatype="wide"
                    onClick={() => handleCopy(shortenedUrl.shortUrl, index)}
                  >
                    {copiedIndex === index ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shorten;
