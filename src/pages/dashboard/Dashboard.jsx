import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DashCard from '../../components/cards/DashCard'
import styles from './Dashboard.module.scss'
import Header from '../../components/header/Header'
import { useFormik } from 'formik'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [sortData, setSortData]=useState(null)

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }


  const filteredData = data.filter(item => item.title.toLowerCase().includes(search.toLocaleLowerCase()))
  useEffect(() => {
    if (sortData) {
      setData((prevData) => [...prevData].sort((a, b) => {
        if (sortData === 'asc') {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      }));
    }
  }, [sortData]);

  const handleSorted = (data) => {
    setSortData(data);
  };




  console.log(data);
  const getData = () => {
    axios.get('https://664ae3eea300e8795d434de5.mockapi.io/basket/basket')
      .then(res => {
        console.log(res.data);
        setData(res.data)
      })
  }
  useEffect(() => {
    getData()
  })

  const deleteItem = (id) => {
    axios.delete(`https://664ae3eea300e8795d434de5.mockapi.io/basket/basket/${id}`)
      .then(() => {
        setTimeout(() => {
          getData()
        }, 300)
      })

  }
  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      count: "",
      price: "",
    },
    onSubmit: (values) => {
      axios.post(`https://664b0dc2a300e8795d44055f.mockapi.io/basket`, values);
      setTimeout(() => {
        getData();
      }, 1000);
    },
  });







  return (
    <div>
      <Header />
      <div className={styles.title}>
        <h1>DASHBOARD</h1>
      </div>


      <div className={styles.h2}>
      <h2>Mehsul axtarin:</h2>
      </div>

      <div className={styles.inp}>

        <input type="text" placeholder="Search....."
          value={search}
          onChange={handleSearch} />
      </div>
      <div className={styles.sortedBox}>
        <button onClick={() => handleSorted("asc")}>A-Z</button>
        <button onClick={() => handleSorted("desc")}>Z-A</button>
      </div>
      <div className={styles.formBox}>
        <h3>Mehsul elave et:</h3>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <input className={styles.inp}
            name="thumbnail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
          />
          <input className={styles.inp}
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <input className={styles.inp}
            name="count"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          <input className={styles.inp}
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button type="submit">
            Submit</button>
        </form>
      </div>

      <div className={styles.pro}>
        {filteredData.map(item => <DashCard item={item} key={item} sil={() => deleteItem(item.id)} />)}
      </div>
     

    </div>
  )
}

export default Dashboard
