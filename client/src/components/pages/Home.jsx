import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Cards from '../Cards';
export default function Home(props) {
   

    const [search, setSearch] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
       
        let res = await fetch("http://localhost:8000/foodData",
            {
                method: "POST",
                header: { "Content-type": "application/json" }
            })

        res = await res.json();
        setFoodItem(res[0]);
        setFoodCat(res[1]);

    }



    return (
        <>
          <div id="carouselExample" className="carousel"  style={{objectFit:"contain !important"}}>
        
        <div className="carousel-inner" id="carousel" >
        <div className='carousel-caption' style={{"zIndex":"10"}}>
            <div className="form-inline d-flex justify-content-center">
              <input className="form-control mr-sm-2" type="search" placeholder="Search Food..." aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
              
            </div>
          </div>
 
          <div className="carousel-item active">
          <img
              src="https://source.unsplash.com/random/900×700/?burger"
              style={{ objectFit: "contain", width: "100%", height: "100%", filter: "brightness(30%)" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
          <img
              src="https://source.unsplash.com/random/900×700/?pizza"
              style={{ objectFit: "contain", width: "100%", height: "100%", filter: "brightness(30%)" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
          <img
              src="https://source.unsplash.com/random/900×700/?barbeque"
              style={{ objectFit: "contain", width: "100%", height: "100%", filter: "brightness(30%)" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>




            <div className='container'>
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <div className='row mb-3'>
                                    <div key={data._id} className='fs-3 m-3 text-center text-danger fs-1'>
                                        {data.CategoryName}
                                    </div>
                                    <hr />

                                    {foodItem !== [] ?
                                        foodItem.filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                            .map(filterItems => {
                                                return (
                                                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-4'>
                                                        <Cards foodItem={filterItems} options={filterItems.options[0]} />
                                                    </div>
                                                )
                                            })
                                        : <div>No data Found</div>}

                                </div>

                            )
                        })
                        : ""
                }


            </div>

            <Footer />
        </>
    )
}
