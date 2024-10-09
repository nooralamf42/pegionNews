import newsImage1 from '../public/images/news1.jpg'
import newsImage2 from '../public/images/news2.jpg'
import newsImage3 from '../public/images/news3.jpg'
import newsImage4 from '../public/images/news4.jpg'
import newsImage5 from '../public/images/news5.jpg'


const newsImages = [newsImage1, newsImage2, newsImage3, newsImage4, newsImage5]
const updateBadImage = (e) => {
    e.target.src = newsImages[Math.floor(Math.random()*newsImages.length)]
}

export default updateBadImage;