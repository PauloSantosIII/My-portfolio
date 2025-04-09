import Tabela from '../../assets/images/projects/tabela-multiplicacao.png'
import MenuRestaurante from '../../assets/images/projects/menu-restaurante.png'
import SocialMockup from '../../assets/images/projects/social-mockup.png'
import Website from '../../assets/images/projects/create-website.png'
import Galeria from '../../assets/images/projects/galeria-de-photos.png'
import RolandoDados from '../../assets/images/projects/rolando-dados.png'
import FrequencyCounter from '../../assets/images/projects/frequency-counter.png'
import Labirinto from '../../assets/images/projects/labirinto.png'
import CoinObj from '../../assets/images/projects/coin-object.png'
import Keyboard from '../../assets/images/projects/keyboard-events.png'
import GameChance from '../../assets/images/projects/game-of-chance.png'
import PhotosGPS from '../../assets/images/projects/photos-gps.png'
import Davichris from '../../assets/images/projects/davichris.png'
import ChurchModel from '../../assets/images/projects/church-model.png'
import PhotoWall from '../../assets/images/projects/photo-wall.png'
import CantinaKenzie from '../../assets/images/projects/cantina.png'
import Jokenpo from '../../assets/images/projects/jokenpo.png'
import Colections from '../../assets/images/projects/colections.png'
import Lig4 from '../../assets/images/projects/lig-4.png'
import BookBook from '../../assets/images/projects/bookbook.png'
import Skambo from '../../assets/images/projects/skambo.png'

const url_gl = 'https://paulosantosiii.gitlab.io/'
const url_vercel = '.vercel.app'

export const Projects = [
    { id: 1, link: url_gl + 'tabela-multiplicacao', img: Tabela },
    { id: 2, link: url_gl + '04_style_restaurant_menu', img: MenuRestaurante },
    { id: 3, link: url_gl + 'socialmockup', img: SocialMockup },
    { id: 4, link: url_gl + 'crate-website', img: Website },
    { id: 5, link: url_gl + 'galeria-fotos-responsiva', img: Galeria },
    { id: 6, link: url_gl + 'dice', img: RolandoDados },
    { id: 7, link: url_gl + 'frequency-counter', img: FrequencyCounter },
    { id: 8, link: url_gl + 'labirinto', img: Labirinto },
    { id: 9, link: url_gl + 'coinobject', img: CoinObj },
    { id: 10, link: url_gl + 'keyboard-events', img: Keyboard },
    { id: 11, link: url_gl + 'game-of-chance', img: GameChance },
    { id: 12, link: url_gl + 'photos-from-here', img: PhotosGPS }
]

export const ProjectsReact = [
    { id: 13, link: 'https://davichris' + url_vercel, img: Davichris },
    { id: 14, link: 'https://church-model1' + url_vercel, img: ChurchModel },
    { id: 15, link: 'https://react-photo-wall-nine' + url_vercel, img: PhotoWall },
    { id: 16, link: 'https://cantina-kenzie-steel' + url_vercel, img: CantinaKenzie },
    { id: 17, link: 'https://jokenpo-zeta' + url_vercel, img: Jokenpo },
    { id: 18, link: 'https://colecoes-redux' + url_vercel, img: Colections },
    { id: 19, link: 'https://hdelavidaum.gitlab.io/lig-4', img: Lig4 },
    { id: 20, link: 'https://book-book-swart' + url_vercel, img: BookBook },
    { id: 21, link: 'https://skambo' + url_vercel, img: Skambo }
]

export const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
}