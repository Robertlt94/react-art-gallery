import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import GalleryPage from './components/pages/GalleryPage/GalleryPage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import DonatePage from './components/pages/DonatePage/DonatePage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import Header from './components/Header/Header';
import MorePage from './components/pages/MorePage/MorePage';

function App() {
  const [message, setMessage] = useState('');
  const [paintings, setPaintings] = useState(
    [
      {
        id: 1,
        name: "Mona Lisa",
        dated: "1503-19",
        artist: "Leonardo Da Vinci",
        image: "https://media.timeout.com/images/103166731/750/562/image.webp",
        description: "Painted between 1503 and 1517, Da Vinci’s alluring portrait has been dogged by two questions since the day it was made: Who’s the subject and why is she smiling? A number of theories for the former have been proffered over the years: That she’s the wife of the Florentine merchant Francesco di Bartolomeo del Giocondo (ergo, the work’s alternative title, La Gioconda); that she's Leonardo’s mother, Caterina, conjured from Leonardo's boyhood memories of her; and finally, that it's a self-portrait in drag. As for that famous smile, its enigmatic quality has driven people crazy for centuries. Whatever the reason, Mona Lisa’s look of preternatural calm comports with the idealized landscape behind her, which dissolves into the distance through Leonardo’s use of atmospheric perspective."
      },
      {
        id: 2,
        name: "Girl with a Pearl Earring",
        dated: "1889",
        artist: "Johannes Vermeer",
        image: "https://media.timeout.com/images/103166735/750/562/image.webp",
        description: "Johannes Vermeer’s 1665 study of a young woman is startlingly real and startlingly modern, almost as if it were a photograph. This gets into the debate over whether or not Vermeer employed a pre-photographic device called a camera obscura to create the image. Leaving that aside, the sitter is unknown, though it’s been speculated that she might have been Vermeer's maid. He portrays her looking over her shoulder, locking her eyes with the viewer as if attempting to establish an intimate connection across the centuries. Technically speaking, Girl isn’t a portrait, but rather an example of the Dutch genre called a tronie—a headshot meant more as still life of facial features than as an attempt to capture a likeness."
      },
      {
        id: 3,
        name: "The Starry Night",
        dated: "1665",
        artist: "Vincent van Gogh",
        image: "https://media.timeout.com/images/103166739/750/562/image.webp",
        description: "Vincent Van Gogh’s most popular painting, The Starry Night was created by Van Gogh at the asylum in Saint-Rémy, where he’d committed himself in 1889. Indeed, The Starry Night seems to reflect his turbulent state of mind at the time, as the night sky comes alive with swirls and orbs of frenetically applied brush marks springing from the yin and yang of his personal demons and awe of nature."
      },
      {
        id: 4,
        name: "The Kiss",
        dated: "1907–1908",
        artist: "Gustav Klimt",
        image: "https://media.timeout.com/images/103166743/750/562/image.webp",
        description: "Opulently gilded and extravagantly patterned, The Kiss, Gustav Klimt’s fin-de-siècle portrayal of intimacy, is a mix of Symbolism and Vienna Jugendstil, the Austrian variant of Art Nouveau. Klimt depicts his subjects as mythical figures made modern by luxuriant surfaces of up-to-the moment graphic motifs. The work is a highpoint of the artist’s Golden Phase between 1899 and 1910 when he often used gold leaf—a technique inspired by a 1903 trip to the Basilica di San Vitale in Ravenna, Italy, where he saw the church’s famed Byzantine mosaics."
      },
      {
        id: 5,
        name: "The Birth of Venus",
        dated: "1484–1486",
        artist: "Sandro Botticelli",
        image: "https://media.timeout.com/images/103166737/750/562/image.webp",
        description: "Botticelli’s The Birth of Venus was the first full-length, non-religious nude since antiquity, and was made for Lorenzo de Medici. It’s claimed that the figure of the Goddess of Love is modeled after one Simonetta Cattaneo Vespucci, whose favors were allegedly shared by Lorenzo and his younger brother, Giuliano. Venus is seen being blown ashore on a giant clamshell by the wind gods Zephyrus and Aura as the personification of spring awaits on land with a cloak. Unsurprisingly, Venus attracted the ire of Savonarola, the Dominican monk who led a fundamentalist crackdown on the secular tastes of the Florentines. His campaign included the infamous “Bonfire of the Vanities” of 1497, in which “profane” objects—cosmetics, artworks, books—were burned on a pyre. The Birth of Venus was itself scheduled for incineration, but somehow escaped destruction. Botticelli, though, was so freaked out by the incident that he gave up painting for a while."
      },
      {
        id: 6,
        name: "Arrangement in Grey and Black No. 1 (Whistler’s Mother)",
        dated: "1871",
        artist: "James Abbott McNeill Whistler",
        image: "https://media.timeout.com/images/103166741/750/562/image.webp",
        description: "Whistler’s Mother, or Arrangement in Grey and Black No. 1, as it’s actually titled, speaks to the artist’s ambition to pursue art for art’s sake. James Abbott McNeill Whistler painted the work in his London studio in 1871, and in it, the formality of portraiture becomes an essay in form. Whistler’s mother Anna is pictured as one of several elements locked into an arrangement of right angles. Her severe expression fits in with the rigidity of the composition, and it’s somewhat ironic to note that despite Whistler’s formalist intentions, the painting became a symbol of motherhood."
      },
      {
        id: 7,
        name: "The Arnolfini Portrait",
        dated: "1434",
        artist: "Jan van Eyck",
        image: "https://media.timeout.com/images/103166745/750/562/image.webp",
        description: "One of the most significant works produced during the Northern Renaissance, this composition is believed to be one of the first paintings executed in oils. A full-length double portrait, it reputedly portrays an Italian merchant and a woman who may or may not be his bride. In 1934, the celebrated art historian Erwin Panofsky proposed that the painting is actually a wedding contract. What can be reliably said is that the piece is one of the first depictions of an interior using orthogonal perspective to create a sense of space that seems contiguous with the viewer’s own; it feels like a painting you could step into."
      },
      {
        id: 8,
        name: "The Garden of Earthly Delights",
        dated: "1503–1515",
        artist: "Hieronymus Bosch",
        image: "https://media.timeout.com/images/103166747/750/562/image.webp",
        description: "This fantastical triptych is generally considered a distant forerunner to Surrealism. In truth, it’s the expression of a late medieval artist who believed that God and the Devil, Heaven and Hell were real. Of the three scenes depicted, the left panel shows Christ presenting Eve to Adam, while the right one features the depredations of Hell; less clear is whether the center panel depicts Heaven. In Bosch’s perfervid vision of Hell, an enormous set of ears wielding a phallic knife attacks the damned, while a bird-beaked bug king with a chamber pot for a crown sits on its throne, devouring the doomed before promptly defecating them out again. This riot of symbolism has been largely impervious to interpretation, which may account for its widespread appeal."
      },
      {
        id: 9,
        name: "A Sunday Afternoon on the Island of La Grande Jatte",
        dated: "1884–1886",
        artist: "Georges Seurat",
        image: "https://media.timeout.com/images/105293264/750/562/image.webp",
        description: "Georges Seurat’s masterpiece, evoking the Paris of La Belle Epoque, is actually depicting a working-class suburban scene well outside the city’s center. Seurat often made this milieu his subject, which differed from the bourgeois portrayals of his Impressionist contemporaries. Seurat abjured the capture-the-moment approach of Manet, Monet and Degas, going instead for the sense of timeless permanence found in Greek sculpture. And that is exactly what you get in this frieze-like processional of figures whose stillness is in keeping with Seurat’s aim of creating a classical landscape in modern form."
      },
      {
        id: 10,
        name: "Les Demoiselles d’Avignon",
        dated: "1907",
        artist: "Pablo Picasso",
        image: "https://media.timeout.com/images/103166750/750/562/image.webp",
        description: "The ur-canvas of 20th-century art, Les Demoiselles d’Avignon ushered in the modern era by decisively breaking with the representational tradition of Western painting, incorporating allusions to the African masks that Picasso had seen in Paris's ethnographic museum at the Palais du Trocadro. Its compositional DNA also includes El Greco’s The Vision of Saint John (1608–14), now hanging in the Metropolitan Museum of Art. The women being depicted are actually prostitutes in a brothel in the artist's native Barcelona."
      },
    ]
  )

  return (
    <Router>
      <div>
        <Header message={ message } />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/gallery" element={<GalleryPage paintings={ paintings } />} exact />
          <Route path="/gallery/:id?" element={<MorePage paintings={ paintings } exact />} />
          <Route path="/about" element={<AboutPage />} exact />
          <Route path="/donate" element={<DonatePage />} exact />
          <Route path="/contact" element={<ContactPage />} exact />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
