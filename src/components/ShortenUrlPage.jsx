// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'

// const ShortenUrlPage = () => {
//     const { url } = useParams();

//     useEffect(() => {
//         if (url) {
//             window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
//         }
//     }, [url]);
//   return <p>Redirecting...</p>;
// } 

// export default ShortenUrlPage
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShortenUrlPage = () => {
  const { url } = useParams();

  useEffect(() => {
    if (!url) return;

    // Construct backend redirect URL
    const redirectUrl = `${import.meta.env.VITE_BACKEND_URL}/${url}`;

    // Redirect to the original URL stored in backend
    window.location.href = redirectUrl;
  }, [url]);

  return (
    <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-700">
      Redirecting...
    </div>
  );
};

export default ShortenUrlPage;
