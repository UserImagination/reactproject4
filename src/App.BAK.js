import Register from './Register';

function App (){
  return (
    <main className="App">
      <Register />
      <Routes>
          <Route path="/" element={<OriginalPage/>} />       
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/login" element={<LoginPage/> }/>
          <Route path="/shop" element={<ShopPage/>} exact/>
          <Route path="/register" element={<Register/>} exact/>
        </Routes>
    </main>
    
  );
}
export default App;