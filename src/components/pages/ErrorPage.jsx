import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Zoinks!</h1>
      <p>Gee Scoob, I think we went the wrong way!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}