import imgArabe from '../../../../assets/Coffee_Card/img--arabe.svg'
import imgCafeLeite from '../../../../assets/Coffee_Card/img--cafe--com--leite.svg'
import imgCapuccino from '../../../../assets/Coffee_Card/img--capuccino.svg'
import imgChocolateQuente from '../../../../assets/Coffee_Card/img--chocolate--quente.svg'
import imgCubano from '../../../../assets/Coffee_Card/img--cubano.svg'
import imgAmericano from '../../../../assets/Coffee_Card/img--expresso--americano.svg'
import imgCremoso from '../../../../assets/Coffee_Card/img--expresso--cremoso.svg'
import imgGelado from '../../../../assets/Coffee_Card/img--expresso--gelado.svg'
import imgTradicional from '../../../../assets/Coffee_Card/img--expresso--tradicional.svg'
import imgHavaiano from '../../../../assets/Coffee_Card/img--havaiano.svg'
import imgIrlandes from '../../../../assets/Coffee_Card/img--irlandes.svg'
import imgLatte from '../../../../assets/Coffee_Card/img--latte.svg'
import imgMacchiato from '../../../../assets/Coffee_Card/img--macchiato.svg'
import imgMocaccino from '../../../../assets/Coffee_Card/img--mocaccino.svg'
import { TitleText } from '../../../../components/Typography'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeGrid, OurCoffeesContaine } from './styles'

const data = [
  {
    id: 0,
    imgSrc: imgTradicional,
    altText: 'Expresso Tradicional',
    tags: ['tradicional'],
    title: 'Expresso Tradicional',
    text: 'O tradicional café feito com água quente e grãos moídos.',
    price: 9.9,
  },
  {
    id: 1,
    imgSrc: imgAmericano,
    altText: 'Expresso Americano',
    tags: ['tradicional'],
    title: 'Expresso Americano',
    text: 'Expresso diluído, menos intenso que o tradicional.',
    price: 9.9,
  },
  {
    id: 2,
    imgSrc: imgCremoso,
    altText: 'Expresso Cremoso',
    tags: ['tradicional'],
    title: 'Expresso Cremoso',
    text: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 3,
    imgSrc: imgGelado,
    altText: 'Expresso Gelado',
    tags: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    text: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 4,
    imgSrc: imgCafeLeite,
    altText: 'Café com Leite',
    tags: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    text: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 5,
    imgSrc: imgLatte,
    altText: 'Latte',
    tags: ['tradicional', 'com leite'],
    title: 'Latte',
    text: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 6,
    imgSrc: imgCapuccino,
    altText: 'Capuccino',
    tags: ['tradicional', 'com leite'],
    title: 'Capuccino',
    text: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 7,
    imgSrc: imgMacchiato,
    altText: 'Macchiato',
    tags: ['tradicional', 'com leite'],
    title: 'Macchiato',
    text: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 8,
    imgSrc: imgMocaccino,
    altText: 'Mocaccino',
    tags: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    text: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 9,
    imgSrc: imgChocolateQuente,
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    text: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 10,
    imgSrc: imgCubano,
    altText: 'Cubano',
    tags: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    text: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 11,
    imgSrc: imgHavaiano,
    altText: 'Havaiano',
    tags: ['especial'],
    title: 'Havaiano',
    text: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 12,
    imgSrc: imgArabe,
    altText: 'Árabe',
    tags: ['especial'],
    title: 'Árabe',
    text: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 13,
    imgSrc: imgIrlandes,
    altText: 'Irlandês',
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    text: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export function OurCoffees() {
  return (
    <OurCoffeesContaine>
      <TitleText size="L" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeGrid>
        {data.map((item) => (
          <CoffeeCard key={item.id} coffee={item} />
        ))}
      </CoffeeGrid>
    </OurCoffeesContaine>
  )
}
