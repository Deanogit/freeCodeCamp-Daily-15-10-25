// HTML Tag Stripper
// Given a string of HTML code, remove the tags and return the plain text content.

// The input string will contain only valid HTML.
// HTML tags may be nested.
// Remove the tags and any attributes.
// For example, '<a href="#">Click here</a>' should return "Click here".

// function stripTags(html) {
//   console.log(html);

//   // find the input string
//   const regex = /(>[a-z\s]+<)/;
//   console.log(regex.test(html));
//   return html;
// }

function stripTags(html) {
  console.log(html);

  // find the input string
  // const regex = /(>[a-z\s]+<)/
  // console.log(regex.test(html))
  // return html;

  // replace all tags
  const regex = /<[^>]*>/g;

  // swap out tags
  const plainText = html.replaceAll(regex, '');

  return plainText;
}
