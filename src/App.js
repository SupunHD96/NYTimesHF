import './App.css';
import BookCard from './Components/BookCard'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = () => {

    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=2g16J9Zw8fExnudWaa9zGnegSKEORfb0')
      .then((response) => {
        setData(response.data.results.books);
        setLoading(false)
  })
  }

  useEffect(() => {
    fetchData()
  }, [])

if (loading == true) {
  return(
    <div className='App'>
      <CssBaseline />
      <Container spacing={2} sx={{ padding: "30px", alignItems: "center"}}>
      <Typography variant="h4" sx={{ paddingTop: "120px"}}>Fetching data, please wait...</Typography>
      </Container>
    </div>
  )
}

else{
  
return(
  <div className='App'>
    <CssBaseline />
    <Container spacing={2} sx={{ padding: "30px", alignItems: "center" }}>
    <Typography variant="h4">NYTimes Best Sellers - Hardcover Fiction</Typography>
    <Box sx={{ paddingTop: "50px"}}> 
  {data.map(( {rank, title, author, description, book_image, book_review_link}) => (
    <div key={rank}>
    <BookCard rank={rank} title={title} author={author} description={description} image={book_image} reviewLink={book_review_link}/>
    </div>
  ))}
    </Box>
    </Container>
  </div>
);

}

}

export default App;
