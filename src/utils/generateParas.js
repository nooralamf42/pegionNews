// Utility function to split content into random length paragraphs
function generateParagraphs(content, minSentencesPerParagraph = 2, maxSentencesPerParagraph = 5) {
    // Split content into sentences using period followed by space or line break
    const sentences = content.split(/(?<=[.!)])\s+/);
  
    let paragraphs = [];
    let currentParagraph = [];
  
    while (sentences.length > 0) {
      // Randomize paragraph length between min and max sentences per paragraph
      const paragraphLength = Math.floor(Math.random() * (maxSentencesPerParagraph - minSentencesPerParagraph + 1)) + minSentencesPerParagraph;
  
      // Take sentences for the current paragraph
      currentParagraph = sentences.splice(0, paragraphLength).join(' ');
      
      // Add the current paragraph to the array
      paragraphs.push(currentParagraph);
    }
  
    return paragraphs;
  }
  
  export default generateParagraphs;