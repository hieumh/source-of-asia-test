import { FC, ReactNode } from 'react';
import Navbar from '../components/navbar/Navbar.component';
import ContactInformation from '../components/contact-information/ContactInformation.component';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main>
        {children}
      </main>
      <footer>
        <ContactInformation />
      </footer>
    </>
  );
};

export default Layout;
