import { Header } from './styles';

export default function Navigation() {
  return (
    <Header>
      <h1 className='logo'>Airone</h1>
      <button className='menu'>
        <span></span>
      </button>
    </Header>
  );
}
