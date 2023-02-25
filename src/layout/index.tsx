import Header from './Header';
import SearchBar from './SearchBar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <SearchBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
