import { Container, Header } from './styles';

export default function Layout() {
  return (
    <Container>
      <Header>
        <h1>Rockr Blog</h1>
        <div>
          <span>Posts</span>
          <span>Contact</span>
        </div>
      </Header>
    </Container>
  );
}
