import Image from 'next/image'

export default function Home() {
return ( //JSX
  <nav className="flex p-4 bg-green-700">
    <ul className="flex gap-20">
      <li>
        <a href="#">
            <h1>Fiap Music</h1>
        </a>
      </li>
      <li>
        <a href="#">
          Musicas
       </a>
      </li>
    </ul>
  </nav>
 )
}
