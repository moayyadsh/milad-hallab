import { BrowserRouter } from 'react-router-dom';
import QueryProvider from './lib/ReactQueryProvider';
import I18nProvider from './lib/I18nProvider';

function ProviderContainer({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter basename="/">
      <QueryProvider>
        <I18nProvider>{children}</I18nProvider>
      </QueryProvider>
    </BrowserRouter>
  );
}

export default ProviderContainer;
