export function titleToSlug(title) {
  return title
    .toLowerCase() // Convert the title to lowercase
    .trim() // Trim leading and trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with `-`
    .replace(/[^\w\-]+/g, "") // Remove non-word characters (anything that is not a letter, number, or dash)
    .replace(/\-+/g, "-"); // Ensure no consecutive `-`
}

export function slugToTitle(slug) {
  return slug
    .replace(/-/g, " ") // Replace dashes with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
}

export function capitalize(text) {
  // Split the text by underscores or spaces
  const words = text.split(/[_\s]+/);

  // Capitalize the first letter of each word and join them back
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
