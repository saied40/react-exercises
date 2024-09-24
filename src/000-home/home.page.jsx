import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { WEBSITE_TITLE } from '../constants';

export default function HomePage() {
  const appsList = [
    { id: 1, name: "Counter App", href: "/counter" },
    { id: 2, name: "Products App", href: "/products" },
  ];

  return (
    <>
      <Helmet>
        <title>{WEBSITE_TITLE}</title>
      </Helmet>
      <div className="home container">
        <h1 className="">React Exercises</h1>
        <div className="grid-parent">
          {appsList.map((app) => (
            <Link to={app.href} className="grid-child" key={app.id}>
              <h2>
                #{app.id} - {app.name}
              </h2>
              {app.note && <p>{app.note}</p>}
              {app.description && <p>{app.description}</p>}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
