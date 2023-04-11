import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { getAllContacts } from "../contactInfo";

const waitFor2Seconds = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), 2000);
  });

export function rootAction() {
  console.log("Executed");
  return [
    {
      first: "Dheeraj",
      last: "Parashar",
      id: 1,
    },
  ];
}

export async function loader() {
  await waitFor2Seconds();
  return getAllContacts();
}

export default function Root() {
  const contacts = useLoaderData();
  console.log("Contacts inside root component", { contacts });
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts && contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
