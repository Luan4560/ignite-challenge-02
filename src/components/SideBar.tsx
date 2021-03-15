import { Button } from '../components/Button';

import '../styles/global.scss';

import '../styles/sidebar.scss'



interface SideBarProps {
  genres: Array<{
    id: number;
    title: string;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  }>;
  selectedGenreId: number;
  handleClick: Function;
}


export function SideBar(props: SideBarProps) {
  const {genres, handleClick, selectedGenreId} = props;
  console.log(genres)
  return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          id={String(genre.id)}
          key={(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClick(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}