import newsImage1 from '../public/images/news1.jpg'
const fixImgUrl = (url="") =>{
    if(url.includes(".gif")) return newsImage1
    if(!url) return ""
      // Split the URL into parts based on :
  // Regular expression to match URLs with .png, .jpg, or .webp before a colon
  const regex = /\.(png|jpg|webp):/;

  // Find the match
  const match = url.match(regex);

  // If there's a match, return the URL up to the second colon
  if (match) {
    // Find the index of the second colon
    const secondColonIndex = url.indexOf(':', url.indexOf(':') + 1);
    return url.substring(0, secondColonIndex);
  }

  // If no match, return the original URL
  return url;
}


export default fixImgUrl;