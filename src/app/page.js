import Image from 'next/image'
import Title from '../components/Title';


export default function Home() {
  return (
    <>
      <nav className="flex p-4 bg-green-700">
        <ul className="flex gap-20">
          <li>
            <a href="#">
              <h1>Fiap Music</h1>
            </a>
          </li>
          <li>
            <a href="#">
              favoritos
            </a>
          </li>
          <li>
            <a href="#">
              Musicas
            </a>
          </li>
          <li>
            <a href="#">
              Podcast
            </a>
          </li>
        </ul>
      </nav>

      <Title>Em alta</Title>
      
      <div id="card" className='flex flex-col w-40 justify-center m-2'>
        <img className='rounded' scr="https://place-hold.it/150x220/666" alt=""/>
        <span className='font-bold text-center line-clamp-1'>Nome da musica do card</span>
        </div>
        <span>6.0</span>
        <div>
        <a href="#" className='bg-red-600 py-2 w-full rounded text-center'>
          Detalhes
        </a>
      </div>

      <Title>Lançamentos</Title>


    </>
  );
}

