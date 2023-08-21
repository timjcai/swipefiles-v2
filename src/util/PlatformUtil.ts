export const ALL_PLATFORMS = [
    "Facebook", 
    "Linkedin", 
    "Twitter", 
    "Pinterest", 
    "Reddit", 
    "Tumblr", 
    "Medium",
    // "Substack", 
    "Dribbble", 
    "YouTube", 
    "TikTok", 
    "Google", 
    "Apple", 
    "Github", 
    "Instagram", 
    "Behance", 
    "Amazon", 
    "Website"
]

const extractDomain = (url) => {
    const urlObj = new URL(url);
    const hostParts = urlObj.hostname.split('.')
    const domain = hostParts[hostParts.length - 2]
    return (domain)
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function capsfirstandfourth(word) {
    return word.charAt(0).toUpperCase() + word.slice(1,3).toLowerCase() + word.charAt(3).toUpperCase() + word.slice(4).toLowerCase()
}

export const extractAndFormatDomain = (url) => {
    const domain = extractDomain(url)
    if (domain.toUpperCase() === "YOUTUBE" || domain.toUpperCase() === "TIKTOK" ) {
        return capsfirstandfourth(domain)
    } else {
        return capitalizeFirstLetter(domain)
    }
}

export const extractYTTitle = (url) => {
    fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(html => {
    const dom = new JSDOM(html);
    const document = dom.window.document.head;
    // Example: Extracting all links from the page
    const links = document.querySelector('title').innerHTML;
    console.log(links)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}