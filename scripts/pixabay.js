/**
 * Author : Jy Alexander
 * Date : March 8th, 2024
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
const PIXABAY_API_KEY = '42719379-2b3a86d1d4f3504029cf3df04'; // normally we would load a key through the .env file
// URL for Pixbay request
const PIXABAY_URL = 'https://pixabay.com/api/?key=<API_KEY>';
//https://pixabay.com/api/?key=42719379-2b3a86d1d4f3504029cf3df04&lang=en
// Constant for image count
const IMAGE_COUNT = 30;


/**
 * makePosts
 * Creates posts for pictures.
 */
const makePosts = (pictureData) => 
{
    const blogColumn = $('.blog-column');
    if (pictureData?.length > 0) {
    for (let i = 0; i < pictureData?.length; i++) {

        let id = i;
        let pixabayPicture = pictureData [i];

        let card = $('<div class="card"></div>')
            .attr("id", "card_" + id)
            .appendTo(blogColumn);

        let pic = $('<img>')
            .attr("id", "img-" + i)
            .attr("src", pixabayPicture.webformatURL)
            .attr("tags", pixabayPicture.tags)
            .addClass('card-img-top')
            //append pic to card
            .appendTo(card);

        let cardBody = $('<div class="card-body"></div>').appendTo(card);
        // append cardbody to card element

        let cardParagraph = $('<p class="card-text tags"></div>').text(pixabayPicture.tags).appendTo(cardBody);
        // append paragraph to card body

        }
    }
    // make HTML elements for posts using jQuery, same number as images retrieving
        // use bootstrap cards and append to
        // i.e. https://getbootstrap.com/docs/5.2/components/card/#about
        // create card
        // card body 
        // card title
        // image
        // card text

};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = () => 
{
    // get images matching the following: 30 per page, query search value of "cars", all horizontal, type photo only(no illustrations or vectors)
    const url = `${PIXABAY_URL.replace('<API_KEY>', PIXABAY_API_KEY)}&q=cars&orientation=horizontal&image_type=photo&per_page=${IMAGE_COUNT}`;
    // use fetch to get the pictures from the API
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // data retrieved
        // create post here
        // makePosts();
        // console.log(data);
        if (data?.hits?.length > 0) {
            // make sure data is not null
            // create post here for all pictures
            makePosts(data?.hits);
        }
    })
    // handle error(s) with .catch()
    .catch((err) => {
        // log to console
        console.log(err);
    })
};

getPictures();
