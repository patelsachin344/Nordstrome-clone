import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop
        smooth={"true"}
        viewBox={"0 0 30 30"}
        
        component={
          <Box>
            <Center>

            <RiArrowUpSLine size={'20px'} width={'400'} />
            </Center>
            <Text color={"#393939"} fontSize={"13px"}>
              Top
            </Text>
          </Box>
        }
      />
      <Header />
      <Navbar />
      <FirstImageDiv />
      <Footer />
    </div>
  );
}

export default App;
