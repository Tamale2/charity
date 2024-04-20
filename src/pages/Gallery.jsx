import React from 'react'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
<>
    <Navigation/>
    <div className="main-container">

		<div className="container gallery fadeIn animated">

			<div className="row">
				

					<a href="images/gallery/" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/gallery/thumb/7610291856_931fb9f461_k.jpg" alt="" />

						<span className="on-hover">
							<span className="hover-caption">
						
						{/* <a href="https://www.youtube.com/channel/UCvCxFADitwiluRF2_Ol_QdA" className="btn">
               
              </a> */}
			   <a href="https://www.youtube.com/channel/UCvCxFADitwiluRF2_Ol_QdA" className="btn">
                {" "}
                <i style={{color: 'red'}} className="fa fa-camera-retro fa-lg"></i>{" "}
              </a>
                            </span>
						</span>

					</a> 

					<a href="images/gallery/children-82272_1280.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/gallery/thumb/children-82272_1280.jpg" alt="" />
						
						<span className="on-hover">
							<span className="hover-caption">bnmfbfgbmdvnmdlkvajvb jcnvm bhnzm  vnbkhwjjbks fmxb</span>
						</span>
						
					</a> 


					<a href="images/gallery/human-rights.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/gallery/thumb/human-rights.jpg" alt="" />
						
						<span className="on-hover">
							<span className="hover-caption">Image Caption</span>
						</span>
						
					</a> 


					<a href="images/gallery/old-books-436498_1280.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/gallery/thumb/old-books-436498_1280.jpg" alt="" />
						
						<span className="on-hover">
							<span className="hover-caption">Image Caption</span>
						</span>
						
					</a> 

					<a href="images/gallery/hunger-682834_1280.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/gallery/thumb/hunger-682834_1280.jpg" alt="" />
						
						<span className="on-hover">
							<span className="hover-caption">Image Caption</span>
						</span>
						
					</a> 

					<a href="images/gallery/africa-education.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/gallery/thumb/africa-education.jpg" alt="" />
						
						<span className="on-hover">
							<span className="hover-caption">dfgj,hkhghfgfGntnhbnhgfbrvgrnynxcfv fdb zdn </span>
						</span>
						
					</a> 


					<a href="images/gallery/afghani-60798_1280.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/gallery/thumb/afghani-60798_1280.jpg" alt="" />

						<span className="on-hover">
							<span className="hover-caption"></span>
						</span>

					</a> 

					<a href="images/events/event3.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/events/event3.jpg" alt="" />
						
						<span className="on-hover">
							<span className="hover-caption">Image Caption</span>
						</span>
						
					</a> 


					<a href="images/events/event2.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/events/event2.jpg" alt="" />
						
						<span className="on-hover">
							<span className="hover-caption">Image Caption</span>
						</span>
						
					</a> 


					<a href="images/gallery/gallery5.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/gallery/gallery5.jpg" alt="" />
						
						<span className="on-hover">
							<span className="hover-caption">Image Caption</span>
						</span>
						
					</a> 

					<a href="images/gallery/gallery3.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/gallery/gallery3.jpg" alt="" />
						
						<span className="on-hover">
							<span className="hover-caption">Image Caption</span>
						</span>
						
					</a> 

					<a href="images/gallery/gallery1.jpg" className="col-md-3 col-sm-4 gallery-item lightbox">

						<img src="images/gallery/gallery1.jpg" alt="" />
						
						<span className="on-hover">
							<span className="hover-caption">Image Caption</span>
						</span>
						
					</a> 
					
				
			</div>
			
		</div>


	</div> 


  </>

   

  )
}
