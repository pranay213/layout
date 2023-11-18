import { parseDomain, ParseResultType } from "parse-domain";

const parseResult = parseDomain(
  // This should be a string with basic latin letters only.
  // More information below.
  "www.google.com"
);

// Check if the domain is listed in the public suffix list
if (parseResult.type === ParseResultType.Listed) {
  const { subDomains, domain, topLevelDomains } = parseResult;

  // console.log(subDomains); // ["www", "some"]
  // console.log(domain); // "example"
  // console.log(topLevelDomains); // ["co", "uk"]
} else {
  // Read more about other parseResult types below...
}
