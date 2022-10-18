import { CardPost, Footer, Header } from './components';

function App() {
  return (
    <div className="container mx-auto mt-4">
      <Header />

      {/* posts list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post) => (
          <CardPost key={post} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
