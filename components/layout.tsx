import Footer from './footer/index';
import Header from './header/index';
import Meta from './meta';
import { ToastProvider } from './toasts/toast-provider';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <ToastProvider>
        <div className="min-h-screen border-2 border-black-400 flex flex-col items-center">
          <Header />
          <main className="flex-grow mb-20">{children}</main>
          <Footer />
        </div>
      </ToastProvider>
    </>
  );
};

export default Layout;
