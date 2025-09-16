import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <span>StreamMark</span>
      <p>Your hub for Educational, Fun-Facts, Movies & Music</p>

      <ul>
        <li><a href="#">Educational</a></li>
        <li><a href="#">Fun-Facts</a></li>
        <li><a href="#">Movies</a></li>
        <li><Link to="/music">Music</Link></li>
      </ul>

      <footer>© 2025 StreamMark</footer>
    </>
  );
}
