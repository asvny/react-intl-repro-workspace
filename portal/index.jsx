// @ts-check
import * as React from "react";
import * as ReactDOM from "react-dom";
import { IntlProvider, FormattedMessage, useIntl } from "react-intl";

import Invoices from "@c/invoices";
import Purchases from "@c/purchases";
import Settings from "@c/settings";

function App() {
  const intl = useIntl();

  return (
    <div>
      <h1>
        {intl.formatMessage({
          defaultMessage: "App Heading",
          description: "main heading of the website",
        })}
      </h1>

      <Invoices />
      <Purchases />
      <Settings />
    </div>
  );
}

async function main() {
  function Root() {
    return (
      <IntlProvider locale="en">
        <App />
      </IntlProvider>
    );
  }

  ReactDOM.render(<Root />, document.getElementById("root"));
}

main();
